var activeTheme = "light";

function changeTheme() {
  if (activeTheme == "light") {
    activeTheme = "dark";
  } else {
    activeTheme = "light";
  }
  $("#csslink").prop("href", "./src/styles/" + activeTheme + ".css");
}

function changeThemeSec() {
  if (activeTheme == "light") {
    activeTheme = "dark";
  } else {
    activeTheme = "light";
  }
  $("#csslink").prop("href", "../styles/" + activeTheme + ".css");
}
