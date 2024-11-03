import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";

export default function ContractsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Contracts</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Contract
        </Button>
      </div>
      
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contract Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Service Agreement</TableCell>
              <TableCell>Acme Corp</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Apr 23, 2024</TableCell>
              <TableCell>$12,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}