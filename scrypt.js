const Scores = [];
const Grade =[0,0,0,0,0,0]
let finalGrade = 0;
let total;


const inputs = document.querySelectorAll('.score');
const displayArea = document.querySelector('.display-result');
const calculatorBox = document.querySelector('.calculator-box');
const submitButton = document.querySelector('.calculate-button');
const backButton = document.querySelector('.back-button');


submitButton.addEventListener('click', () => {
    let allFilled = true; 

    
    inputs.forEach((element) => {
        if (element.value.trim() === "") {
            element.classList.add('invalid-input');  
            allFilled = false;
        } else {
            element.classList.remove('invalid-input');   
        }
    });

    
    if (allFilled) {
        processInputs();
        console.log(finalGrade);  
    
        document.querySelector('.display-area').textContent = finalGrade.toFixed(2);
        switchContent('.display-result', '.calculator-box');
    }


});

backButton.addEventListener('click', ()=> {
    switchContent('.calculator-box', '.display-result');

    inputs.forEach((e)=>{
        e.value = "";
        e.classList.remove('invalid-input');
    })
})



function switchContent(showSelector, hideSelector) {
    document.querySelector(hideSelector).classList.remove('active');
    document.querySelector(showSelector).classList.add('active');
  }

function processInputs() {
    
    Scores.length = 0;
    Grade.length= 0; 
    total = 0;
    let allFilled = true; 

    
    inputs.forEach((element) => {
        Scores.push(Number(element.value) || 0);  
    });

    
    if (!allFilled) {
        finalGrade=0;
        return;  
    }
    for(let i=0; i<Scores.length; i++){

        

        if(Scores[i]>=85){
            Grade[i] = 4;
        }
        else if(Scores[i]>=80){
            Grade[i] = 3.75;
        }
        else if(Scores[i]>=75){
            Grade[i] = 3.5;
        }
        else if(Scores[i]>=70){
            Grade[i] = 3;
        }
        else if(Scores[i]>=60){
            Grade[i] = 2.75;
        }
        else if(Scores[i]>=50){
            Grade[i] = 2 ;
        }
        else if(Scores[i]>=45){
            Grade[i] = 1.75;
        }
        else if(Scores[i]>=40){
            Grade[i] = 1;
        }
        else if(Scores[i]<=40 && Scores[i]>0){
            Grade[i] = 0;
        }
        else{
            console.log("Invalid input");
        }
    }
    for(let i=0; i<Grade.length; i++){
        switch(i){
            case 0:
                total += Grade[i] * 2;
                break;
            case 1:
                total +=Grade[i] * 3;
                break;
            case 2:
                total +=Grade[i] * 3;
                break;
            case 3:
                total +=Grade[i] * 3;
                break;
            case 4:
                total +=Grade[i] * 3;
                break;
            case 5:
                total += Grade[i] * 4;
                break
            default:
                console.log("Invalid input");
                break;
            
        }
    }
    
    finalGrade = total/18;
    
}
