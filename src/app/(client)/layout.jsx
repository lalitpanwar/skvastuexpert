import { ScrollToTop } from "@/components/client/Layout";
import {
  MainFooter,
  MainHeader,
  SmoothScroll,
} from "@/components/client/Shared";
import Breadcrumb from "@/components/client/Shared/Breadcrumb";

export default function PublicLayout({ children }) {
  return (
    <>
      <SmoothScroll />

      <MainHeader />
      <main className="pt-20" >
        {children}
        
        </main>
      <MainFooter />

      <ScrollToTop />
    </>
  );
}
