if (typeof(Storage) == "undefined") {
  
}



function mode(){
if (!localStorage.getItem("theme")){
  localStorage.getItem("dark")
}
if (localStorage.getItem("theme") === "dark"){
  document.body.style.backgroundColor = "white";
  paste.style.backgroundColor = "white";
  paste.style.color = "black";
  
  return;
}
if (localStorage.getItem("theme") === "light"){
  document.body.style.backgroundColor = "white";
  paste.style.backgroundColor = "white";
  paste.style.color = "black";
  
  
  return;
}





}