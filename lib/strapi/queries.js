import { strapiFetch, isStrapiEnabled } from "./client";
import * as staticContent from "@/data/site-content";
import { defaultLeaders } from "@/data/leaders";
import { defaultLeadershipMembers } from "@/data/leadership";

function sortByOrder(items) {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

const SECTION_DEFAULTS = {
  intro: {
    eyebrow: "எங்களை பற்றி",
    title: "TVK தோகைமலை கிழக்கு ஒன்றியம்",
    description:
      "தமிழக வெற்றிக் கழகத்தின் (TVK) ஒரு முக்கிய அங்கமான தோகைமலை கிழக்கு ஒன்றியம், மக்களின் வாழ்வில் நேரடி மாற்றத்தை ஏற்படுத்தும் நோக்கத்துடன் செயல்படுகிறது.",
    cardText:
      "எங்கள் ஒன்றியம் இளைஞர்களின் சக்தியை நம்புகிறது. கிராமங்களின் வளர்ச்சியை மையமாகக் கொண்டு, பெண்கள் நலன், கல்வி, தொழில்வாய்ப்பு மற்றும் தமிழ் பண்பாட்டைப் பாதுகாக்கும் பணிகளில் தொடர்ந்து செயல்படுகிறோம்.",
  },
  welfare: {
    eyebrow: "மக்கள் சேவை",
    title: "கட்சி நோக்கம் & மக்கள் நல திட்டங்கள்",
    description:
      "கிராம வளர்ச்சி முதல் இளைஞர் மேம்பாடு வரை — எட்டு முக்கிய துறைகளில் நாங்கள் செயல்படுகிறோம்.",
  },
  vision: {
    eyebrow: "கட்சி பார்வை",
    title: "கட்சி நோக்கம் & சித்தாந்தம்",
    description: "மக்கள் மைய அரசியல் — வெளிப்படைத்தன்மை, நேர்மை மற்றும் சமூக நீதி.",
  },
  district: {
    eyebrow: "ஒன்றிய வலிமை",
    title: "மாவட்ட அளவிலான அமைப்பு சக்தி",
    description:
      "தொகைமலை கிழக்கு ஒன்றியம் — கிளைகள், இளைஞர் பிரிவு மற்றும் மக்கள் சேவை வலிமை.",
  },
  activities: {
    eyebrow: "மக்கள் நல பணிகள்",
    title: "பொது நல செயல்பாடுகள்",
    description: "மருத்துவம், கல்வி, கிராம வளர்ச்சி — மக்களின் தேவைக்கு ஏற்ப நேரடிச் சேவை.",
  },
  achievements: {
    eyebrow: "சாதனைகள்",
    title: "ஒன்றிய சாதனைகள் காலவரிசை",
    description: "மக்கள் நலனில் நாங்கள் நிறைவேற்றிய முக்கிய நிகழ்வுகள்.",
  },
  volunteer: {
    eyebrow: "உறுப்பினர் / தன்னார்வலர்",
    title: "எப்படி உறுப்பினராக சேர்வது?",
    description: "மூன்று எளிய படிகளில் நீங்களும் மக்கள் சேவையில் பங்கேற்கலாம்.",
  },
  join: {
    eyebrow: "சேருங்கள்",
    title: "மக்கள் நலனில் உங்கள் பங்களிப்பு",
    description:
      "உறுப்பினராகப் பதிவு செய்து, தொகைமலை கிழக்கு ஒன்றியத்தின் வளர்ச்சியில் பங்கேற்குங்கள்.",
    phone: staticContent.contact.phone,
  },
  leadership: {
    eyebrow: "தலைமை",
    title: "ஒன்றிய தலைமை & பொறுப்பாளர்கள்",
    description:
      "மதிப்பிற்க்குரிய பொதுச்செயலாளர் மற்றும் கிராமப்புற வளர்ச்சி & நீர்வளத்துறை அமைச்சர் தலைமையில், மக்கள் நலனில் அர்ப்பணிப்புடன் செயல்படும் தலைமைக் குழு.",
  },
  events: {
    eyebrow: "நிகழ்வுகள்",
    title: "அரசியல் & மக்கள் நல நிகழ்வுகள்",
    description: "மாநாடுகள், முகாம்கள், இளைஞர் சந்திப்புகள் — வரவிருக்கும் நிகழ்வுகள்.",
  },
  testimonials: {
    eyebrow: "மக்கள் கருத்து",
    title: "மக்கள் சாட்சியம்",
    description: "எங்கள் சேவையை அனுபவித்த மக்களின் உண்மையான குரல்கள்.",
  },
  news: {
    eyebrow: "செய்திகள்",
    title: "சமீபத்திய செயல்பாடுகள் & செய்தி புதுப்பிப்புகள்",
  },
  contact: {
    eyebrow: "தொடர்புக்கு",
    title: "அலுவலகம் & தொடர்பு விவரங்கள்",
    description:
      "உங்கள் கருத்து, பங்கேற்பு அல்லது உதவிக்காக எங்களைத் தொடர்பு கொள்ளுங்கள்.",
  },
};

function sectionFromSettings(settings, key, defaults) {
  const cap = key.charAt(0).toUpperCase() + key.slice(1);
  return {
    eyebrow: settings?.[`${key}Eyebrow`] ?? defaults.eyebrow,
    title: settings?.[`${key}Title`] ?? defaults.title,
    description: settings?.[`${key}Description`] ?? defaults.description,
    ...(defaults.cardText !== undefined && {
      cardText: settings?.introCardText ?? defaults.cardText,
    }),
    ...(defaults.phone !== undefined && {
      phone: settings?.joinPhone ?? defaults.phone,
    }),
  };
}

export async function getSiteSetting() {
  if (!isStrapiEnabled()) return null;

  try {
    const json = await strapiFetch("/site-setting");
    return json.data ?? null;
  } catch {
    return null;
  }
}

async function fetchCollection(path, mapper, fallback) {
  if (!isStrapiEnabled()) return fallback;

  try {
    const json = await strapiFetch(`${path}?sort=order:asc&pagination[pageSize]=100`);
    return sortByOrder(json.data ?? []).map(mapper);
  } catch {
    return fallback;
  }
}

export async function getLeaders() {
  return fetchCollection(
    "/leaders",
    (item) => ({
      name: item.name,
      nameEn: item.nameEn,
      role: item.role,
      description: item.description,
      image: item.image?.url || item.imageUrl || "",
    }),
    defaultLeaders
  );
}

export async function getStats() {
  return fetchCollection(
    "/stats",
    (item) => ({
      value: item.value,
      suffix: item.suffix ?? "",
      label: item.label,
    }),
    staticContent.stats
  );
}

export async function getWelfarePillars() {
  return fetchCollection(
    "/welfare-pillars",
    (item) => ({ icon: item.icon, title: item.title, text: item.text }),
    staticContent.welfarePillars
  );
}

export async function getVisionTabs() {
  return fetchCollection(
    "/vision-tabs",
    (item) => ({ title: item.title, text: item.text }),
    staticContent.visionTabs
  );
}

export async function getDistricts() {
  return fetchCollection(
    "/districts",
    (item) => ({ name: item.name, percent: item.percent }),
    staticContent.districts
  );
}

export async function getWelfareActivities() {
  return fetchCollection(
    "/welfare-activities",
    (item) => ({
      tag: item.tag,
      title: item.title,
      raised: item.raised,
      goal: item.goal,
      progress: item.progress,
    }),
    staticContent.welfareActivities
  );
}

export async function getAchievements() {
  return fetchCollection(
    "/achievements",
    (item) => ({
      year: item.year,
      title: item.title,
      desc: item.description,
    }),
    staticContent.timeline
  );
}

export async function getVolunteerSteps() {
  return fetchCollection(
    "/volunteer-steps",
    (item) => ({
      step: item.step,
      title: item.title,
      desc: item.description,
    }),
    staticContent.volunteerSteps
  );
}

export async function getLeadershipMembers() {
  return fetchCollection(
    "/leadership-members",
    (item) => ({
      name: item.name,
      nameEn: item.nameEn,
      role: item.role,
      designation: item.designation,
      description: item.description,
      ministerRole: item.ministerRole,
      fullTitle: item.fullTitle,
      image: item.image?.url || item.imageUrl || "/images/CM.png",
      isGeneralSecretary: Boolean(item.isGeneralSecretary),
    }),
    defaultLeadershipMembers
  );
}

export async function getEvents() {
  return fetchCollection(
    "/events",
    (item) => ({
      date: item.date,
      time: item.time,
      place: item.place,
      title: item.title,
      desc: item.description,
    }),
    staticContent.events
  );
}

export async function getMediaBlocks() {
  return fetchCollection(
    "/media-blocks",
    (item) => ({
      title: item.title,
      subtitle: item.subtitle,
      image: item.imageUrl,
    }),
    staticContent.mediaBlocks
  );
}

export async function getTestimonials() {
  return fetchCollection(
    "/testimonials",
    (item) => ({
      quote: item.quote,
      name: item.name,
      org: item.organization,
    }),
    staticContent.testimonials
  );
}

export async function getNews() {
  if (!isStrapiEnabled()) return staticContent.news;
  try {
    const json = await strapiFetch("/news-articles?sort=createdAt:desc&pagination[pageSize]=10");
    const items = (json.data ?? []).map((item) => ({
      date:        item.date        || "",
      title:       item.title       || "",
      excerpt:     item.excerpt     || "",
      category:    item.category    || "news",
      location:    item.location    || "",
      attendees:   item.attendees   || "",
      featured:    item.featured    || false,
      photo1Url:   item.photo1Url   || "",
      photo2Url:   item.photo2Url   || "",
      photo3Url:   item.photo3Url   || "",
      photo4Url:   item.photo4Url   || "",
      photo5Url:   item.photo5Url   || "",
    }));
    return items.length > 0 ? items : staticContent.news;
  } catch (e) {
    console.error("getNews error:", e);
    return staticContent.news;
  }
}

export async function getHero() {
  const settings = await getSiteSetting();
  if (!settings) return staticContent.hero;

  return {
    slogan: settings.heroSlogan ?? staticContent.hero.slogan,
    title: settings.heroTitle ?? staticContent.hero.title,
    subtitle: settings.heroSubtitle ?? staticContent.hero.subtitle,
    primaryCta: settings.heroPrimaryCta ?? staticContent.hero.primaryCta,
    secondaryCta: settings.heroSecondaryCta ?? staticContent.hero.secondaryCta,
  };
}

export async function getContact() {
  const settings = await getSiteSetting();
  if (!settings) return staticContent.contact;

  return {
    office: settings.contactOffice ?? staticContent.contact.office,
    phone: settings.contactPhone ?? staticContent.contact.phone,
    email: settings.contactEmail ?? staticContent.contact.email,
    hours: settings.contactHours ?? staticContent.contact.hours,
    social: settings.socialLinks ?? staticContent.contact.social,
  };
}

export async function getLeadersSectionTitle() {
  const settings = await getSiteSetting();
  return (
    settings?.leadersSectionTitle ?? "கட்சியின் கொள்கை முன்னோடி தலைவர்கள்"
  );
}

export async function getMediaClosingTitle() {
  const settings = await getSiteSetting();
  return (
    settings?.mediaClosingTitle ??
    "தமிழக வெற்றிக் கழகம் — மக்களோடு, மக்கள் நலனுக்காக"
  );
}

export async function getVolunteerCta() {
  const settings = await getSiteSetting();
  return {
    title:
      settings?.volunteerCtaTitle ??
      "நீங்களும் மாற்றத்தின் பகுதியாக இருக்க விரும்புகிறீர்களா?",
    description:
      settings?.volunteerCtaDescription ??
      "தன்னார்வலராகச் சேர்ந்து, மக்கள் நல பணிகளில் கைகோர்த்து நிற்குங்கள்.",
    button: settings?.volunteerCtaButton ?? "தன்னார்வலராக சேருங்கள்",
  };
}

export async function getSectionMeta(key) {
  const settings = await getSiteSetting();
  const defaults = SECTION_DEFAULTS[key];
  if (!defaults) return {};
  if (!settings) return defaults;
  return sectionFromSettings(settings, key, defaults);
}

export async function getHomePageData() {
  const settings = await getSiteSetting();

  const [
    hero,
    leaders,
    leadersSectionTitle,
    stats,
    welfarePillars,
    visionTabs,
    districts,
    welfareActivities,
    achievements,
    volunteerSteps,
    leadershipMembers,
    events,
    mediaBlocks,
    testimonials,
    volunteerCta,
    news,
    contact,
    mediaClosingTitle,
  ] = await Promise.all([
    getHero(),
    getLeaders(),
    getLeadersSectionTitle(),
    getStats(),
    getWelfarePillars(),
    getVisionTabs(),
    getDistricts(),
    getWelfareActivities(),
    getAchievements(),
    getVolunteerSteps(),
    getLeadershipMembers(),
    getEvents(),
    getMediaBlocks(),
    getTestimonials(),
    getVolunteerCta(),
    getNews(),
    getContact(),
    getMediaClosingTitle(),
  ]);

  const sections = Object.fromEntries(
    Object.keys(SECTION_DEFAULTS).map((key) => [
      key,
      settings
        ? sectionFromSettings(settings, key, SECTION_DEFAULTS[key])
        : SECTION_DEFAULTS[key],
    ])
  );

  return {
    hero,
    leaders,
    leadersSectionTitle,
    stats,
    welfarePillars,
    visionTabs,
    districts,
    welfareActivities,
    achievements,
    volunteerSteps,
    leadershipMembers,
    events,
    mediaBlocks,
    testimonials,
    volunteerCta,
    news,
    contact,
    mediaClosingTitle,
    sections,
  };
}
