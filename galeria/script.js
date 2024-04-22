function login() {
    var fullname = document.getElementById('fullname').value;
    var cpf = document.getElementById('cpf').value;
    var password = document.getElementById('password').value;

    // Verifica se os campos estão preenchidos corretamente
    if (fullname === "Marcelo Henrique De Souza Reina" && cpf === "51014705894" && password === "18022023") {
        // Redireciona para a página da galeria
        window.location.href = "galeria.html";
    } else {
        alert("Por favor, preencha os campos corretamente.");
    }
}
