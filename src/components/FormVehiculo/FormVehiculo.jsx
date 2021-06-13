import React, { useState } from "react";

const FormVehiculo = ({ setVehiculos }) => {
  const [vehiculo, setVehiculo] = useState({ modelo: "", tipo: "" });
  const onClickIngresaVehiculo = () => {
    if (vehiculo.modelo === "" || vehiculo.tipo === "") {
      alert("Debe seleccionar los datos del Vehiculo");
    } else {
      setVehiculos((vehiculosViejos) => [...vehiculosViejos, vehiculo]);
      setVehiculo({ modelo: "", tipo: "" });
    }
  };
  const addTipoVehiculoHandler = (event) => {
    setVehiculo((vehiculoViejo) => ({
      ...vehiculoViejo,
      tipo: event.target.value,
    }));
  };
  const addModeloVehiculoHandler = (event) => {
    setVehiculo((vehiculoViejo) => ({
      ...vehiculoViejo,
      modelo: event.target.value,
    }));
  };
  return (
    <>
      <label>Modelo</label>
      <input
        type="number"
        min="1985"
        max="2050"
        onChange={addModeloVehiculoHandler}
        value={vehiculo.modelo}
      />
      <br />
      <label>Tipo de Vehiculo</label>
      <select
        name="Tipo de Vehiculo"
        id="cars"
        onChange={addTipoVehiculoHandler}
        value={vehiculo.tipo}
      >
        <option value="">Elija tipo</option>
        <option value="Camion">Camion</option>
        <option value="Automovil">Automovil</option>
        <option value="Motocicleta">Motocicleta</option>
        <option value="Cuadraciclo">Cuadraciclo</option>
      </select>
      <br/>
      <input type="button" value="INGRESAR" onClick={onClickIngresaVehiculo} />
      <br/>
    </>
  );
};
export default FormVehiculo;
