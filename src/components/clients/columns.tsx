import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Client } from "@/types/client"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {row.getValue("name")}
        </div>
      )
    }
  },
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => {
      return (
        <div>
          {row.getValue("company")}
        </div>
      )
    }
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return (
        <div className="text-neutral-500">
          {row.getValue("email")}
        </div>
      )
    }
  },
  {
    accessorKey: "industry",
    header: "Industry",
    cell: ({ row }) => {
      return (
        <div>
          {row.getValue("industry")}
        </div>
      )
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as "active" | "inactive"
      return (
        <Badge 
          variant={status === "active" ? "default" : "secondary"} 
          className={`capitalize text-xs font-normal px-2 py-0.5 ${
            status === "active" 
              ? "bg-[#141414] text-white" 
              : "bg-neutral-200 text-neutral-700"
          }`}
        >
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "lastAudit",
    header: "Last Audit",
    cell: ({ row }) => {
      const date = new Date(row.getValue("lastAudit") as string)
      return (
        <div>
          {date.toLocaleDateString()}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      )
    },
  },
] 