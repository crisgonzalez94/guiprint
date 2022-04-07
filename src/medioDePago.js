let btnCopy = document.getElementsByClassName('btnCopy');

let copyInputFormContent = (inputForm , content) => {

    for (const btnIndex in btnCopy) {
        btnCopy[btnIndex].innerHTML = "Copiar";
    }

    document.getElementById(inputForm).innerHTML = "Copiado";
    navigator.clipboard.writeText(content);

}