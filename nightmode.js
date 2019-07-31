//night mode
if(localStorage.getItem("darkmode")){
  document.querySelector("html").classList.toggle("noite");
  document.querySelector(".fas").classList.toggle("fa-sun");
}
function toggleMode(){
  var ary = document.querySelector("html").classList;
  document.querySelector("html").classList.toggle("noite");
  if(Object.values(ary).includes("noite")){
    document.querySelector(".fas").classList.toggle("fa-sun");
    localStorage.setItem("darkmode", "1");  
  }else{
    document.querySelector(".fas").classList.toggle("fa-sun");
    localStorage.removeItem("darkmode");  
  }
}
