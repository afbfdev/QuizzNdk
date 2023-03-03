const form = document.querySelector('.formQuiz');
let getDataArray = [];
let answerQuestion = ['b','a','b','c','b'];
let checkResult = [];
let titleResult = document.querySelector('.results h2');
let titleHelp = document.querySelector('.help');
let titleRate = document.querySelector('.rate');
let emojis = ['✔️','✨','👀','😭','👎'];
let allQuestion = document.querySelectorAll('.question');



form.addEventListener("submit", (e) => {
    e.preventDefault();
    for(i = 1; i < 6; i++){
    getDataArray.push(document.querySelector(`input[name="qst${i}"]:checked`).value);  
}
console.log(getDataArray);
checkArrays(getDataArray);
getDataArray = []; 

});

function checkArrays(tabCheck) {
    for(a = 0; a < 5; a++) {
        if (tabCheck[a] === answerQuestion[a]) {
            checkResult.push(true);
        } else {
            checkResult.push(false);
        }
    }

    console.log(checkResult);
    displayResult(checkResult)
    setColor(checkResult)
    checkResult = [];
}

function displayResult(checkTab){
    const numberKo = checkTab.filter(el => el !== true).length;
    console.log(numberKo);

        switch (numberKo) {
            case 0:
                titleResult.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
                titleHelp.innerText = "";
                titleRate.innerText = "5/5";
                break;

                case 1:
                    titleResult.innerText = `✨ Vous y êtes presque ! ✨`
                    titleHelp.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
                    titleRate.innerText = '4/5'
                    break;

                case 2:
                    titleResult.innerText = `✨ Encore un effort ... 👀`
                    titleHelp.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
                    titleRate.innerText = '3/5'
                    break;

                case 3:
                    titleResult.innerText = `👀 Il reste quelques erreurs. 😭`
                    titleHelp.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
                    titleRate.innerText = '2/5'
                    break;

                case 4:
                    titleResult.innerText = `😭 Peux mieux faire ! 😭`
                    titleHelp.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
                    titleRate.innerText = '1/5'
                    break;
                    
                case 5:
                    titleResult.innerText = `👎 Peux mieux faire ! 👎`
                    titleHelp.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
                    titleRate.innerText = '0/5'
                break;
        
                default:
                    'Wops, cas innatendu.';
        }
};

function setColor(myColor){
    for (let k = 0; k < myColor.length; k++) {
          if(myColor[k] === true ) {
            allQuestion[k].style.background = "lightgreen";
          }else {
            allQuestion[k].style.background = "#eb112f";
            allQuestion[k].classList.add('failed');

            setTimeout(() => {
                allQuestion[k].classList.remove('failed');
            }, 500)

          }         
        
    }
};

allQuestion.forEach(item => {
    item.addEventListener("click", () => {
        item.style.background = "white";
    })
})