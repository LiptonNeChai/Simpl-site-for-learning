var link=document.querySelector(".login");
var popup=document.querySelector(".modal-content");
var close=document.querySelector(".modal-content-close");
var form=popup.querySelector("form");
var login=form.querySelector("input[name=login]");
var password=form.querySelector("input[name=password]");

link.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (localStorage.getItem("name")) {
      password.focus();
      login.value=(localStorage.getItem("name"));
  }else {
    login.focus();
  }
});

form.addEventListener("submit",function(event){
  if (!(login.value&&password.value)) {
    event.preventDefault();
    popup.classList.add("modal-error");
  }else {
    localStorage.setItem("name",login.value);
  }
})

close.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
})

window.addEventListener("keydown",function(event){
  if (event.keyCode==27&&popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
  }
})
