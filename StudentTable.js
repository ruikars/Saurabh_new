import React, { useEffect, useState } from "react";
import "./studenttable.css";
import { useLocation, useNavigate } from "react-router-dom";

const StudentTable = () => {
  const [studentsList, setStudentsList] = useState([]);
  const location = useLocation();
  const newStudents = location?.state?.newStudents;
  const navigator = useNavigate();
  const handleCreateStudent = () => {
    navigator("/student-form", { state: { students: studentsList } });
  };

  useEffect(() => {
    console.log('newStudents: ', newStudents);
    newStudents && setStudentsList(newStudents);
  }, []);

  const handleEdit = (editStudent) => {
    navigator("/student-form", { state: { student: editStudent } });
  };

  const handleDelete = (deleteStudent) => {
    const modifiedStudents = studentsList.filter(
      (student) => student.email !== deleteStudent.email
    );
    setStudentsList(modifiedStudents);
  };
  return (
    <div className="external-div">
      <h2 className="student-table-title">Student Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Pincode</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsList?.map((student, index) => (
            <tr key={index}>
              <td>{student?.name}</td>
              <td>{student?.email}</td>
              <td>{student?.address}</td>
              <td>{student?.city}</td>
              <td>{student?.state}</td> <td>{student?.pincode}</td>
              <td>{student?.phone}</td>
              <td>{student?.age}</td>
              <td>{student?.gender}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleDelete(student)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCreateStudent}>Create</button>
    </div>
  );
};

export default StudentTable;
