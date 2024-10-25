"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

// Mock data for demonstration
const orders = [
  {
    $id: "671a79e20001f7338d0a",
    customer_name: "Health Sync",
    customer_phone: "+923052527557",
    customer_email: "alit83219@gmail.com",
    delivery_address: "muzafrabad street #2 house 212",
    delivery_city: "arifwala",
    delivery_state: "Punjab",
    price: "1200",
    number_of_items: 1,
    order_items: '[{"productId":"67188f980023b6ca2552","name":"Caldence (30 Tablets)","quantity":1,"price":"1200.00","totalPrice":1200}]',
    status: "pending",
    $createdAt: "2024-10-24T16:46:29.860+00:00",
  },
  // Add more mock orders here...
]

export default function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const router = useRouter()

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.$id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    // Implement status change logic here
    console.log(`Changing status of order ${orderId} to ${newStatus}`)
    // After successful update, refresh the page
    router.refresh()
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Order Management</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Search className="w-5 h-5 text-gray-500" />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <Select onValueChange={(value) => setStatusFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.$id}>
              <TableCell>{order.$id}</TableCell>
              <TableCell>{order.customer_name}</TableCell>
              <TableCell>Rs. {order.price}</TableCell>
              <TableCell>
                <Badge variant={order.status === "pending" ? "default" : "secondary"}>
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(order.$createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>Order Details</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold">Customer Information</h3>
                        <p>Name: {order.customer_name}</p>
                        <p>Email: {order.customer_email}</p>
                        <p>Phone: {order.customer_phone}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Delivery Information</h3>
                        <p>Address: {order.delivery_address}</p>
                        <p>City: {order.delivery_city}</p>
                        <p>State: {order.delivery_state}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">Order Items</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Total</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {JSON.parse(order.order_items).map((item: any, index: number) => (
                            <TableRow key={index}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.quantity}</TableCell>
                              <TableCell>Rs. {item.price}</TableCell>
                              <TableCell>Rs. {item.totalPrice}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">Update Status</h3>
                      <Select
                        onValueChange={(value) => handleStatusChange(order.$id, value)}
                        defaultValue={order.status}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="processing">Processing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
