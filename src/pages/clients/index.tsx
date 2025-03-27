import { DataTable } from "@/components/clients/data-table"
import { columns } from "@/components/clients/columns"
import { clients } from "@/data/clients"
import { Button } from "@/components/ui/button"
import { PlusCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ClientsPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Clients</h1>
        <p className="text-neutral-500 text-sm">
          Manage and view all your client information in one place.
        </p>
      </div>
      
      <div className="rounded-md border overflow-hidden">
        <div className="p-4 border-b bg-white flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-neutral-400" />
            <Input
              type="search"
              placeholder="Search clients..."
              className="pl-8 w-full h-9 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 text-sm">
              Export
            </Button>
            <Button size="sm" className="h-9 gap-1.5 text-sm bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="h-3.5 w-3.5" />
              Add Client
            </Button>
          </div>
        </div>
        <DataTable columns={columns} data={clients} />
      </div>
    </div>
  )
} 