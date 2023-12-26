const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado, intentos) => {
    if (numeroAdivinado == numeroSecreto) {
        console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
        // Terminar el programa después de adivinar correctamente
        return true;
    } else if (numeroAdivinado > numeroSecreto) {
        console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
        console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
}
    module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
    };
    
