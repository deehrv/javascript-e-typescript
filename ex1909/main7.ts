import { paciente } from "./class/paciente";


let paciente1 = new paciente ("luiz", 20, "rua dos anjos", "dor de cabeça e dor abdominal ");
console.log (`O seu nome é: ${paciente1.nome} A sua idade é: ${paciente1.idade} O seu endereço é: ${paciente1.endereço} Os seus sintomas são: ${paciente1.sintomas} `)