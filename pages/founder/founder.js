
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

let projectsData = [
    {
        title: "BuyHomeNest",
        clientName: "GUVI",
        intro: "Real estate listing platform.",
        description: "A platform to create, list and connect with properties. Agents can communicate with users, create other agents and monitor app.",
        isGitHub: true,
        gitLink: "https://github.com/thekuvel/BuyHomeNest-Kumaravel-FrontEnd",
        isHosted: true,
        siteLink: "https://buyhomenest.netlify.app"
    },
    {
        title: "Aukdon",
        clientName: "My Website",
        intro: "Tournament and playground hosting application.",
        description: "A cloud application development company. Developing minimal reliable and scalable applications.",
        isGitHub: true,
        gitLink: "https://github.com/Aukdon/aukdon.com",
        isHosted: true,
        siteLink: "https://www.aukdon.com"
    },
    {
        title: "Game Of Domination",
        clientName: "Personal",
        intro: "Tournament and playground hosting application.",
        description: "A cloud app to host, participate in tournaments and to host and rent playgrounds and venues.",
        isGitHub: true,
        gitLink: "https://github.com/thekuvel/GOD_FrontEnd"
    },
    {
        title: "Careerda",
        clientName: "Personal",
        intro: "A b2b application.",
        description: "Single application for the airline employees to create support ticket for all third party services and applications they use.",
        isGitHub: true,
        gitLink: "https://github.com/thekuvel"
    },
    {
        title: "Requirement gathering application",
        clientName: "IBM",
        intro: "A b2b application.",
        description: "Single application for the airline employees to create configuration and issue request for the applications they use.",
        isGitHub: false,
        gitLink: "#"
    }
]

projectsCardColor = ["#E7F3F8","#FDEBEC", "#EDF3EC", "#FBF3DB"];

let projectsContainer = document.querySelector(".projectsContainer");

projectsData.map((data, index)=>{

    let siteLink = `
    <a href="${data.siteLink}" target="_blank">
        <button class="text-black border border-[#D9D9D9] rounded p-2 hover:bg-[#6946FA] hover:text-[#ffffff]">
            Site Link
        </button>
    </a>
    `
    let gitLink = `
    <a href="${data.gitLink}" target="_blank">
        <button class="text-black border border-[#D9D9D9] rounded p-2 hover:bg-[#6946FA] hover:text-[#ffffff]">
            GitHub Link --&gt
        </button>
    </a>
    `

    if(index >= projectsCardColor.length){
        index = index - projectsCardColor.length
    }

    let projectCard = `
    <div class="grid gap-5 bg-[${projectsCardColor[index]}] p-5">
       <p>${data.title} - ${data.clientName}</p>
       <p class="text-black/75">
           ${data.intro} <br>
           ${data.description}
       </p>
       <div class="grid lg:flex gap-2">
        ${data.isGitHub ? gitLink : ""}
        ${data.isHosted ? siteLink : ""}
        </div>
    </div>
    `

    projectsContainer.innerHTML+=projectCard;

 })