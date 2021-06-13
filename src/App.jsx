import React, { useState } from "react";

import FormVehiculo from "./components/FormVehiculo/FormVehiculo";
import VehiculoRegistro from "./components/VehiculoRegistro/VehiculoRegistro";

function App() {
  const [vehiculos, setVehiculos]= useState([]);
  return (
    <div className="container" >
      <FormVehiculo setVehiculos={setVehiculos}/>
      <VehiculoRegistro vehiculos={vehiculos} />
    </div>
  );
}

export default App;
