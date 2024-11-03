"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Calculator, Clock, DollarSign } from "lucide-react";

export default function EstimatorPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">AI Project Estimator</h1>
          <p className="text-muted-foreground">
            Get accurate project estimates using AI analysis
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your project in detail..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timeline">Expected Timeline (months)</Label>
                  <Input type="number" id="timeline" min="1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">$5,000 - $10,000</SelectItem>
                      <SelectItem value="medium">$10,000 - $50,000</SelectItem>
                      <SelectItem value="large">$50,000 - $100,000</SelectItem>
                      <SelectItem value="enterprise">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full" onClick={() => setLoading(true)}>
                Generate Estimate
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Estimate Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Timeline</span>
                  </div>
                  <span className="font-semibold">3-4 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>Cost Range</span>
                  </div>
                  <span className="font-semibold">$15,000 - $20,000</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">AI Insights</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Complexity level: Medium</li>
                  <li>• Resource requirements: 2-3 team members</li>
                  <li>• Risk factors: Timeline dependencies</li>
                  <li>• Recommended contingency: 15%</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full">
            Export Detailed Estimate
          </Button>
        </div>
      </div>
    </div>
  );
}