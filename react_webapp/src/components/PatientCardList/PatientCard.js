import React from "react";

const PatientCard = ({ name, email, id, city, address, avatar }) => {
  return (
    <div className="card mb-5 mt-5">
      <div className="mx-auto mt-4">
        <h5 className="card-title">{name}</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Id: {id}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Address: {address}</li>
          <li className="list-group-item">City: {city}</li>
          {/* <li className="list-group-item">Specialization: {specialization}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default PatientCard;
