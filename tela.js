var senha = 123456;
var input = document.querySelector("password");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function senhaacesso() {
        if(password.value == senha) {  
            
            alert('Acesso Aprovado!')
            
            for ( var i = 0; i < 101; i += 10) {
                document.write('Loading ' + [i] +'% ... <br/>')
                await sleep(2000);
            };
            document.write('Hackeado com Sucesso!')
            await sleep(2000);
            window.location = "https://www.youtube.com/";
        } else {
            alert('Acesso Negado!')
        }
    }

var button = document.querySelector("button");

button.onclick = senhaacesso;