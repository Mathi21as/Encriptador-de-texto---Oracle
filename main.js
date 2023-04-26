function load(){
    if (window.screen.width > 1023){
        document.body.innerHTML = `
        <span>a</span>
        <div class="input-side">
            <textarea cols="30" rows="10"  placeholder="Ingrese el texto aqui"></textarea>
            <div class="information-text">
                <img src="./resources/images/information-icon.png" alt="information icon">
                <p>Solo letras minusculas y sin acento</p>
            </div>
            <button onclick="encriptar()">Encriptar</button>
            <button onclick="desencriptar()">Desencriptar</button>
            <button onclick="clea()">Borrar</button>
        </div>
    
        <div class="output-side">
            <div class="not-message">
                <img src="./resources/images/Muñeco.png" alt="message not found image">
                <p>Ningún mensaje fue encontrado</p>
                <p>Ingrese el texto que desees encriptar o desencriptar.</p>
            </div>
        
            <div class="message-found">
                <textarea cols="30" rows="10" readonly></textarea>
                <button onclick="copyToClipBoard()">Copiar</button>
            </div>
        </div>
        <footer>
            <p>Desarrollado por Mathias Ledesma</p>
            <div>
                <a href="https://github.com/Mathi21as/Encriptador-de-texto---Oracle" target="_blank" rel="noreferrer">
                    <img src="./resources/images/github-sign.png" alt="github image"></img>
                </a>
                <a href="https://www.linkedin.com/in/mathias-ledesma-9a6b62212" target="_blank" rel="noreferrer">
                    <img src="./resources/images/linkedin-logo.png" alt="linkedin image"></img>
                </a>
            </div>
        </footer>
        `
    }
    else{
        document.body.innerHTML = `
        <span><p>a</p></span>
        <div class="input-side">
            <textarea cols="30" rows="10" placeholder="Ingrese el texto aqui"></textarea>
            <div class="information-text">
                <img src="./resources/images/information-icon.png" alt="information icon">
                <p>Solo letras minusculas y sin acento</p>
            </div>
                <button onclick="encriptar()">Encriptar</button>
                <button onclick="desencriptar()">Desencriptar</button>
                <button onclick="clea()">Borrar</button>
        </div>
    
        <div class="output-side">
            <div class="not-message">
                <p>Ningún mensaje fue encontrado</p>
                <p>Ingrese el texto que desees encriptar o desencriptar.</p>
            </div>
        
            <div class="message-found">
                <textarea cols="30" rows="10" readonly></textarea>
                <button onclick="copyToClipBoard()">Copiar</button>
            </div>
        </div>
        
        <footer>
            <p>Desarrollado por Mathias Ledesma</p>
            <div>
                <a href="https://github.com/Mathi21as/Encriptador-de-texto---Oracle" target="_blank" rel="noreferrer">
                    <img src="./resources/images/github-sign.png" alt="github image"></img>
                </a>
                <a href="https://www.linkedin.com/in/mathias-ledesma-9a6b62212" target="_blank" rel="noreferrer">
                    <img src="./resources/images/linkedin-logo.png" alt="linkedin image"></img>
                </a>
            </div>
        </footer>
        `
    }

    let div_message = document.getElementsByClassName("message-found");
    div_message[0].style.display = "none";

    //alert(window.screen.height)
}
