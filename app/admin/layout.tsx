import { Sidebar } from "./_components/sidebar"

const AdminLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-0 md:ml-64">
            {children}
        </div>
    </div>
  )
}

export default AdminLayout
