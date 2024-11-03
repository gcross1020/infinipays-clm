"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Bell, Search } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background px-6">
      <div className="flex flex-1 items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}