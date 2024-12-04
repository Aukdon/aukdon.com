
let sliderCopy = document.querySelector(".slider").cloneNode(true);

let sliderContainer = document.querySelector(".sliderContainer");

sliderContainer.appendChild(sliderCopy);

let dropDownCards = document.querySelectorAll(".dropDownCard");


dropDownCards.forEach(card=>{
    card.addEventListener("click",()=>{
        
        let dropDownElement = card.querySelector(".dropDownElement"); 
        if(dropDownElement.classList.contains("block")){
            dropDownElement.classList.replace("block", "hidden")
        }else{
            dropDownElement.classList.replace("hidden", "block")
        }
        
    })
})
