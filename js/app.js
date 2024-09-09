
function buscarCarros() {

    let cartasDiv = document.getElementById('cartas');
    let input = document.getElementById('busca-carros').value;
    let resultados = "";

    if (input == undefined || input == null || input == "") {
        cartasDiv.innerHTML = '<div class="aviso">Não há resultados para a pesquisa!</div>';
        return;
    }

    for (let carro of carros) {
        let marca = carro.marca.toLocaleLowerCase();
        let modelo = carro.nome.toLocaleLowerCase();
        let tag = carro.tag.toLocaleLowerCase();

        if (marca.includes(input.toLocaleLowerCase()) || modelo.includes(input.toLocaleLowerCase()) || tag.includes(input.toLocaleLowerCase())) {
            resultados += `<div class="card">
                            <div class="card-image">
                                <img src="${carro.foto}" alt="#" class="card-image">
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">${carro.marca} ${carro.nome}</h3>
                                <div class="card-attribute">
                                    Ano: ${carro.ano}
                                </div>
                                <div class="card-attribute">
                                    Motor: ${carro.motor}
                                </div>
                                <div class="card-attribute">
                                    Potência: ${carro.potencia} CV
                                </div>
                                <div class="card-attribute">
                                    Peso: ${carro.peso} Kg
                                </div>
                            </div>
                        </div>`;

        }
    }

    if (resultados === "") {
        cartasDiv.innerHTML = '<div class="aviso">Não há resultados para a pesquisa!</div>';
        return;
    }

    cartasDiv.innerHTML = resultados;
}