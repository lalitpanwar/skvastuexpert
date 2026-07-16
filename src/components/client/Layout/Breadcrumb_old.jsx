import Link from "next/link";
import Container from "./Container";

// Title aur href ko as a prop pass karenge
export default function Breadcrumb({ title, href = "/puja" }) {
  return (
    <Container classes="pt-24 md:pt-28 pb-5">
      <nav className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
        <Link className="hover:text-saffron transition-colors" href="/">
          Home
        </Link>
        
        <span className="mx-2 text-gray-300">/</span>
        
        <Link className="hover:text-saffron transition-colors" href={href}>
          Puja
        </Link>
        
        <span className="mx-2 text-gray-300">/</span>
        
        {/* Dynamic Title yahan aayega */}
        <span className="text-royal-blue dark:text-saffron font-semibold truncate">
          {title}
        </span>
      </nav>
    </Container>
  );
}