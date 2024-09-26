//UI

const minnum = document.querySelector('.minnumber'),
    maxnum = document.querySelector('.maxnumber'),
    getinput = document.querySelector('#guessnumber'),
    getbtn = document.querySelector('#btn'),
    message1 = document.querySelector('.message1'),
    message2 = document.querySelector('.message2'),
    getgameform = document.getElementById('gameform');

const   min = 0,
        max = 10,
        winningnum = randomnum(min,max);

let gameleft = 3;

minnum.textContent = min;
maxnum.textContent = max;

getbtn.addEventListener('click',function(e){
    // console.log("hay ia am working");
    // console.log(getinput.value);
    // console.log(typeof getinput.value);

    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    let guess = parseInt(getinput.value);

    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){
        // console.log(`Please enter Number Between ${min} to ${max}`);
        // message2.innerHTML = `Please enter Number Between ${min} to ${max}`;
        setmessage2(`Please enter Number Between ${min} to ${max}`,"red");     
    }

    if(guess === winningnum){
        // Gameover Won 
        // console.log("You Won");

        // disabled getinput 
        getinput.disabled = true;    //Attribute ko direct lan khon lo ya tal 

        // getinput border color to green 
        // getinput.style.borderColor = "green";

        //Message1
            // message1.textContent = `Game Over!! You Won , The correct number is ${winningnum}`;
            // message1.style.color = "green";

        setmessage1(`${winningnum} is correct !! You Won`,"green");

        // Play Again
        // getbtn.value = "Play Again";

        // gameover(true,`${winningnum} is correct !! You Won`);

    }else{

        // gameleft--;
        gameleft -= 1;

        // console.log(gameleft);

        if(gameleft === 0){
            // Game Over Lost 

        // console.log("You Lose");

        // disabled getinput
        // getinput.disabled = true;

        // getinput border color to red 
        // getinput.style.borderColor = "red";

        //Message1
            // message1.textContent = `Game Over!! You Lose , The correct number is ${winningnum}`;
            // message1.style.color = "red";
        setmessage1(`Game Over!! You Lose , The correct number is ${winningnum}`,"red");

        //play again? 
        // getbtn.value = "Play again?";

        // gameover(false,`Game Over!! You Lose , The correct number is ${winningnum}`);


        }else{
            // Continue Game 
    
            // getinput border color to red
            getinput.style.borderColor = "red";
    
            //Message1
            // message1.textContent = `${guess} is not correct! ${gameleft} guess left`;
            // message1.style.color = "blue";
            setmessage1(`${guess} is not correct! ${gameleft} guess left`,"blue");
    
            // clear getinput old value 
            getinput.value = "";
    
            // auto focus getinput 
            getinput.focus();
    
            gameover(false,`${guess} is not correct! ${gameleft} guess left`);
            
        }

    }

    e.preventDefault();
});

function setmessage1(msg,color){
    message1.textContent =msg;
    message1.style.color = color;
}


function setmessage2(msg,color){
    message2.textContent =msg;
    message2.style.color = color;

    setTimeout(function(){
        message2.textContent = "";  //set timeout ka 1 kha work pe pyan thwin mar 
    },2000);
}


function gameover(won,msg){
    let color;

    won === true ? color = "green" : color = "red";

    // disabled getinput 
    getinput.disabled = true;

    // getinput border color to red 
    getinput.style.borderColor = color;

    //message 
    setmessage1(msg,color);
    // message1.textContent = `Game Over!! You Lose , The correct number is ${winningnum}`;
    // message1.style.color = color;


    // Play Again
    getbtn.value = "Play Again";

    // Add Class 
    // getbtn.className = "btn playagain";  //A hown pr pyan yay chin yin classlist thone
    getbtn.classList.add("playagain");      //A hown pyan ma yay chin yin classlist thone
}



//A nu sate tal 
//phe pe kyua like tat a chain ma work mal mosuedown ka
getgameform.addEventListener('mousepress',function(e){
    // console.log(e.target);

    // e.target.classList.contains("playagain")
    if(e.target.className === "btn playagain"){
        // console.log("I am working");

        window.location.reload();
    }
});

function randomnum(min,max){
    let getrdm = Math.floor(Math.random()*(max-min)+min);
    return getrdm;
}
console.log(randomnum(1,10));
console.log(randomnum(min,max));