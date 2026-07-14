import { cn } from "@/lib/utils";
import Container from "./Container"; 
import { SectionHeader } from ".";

const SectionLayout = ({
  children,
  title,
  subtitle,
  variant = "left",
  bgColor = "bg-white",
  light = false,
  seeMoreLink,
  seeMoreText,
  className,
  id,
}) => {
  return (
    <section 
      id={id} 
      className={cn("py-20  overflow-hidden", bgColor, className)}
    >
      <Container>
       {title && <SectionHeader
          title={title}
          subtitle={subtitle}
          variant={variant}
          light={light}
          seeMoreLink={seeMoreLink}
          seeMoreText={seeMoreText}
        /> }
        {children}
      </Container>
    </section>
  );
};

export default SectionLayout;