"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileSignature, Download, History } from "lucide-react";
import Link from "next/link";

export default function ContractDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/contracts">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Contracts
        </Link>
      </Button>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Service Agreement - Tech Solutions Inc
          </h1>
          <div className="flex items-center space-x-4 mt-2">
            <Badge variant="success">Active</Badge>
            <span className="text-muted-foreground">Last modified: March 20, 2024</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button>
            <FileSignature className="mr-2 h-4 w-4" />
            Request Signature
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Contract Details</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Contract Information</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Contract Type</dt>
                    <dd>Service Agreement</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Client</dt>
                    <dd>Tech Solutions Inc</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Start Date</dt>
                    <dd>March 20, 2024</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">End Date</dt>
                    <dd>March 19, 2025</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Status Information</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Status</dt>
                    <dd>
                      <Badge variant="success">Active</Badge>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Signatures</dt>
                    <dd>2/2 Complete</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Last Modified</dt>
                    <dd>March 20, 2024</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4">
                  <History className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Contract signed by John Doe</p>
                    <p className="text-sm text-muted-foreground">
                      March {20 - i}, 2024 at 2:30 PM
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}