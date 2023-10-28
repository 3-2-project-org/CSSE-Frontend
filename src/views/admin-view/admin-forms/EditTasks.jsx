import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { getTaskById , updateTask } from "../../../api/task";

const EditTasks = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const { data, isSuccess: taskData } = getTaskById(id);
  const { mutate, isSuccess } = updateTask();

  const initialValues = {
    taskName: "",
    taskDescription: "",
    taskPriority: "",
    taskDueDate: "",
    assignedTo: "",
    taskStartDate: "",
    taskEndDate: "",
    taskSpan: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate({ values, id });
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;


  useEffect(() => {
    if (isSuccess) {
      alert("Task updated successfully");
      navigate("/admin/tasks");
    }
  }, [isSuccess]);


  useEffect(() => {
    if (taskData && data) {
      formik.setFieldValue("taskName", data.data.data.taskName);
      formik.setFieldValue("taskDescription", data.data.data.taskDescription);
      formik.setFieldValue("taskPriority", data.data.data.taskPriority);
      formik.setFieldValue("taskDueDate", data.data.data.taskDueDate);
      formik.setFieldValue("assignedTo", data.data.data.assignedTo._id      );
      formik.setFieldValue("taskStartDate", data.data.data.taskStartDate);
      formik.setFieldValue("taskEndDate", data.data.data.taskEndDate);
      formik.setFieldValue("taskSpan",data.data.data.taskSpan);
    }
  }, [taskData, data]);


  return (
    <form onSubmit={handleSubmit}>
      <span className="text-2xl font-bold">Edit Task</span>
      <div className="flex flex-col mt-16 w-[1000px]">
        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <span className="text-xl font-semibold">Task Name</span>
          <input
            type="text"
            name="Task Name"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.taskName}
          />
          {
            <span className="text-red-500">
              {errors.taskName ? errors.taskName : ""}
            </span>
          }
        </div>

        <div className="w-full bg-white shadow-lg gap-2 rounded-lg p-6 flex flex-row mt-10">
          <div className="flex-1 w-full flex-col flex">
          <span className="text-xl font-semibold">Priority </span>
              <select
                className="border-2 border-gray-300 p-2 rounded-md mt-2"
                name="taskPriority"
                onSelect={(e) => {
                  formik.setFieldValue("taskPriority", e.target.value);
                }}
                onChange={handleChange}
              >
                <option value="low">
                  Low
                </option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
          </div>
          <div className="flex-1 w-full flex-col flex">
          <span className="text-xl font-semibold">Task Span</span>
            <input
              type="number"
              name="taskSpan"
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              onChange={handleChange}
              value={values.taskSpan}
            />
          </div>
        </div>


        <div className="w-full bg-white shadow-lg gap-2 rounded-lg p-6 flex flex-row mt-10">
          <div className="flex-1 w-full flex-col flex">
          <span className="text-xl font-semibold">Start Date </span>
          <input
            type="date"
            name="taskStartDate"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.taskStartDate}
          />
          </div>
          <div className="flex-1 w-full flex-col flex">
          <span className="text-xl font-semibold">End Date </span>
          <input
            type="date"
            name="taskEndDate"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.taskEndDate}
          />
          </div>
        </div>



        <div className="w-full bg-white shadow-lg gap-2 rounded-lg p-6 flex flex-row mt-10">
          <div className="flex-1 w-full flex-col flex">
          <span className="text-xl font-semibold">Due Date </span>
          <input
            type="date"
            name="taskDueDate"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.taskDueDate}
          />
          </div>
          <div className="flex-1 w-full flex-col flex">
            <span className="text-xl font-semibold">Assigned To</span>
            <select
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              name="assignedTo"
              onSelect={(e) => {
                formik.setFieldValue("assignedTo", e.target.value);
              }}
              onChange={handleChange}
            >
              <option value="6525afdf630e4a2aa363542e">
                Tuan Fazid Manager
              </option>
              <option value="652c8edae89d62d028e93815">Csse Manager</option>
              <option value="653d36e773f79e28f148ca0b">Thushan Withana</option>
            </select>
          </div>
        </div>










      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-64 h-10 rounded-sm text-white bg-blue-600 mt-10"
        >
          Edit Task
        </button>
      </div>
    </form>
  )
}

export default EditTasks