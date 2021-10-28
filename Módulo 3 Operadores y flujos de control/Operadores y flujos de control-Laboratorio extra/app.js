const empleado = { bruto: 35000, hijos: 2, pagas: 12, }
console.log("Datos de empleado introducidos:", empleado);
 

let retención;
if (empleado.bruto >= 0 && empleado.bruto <= 12000) {
    retención = 0;
    
} else if (empleado.bruto > 12000 && empleado.bruto <= 24000) {
    retención = 0.08;
    
} else if (empleado.bruto > 24000 && empleado.bruto <= 34000) {
    retención = 0.16;

} else if (empleado.bruto > 34000) {
    retención = 0.30;
} 



if (retención > 0 && empleado.hijos > 0) {
    retención = retención - 0.02;

}


let anualRetenido = empleado.bruto * retención;
let netoAnual = empleado.bruto - anualRetenido;
console.log("Sueldo neto anual en nómina:", netoAnual + "€");


let netoMensual = netoAnual / empleado.pagas;
console.log("Sueldo neto mensual en nómina:", netoMensual + "€");


