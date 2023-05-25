const addForm = document.querySelector(".card");
const overlaycover = document.querySelector(".overlay");
const container = document.querySelector(".form-container");
const remove = document.querySelector(".times")



document.addEventListener("DOMContentLoaded", ()=>{

    addForm.addEventListener("click", addModal);
    overlaycover.addEventListener("click", removeModal);
    container.addEventListener("click", removeModal);

   
    
})
function addModal () {
    console.log("clicked");
    overlaycover.classList.add("active") ;
   container.classList.add("active");
}


function removeModal() {
    overlaycover.classList.remove("active") ;
    container.classList.remove("active");
 } 