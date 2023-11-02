function enviar(){
    var numeroVendedor = "+5511961805535";

    var produto = document.querySelector('.produto').value;
    var nome = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var message = document.querySelector('.message').value;
    let select = document.querySelector('#select')

    var url = "https://wa.me/" + numeroVendedor + "?text=" 
    +"Produto :" +select.value+"%0a"
    +"Nome :" +nome+"%0a"
    +"Email :" +email+"%0a"
    +"Mensagem :" +message+"%0a%0a";

    window.open(url, '_blanK').focus()
}