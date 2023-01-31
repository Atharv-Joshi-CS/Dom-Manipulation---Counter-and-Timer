function timer() {

    //declaration and initialization
    let hour = 0;
    let minute = 0;
    let second = 0;
    let ms = 0;
    let timer = null;
    let hrStr = "00";
    let minStr = "00";
    let secStr = "00";
    let msStr = "000";

    let timeFormat = `${hrStr}<span>hr</span>:${minStr}<span>min</span>:${secStr}<span>sec</span>:${msStr}<span>ms</span>`;
    
    //creating html elements
    const timerContainer = document.createElement("div");
    const timerTitle = document.createElement("h1");
    const timerValue = document.createElement("p");
    const timerButtonContainer = document.createElement("div");
    const resetButton = document.createElement("button");
    const startButton = document.createElement("button");
    const pauseButton = document.createElement("button");


    //assigning classes
    timerContainer.classList.add("timerContainer");
    timerTitle.classList.add("timerTitle");
    timerValue.classList.add("timerValue");
    timerButtonContainer.classList.add("timerButtonContainer");
    resetButton.classList.add("resetButton");
    startButton.classList.add("startButton");
    pauseButton.classList.add("pauseButton");

    //assigning values to various properties of the elements
    timerTitle.innerText = "TIMER";
    timerValue.innerHTML = timeFormat;
    resetButton.innerText = "Reset";
    startButton.innerText = "Start";
    pauseButton.innerText = "Pause";

    //constructing the html
    rootDiv.appendChild(timerContainer);
    timerContainer.appendChild(timerTitle);
    timerContainer.appendChild(timerValue);
    timerContainer.appendChild(timerButtonContainer);
    timerButtonContainer.appendChild(resetButton);
    timerButtonContainer.appendChild(startButton);
    timerButtonContainer.appendChild(pauseButton);

    //functions
    function calculateTime() {
        ms += 10;
        if(ms == 1000) {
            ms = 0;
            second++;
            if(second == 60) {
                second = 0;
                ms = 0
                minute++;
                if(minute == 60) {
                    second = 0;
                    ms = 0
                    minute = 0;
                    hour++;
                }
            }
        }

        hrStr = (hour < 10) ? "0"+hour : hour;
        minStr = (minute < 10) ? "0"+minute : minute;
        secStr = (second < 10) ? "0"+second : second;
        msStr = ""
        if(ms < 10) {
            msStr = "00" + ms;
        }
        else if(ms < 100){
            msStr = "0" + ms;
        }
        else {
            msStr = ms;
        }
        timerValue.innerHTML = `${hrStr}<span>hr</span>:${minStr}<span>min</span>:${secStr}<span>sec</span>:${msStr}<span>ms</span>`;
    }
    startButton.addEventListener('click', ()=>{
        if(timer !== null) {
            return;
        }
        timer = setInterval(calculateTime, 10); //call display timer after each millisecond
    });

    pauseButton.addEventListener('click', ()=> {
        clearInterval(timer);
        timer = null;
    })

    resetButton.addEventListener('click', ()=>{
        clearInterval(timer);
        timer = null;
        hrStr = "00";
        minStr = "00";
        secStr = "00";
        msStr = "000";
        timerValue.innerHTML = timeFormat;
        ms = 0;
        second = 0;
        minute = 0;
        hour = 0;
    })
}