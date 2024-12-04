
let companyDropDown = document.querySelector("#companyDropDown");
let companyDropDownList = document.querySelector(".companyDropDownList");
companyDropDown.addEventListener("click", ()=>{
    
    if(companyDropDownList.classList.contains("hidden")){
        companyDropDownList.classList.replace("hidden", "block")
    }else{
        companyDropDownList.classList.replace("block", "hidden")
    }

})