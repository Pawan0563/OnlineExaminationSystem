import React from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import AdminCard from './AdminCard'

function AdminDashboard() {
  return (
    <>
    <AdminNavbar/>
<div className="CardContainer">
    <AdminCard
        title="Manage Faculty"
        
        link="https://example.com"
        imageUrl="https://cdn.pixabay.com/photo/2019/09/01/06/17/board-4444443_640.jpg"
      />
    <AdminCard
        title="Manage Student"
      
        link="https://example.com"
        imageUrl="https://cdn.pixabay.com/photo/2019/09/01/06/17/board-4444443_640.jpg"
      />
    </div>
    
    </>
  )
}

export default AdminDashboard