const rootDiv = document.getElementById("root");


function initialize() {
    
    //creating the required html elements
    const homeContainer = document.createElement("div");
    const homeTitle = document.createElement("h1");
    const optionsDiv = document.createElement("div")

    const timerRadioContainer = document.createElement("div");
    const timerRadioButton = document.createElement("input");
    const timerLabel = document.createElement("label");

    const counterRadioContainer = document.createElement("div");
    const countRadioButton = document.createElement("input");
    const countLabel = document.createElement("label");

    //assigning classes
    homeContainer.classList.add("homeContainer");
    homeTitle.classList.add("homeTitle");
    optionsDiv.classList.add("optionsDiv")
    timerRadioContainer.classList.add("timerRadioContainer");
    timerRadioButton.classList.add("timerRadioButton");
    timerLabel.classList.add("timerLabel");
    counterRadioContainer.classList.add("countRadioContainer");
    countRadioButton.classList.add("countRadioButton");
    countLabel.classList.add("countLabel");

    //assigning values to various properties of the elements
    homeTitle.innerText = "Select an option :";
    
    timerRadioButton.type = "radio";
    timerRadioButton.value = "timer";
    timerRadioButton.name = "appchoice"
    timerRadioButton.id = "timer";
    timerLabel.htmlFor="timer";
    timerLabel.innerText = "TIMER";

    countRadioButton.type = "radio";
    countRadioButton.value = "counter";
    countRadioButton.name = "appchoice"
    countRadioButton.id = "counter";
    countLabel.htmlFor="counter";
    countLabel.innerText = "COUNTER";

    //constructing the html file
    rootDiv.appendChild(homeContainer);
    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(optionsDiv)
    optionsDiv.appendChild(timerRadioContainer);
    optionsDiv.appendChild(counterRadioContainer);
    timerRadioContainer.appendChild(timerRadioButton);
    timerRadioContainer.appendChild(timerLabel);
    counterRadioContainer.appendChild(countRadioButton);
    counterRadioContainer.appendChild(countLabel);

    //functions

    countRadioButton.addEventListener('click', ()=>{
        counter();

        const timerContainer = document.querySelector(".timerContainer");
        if(timerContainer !== null) {
            timerContainer.remove();
        }
    });

    timerRadioButton.addEventListener('click', ()=>{
        timer();

        const counterContainer = document.querySelector(".counterContainer");
        if(counterContainer !== null) {
            counterContainer.remove();
        }
    });
    
}

initialize();