import React from "react";
import QRCode from 'qrcode.react'
// var QRCode = require('qrcode.react');
 

const PatientCard = ({ name, email, id, city, address, avatar}) => {
    const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODMwNWFmMjBlNjJjMTNkMDc3Y2NlOCIsIm5hbWUiOiJwYXRpZW50IiwiZW1haWwiOiJwYXRpZW50QGVtYWlsLmNvbSIsImF2YXRhciI6Ii8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYjE3ZmQ0M2FmMWFhZjhmNTRlZmUyMmIzMDFiNWFmNmQ_cz0yMDAmcj1wZyZkPW1tIiwiaWF0IjoxNTg1NjY4NTgyLCJleHAiOjE1ODU3MDQ1ODJ9.gnKLB2J-9UD99ZrPg8IFCjzKDCqm94FSQ5kE1CFbVBE"
  return (
      <a href={`/`} target="_blank" style={{textDecoration: "none", color:"black"}}>
    <div className="card mb-5 mt-5 row">
    <div className="ml-5 mt-5 mx-auto">
    <QRCode value={`${id},${token}`} renderAs="canvas"/>
    </div>
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
