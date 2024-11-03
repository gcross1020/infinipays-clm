import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function PaymentsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Payment
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#INV-001</TableCell>
              <TableCell>Acme Corp</TableCell>
              <TableCell>$12,000</TableCell>
              <TableCell>
                <Badge>Paid</Badge>
              </TableCell>
              <TableCell>Apr 30, 2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}