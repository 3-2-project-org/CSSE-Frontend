import React, { useEffect } from 'react'
import Table from '../../../utils/components/molecules/common-Table/Table'
import { Link } from 'react-router-dom'
import { getAllTasks } from '../../../api/task'
import { taskColumns } from '../../../utils/common/dataTable'


const AdminTasks = () => {

  const [tasks, setTasks] = React.useState([
    {
      _id : "",
      taskName: "",
      taskDescription: "",
      taskStatus: "",
      taskPriority: "",
      taskDueDate: "",
      assignedTo: {
        _id: "",
        username: "",
        email: "",
        type: "",
      },
      createdBy: {
        _id: "",
        username: "",
        email: "",
        type: "",
      },
      // comments: [],
      // attachments: [],
      taskStartDate: "",
      taskEndDate: "",
      taskSpan: "",
    }
  ])

  const {data, isSuccess} = getAllTasks()

  const refactorData = (data) => {
    if (data.length > 0) {
      const refactoredArray = data.map((item) => {
        return {
          _id: item._id,
          taskName: item.taskName || "Not provided",
          taskDescription: item.taskDescription || "Not provided",
          taskStatus: item.taskStatus || "Not provided",
          taskPriority: item.taskPriority || "Not provided",
          taskDueDate: item.taskDueDate || "Not provided",
          taskEndDate: item.taskEndDate || "Not provided",
          taskStartDate: item.taskStartDate || "Not provided",
          assignedTo: item.assignedTo.username || "Not provided",
          // managerEmail: item.Manager.email || "Not provided",
          // comments: item.comments || "Not provided",
          taskSpan: item.taskSpan || "Not provided",
        }
      });

      return refactoredArray;
    } else {
      return [];
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      setTasks(data.data.data.data)
    }
  }, [data, isSuccess])



  return (
    <div className="flex relative">
      <div className="flex-[7] w-full">
        <span>All Task details</span>
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/admin/newTask">
            <button className="w-36 h-10 rounded-sm text-white bg-blue-600">
              Add new Task
            </button>
          </Link>
        </div>

        <Table
          response={refactorData(tasks)}
          title={"Tasks"}
          dataCols={taskColumns}
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

export default AdminTasks