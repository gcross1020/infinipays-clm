import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              Contract Value Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart will be implemented here
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              Payment Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Chart will be implemented here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}