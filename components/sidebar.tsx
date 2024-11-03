"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Users, CreditCard, Settings, BarChart, FileSignature } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: BarChart,
    href: "/dashboard",
  },
  {
    title: "Contracts",
    icon: FileText,
    href: "/contracts",
  },
  {
    title: "E-Signatures",
    icon: FileSignature,
    href: "/signatures",
  },
  {
    title: "Clients",
    icon: Users,
    href: "/clients",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/payments",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex lg:flex-col fixed left-0 top-0 z-20 h-screen w-64 border-r bg-background">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">InfiniPaysCLM</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                pathname === item.href && "bg-secondary"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}