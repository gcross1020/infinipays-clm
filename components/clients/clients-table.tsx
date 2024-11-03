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
import { MoreHorizontal, FileText, Mail, Phone } from "lucide-react";
import Link from "next/link";

const clients = [
  {
    id: "1",
    name: "Tech Solutions Inc",
    contactPerson: "John Smith",
    email: "john@techsolutions.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    projects: 3,
  },
  {
    id: "2",
    name: "Innovation Labs",
    contactPerson: "Sarah Johnson",
    email: "sarah@innovationlabs.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    projects: 2,
  },
  {
    id: "3",
    name: "Digital Corp",
    contactPerson: "Michael Brown",
    email: "michael@digitalcorp.com",
    phone: "+1 (555) 345-6789",
    status: "Inactive",
    projects: 0,
  },
];

export function ClientsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client Name</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Contact Info</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">{client.name}</TableCell>
              <TableCell>{client.contactPerson}</TableCell>
              <TableCell>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                    {client.email}
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                    {client.phone}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={client.status === "Active" ? "success" : "secondary"}>
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell>{client.projects} active</TableCell>
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
                      <Link href={`/clients/${client.id}`} className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
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