"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Clock, Briefcase } from "lucide-react";

const stats = [
  {
    title: "Total Clients",
    value: "156",
    icon: Users,
    description: "Active and inactive clients",
  },
  {
    title: "Active Clients",
    value: "124",
    icon: UserCheck,
    description: "Currently active clients",
  },
  {
    title: "Recent Activity",
    value: "28",
    icon: Clock,
    description: "Client interactions this week",
  },
  {
    title: "Active Projects",
    value: "45",
    icon: Briefcase,
    description: "Ongoing client projects",
  },
];

export function ClientStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}