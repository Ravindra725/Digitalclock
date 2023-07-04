

new Set()
new Map()
let ravindra = document.getElementsByClassName("clock-item")
let changeTime = document.getElementsByClassName("one")
function clockstart(){
    let AMPM = "";
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();


    if (hrs < 12){
        changeTime[0].innerHTML = "GRAB SOME HEALTY PART"
    }
    else if(hrs > 12 && hrs <= 16){
        changeTime[0].innerHTML = "LET'S HAVE LUNCH" 
    }
    else if (hrs >= 16 && hrs <= 20){
        changeTime[0].innerHTML = "STOP YAWNING, TEA.."
    }
    else{
        changeTime[0].innerHTML = "Good Night Take Care!"
    };
    // console.log(hrs);
    // console.log(mins);
    // console.log(secs);
    if (hrs >12){
        hrs -= 12
        AMPM = "PM"
    }
    else{
        AMPM = "AM"
    };
// ..................greeting.........

    // changeTime[0].innerHTML = greeting;
    // console.log(`${hrs} : ${mins} : ${secs} : ${AMPM}`);
    // ravindra[0].innerHTML = `${hrs} : ${mins} : ${secs} : ${AMPM}`
    ravindra[0].innerHTML = `${hrs}`
    ravindra[1].innerHTML = `${mins}`
    ravindra[2].innerHTML = `${secs}`
    ravindra[3].innerHTML = `${AMPM}`
}
// clockstart();

setInterval(() => {
    clockstart();
}, 1000);

// let morningValue = document.getElementsByClassName('good1')
// let selectValue = document.querySelectorAll('select')


// function callFunction(){
//     if(selectValue.value > 12){
//         morningValue[0].innerHTML = "Good Morning!! Wake UP!"
//     }
//     else if((selectValue.value > 12) && (selectValue.valueq <= 18)){
//         morningValue[1].innerHTML = "Good afternoon!! take some sleep!"
//     }
// }


let morningTime = document.querySelectorAll('select')
let morningText = document.getElementById('good2')
let morningImg = document.getElementsByClassName('container1')
let morningUpdate = document.getElementsByClassName('para')
function callFunction(){
    let time = new Date();
    let hrs = time.getHours();
    console.log(morningTime[0]);
    console.log(morningTime[1].value);
    console.log(morningTime[2].value);
    console.log(morningTime[3].value);
    console.log(hrs);

    let indexMorning = morningTime[0].selectedIndex;
    let indexMorning1 = morningTime[1].selectedIndex;
    let indexMorning2 = morningTime[2].selectedIndex;
    let indexMorning3 = morningTime[3].selectedIndex;
    // console.log(indexMorning);
    let item = morningTime[0].options[indexMorning];
    let item1 = morningTime[1].options[indexMorning1];
    let item2 = morningTime[2].options[indexMorning1];
    let item3 = morningTime[3].options[indexMorning1];
    // console.log(item);
    morningUpdate[0].innerHTML = "Wake up Time:"+ item.textContent
    morningUpdate[1].innerHTML = "Lunch Time:"+ item1.textContent
    morningUpdate[2].innerHTML = "Nap Time:"+ item2.textContent
    morningUpdate[3].innerHTML = "Night Time:"+ item3.textContent

    // morningUpdate[0].innerHTML = morningTime[0].value
    // morningUpdate[1].innerHTML = morningTime[1].value
    // morningUpdate[2].innerHTML = morningTime[2].value
    // morningUpdate[3].innerHTML = morningTime[3].value
    // console.log(morningText)
    if(parseInt(morningTime[0].value) === hrs){
        // console.log("hi...")
        morningText.innerHTML = "Good Morning!! Wake up!";
        morningImg[0].src = "./component.png"
    }
    else if(parseInt(morningTime[1].value) === hrs){
        // console.log("hi...")
        morningText.innerHTML = "Good Afternoon!! Breakfast";
        morningImg[0].src = "./Componentt.png"
    }
    else if(parseInt(morningTime[2].value) === hrs){
        morningText.innerHTML = "Good Evening!! Ravindra"
        morningImg[0].src = "./lunch_image.png"
    }
    else if(parseInt(morningTime[3].value) === hrs){
        morningText.innerHTML = "Good Night!! sleep"
        morningImg[0].src = "./goodnight_image.png"
    }

}