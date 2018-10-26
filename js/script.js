 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             
             let element = document.createElement("li");
             let boton = document.createElement("button");
             let btntext = document.createTextNode("X");
             boton.appendChild(btntext);

             let texto = document.createTextNode(task);
             element.appendChild(boton);
             element.appendChild(texto);
             
             boton.addEventListener("click", function(){                
                console.log(this);
                let parent = this.parentNode;
                let abuelo = parent.parentNode;
                if(abuelo){
                    abuelo.removeChild(parent);
                }
             });

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }