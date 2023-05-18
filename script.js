// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");
const emailHelper = document.getElementById("email-helper");

const idadeInput = document.getElementById("idade");
const idadeLabel = document.getElementById("idadeLabel");
const idadeHelper = document.getElementById("idade-helper");

const senhaInput = document.getElementById("senha");
const senhaLabel = document.getElementById("senhaLabel");
const senhaHelper = document.getElementById("senha-helper")

const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.getElementById("confirma-senha-label");
const confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

const enviar = document.getElementById("enviar")

 //chamar essa função p/ todos os inputs e validar os outros campos idade senha e confirmar senha
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", ()=> {
    label.classList.add("required-popup")
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", ()=> {
    label.classList.remove("required-popup")
    })

}

togglePopup(usernameInput, usernameLabel)
togglePopup(emailInput, emailLabel);

// Validar valor do input username
usernameInput.addEventListener("input", (event)=>{ //foi usado o change as mudanças acontecem quando o usuário termina de digitar e tira o foco desse input
    const value = event.target.value;
    
    if(value.length <= 3){
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "O username precisa ter mais de 3 caracteres";
        usernameHelper.classList.add("visible");
    } else{
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
    }
})

// Validar valor do input email

emailInput.addEventListener("input", (event)=>{
    const value = event.target.value;
    
    if(value.includes("@") && value.includes(".com")){
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible")
    }else{
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "O email precisa incluir um @ e .com"
        emailHelper.classList.add("visible")
    }
})

idadeInput.addEventListener("input", (event)=>{
    const value = event.target.value;

    if (value == "" || value < 18) {
        idadeInput.classList.remove("correct")
        idadeInput.classList.add("error");
        idadeHelper.innerText = "Para realizar o cadastro é necessário idade mínima de 18 anos";
        idadeHelper.classList.add("visible");
    } else {
        idadeInput.classList.remove("error");
        idadeInput.classList.add("correct");
        idadeHelper.classList.remove("visible");
    }
})

senhaInput.addEventListener("input", (event)=>{
    const value = event.target.value;

    if(value.length < 6){
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error")
        senhaHelper.innerText = "A senha deve conter, ao menos, 6 caracteres."
        senhaHelper.classList.add("visible");
    }else{
        senhaInput.classList.remove("error");
        senhaInput.classList.add("correct");
        senhaHelper.classList.remove("visible");
    }
})

confirmaSenhaInput.addEventListener("input", (event)=>{
    const value = event.target.value;

    if (value == senhaInput.value) {
        confirmaSenhaInput.classList.remove("error");
        confirmaSenhaInput.classList.add("correct");
        confirmaSenhaHelper.classList.remove("visible");
    } else {
        confirmaSenhaInput.classList.remove("correct")
        confirmaSenhaInput.classList.add("error");
        confirmaSenhaHelper.innerText = "A Senha e a confirmação de senha precisam coincidir."
        confirmaSenhaHelper.classList.add("visible")
    }
})

enviar.addEventListener("click", ()=>
    alert(`Usuário ${usernameInput.value} cadastrado com sucesso! Por favor, verifique seu email ${emailInput.value}`)
)