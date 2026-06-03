import HomeContent from "@/components/HomeContent";
import { getHomePageData } from "@/lib/strapi/queries";

export const revalidate = 0;

export default async function HomePage() {
  const data = await getHomePageData();
  return <HomeContent {...data} />;
}
