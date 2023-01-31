function counter() {
    let count = 0;

    //creating the required html elements
    const counterContainer = document.createElement("div");
    const counterTitle = document.createElement("h1");
    const counterValue = document.createElement("p");
    const counterButtonContainer = document.createElement("div");
    const incButton = document.createElement("button");
    const decButton = document.createElement("button");

    //assigning classes
    counterContainer.classList.add("counterContainer");
    counterTitle.classList.add("counterTitle");
    counterValue.classList.add("counterValue");
    counterButtonContainer.classList.add("counterButtonContainer");
    incButton.classList.add("incButton");
    decButton.classList.add("decButton");

    //assigning values to various properties of the elements
    counterTitle.innerText = "COUNTER";
    counterValue.innerText = "0";
    incButton.innerText = "+";
    decButton.innerText = "-";

    //constructing the html
    rootDiv.appendChild(counterContainer);
    counterContainer.appendChild(counterTitle);
    counterContainer.appendChild(counterValue);
    counterContainer.appendChild(counterButtonContainer);
    counterButtonContainer.appendChild(incButton);
    counterButtonContainer.appendChild(decButton);

    //functions
    incButton.addEventListener('click', ()=>{
        counterValue.innerText = ++count;
    });
    decButton.addEventListener('click', ()=>{
        counterValue.innerText = --count;
    })
}