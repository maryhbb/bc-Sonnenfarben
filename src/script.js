function changeColor() {
  const sunColors = document.getElementById("suncolors");
  const classes = sunColors.classList;

  if (classes.contains("black")) {
    classes.remove("black");
  } else {
    classes.add("black");
  }
}
