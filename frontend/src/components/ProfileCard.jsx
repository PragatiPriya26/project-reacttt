import React from "react";

function ProfileCard() {
  const student = {
    name: "Aarav Kumar",
    regNo: "DCSE23-001",
    course: "Diploma in Computer Science Engineering",
    year: "1st Year",
    email: "aarav.kumar@example.com",
    phone: "+91 9876543210",
    photo: "https://via.placeholder.com/150",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-96 text-center">
      <img
        src={student.photo}
        alt={student.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
      <p className="text-gray-500 mb-2">{student.course}</p>
      <div className="text-sm text-gray-600">
        <p><span className="font-semibold">Reg No:</span> {student.regNo}</p>
        <p><span className="font-semibold">Year:</span> {student.year}</p>
        <p><span className="font-semibold">Email:</span> {student.email}</p>
        <p><span className="font-semibold">Phone:</span> {student.phone}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileCard;
