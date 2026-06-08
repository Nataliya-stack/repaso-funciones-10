const inputGrados = document.getElementById("inputGrados");
const selectEscala = document.getElementById("selectEscala");
const btnConvertir = document.getElementById("btnConvertir");
const resultadoTemperatura = document.getElementById("resultadoTemperatura");

const convertirTemperatura = (grados, escala) => {
    let resultado = ""; 

    if (escala === "C") {
        const fahrenheit = (grados * 9) / 5 + 32;
        resultado = `${fahrenheit.toFixed(1)}°F`; 
    } else if (escala === "F") {
        const celsius = ((grados - 32) * 5) / 9;
        resultado = `${celsius.toFixed(1)}°C`; 
    } else {
        resultado = "Error: Escala no válida"; 
    }

    return resultado; 
};

btnConvertir.addEventListener("click", () => {
    const grados = parseFloat(inputGrados.value); 
    const escala = selectEscala.value;

    if (isNaN(grados)) {
        resultadoTemperatura.textContent = "Error: ¡Por favor, ingrese un número válido!";        
        resultadoTemperatura.style.color = "red";
        return; 
    }

    const conversionFinal = convertirTemperatura(grados, escala);
    
    resultadoTemperatura.textContent = `Resultado: ${conversionFinal}`;
    resultadoTemperatura.style.color = "white";

    inputGrados.value = "";
    inputGrados.focus();
});
