cardColor = ["#E7F3F8","#FDEBEC", "#EDF3EC", "#FBF3DB"];

let careerCardContainer = document.querySelector(".careerCardContainer");

let careerData = [
    {
        title: "Full Stack Developer - Intern",
        description: "A MERN full stack developer. Willing to learn and work on several products.",
        preference: "FSD certification (Not madatory), JavaScript basics, React basics, Node basics and AWS (Not mandatory).",
        workTime: "Full time (4-7hrs per day)",
        location: "Remote",
        salary: "5000/month"
    },
    {
        title: "Full Stack Developer - Intern",
        description: "A MERN full stack developer. Willing to learn and work on several products.",
        preference: "FSD certification (Not madatory), JavaScript basics, React basics, Node basics and AWS (Not mandatory).",
        workTime: "Full time (4-7hrs per day)",
        location: "Remote",
        salary: "5000/month"
    }
]

careerData.map((data,index) => {
    
    if(index >= cardColor.length){
        index = index - cardColor.length
    }

    let careerCard = `
    <div class="bg-[${cardColor[index]}] p-5 grid gap-2">
        <h3 class="font-semibold">${data.title}</h3>
        <p class="font-medium">Description:</p>
        <p>${data.description}</p>
        <p class="font-medium">Preference:</p>
        <p>${data.preference}</p>
        <div class="flex justify-between">
            <p class="font-medium">Work time: ${data.workTime}</p>
            <p class="font-medium">Location: ${data.location}</p>
            <p class="font-medium">Salary: ${data.salary}</p>
        </div>
    </div>
    `
    careerCardContainer.innerHTML += careerCard
})