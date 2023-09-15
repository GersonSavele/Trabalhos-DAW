const form = document.querySelector("#formulario");
const nameInput = document.querySelector("#nome");
const ErrorName = document.querySelector("#error_nome");
const Idade = document.querySelector("#idade");
const errorIdade = document.querySelector("#error_idade");
const Email = document.querySelector("#email");
const ErrorEmail = document.querySelector("#error_email");
const Password = document.querySelector("#password");
const ErrorPassword = document.querySelector("#error_password");
const Celular = document.querySelector("#celular");
const errorCelular = document.querySelector("#error_celular");
const terms = document.querySelector("#termsAceitos");
const errorTerms = document.querySelector("#error_terms");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //validar nome
    if (nameInput.value === "") {
        alert("Por favor Insira seu nome");
        return;
    } else if (nameInput.value.length < 3) {
        ErrorName.style.display = "block";
        return;
    }

    //validar idade
    if (Idade.value < 18 || Idade.value > 34) {
        errorIdade.style.display = "block";
        return;
    }
    //validar email
    if (!Email.value.includes("@")) {
        ErrorEmail.style.display = "block";
        return;
    }
    //validar password
    const hasUpperCase = /[A-Z]/.test(Password);
    const hasLowerCase = /[a-z]/.test(Password);
    if (Password.value.length < 8 || !(hasUpperCase && hasLowerCase)) {
        ErrorPassword.style.display = "block";
        return;
    }
    //validar numero de telefone
    if (!/^\d+$/.test(Celular.value)) {
        errorCelular.style.display = "block";
        return;
    }
    //aceitar termos e condicoes
    const termsAceitos = document.getElementById("terms").checked;
    if (!termsAceitos.value) {
        errorTerms.style.display = "block";
        alert("Você deve aceitar os termos e condições.");
    }
});