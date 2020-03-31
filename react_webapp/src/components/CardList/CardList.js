import React from 'react';
import Card from './Card';

const CardList = ({ filteredDoctors }) => {
  return (
    <div className="card-group mb-5">
      {
        filteredDoctors.map((user, i) => {
          return (
            <Card
              key={i}
              id={filteredDoctors[i]._id}
              name={filteredDoctors[i].name}
              email={filteredDoctors[i].email}
              city={filteredDoctors[i].city}
              clinickAddress={filteredDoctors[i].clinickAddress}
              specialization={filteredDoctors[i].specialization}
              avatar={filteredDoctors[i].specialization}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;