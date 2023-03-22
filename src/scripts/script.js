var activeTheme = "light";

//TODO: RIFALLO PER LE LALTRE DUE PAGINE E ATTENTO A I LINK E CHE RESTI SEMPRE QUELLo
function changeTheme() {
  if (activeTheme == "light") {
    activeTheme = "dark";
  } else {
    activeTheme = "light";
  }
  $("#csslink").prop("href", "./src/styles/" + activeTheme + ".css");
}