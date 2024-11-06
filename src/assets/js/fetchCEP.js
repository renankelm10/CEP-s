const url = "https://viacep.com.br/ws/89801112/json/";

export async function getCEPData(element, cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;  // Usa o CEP dinâmico
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    try {
        fetch(url, {
            headers: headers
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            element.innerHTML = `${data.logradouro}, ${data.complemento} - ${data.bairro}
            <br>${data.localidade}/${data.uf}, ${data.cep}
            <br>${data.ddd} - ${data.regiao}`;
        }).catch(function (err) {
            console.warn('Algo deu errado.', err);
        });
    } catch (error) {
        console.error(error.message);
    }
}
