import Table from '../../../utils/components/molecules/common-Table/Table'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllSites } from '../../../api/sites'
import { siteColumns } from '../../../utils/common/dataTable'

const AdminSites = () => {
  const [sites, setSites] = React.useState([
    {
      _id : "",
      Address: "",
      Manager: {
        _id: "",
        username: "",
        email: "",
        type: "",
      },
      Allocated_budget: "",
      Remaining_Budget: ""
    }
  ])
  const {data, isSuccess} = getAllSites()
  const refactorData = (data) => {
    if (data.length > 0) {
      const refactoredArray = data.map((item) => {
        return {
          _id: item._id,
          address: item.Address || "Not provided",
          managerName: item.Manager._id || "Not provided",
          // managerEmail: item.Manager.email || "Not provided",
          Allocated_budget: item.Allocated_budget || "Not provided",
          Remaining_Budget: item.Remaining_Budget || "Not provided",
        }
      });

      return refactoredArray;
    } else {
      return [];
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      setSites(data.data.data.data)
    }
  }, [data, isSuccess])

  return (
    <div className="flex relative">
      <div className="flex-[7] w-full">
        <span>All Site details</span>
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/admin/newSite">
            <button className="w-36 h-10 rounded-sm text-white bg-blue-600">
              Add new Site
            </button>
          </Link>
        </div>

        <Table
          response={refactorData(sites)}
          title={"Sites"}
          dataCols={siteColumns}
          // setIsOpen={setIsOpen}
        />
      </div>

      {/* <ToastMessage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        message={"Order deleted successfully"}
      /> */}
    </div>
  )
}

export default AdminSites