/*//----------------------------------------// DROPDOWN NAV //----------------------------------------//*/
function myFunction(x) {
  x.classList.toggle("change");
}

function toogleSlideMenu(x) {
  if (x.classList.contains('change')) {
    document.getElementById("mySidenav").style.height = "27%";
  }

  else {
    document.getElementById("mySidenav").style.height = "0%";
  }
}
