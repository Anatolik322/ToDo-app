const toDosDB={
     toDos:[]
}
const input= document.querySelector('.input__area'),
      addBtn= document.querySelector('.input__btn'),
      todosArea=document.querySelector('.todos__area-list');

function createTodo(){
    if(input.value.length>0){
        let newTodo= `<li class="todos__area-item">${input.value} <button class="delete__btn">X</button></li>`;
        todosArea.innerHTML+=newTodo;
        toDosDB.toDos.push(newTodo);
        localStorage.setItem('toDosArr',JSON.stringify(toDosDB.toDos));
    }
}

const deleteTodo =function(){

    document.addEventListener('mouseup',()=>{
    
        deleteBtns = document.querySelectorAll('.delete__btn');

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', e=>{
                toDosDB.toDos = toDosDB.toDos.filter(item => item !==`<li class="todos__area-item">${e.target.parentNode.innerHTML}</li>`);
                localStorage.setItem('toDosArr',JSON.stringify(toDosDB.toDos));
                e.target.parentNode.remove();
            });

        });
    
    });

};

if( location.reload){
    for(let todo of JSON.parse( localStorage.getItem('toDosArr'))){
         todosArea.innerHTML+=todo;
    }
 }
 
addBtn.addEventListener('click', createTodo);
deleteTodo();



