import { Container, SectionLayout} from "@/components/client/Layout";
import Gallery from "@/components/gallery/Gallery";
import { getGalleryImages } from "@/lib/gallery";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return(
  <>
  <SectionLayout title="Gallery">
  <Gallery images={images} />;
  </SectionLayout>
  </>
)}