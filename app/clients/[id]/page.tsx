"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Mail, Phone, MapPin, FileText, History } from "lucide-react";
import Link from "next/link";

export default function ClientDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto p-6">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/clients">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Clients
        </Link>
      </Button>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Tech Solutions Inc
          </h1>
          <div className="flex items-center space-x-4 mt-2">
            <Badge variant="success">Active</Badge>
            <span className="text-muted-foreground">Client since March 2024</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Send Email
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            New Contract
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Client Details</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <dl className="space-y-4">
                  <div className="flex items-start">
                    <dt className="w-5 mr-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                    </dt>
                    <dd>john@techsolutions.com</dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-5 mr-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                    </dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                  <div className="flex items-start">
                    <dt className="w-5 mr-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </dt>
                    <dd>123 Business Ave, Suite 100<br />San Francisco, CA 94107</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Account Overview</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Active Projects</dt>
                    <dd className="text-2xl font-bold">3</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Total Contracts</dt>
                    <dd className="text-2xl font-bold">5</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="contracts">
          <Card className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Service Agreement #{i}</h4>
                    <p className="text-sm text-muted-foreground">Created March {20 - i}, 2024</p>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4">
                  <History className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">New contract signed</p>
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