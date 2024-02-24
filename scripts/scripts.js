function nextPage(){
    const homeSectionRemove = document.getElementById('home-section')
    homeSectionRemove.classList.add('hidden');
    const playFieldAdd = document.getElementById('playGround');
    playFieldAdd.classList.remove('hidden');
newgame();
keyPress();

}
function newgame(){
const allAlphabetsString = "abcdefghijklmnopqrstuvwxyz";
const allAlphabets = allAlphabetsString.split('');
const alphabets = Math.random(allAlphabets)*25
const alphabet = Math.round(alphabets)
const index = allAlphabets[alphabet]
const newAlphabet =  document.getElementById('show-alphabet')
newAlphabet.innerText = index;
alphabetColor(index);
}


function alphabetColor (elementId){
    const element = document.getElementById(elementId)
   element.classList.add('bg-orange-400')
     
}
function removeBgColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

function keyPress(event){
const playerPressed = event.key;
const currentAlphabetElement = document.getElementById('show-alphabet')
const currentAlphabet = currentAlphabetElement.innerText;
if(playerPressed === currentAlphabet){
    const currentScoreElement = document.getElementById('newScore');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText)
    console.log(currentScore);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore
    removeBgColor(currentAlphabet);
    newgame();
}
else{
    console.log("you are not correct key clicked");
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const newLife = currentLife - 1 ;
    currentLifeElement.innerText = newLife;
    if(newLife === 0){
        const playGroundField = document.getElementById('playGround');
    playGroundField.classList.add('hidden');
    const finalScoredAdd = document.getElementById('final-score');
    finalScoredAdd.classList.remove('hidden');
    
    }
    
}
}
document.addEventListener("keyup", keyPress)

function playAgain(){
    const closeScrore = document.getElementById('final-score');
    closeScrore.classList.add('hidden')
    setTextElementValueById('current-life', 5)
    setTextElementValueById('newScore', 0)
    
    nextPage()
    const lastScore = getElementById('newScore')
    const finalScore = lastScore.value;
    setTextElementValueById('last-score', finalScore)


}


function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}