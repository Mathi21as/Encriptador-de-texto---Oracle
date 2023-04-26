//la variable stateFooter la uso como estado para evitar que el footer se encripte una y otra vez
let stateFooter = 0; // 0 significa que no esta encriptado

function showMessageFound(){
    let messageFound = document.getElementsByClassName("message-found");
    let notMessage = document.getElementsByClassName("not-message");

    messageFound[0].style.display = "initial";
    notMessage[0].style.display = "none";
}

function hiddenMessageFound(){
    let messageFound = document.getElementsByClassName("message-found");
    let notMessage = document.getElementsByClassName("not-message");

    notMessage[0].style.display = "initial";
    messageFound[0].style.display = "none";
}

function encriptar(){
    const regex = /e/g;
    const regex1 = /i/g;
    const regex2 = /a/g;
    const regex3 = /o/g;
    const regex4 = /u/g;
    let textToEncrip = document.getElementsByTagName("textarea");
    textToEncrip[1].value = textToEncrip[0].value.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")  //quita acentos
        .replace(regex, "enter")
        .replace(regex1, "imes")
        .replace(regex2, "ai")
        .replace(regex3, "ober")
        .replace(regex4, "ufat");
    
    if(stateFooter == 0){
        let footerText = document.getElementsByTagName("footer");
        footerText[0].children[0].innerHTML = footerText[0].children[0].innerHTML
            .replace(regex, "enter")
            .replace(regex1, "imes")
            .replace(regex2, "ai")
            .replace(regex3, "ober")
            .replace(regex4, "ufat");
        stateFooter = 1;
    }

    if(textToEncrip[0].value != ""){
        showMessageFound();
    }
    else{
        hiddenMessageFound();
    }

}

function desencriptar(){
    const regex = /enter/g;
    const regex1 = /imes/g;
    const regex2 = /ai/g;
    const regex3 = /ober/g;
    const regex4 = /ufat/g;
    let textToEncrip = document.getElementsByTagName("textarea");
    textToEncrip[1].value = textToEncrip[0].value.toLowerCase()
        .replace(regex, "e")
        .replace(regex1, "i")
        .replace(regex2, "a")
        .replace(regex3, "o")
        .replace(regex4, "u");
    
    if(stateFooter == 1){
        let footerText = document.getElementsByTagName("footer");
        footerText[0].children[0].innerHTML = footerText[0].children[0].innerHTML
            .replace(regex, "e")
            .replace(regex1, "i")
            .replace(regex2, "a")
            .replace(regex3, "o")
            .replace(regex4, "u");
        stateFooter = 0;
    }

    if(textToEncrip[0].value != ""){
        showMessageFound();
    }
    else{
        hiddenMessageFound();
    }
}

function copyToClipBoard(){
    let textToCopy = document.getElementsByTagName("textarea");
    navigator.clipboard.writeText(textToCopy[1].value);
}

function clea(){
    let allTextarea = document.getElementsByTagName("textarea");
    
    for(let i=0; i<allTextarea.length; i++){
        allTextarea[i].value = "";
    }
    hiddenMessageFound();
}
