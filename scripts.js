$(document).ready(function() {
    $('#novo-usuario').click(function() {
        $('#formulario-login').hide();
        $('#formulario-cadastro').show();
    });
    
    $('#usuario-cadastrado').click(function() {
        $('#formulario-cadastro').hide();
        $('#formulario-login').show();
    });
    
    $('#cadastro-form').submit(function(event) {
        var nome = $('#nome').val();
        var cep = $('#cep').val();
        var email = $('#email-cadastro').val();
        var senha = $('#senha-cadastro').val();
        
        if (nome === "" || cep === "" || email === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        }
    });
    
    $('#login-form').submit(function(event) {
        var email = $('#email-login').val();
        var senha = $('#senha-login').val();
        
        if (email === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        }
    });
});