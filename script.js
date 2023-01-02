const inputGroup = document.querySelector("#inputGroup");
const email = document.querySelector("#email");
const error = document.querySelector(".error");
const select = document.querySelectorAll(".selected")
const selectedBar = document.querySelectorAll(".selectedBar")
const dropdown = document.querySelector("#dropdown")




const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation(){
    email.style.borderColor = '#ffff'  
      if(email.value.match(pattern))
    {     
    error.innerHTML = " "
    }else if (email.value === null || email.value.length === 0){
        error.classList.add("#form-text")
        email.style.borderColor =  '#EF2C2C'     
    }
    }
    
    validation();

    
    select.forEach((item) => {
        item.addEventListener(("click"), () => {
           dropdown.innerHTML = item.innerText
           if((item.classList.contains("selectedBar"))){
            item.classList.remove("selectedBar")
           }else{
            item.classList.add("selectedBar")
           }

        }) 
    })
    
    