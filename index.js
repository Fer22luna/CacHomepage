
const cantidad = document.getElementById("quantity")
const selectOption = document.getElementById("select-category")
const resumen = document.getElementById("resumen")
const spanTotal = document.getElementById("span-total")
const borrar = document.getElementById("borrar")


resumen.addEventListener("click", (e)=>{

    e.preventDefault();
    
    let total = 0;

    switch (selectOption.value) {
        case "Trainee":
            total = Number(cantidad.value)*0.5*200
            break;

        case "Junior":
            total = Number(cantidad.value)*0.85*200

            break;

        case "Estudiantes":
            total = Number(cantidad.value)*0.2*200

            break;
        
    }

    spanTotal.innerText = total;

})

borrar.addEventListener("click", (e)=>{

    e.preventDefault();

    spanTotal.innerText = "";

})