import HomeContent from "@/components/HomeContent";
import { getHomePageData } from "@/lib/strapi/queries";

export const revalidate = 60;

export default async function HomePage() {
  const data = await getHomePageData();
  return <HomeContent {...data} />;
}
