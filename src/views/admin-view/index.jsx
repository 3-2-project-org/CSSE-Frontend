import React from "react";
import AdminIndex from "./AdminIndex";
import AdminTasks from "./admin-tasks/AdminTasks";
import AdminPeople from "./admin-people/AdminPeople";
import AdminSites from "./admin-add-sites/AdminSites";
import { Route, Routes } from "react-router-dom";
import FileNotFound from "../../components/organisms/errors/fileNotFound";
import Layout from "../../components/organisms/Layout";
import AddNewUser from "./admin-forms/AddNewUser";
import EditUser from "./admin-forms/EditUser";
import AddSite from "./admin-forms/AddSite";
import EditSite from "./admin-forms/EditSite";

const index = () => {
  return (
    <div className="flex flex-row">
      {/* <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div> */}
      <Layout>
        <div className="flex-[7]">
          <Routes>
            <Route path="overview" element={<AdminIndex />} />
            <Route path="tasks" element={<AdminTasks />} />
            <Route path="people" element={<AdminPeople />} />
            <Route path="sites" element={<AdminSites />} />
            <Route path="newUser" element={<AddNewUser />} />
            <Route path="edit/:id" element={<EditUser />} />
            <Route path="newSite" element={<AddSite />} />
            <Route path="editSite/:id" element={<EditSite />} />
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
      </Layout>
    </div>
  );
};

export default index;
