import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, CreditCard, FileSignature } from "lucide-react";

const stats = [
  {
    title: "Total Contracts",
    value: "254",
    icon: FileText,
    description: "Active contracts this month",
  },
  {
    title: "Active Clients",
    value: "128",
    icon: Users,
    description: "Clients with active contracts",
  },
  {
    title: "Pending Signatures",
    value: "12",
    icon: FileSignature,
    description: "Awaiting signatures",
  },
  {
    title: "Monthly Revenue",
    value: "$45,231",
    icon: CreditCard,
    description: "Revenue this month",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}