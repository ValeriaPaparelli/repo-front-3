const StatusTripulante = ({ nombre, esImpostor }) => {
  return (
    <li>
      {nombre} {esImpostor ? "" : "no"} es impostor
    </li>
  );
};

export default StatusTripulante;
