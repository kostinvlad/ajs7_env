import "../css/style.css"



document.addEventListener("click", () => {
    let a = document.getElementsByTagName("body")[0];

    let interval =  setInterval(() => {       
        switch (a.style.textAlign){
            case "": {
               return a.style.textAlign = "start"
            }
            case "center": {
                return a.style.textAlign = "start"
            }
            case "start": {
                return a.style.textAlign = "end"
            }
            case "end": {
                return a.style.textAlign = "center"
            }
            default : null    
          } 
          console.log(a.style.textAlign)  
    }, 70)    
})

console.log('it works!');