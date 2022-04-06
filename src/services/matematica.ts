


export const sumar = (num1: number, num2: number): number => {

    let sumarResultado = num1 + num2;
    return sumarResultado
}

//Calcular nuevo salario de un empleado si obtuvo un reajuste del 4,5 sobre si salario anterior
export const reajusteSalario = (salario: number, reajuste: number): number => {

    let nuevoSalario

    reajuste = salario * 0.045
    return nuevoSalario = salario + reajuste;
}

export const hora = (hora: number, tarifa: number): number => {

    let resultadoHora 
    return resultadoHora = hora * tarifa;
}

export const horaExtra = (hora: number, tarifa: number): number => {

    return hora * (tarifa + tarifa/2)
}

export const horaTrabajo = (horas: number, tarifa: number): number => {
    
    let salarios

    if (horas > 40) {
        salarios = horaExtra(horas, tarifa)
        

    } else if (horas <= 40) {
        salarios = hora(horas, tarifa)

    }
    return salarios;
}