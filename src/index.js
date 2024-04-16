document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('create-task-form', (e)=> {
    e.preventdefault () 
    buildtodo(e.target.new_todo.value) 
     })
});

function buildtodo(todo){
  let p = document.createElement('p')
  let btn = document.createElement(button)
  btn.addEventListener('click', handleDelete)
  p.textContent = 'x'
  p.textContent = `${todo}`
  console.log(p)
document.querySelector('#create-task-form').{appendChild(p)}

}

function handleDelete(e){
  e.target.parentNode.remove()
}