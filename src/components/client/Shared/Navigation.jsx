"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"
import { menuData } from "@/data/menuData";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
export default function Navigation ({ open, setOpen }) {


  return (
    <>                              
      {/* --- DESKTOP NAV (Hidden on Mobile) --- */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            {menuData?.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.pujaItems ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-150 gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                        {item.pujaItems.map((sub, i) => (
                          <ListItem
                            key={i}
                            title={sub.title}
                            href={`/puja/${sub.href}`}
                          >
                            {sub.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(),"bg-transparent")} asChild>
                  <Link className="uppercase tracking-wide font-normal" href={item.href}  passHref> 
                    {item.title}
                  </Link>                                                                            
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>
      </div> {/* --- desktop menu -- */ }

{/* --- MOBILE NAV --- */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          {/* <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-saffron/10">
              <Menu className="text-royal-blue" />
            </Button>
          </SheetTrigger> */}
          <SheetContent side="left" className="w-[300px] overflow-y-auto bg-white">
            <SheetHeader>
              <SheetTitle className="text-left border-b pb-4 text-royal-blue font-sans">
                Menu
              </SheetTitle>
            </SheetHeader>
            
            <nav className="flex flex-col gap-1 mt-4">
              {menuData?.map((item, i) => (
                <div key={i}>
                  {item.pujaItems ? (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={item.title} className="border-none">
                        <AccordionTrigger className="px-2 py-3 hover:no-underline font-medium text-gray-700">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid grid-cols-2 gap-2 px-2">
                            {item.pujaItems.map((sub, j) => (
                              <Link
                                key={j}
                                href={`/puja/${sub.href}`}
                                onClick={() => setOpen(false)} // Link click pe menu band hoga
                                className="text-[11px] p-3 bg-zinc-50 rounded-xl hover:bg-saffron/10 hover:text-saffron transition-all border border-zinc-100 font-medium"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-3 font-normal uppercase tracking-wide text-gray-700 border-b border-zinc-50 hover:text-saffron"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

    </>
  );
}

const ListItem = ({ title, href }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className=" block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-saffron/10 hover:text-saffron"
      >
        <span className="text-sm font-medium leading-none">{title}</span>
      </Link>
    </NavigationMenuLink>
  </li>
);