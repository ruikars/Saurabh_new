import { useLocation, useNavigate } from "react-router-dom";
import StudentFormInput from "./StudentFormInput";
import { useState } from "react";
let _student = {};
const StudentForm = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const students = location?.state?.students;
  _student = location?.state?.student;
  const [student, setStudent] = useState(
    _student || {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      age: "",
      gender: "",
    }
  );
  const states = ["Maharashtra"];
  const cities = ["Solapur", "Pune", "Nashik"];
  const pincodes = ["413003", "413005", "413006"];

  const handleSubmit = () => {
    const isEmpty = Object.values(student).some((value) => value === "");
    console.log('student: ', student);
    if (isEmpty) {
      console.log("Fill all fields");
    } else {
      navigator("/", { state: { newStudents: [...students, student] } });
      console.log("All variables are filled.");
    }
  };
  return (
    <div className="student-form-container">
      <h2 className="student-form-title">Student Form</h2>
      <StudentFormInput
        label="Name"
        type="text"
        name="name"
        value={student?.name}
        onChange={(e) => {
          setStudent({ ...student, name: e.target.value });
        }}
      />
      <StudentFormInput
        label="Email"
        type="email"
        name="email"
        value={student.email}
        onChange={(e) => {
          setStudent({ ...student, email: e.target.value });
        }}
      />
      <StudentFormInput
        label="Address"
        type="text"
        name="address"
        value={student.address}
        onChange={(e) => {
          setStudent({ ...student, address: e.target.value });
        }}
      />
      <div className="dropdown-container">
        <label htmlFor="state">State:</label>
        <select
          id="state"
          type="text"
          name="state"
          value={student.state}
          onChange={(e) => {
            setStudent({ ...student, state: e.target.value });
          }}
        >
          <option value="">Select</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          type="text"
          name="city"
          value={student.city}
          onChange={(e) => {
            setStudent({ ...student, city: e.target.value });
          }}
        >
          <option value="">Select</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="dropdown-container">
        <label htmlFor="pincode">Pincode:</label>
        <select
          id="pincode"
          type="number"
          name="pincode"
          value={student.pincode}
          onChange={(e) => {
            setStudent({ ...student, pincode: e.target.value });
          }}
        >
          <option value="">Select</option>
          {pincodes.map((pincode, index) => (
            <option key={index} value={pincode}>
              {pincode}
            </option>
          ))}
        </select>
      </div>

      <StudentFormInput
        label="Phone_Number"
        type="number"
        name="phone"
        value={student.phone}
        onChange={(e) => {
          setStudent({ ...student, phone: e.target.value });
        }}
      />
      <StudentFormInput
        label="Age"
        type="number"
        name="age"
        value={student.age}
        onChange={(e) => {
          setStudent({ ...student, age: e.target.value });
        }}
      />
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={student.gender === "male"}
            onChange={(e) => {
              setStudent({ ...student, gender: e.target.value });
            }}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={student.gender === "female"}
            onChange={(e) => {
              setStudent({ ...student, gender: e.target.value });
            }}
          />
          Female
        </label>
      </div>
      <button
        className="student-form-button"
        type="submit"
        onClick={handleSubmit}
      >
        {_student !== null ? "Update" : "Submit"}
      </button>
    </div>
  );
};

export default StudentForm;
