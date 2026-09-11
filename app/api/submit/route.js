// app/api/submit/route.js
// Public API - no auth required
// Receives issue from QR form and saves to Strapi

const STRAPI_URL   = process.env.NEXT_PUBLIC_STRAPI_URL || '';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN       || '';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, category, area, address, description } = body;

    // Validate
    if (!name || !phone || !category || !area || !description) {
      return Response.json({ error: 'தேவையான தகவல்கள் உள்ளிடவும்' }, { status: 400 });
    }
    if (!phone.match(/^\d{10}$/)) {
      return Response.json({ error: 'சரியான தொலைபேசி எண் உள்ளிடவும்' }, { status: 400 });
    }

    const ticketId = `TVK-${Date.now().toString().slice(-6)}`;
    const fullDesc = `பெயர்: ${name}
தொலைபேசி: ${phone}
பகுதி: ${area}
${address ? `முகவரி: ${address}\n` : ''}
பிரச்சினை விவரம்:
${description}

---
Source: Public QR Form
Ticket: ${ticketId}`;

    // Save to Strapi
    const res = await fetch(`${STRAPI_URL}/api/issues`, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          title:        `${category} - ${area}`,
          description:  fullDesc,
          reportedBy:   name,
          contactPhone: phone,
          category:     category,
          wardName:     area,
          issueStatus:  'open',
          priority:     'medium',
          source:       'public_form',
          ticketId:     ticketId,
        }
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));

    // Auto-publish
    const docId = data.data?.documentId;
    if (docId) {
      await fetch(`${STRAPI_URL}/api/issues/${docId}/actions/publish`, {
        method:  'POST',
        headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
      });
    }

    return Response.json({ success: true, ticketId, id: data.data?.id });

  } catch (e) {
    console.error('Submit error:', e);
    return Response.json({ error: 'சமர்ப்பிக்க முடியவில்லை' }, { status: 500 });
  }
}
