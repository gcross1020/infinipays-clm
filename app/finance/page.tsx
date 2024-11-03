"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Receipt,
  Building2,
  FileSpreadsheet,
  ArrowUpDown,
  PieChart,
  Plus
} from "lucide-react";

const financialDocuments = [
  {
    title: "Q1 2024 Financial Report",
    type: "Report",
    date: "Mar 31, 2024",
    status: "Final",
  },
  {
    title: "Annual Budget 2024",
    type: "Budget",
    date: "Jan 01, 2024",
    status: "Approved",
  },
  {
    title: "Tax Documentation 2023",
    type: "Tax",
    date: "Apr 15, 2024",
    status: "In Progress",
  },
];

const erpConnections = [
  {
    name: "QuickBooks",
    status: "Connected",
    lastSync: "2 hours ago",
  },
  {
    name: "SAP",
    status: "Connected",
    lastSync: "1 hour ago",
  },
  {
    name: "NetSuite",
    status: "Available",
    lastSync: null,
  },
];

export default function FinancePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Finance Management</h1>
          <p className="text-muted-foreground">
            Manage financial documents and ERP integrations
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Document
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234,567</div>
            <p className="text-sm text-muted-foreground">YTD Revenue</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              Receivables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$123,456</div>
            <p className="text-sm text-muted-foreground">Outstanding</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              ERP Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/4</div>
            <p className="text-sm text-muted-foreground">Systems Connected</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents" className="space-y-4">
        <TabsList>
          <TabsTrigger value="documents">Financial Documents</TabsTrigger>
          <TabsTrigger value="erp">ERP Integrations</TabsTrigger>
          <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Financial Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {financialDocuments.map((doc) => (
                  <div
                    key={doc.title}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{doc.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {doc.type} • {doc.date}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="erp">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpDown className="h-5 w-5" />
                ERP Connections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {erpConnections.map((erp) => (
                  <div
                    key={erp.name}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{erp.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {erp.status}
                        {erp.lastSync && ` • Last sync: ${erp.lastSync}`}
                      </p>
                    </div>
                    <Button
                      variant={erp.status === "Connected" ? "outline" : "default"}
                      size="sm"
                    >
                      {erp.status === "Connected" ? "Configure" : "Connect"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Financial Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Revenue by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                      Chart will be implemented here
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Monthly Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                      Chart will be implemented here
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}