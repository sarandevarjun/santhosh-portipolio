import { NextResponse } from "next/server";

const STRAPI_URL   = process.env.NEXT_PUBLIC_STRAPI_URL || "https://tvk-backend-production.up.railway.app";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN       || "";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.name?.trim() || !body.phone?.trim()) {
      return NextResponse.json({ error: "பெயர் மற்றும் தொலைபேசி எண் தேவை" }, { status: 400 });
    }

    // Check duplicate phone
    const checkRes = await fetch(
      `${STRAPI_URL}/api/members?filters[phone][$eq]=${body.phone}&pagination[pageSize]=1`,
      { headers: { Authorization: `Bearer ${STRAPI_TOKEN}` }, cache: "no-store" }
    );
    const checkData = await checkRes.json();
    if (checkData.data?.length > 0) {
      return NextResponse.json(
        { error: "இந்த தொலைபேசி எண் ஏற்கெனவே பதிவு செய்யப்பட்டுள்ளது." },
        { status: 409 }
      );
    }

    // Save to Strapi — draft (not published) = pending approval
    const res = await fetch(`${STRAPI_URL}/api/members`, {
      method: "POST",
      headers: {
        Authorization:  `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name:               body.name.trim(),
          phone:              body.phone.trim(),
          age:                body.age    || null,
          profession:         body.profession || "",
          areaName:           body.areaName   || "",
          partyPosition:      "party_worker",
          role:               "worker",
          approvalStatus:     "pending",
          registrationSource: "portal",
          joinDate:           body.joinDate || new Date().toISOString().split("T")[0],
          notes:              body.notes   || "",
          ward:               body.wardId  || null,
        },
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Strapi error:", data);
      return NextResponse.json({ error: "பதிவு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
