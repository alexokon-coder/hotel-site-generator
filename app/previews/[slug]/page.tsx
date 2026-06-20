import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ClientPreviewFrame } from "@/components/ClientPreviewFrame";
import { HotelSite } from "@/components/HotelSite";
import { getHotelPreview, hotelPreviewSlugs } from "@/data/hotels";
import { HotelSiteProvider } from "@/lib/hotel-context";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hotelPreviewSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const preview = getHotelPreview(slug);

  if (!preview) {
    return { title: "Preview not found" };
  }

  return {
    title: `${preview.config.name} | Hotel Website Preview`,
    description: preview.config.seo.description,
  };
}

export default async function HotelPreviewPage({ params }: PageProps) {
  const { slug } = await params;
  const preview = getHotelPreview(slug);

  if (!preview) {
    notFound();
  }

  return (
    <HotelSiteProvider config={preview.config}>
      <ClientPreviewFrame config={preview.config}>
        <HotelSite />
      </ClientPreviewFrame>
    </HotelSiteProvider>
  );
}
