console.log("working");
let instruction_button = document.getElementById("instructions-button");

let instruction_page = document.getElementById("instructions");

instruction_button.addEventListener("click", () => {
    if(instruction_page.style.display == "flex"){
        instruction_page.style.display = "none";
    }else if(instruction_page.style.display = "none"){
        instruction_page.style.display = "flex";
    }
})