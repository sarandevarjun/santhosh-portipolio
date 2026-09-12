const STRAPI_URL   = process.env.STRAPI_URL || '';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || '';

const SANTHOSH_PUSH_TOKEN = 'ExponentPushToken[uXCIIVEQV7933CAU-mek8e]';

async function sendPushNotification(title, body, data = {}) {
  try {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to:       SANTHOSH_PUSH_TOKEN,
        title,
        body,
        sound:    'default',
        priority: 'high',
        data,
      }),
    });
  } catch(e) {
    console.error('Push notification failed:', e);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, category, area, address, description } = body;

    if (!name || !phone || !category || !area || !description) {
      return Response.json({ error: 'தேவையான தகவல்கள் உள்ளிடவும்' }, { status: 400 });
    }

    const res = await fetch(`${STRAPI_URL}/api/issues`, {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          title:        `${category} - ${area}`,
          description:  `பெயர்: ${name}\nதொலைபேசி: ${phone}\nபகுதி: ${area}\n${address?`முகவரி: ${address}\n`:''}\nபிரச்சினை விவரம்:\n${description}`,
          reportedBy:   name,
          phone,
          category,
          issueStatus:  'open',
          issuePriority:'medium',
        }
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));

    await sendPushNotification(
      '🔴 புதிய பிரச்சினை பதிவு!',
      `${name} (${phone})\n${area} — ${category}`,
      { type: 'issue', screen: '/(drawer)/issues' }
    );

    return Response.json({ success: true, id: data.data?.id });
  } catch(e) {
    console.error(e);
    return Response.json({ error: 'சமர்ப்பிக்க முடியவில்லை' }, { status: 500 });
  }
}
