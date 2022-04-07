



 const hora = (hora: number, tarifa: number): number => {

    let resultadoHora 
    return resultadoHora = hora * tarifa;
}

 const horaExtra = (hora: number, tarifa: number): number => {

    return hora * (tarifa + tarifa/2)
}

 const horaTrabajo = (horas: number, tarifa: number): number => {
    
    let salarios

    if (horas > 40) {
        salarios = horaExtra(horas, tarifa)
        

    } else if (horas <= 40) {
        salarios = hora(horas, tarifa)

    }
    return salarios;
}

export {
    hora,
    horaExtra,
    horaTrabajo
}