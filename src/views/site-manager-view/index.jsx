import React from 'react'
import SiteManagerIndex from './SiteManagerIndex'
import SiteManagerTasks from './site-manager-taks/SiteManagerTasks'
import SiteManagerProducts from './site-manager-products/SiteManagerProducts'
import { Route, Routes } from 'react-router-dom'
import FileNotFound from '../../components/organisms/errors/fileNotFound'

const index = () => {
  return (
    <div className="flex flex-row">
      {/* <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div> */}

      <div className="flex-[7]">
        <Routes>
          <Route path="overview" element={<SiteManagerIndex />} />
          <Route path="tasks" element={<SiteManagerTasks />} />
          <Route path="people" element={<SiteManagerProducts />} />
          {/* <Route path="sites" element={<AdminSites />} /> */}
          {/* <Route path="edit/:id" element={<InventoryForm />} />
          <Route path="release/request" element={<ReleaseInventoryMain />} />
          <Route
            path="release/request/form/:id"
            element={<InventoryReleaseForm />}
          />
          <Route path="/stats" element={<InventoryStats />} /> */}
          <Route path="*" element={<FileNotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default index