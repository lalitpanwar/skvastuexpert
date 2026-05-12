import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Default icon agar kuch na bheja jaye
import { cn } from "@/lib/utils";

export default function CustomButton({ 
  children, 
  variant = "secondary", 
  className, 
  icon: Icon = ArrowRight, // Default icon
  showIcon = true,
  iconSide = "right", // "left" ya "right"

  ...props 
}) {
  
  // Design Variants
const variants = {
  // Red Solid Button
  primary: "bg-primary text-white hover:bg-primary-hover shadow-md group-hover:bg-primary-hover group-hover:text-white group-hover:border-secondary group-hover:shadow-lg",
  
  // Yellow Solid Button
  secondary: "bg-secondary text-black hover:bg-secondary-hover shadow-md  group-hover:bg-secondary-hover group-hover:text-white group-hover:border-transparent",

  // Outline Button (Jo aapko pasand hai)
  outline: "bg-white text-primary border-primary/30 hover:bg-primary hover:text-white hover:shadow-lg group-hover:bg-primary group-hover:text-white group-hover:border-transparent",

  success: "bg-success-green text-white hover:bg-success-green-hover shadow-lg ",

  // Green Outline (Aapki pasand ka style)
  outlineSuccess: cn(
    "bg-white/50 text-success-green border-2 border-success-green/30",
    "hover:bg-success-green hover:text-white hover:border-transparent hover:shadow-md",
    "group-hover:bg-success-green group-hoverd:text-white group-hover:border-transparent"
  ),

    outlineSecondary: cn(
    "bg-white/50 text-secondary border-2 border-secondary/30",
    "hover:bg-secondary hover:text-white hover:shadow-md",
    "group-hover:bg-secondary group-hoverd:text-white group-hover:border-transparent"
  ),

  whatsapp: cn(
    "bg-whatsapp text-white border-transparent",
    "group-hover:bg-whatsapp-hover group-hover:shadow-xl group-hover:shadow-whatsapp/30",
    "shadow-lg shadow-whatsapp/20"
  ),
};

  return (
    <Button

      className={cn(
        "group h-auto py-3.5 md:py-4 px-6 transition-all duration-300 font-bold uppercase tracking-wider text-[10px] md:text-xs flex items-center justify-center gap-2 active:scale-95 border",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* 1. Icon PEHLE dikhane ka logic */}
      {showIcon && iconSide === "left" && Icon && (
        <Icon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      )}

      <span>{children}</span>

      {/* 2. Icon BAAD MEIN dikhane ka logic (Default) */}
      {showIcon && iconSide === "right" && Icon && (
        <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Button>
  );
} 