
let slide = document.querySelector("#slide");
const button = document.querySelector("#button");
let tamanhoSenha = document.querySelector("#valor");
let password = document.querySelector("#password"); 
const containerPass = document.querySelector("#container-pass"); //const porque o valor não muda
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //const porque o valor não muda
let novaSenha = "";

//Mostrar o valor fixo (15) logo no inicio
tamanhoSenha.innerHTML = slide.value; 


//Função usada para mostrar o valor que esta atualmento no slide, quando o slide é ativado.
slide.oninput = function(){ 
    
    tamanhoSenha.innerHTML = this.value;
}

//FUNÇÃO PARA GERAR SENHA AO CLIQUE DO BOTÃO

function gerarSenha(){
    let senha = "";
    for(let i=0, n = caracteres.length; i < slide.value; i++){
        senha += caracteres.charAt(Math.floor(Math.random() * n)); 
        /*charAt() = pega uma posição na string, definida dentro dos parenteses; 
        Math.floor() = retorna o menor numero inteiro dentro de um numero (x); 
        Math.random() = gera um numero aleatorio. */
    }

    containerPass.classList.remove("hide"); //Remove a classe hide, quando a função é chamada
    password.innerHTML = senha;
    novaSenha = senha;
}

//FUNÇÃO PARA COPIAR A SENHA

function copiaSenha (){
    
    navigator.clipboard.writeText(novaSenha); 
    //Copia o que estiver dentro da variavel novaSenha
    alert('Senha copiada com sucesso!');
}