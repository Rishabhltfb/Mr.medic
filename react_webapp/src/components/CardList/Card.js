import React from "react";

const Card = ({ name, email, id, city, clinickAddress, specialization, avatar }) => {
  return (
    <div className="col-lg-4">
      <div className="card mr-4 mb-5 mt-5 mb-lg-0" style={{ width: "18rem" }}>
        <img className="card-img-top" src={`https://source.unsplash.com/user/${name}`} alt="Card image cap" />
        <div className="card-body mx-auto text-primary">
          <strong><h4 className="card-title mx-auto">{name}</h4></strong>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Id: {id}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">ClinickAddress: {clinickAddress}</li>
          <li className="list-group-item">City: {city}</li>
          <li className="list-group-item">Specialization: {specialization}</li>
        </ul>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default Card;
