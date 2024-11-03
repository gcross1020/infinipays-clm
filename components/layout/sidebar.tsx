"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ChevronLeft,
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  FileSignature,
  Settings,
  BarChart,
  PieChart,
  MessageSquare,
  Workflow,
  FolderKanban,
  Calculator,
  DollarSign,
  Receipt,
  Building2
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
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
    title: "Pipeline",
    icon: PieChart,
    href: "/pipeline",
  },
  {
    title: "Finance",
    icon: DollarSign,
    href: "/finance",
  },
  {
    title: "Resources",
    icon: FolderKanban,
    href: "/resources",
  },
  {
    title: "Estimator",
    icon: Calculator,
    href: "/estimator",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/payments",
  },
  {
    title: "Analytics",
    icon: BarChart,
    href: "/analytics",
  },
  {
    title: "AI Assistant",
    icon: MessageSquare,
    href: "/ai-assistant",
  },
  {
    title: "Workflows",
    icon: Workflow,
    href: "/workflows",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "h-screen border-r bg-background transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex h-14 items-center justify-between border-b px-3">
        {!collapsed && (
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary">InfiniPays</span>
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("ml-auto", collapsed && "rotate-180")}
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "justify-start gap-2",
                pathname === item.href && "bg-secondary",
                collapsed && "justify-center"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="h-4 w-4" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}