import React from "react";
import PatientCard from "./PatientCard";

const CardList = ({ filterPatient }) => {
  return (
    <div className="row">
      <div className="col-sm-12">
        {filterPatient.map((user, i) => {
          return (
            <PatientCard
              key={i}
              id={filterPatient[i]._id}
              name={filterPatient[i].name}
              email={filterPatient[i].email}
              age={filterPatient[i].age}
              address={filterPatient[i].address}
              city={filterPatient[i].city}
              avatar={filterPatient[i].specialization}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
