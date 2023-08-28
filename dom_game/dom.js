/*function subscribeButton(){
    const buttonElement= document.querySelector('.js-subscribe-button');
    if(buttonElement.innerText=== 'Subscribe'){
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    }
    else{
        buttonElement.innerText= 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
        
    }
} 

function calculateTotal(){
    const getInput=document.querySelector('.input-calculate');
    
    
    let value_input = Number(getInput.value);
    
    if(value_input < 40)
        value_input= value_input +10;
    
        document.querySelector('.show_total').innerHTML=`$${value_input}`;
}
function inputCostKeyDown(event){
        if(event.key==='Enter'){
            calculateTotal();
        }
}

*/

function pickComputerMove(){
    let computerChooseButton= ['paper','rock','scissors']; 
    let numero=Math.floor(Math.random() * computerChooseButton.length);
    let numeroAleatorio= computerChooseButton[numero];


    return numeroAleatorio;
    
}

let score = {
    wins:0,
    losses:0,
    ties:0
}
function show_score(result){
    
    if(result ==='tied'){
        score.ties+=1;
    }
    else if(result === 'you won'){
        score.wins+=1;
    }
    else if(result === 'you loss'){
        score.losses+=1;
    }
    return score;

}

function result (playerMove){
   
    let jsMoves=document.querySelector('.js-moves');

    let computerMove = pickComputerMove();



    jsMoves.innerHTML= `You
    <img src="images/${playerMove}.jpg" style="margin-left:15px; margin-right:15px;">
    Computer
    <img src="images/${computerMove}.jpg" style="margin-left:15px; margin-right:15px;">
    `
    if(playerMove===computerMove){
        return 'tied'
    } else if((playerMove === 'rock' && computerMove === 'scissors') || 
             (playerMove === 'scissors' && computerMove ==='paper') ||
             (playerMove === 'paper' && computerMove === 'rock')) {
        return 'you won'
    }  else {
        return 'you loss';
    }
  
}
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    
    // Atualiza a exibição dos scores
    document.querySelector('.wins').innerText = score.wins;
    document.querySelector('.losses').innerText = score.losses;
    document.querySelector('.ties').innerText = score.ties;
}

function startGame(playerMove){
    let resultado= result(playerMove);
    let gameScore=show_score(resultado);
    
    

    let showWins=document.querySelector('.wins');
    let showLosses=document.querySelector('.losses');
    let showTies=document.querySelector('.ties');
    
    let buttonReset=document.querySelector('.reset_score')
    let showResult=document.querySelector(".resultado_partida");
    
    

    //se eu setar um objeto dentro de uma varaivel, consigo acessar esse objeto pois ele vai ser a variavel

    showWins.innerText=gameScore.wins;
    showLosses.innerText=gameScore.losses;
    showTies.innerText=gameScore.ties;


    if(resultado ==='you won'){
        showResult.innerText=('you win');
        
    }
    else if(resultado ==='you loss'){
        showResult.innerText=('you loss')
    }
    else if(resultado ==='tied'){
        showResult.innerText=('tied')
    }
   
    buttonReset.addEventListener('click', resetScore);
    

    
} 

