"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, FileSignature, Eye, Trash } from "lucide-react";
import Link from "next/link";

const contracts = [
  {
    id: "1",
    title: "Service Agreement - Tech Solutions Inc",
    client: "Tech Solutions Inc",
    status: "Active",
    type: "Service Agreement",
    lastModified: "2024-03-20",
  },
  {
    id: "2",
    title: "NDA - Innovation Labs",
    client: "Innovation Labs",
    status: "Pending Signature",
    type: "NDA",
    lastModified: "2024-03-19",
  },
  {
    id: "3",
    title: "License Agreement - Digital Corp",
    client: "Digital Corp",
    status: "Draft",
    type: "License",
    lastModified: "2024-03-18",
  },
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "success";
    case "pending signature":
      return "warning";
    case "draft":
      return "secondary";
    default:
      return "default";
  }
};

export function ContractsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell className="font-medium">{contract.title}</TableCell>
              <TableCell>{contract.client}</TableCell>
              <TableCell>{contract.type}</TableCell>
              <TableCell>
                <Badge variant={getStatusColor(contract.status)}>
                  {contract.status}
                </Badge>
              </TableCell>
              <TableCell>{contract.lastModified}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/contracts/${contract.id}`} className="flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileSignature className="mr-2 h-4 w-4" />
                      Request Signature
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}