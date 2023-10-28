import React, { useEffect, useState } from 'react'
import Table from '../../../utils/components/molecules/common-Table/Table'
import ToastMessage from '../../../components/atoms/ToastMessage/ToastMessage'
import { getAllUsers } from '../../../api/auth'
import { userColumns } from '../../../utils/common/dataTable'
import { Link } from 'react-router-dom'

const AdminPeople = () => {
  const [users, setUsers] = useState([
    {
      _id: '',
      username: '',
      email: "",
      type: "",
      is_active: "",
    }
  ])

  const {data, isSuccess} = getAllUsers()

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data)
      setUsers(data.data.data)
    }
  }, [data, isSuccess])

  const refactorData = (data) => {
    if (data.length > 0) {
      const refactoredArray = data.map((item) => {
        return {
          _id: item._id,
          username: item.username || "Not provided",
          email: item.email || "Not provided",
          type: item.type || "Not provided",
          is_active: item.is_active || "Not provided",
        }
      });

      return refactoredArray;
    } else {
      return [];
    }
    
  }
  return (
    <div className="flex relative">
      <div className="flex-[7] w-full">
        <span>All User details</span>
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/admin/newUser">
            <button className="w-36 h-10 rounded-sm text-white bg-blue-600">
              Add new User
            </button>
          </Link>
        </div>

        <Table
          response={refactorData(users)}
          title={"Users"}
          dataCols={userColumns}
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

export default AdminPeople