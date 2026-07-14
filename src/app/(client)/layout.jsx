import { ScrollToTop } from "@/components/client/Layout";
import { MainFooter, MainHeader, SmoothScroll } from "@/components/client/Shared";

export default function PublicLayout({children}){
  return (
    <>
    
        <SmoothScroll />

   
               <main> 
               {children}
                </main>
               <MainFooter />
        
                <ScrollToTop />
                </>
  
);
}