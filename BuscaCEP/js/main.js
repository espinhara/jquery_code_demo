//initialize value cep
var cep = "";
//function get change input 
function chnageInput(e) {
    console.log(e.value.toString())
    const str = e.value.length
    console.log(str)
    if (str == 8) {
        cep = e.value
        console.log(cep)
        $("#btnConsult").show()
    }

}
//set index table 
let count = 1
//initialize content table 
var contentHTML = "";
//url api
let urlCep = `https://viacep.com.br/ws/`;
function consultaCep() {
    $("#loader").show();
    $.ajax({
        url: urlCep + `${cep}/json/`,
        type: "GET",
        contentType: "application/json: charset=utf-8",
        dataType: "json",
    }).done((response) => {
        //get properties 
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

        //set body table
        contentHTML += `
           <tr id="count${count}">
                <th id="countIndex${count}" scope="row">${count}</th>
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
        
        
            $("#tableBody").html(contentHTML)
            count++

        console.log(count)
    }).always(() => {
        //clean table
        if (count == 10) {
           window.location.reload()
        }
        //stop loading
        $("#loader").hide()
    })
}

