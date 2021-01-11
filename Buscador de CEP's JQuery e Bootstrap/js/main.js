var cep = "";

function chnageInput(e) {
    console.log(e.value.toString())
    const str = e.value.length
    console.log(str)
    if (str == 8) {
        cep = e.value
        console.log(cep)
        $("#btnConsult").css("display", "block")
    }

}
let count =1
var contentHTML = "";
let urlCep = `https://viacep.com.br/ws/`;
function consultaCep() {
    $("#loader").css("display", "block")
    $.ajax({
        url: urlCep + `${cep}/json/`,
        type: "GET",
        contentType: "application/json: charset=utf-8",
        dataType: "json",
    }).done((response) => {
        const cep = response.cep
        const logradouro = response.logradouro
        const complemento = response.complemento
        const bairro = response.bairro
        const localidade = response.localidade
        const uf = response.uf
        const ibge = response.ibge
        const gia = response.gia
        const ddd = response.ddd
        const siafi = response.siafi

        
        contentHTML += `
           <tr>
                <th scope="row">${count}</th>
                <td>${cep}</td>
                <td>${logradouro}</td>
                <td>${complemento}</td>
                <td>${bairro}</td>
                <td>${localidade}</td>
                <td>${uf}</td>
                <td>${ibge}</td>
                <td>${gia}</td>
                <td>${ddd}</td>
                <td>${siafi}</td>

            </tr>
           `
        count++
        $("#tableBody").html(contentHTML)
    }).always(() => {
        $("#loader").css("display", "none")
    })
}