const STRAPI_URL   = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || 'https://tvk-backend-production.up.railway.app';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || '';
const SANTHOSH_PUSH_TOKEN = 'ExponentPushToken[uXCIIVEQV7933CAU-mek8e]';

async function sendPushNotification(title, body, data = {}) {
  try {
    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: SANTHOSH_PUSH_TOKEN,
        title, body, data,
        sound: 'default',
        priority: 'high',
      }),
    });
  } catch(e) {
    console.error('Push failed:', e);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, category, area, address, description } = body;

    console.log('STRAPI_URL:', STRAPI_URL);
    console.log('TOKEN exists:', !!STRAPI_TOKEN);
    console.log('Body:', { name, phone, category, area });

    if (!name || !phone || !category || !area || !description) {
      return Response.json({ error: 'தேவையான தகவல்கள் உள்ளிடவும்' }, { status: 400 });
    }

    const strapiRes = await fetch(`${STRAPI_URL}/api/issues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          title:        `${category} - ${area}`,
          description:  `பெயர்: ${name}\nதொலைபேசி: ${phone}\nபகுதி: ${area}\n${address ? `முகவரி: ${address}\n` : ''}\nபிரச்சினை விவரம்:\n${description}`,
          reportedBy:   name,
          phone,
          category,
          issueStatus:  'open',
          issuePriority:'medium',
        }
      }),
    });

    const data = await strapiRes.json();
    console.log('Strapi status:', strapiRes.status);
    console.log('Strapi response:', JSON.stringify(data).slice(0,200));

    if (!strapiRes.ok) {
      return Response.json({ error: 'Strapi error: ' + JSON.stringify(data) }, { status: 500 });
    }

    await sendPushNotification(
      '🔴 புதிய பிரச்சினை பதிவு!',
      `${name} (${phone})\n${area} — ${category}`,
      { type: 'issue' }
    );

    return Response.json({ success: true, id: data.data?.id });
  } catch(e) {
    console.error('Submit error:', e);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
