//nome
let value_nome = document.querySelector('#nome');
value_nome.addEventListener("keydown", function(e) {  
if (e.key > "0" && e.key < "9") { e.preventDefault(); }});
//cpf
let value_cpf = document.querySelector('#campo_cpf');  
value_cpf.addEventListener("keydown", function(e) {
if (e.key > "a" && e.key < "z") { e.preventDefault();}});

value_cpf.addEventListener("blur", function(e) {
//Remove tudo o que não é dígito
let validar_cpf = this.value.replace( /\D/g , "");

//verificação da quantidade números
if (validar_cpf.length==11){

// verificação de CPF valido
var Soma;
var Resto;

Soma = 0;
for (i=1; i<=9; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

if ((Resto == 10) || (Resto == 11))  Resto = 0;
if (Resto != parseInt(validar_cpf.substring(9, 10)) ) return alert("CPF Inválido!");;

Soma = 0;
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (12 - i);
Resto = (Soma * 10) % 11;

if ((Resto == 10) || (Resto == 11))  Resto = 0;
if (Resto != parseInt(validar_cpf.substring(10, 11) ) ) return alert("CPF Inválido!");;

} else {alert("CPF Inválido! É esperado 11 dígitos numéricos.")}}) 
//celular
let value_celular = document.querySelector('#celular');  
value_celular.addEventListener("keydown", function(e) {
if (e.key > "a" && e.key < "z") { e.preventDefault();}});
//sugestoes
let value_sugestoes = document.querySelector('#sugestoes');
value_sugestoes.addEventListener("keydown", function(e) {  
if (e.key > "0" && e.key < "9") { e.preventDefault(); }});

