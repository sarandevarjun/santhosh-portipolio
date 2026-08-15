const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export function getStrapiUrl(path = "") {
  const base = STRAPI_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function strapiFetch(path, options = {}) {
  const url = getStrapiUrl(`/api${path}`);
  const fetchOptions = {
    ...options,
    next: options.next ?? { revalidate: 60 },
  };

  const res = await fetch(url, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      ...options.headers,
    },
  });

  if (res.ok) {
    return res.json();
  }

  // Token may be invalid/expired; Strapi's public role can still permit
  // this request, so retry once without credentials before giving up.
  if (res.status === 401 && STRAPI_TOKEN) {
    const retryRes = await fetch(url, {
      ...fetchOptions,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (retryRes.ok) {
      return retryRes.json();
    }

    throw new Error(`Strapi ${retryRes.status}: ${url}`);
  }

  throw new Error(`Strapi ${res.status}: ${url}`);
}

export function isStrapiEnabled() {
  return process.env.NEXT_PUBLIC_USE_STRAPI === "true";
}
