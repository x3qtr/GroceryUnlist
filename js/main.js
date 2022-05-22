document.querySelector('#addItemButton').addEventListener('click', addItem)

// Execute a function when the user presses a key on the keyboard
document.querySelector('#addItem').addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addItemButton").click();
  }
});

function addItem() {
    //need the value that is in addItem
    let newItem = document.querySelector('#addItem').value
    //Check if it is NaN
    if(isNaN(newItem) === true && newItem !== ''){
      //Create li
      var li = document.createElement("li")
      //Add value to the li
      li.innerHTML = newItem
      //Put the li into our ul
      document.getElementById("listDisplay").appendChild(li)
    }


}

