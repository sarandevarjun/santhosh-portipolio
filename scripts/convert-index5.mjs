import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "html-template", "index-5.html");
const html = fs.readFileSync(htmlPath, "utf8");

const routeMap = {
  "index.html": "/",
  "index-2.html": "/",
  "index-3.html": "/",
  "index-4.html": "/",
  "index-5.html": "/",
  "about.html": "/about",
  "causes.html": "/causes",
  "single-causes.html": "/causes/single",
  "team.html": "/team",
  "gallery.html": "/gallery",
  "events.html": "/events",
  "single-events.html": "/events/single",
  "faq.html": "/faq",
  "feedback.html": "/feedback",
  "log-in.html": "/log-in",
  "sign-up.html": "/sign-up",
  "recover-password.html": "/recover-password",
  "error-404.html": "/404",
  "contact.html": "/contact",
  "blog-1.html": "/blog",
  "blog-2.html": "/blog-sidebar",
  "single-blog.html": "/blog/single",
  "single-news.html": "/blog/single",
  "terms-condition.html": "/terms-condition",
  "privacy-policy.html": "/privacy-policy",
};

function htmlToJsx(fragment) {
  let out = fragment;

  out = out.replace(/<!--[\s\S]*?-->/g, "");
  out = out.replace(/\bclass=/g, "className=");
  out = out.replace(/\bfor=/g, "htmlFor=");
  out = out.replace(/\bautocomplete=/g, "autoComplete=");
  out = out.replace(/\bautoplay\b/gi, "autoPlay");
  out = out.replace(/\bmuted\b(?!=)/gi, "muted");
  out = out.replace(/\bloop\b(?!=)/gi, "loop");
  out = out.replace(/src="assets\//g, 'src="/assets/');
  out = out.replace(/href="assets\//g, 'href="/assets/');
  out = out.replace(/poster="#"/g, 'poster=""');
  out = out.replace(/\balt=([a-zA-Z][a-zA-Z0-9-]*)\s/g, 'alt="$1" ');
  out = out.replace(/<div class=([a-zA-Z][\w-]*)/g, '<div className="$1"');
  out = out.replace(/loop=""\s+muted=""\s+autoPlay=""/g, "loop muted autoPlay playsInline");

  for (const [file, route] of Object.entries(routeMap)) {
    out = out.replaceAll(`href="${file}"`, `href="${route}"`);
  }

  out = out.replace(/href="javascript:;"/g, 'href="#"');
  out = out.replace(/<img([^>]*?)>/gi, "<img$1 />");
  out = out.replace(/<input([^>]*?)>/gi, "<input$1 />");
  out = out.replace(/<br>/gi, "<br />");
  out = out.replace(/<hr>/gi, "<hr />");
  out = out.replace(/<source([^>]*?)>/gi, "<source$1 />");
  out = out.replace(/className='([^']*)'/g, 'className="$1"');
  out = out.replace(/<i className='([^']*)'><\/i>/g, '<i className="$1"></i>');

  return out.trim();
}

function extractBetween(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) return "";
  return html.slice(start + startMarker.length, end);
}

const sections = [
  { name: "Preloader", start: "<!-- Start Header Area -->", end: "<!-- End Header Area -->" },
  { name: "Navbar", start: "<!-- Start Navbar Area -->", end: "<!-- End Navbar Area -->" },
  { name: "SidebarModal", start: "<!-- Sidebar Modal -->", end: "<!-- End Sidebar Modal -->" },
  { name: "HomeBanner", start: "<!-- Start Home Banner Three Area -->", end: "<!-- End Home Banner Three Area -->" },
  { name: "FameSection", start: "<!-- Start Fame Area -->", end: "<!-- End Fame Area -->" },
  { name: "SolveSection", start: "<!-- Start Solve Area -->", end: "<!-- End Solve Area -->" },
  { name: "MissionSection", start: "<!-- Start Mission Area -->", end: "<!-- End Mission Area -->" },
  { name: "CountrySection", start: "<!-- Start Country Area -->", end: "<!-- End Country Area -->" },
  { name: "CausesSection", start: "<!-- Start Causes Area -->", end: "<!-- End Causes Area -->" },
  { name: "ProcessSection", start: "<!-- Start Process Area -->", end: "<!-- End Process Area -->" },
  { name: "DonateFormSection", start: "<!-- Start Donate Form Area -->", end: "<!-- End Donate Form Area -->" },
  { name: "TeamSection", start: "<!-- Start Team Area -->", end: "<!-- End Team Area -->" },
  { name: "EventsSection", start: "<!-- Start Events Area -->", end: "<!-- End Events Area -->" },
  { name: "TestimonialsSection", start: "<!-- Start Testimonials Area -->", end: "<!-- End Testimonials Area -->" },
  { name: "DonateSection", start: "<!-- Start Donate Area -->", end: "<!-- End Donate Area -->" },
  { name: "BlogSection", start: "<!-- Start Blog Area -->", end: "<!-- End Blog Area -->" },
  { name: "InstagramSection", start: "<!-- Start Instagram Area -->", end: "<!-- End Instagram Area -->" },
  { name: "Footer", start: "<!-- Start Footer Area -->", end: "<!-- End Footer Area -->" },
  { name: "GoTop", start: "<!-- Start Go Top Section -->", end: "<!-- End Go Top Section -->" },
];

const layoutDir = path.join(root, "components", "layout");
const homeDir = path.join(root, "components", "home");
fs.mkdirSync(layoutDir, { recursive: true });
fs.mkdirSync(homeDir, { recursive: true });

for (const section of sections) {
  const raw = extractBetween(section.start, section.end);
  const jsx = htmlToJsx(raw);
  const folder = ["Preloader", "Navbar", "SidebarModal", "Footer", "GoTop"].includes(section.name)
    ? layoutDir
    : homeDir;

  const content = `export default function ${section.name}() {
  return (
    <>
${jsx
  .split("\n")
  .map((line) => `      ${line}`)
  .join("\n")}
    </>
  );
}
`;

  fs.writeFileSync(path.join(folder, `${section.name}.js`), content, "utf8");
}

console.log("Converted", sections.length, "sections.");
