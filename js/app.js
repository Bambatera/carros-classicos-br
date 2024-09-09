
function buscarCarros() {

    const cartasDiv = document.getElementById('cartas');
    const input = document.getElementById('busca-carros');

    for (let carro of carros) {
        if (carro.nome.toLocaleLowerCase() == input.value.toLocaleLowerCase() || carro.marca.toLocaleLowerCase() == input.value.toLocaleLowerCase()) {
        
            
        }
    }
}