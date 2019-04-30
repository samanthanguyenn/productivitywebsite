$(document).ready(function() {
  var input = document.querySelector("input[type = 'text']");
  var ul = document.querySelector("ul");
  var lists = document.querySelectorAll("li");
  var clearList = document.querySelector(".clearButton");

  input.addEventListener("keypress",function(keyPressed){
    if(keyPressed.which === 13){
      var todoItem = document.createElement("li");          
      var addedItem = this.value;
      this.value = " " ;
      ul.appendChild(todoItem).append(addedItem);      
      }
      
  });

  ul.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
      }
    }
  );

  clearList.addEventListener('click', function(){
    ul.innerHTML= "";
    localStorage.removeItem('todoList',ul.innerHTML );

  });

});
