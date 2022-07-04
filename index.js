let numeroSorteado = gerarNumero()

function gerarNumero(min=1, max=21) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function resetPage(){
  window.location.reload()
}

function createButtons(){
  
  for (let index = 1; index <= 20; index++) { 
  let htmlButton = document.createElement('button');
    
    htmlButton.className = `custom-btn btn-1 btnID-${index}`;
    htmlButton.innerHTML = index;
    htmlButton.onclick = (function(event){return function (){clickButton(index)}})(event);
    htmlButton.setAttribute('data-button', index);
  
  let selectElementPai = document.querySelector('#total');
    selectElementPai.appendChild(htmlButton);

  }
}

function clickButton(button){
  let buttonSorteado = document.querySelector(`.btnID-${button}`)
  if (numeroSorteado == button) {
  
    buttonSorteado.className = 'custom-btn btn-1 botao-sorteado'

    let botoesErrados = document.querySelectorAll(`.btn-1`);

    botoesErrados.forEach(element => {
      element.setAttribute('disabled', true) 
   });
  }
  else{
    buttonSorteado.className = 'custom-btn btn-1 botao-errado'


  }


}
createButtons()

