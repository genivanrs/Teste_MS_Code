const inputs = document.querySelectorAll('input');

const handleFocus = ({target}) => {   }

const handleFocusOut = ({target}) => {  }

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=Nome]').value;
    const email = document.querySelector('input[name=E-mail]').value;
    fetch('https://api.sheetmonkey.io/form/gs2ff8Yuc2CmQGEwK9W1MN', {
        method:'post',
        headers:{
            'accept': 'application/json', 
            'content-Type': 'application/jason',
        },
        body: JSON.stringify({name, email })
    });
    /*alert('enviando o formulario....')*/
}
document.querySelector('form').addEventListener('submit', handleSubmit);