
const VehiculoRegistro = ({vehiculos}) => {
    const modeloVehiculo = vehiculos.map(vehiculo=>vehiculo.modelo)
    const tipoVehiculo = vehiculos.map(vehiculo=>vehiculo.tipo)
    return (
        <div className="row justify-content-around" >
            <div className="col-12 text-center" >Ingreso de Vehiculos</div>
            <div className="col-6 text-center" >
                <label>Modelo de Vehiculo</label>
                <ul>{modeloVehiculo.map(modelo=><li>{modelo}</li>)}</ul>
                
            </div>
            <div className="col-6 text-center" >
                <label>Tipo de Vehiculo</label>
                <ul>{tipoVehiculo.map(tipo=><li>{tipo}</li>)}</ul>
                
            </div>
        </div>
    );
}
export default VehiculoRegistro;