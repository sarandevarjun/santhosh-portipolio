const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export function getStrapiUrl(path = "") {
  const base = STRAPI_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function strapiFetch(path, options = {}) {
  const url = getStrapiUrl(`/api${path}`);
  const headers = {
    "Content-Type": "application/json",
    ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    ...options.headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
    next: options.next ?? { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi ${res.status}: ${url}`);
  }

  return res.json();
}

export function isStrapiEnabled() {
  return process.env.NEXT_PUBLIC_USE_STRAPI === "true";
}
