import React from "react";
import StatusTripulante from "./../StatusTripulante/StatusTripulante";

const tripulantes = [
  { id: 1, nombre: "Mr. Poindibags", esImpostor: true },
  { id: 2, nombre: "Bombom", esImpostor: false },
  { id: 3, nombre: "Tito", esImpostor: false },
  { id: 4, nombre: "X-Ray", esImpostor: false },
  { id: 5, nombre: "Fixfox", esImpostor: false },
];

const Tripulantes = () => {
  let tripulacion = tripulantes.map((tripulante) => (
    <StatusTripulante key={tripulante.id} {...tripulante} />
  ));

  return <ul>{tripulacion}</ul>;
};

export default Tripulantes;
