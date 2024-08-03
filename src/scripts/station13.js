function changeBackgroundColor(e) {
  if (e.target.checked) {
    document.getElementById("text").style.backgroundColor = "red";
  } else {
    document.getElementById("text").style.backgroundColor = "";
  }
}
