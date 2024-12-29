//   step 1
    const todo_form= document.getElementById('todo-form')  ;
    const todo_input= document.getElementById('todo-input') ;
    const todoList = document.getElementById("todo-list")   ;       

// step 2

 todo_form.addEventListener('submit',(e)=>{
   e.preventDefault();
   const task = todo_input.value.trim()
   if(task !==''){
    addList(task);
    todo_input.value= ''  

   }


 })
   

//  step 3

  const  addList =(task)=>{
     const li= document.createElement('li')
    li.textContent=task;

   const deleteBtn = document.createElement('button');
    deleteBtn.textContent='remove';
    deleteBtn.classList.add('delete-btn')
     deleteBtn.addEventListener('click', ()=>li.remove() )

     li.addEventListener('click',()=>li.classList.toggle('completed'))
  
     li.appendChild(deleteBtn);
      todoList.appendChild(li)


     
  }







































// const form = document.getElementById("todo-form");
// const input = document.getElementById("todo-input");
// const  todoList = document.getElementById("todo-list");

// //  form submit
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const task = input.value.trim();

//   if (task !== "") {
//     addtask(task);
//     input.value = "";
//   }
// });

// const addtask = (task) => {
//   const li = document.createElement("li");
//   li.textContent = task;

//   const deletebtn= document.createElement('button');
//   deletebtn.textContent='delete'
//   deletebtn.classList.add("delete-btn");
//   deletebtn.addEventListener('click',()=>li.remove())



//   li.addEventListener('click', () => li.classList.toggle('completed'));
//   li.appendChild(deletebtn)
//    todoList.appendChild(li)
// };

