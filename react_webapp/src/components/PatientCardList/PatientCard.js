import React from "react";
import QRCode from 'qrcode.react'
// var QRCode = require('qrcode.react');
 

const PatientCard = ({ name, email, id, city, address, avatar}) => {
  return (
      <a href={`/patients/patient${id}`} target="_blank" style={{textDecoration: "none", color:"black"}}>
    <div className="card mb-5 mt-5 row">
    <div className="ml-5 mt-5 mx-auto"><QRCode value={id} /></div>
      <div className="mx-auto mt-4">
        <h5 className="card-title mt-5 mx-auto">{name}</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Id:</strong> {id}</li>
          <li className="list-group-item"><strong>Email:</strong> {email}</li>
          <li className="list-group-item"><strong>Address:</strong> {address}</li>
          <li className="list-group-item"><strong>City:</strong> {city}</li>
          {/* <li className="list-group-item">Specialization: {specialization}</li> */}
        </ul>
      </div>
    </div>
    </a>
  );
};

export default PatientCard;
