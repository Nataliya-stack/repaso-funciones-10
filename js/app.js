const convertirTemperatura = (grados, escala) => {
    if (escala === "C") {
        const fahrenheit = (grados * 9) / 5 + 32;
        return `${fahrenheit.toFixed(1)}°F`;
        //return fahrenheit.toFixed(1) + "°F";
    } else if (escala === "F") {
        const celsius = ((grados - 32) * 5) / 9;
        return `${celsius.toFixed(1)}°C`;
    } else {
        return "Error: Escala no válida";
    }
};

const inputGrados = document.getElementById("inputGrados");
const selectEscala = document.getElementById("selectEscala");
const btnConvertir = document.getElementById("btnConvertir");
const resultadoTemperatura = document.getElementById("resultadoTemperatura");

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

////////////////////////////////////////////////////////////////////////////////
//const miFuncion = (cadena) => cadena.length;

//const inicializarContador = (idInput, idBtn, idResultado) => {
    //const inputEl = document.getElementById(idInput);
    //const btnEl = document.getElementById(idBtn);
    //const resultEl = document.getElementById(idResultado);

    //if (!inputEl || !btnEl || !resultEl) return;   

    //btnEl.addEventListener("click", () => {
        //const texto = inputEl.value.trim();

        //if (texto === "") {
            //resultEl.textContent = "Error: ¡El campo no puede estar vacío!";
            //return; 
        //}

        //const longitud = miFuncion(texto); 
        //resultEl.textContent = "Longitud del texto: " + longitud;
    //});
//};

//inicializarContador("input", "btn", "resultado");
