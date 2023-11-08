

function bkChange() {
    
    let time = new Date();
    let hour = time.getHours();

// Set the background color based on the hour
    if (hour >= 6 && hour < 12) {
    // Morning
    document.body.style.backgroundColor = "lightblue";
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.backgroundColor = "orange";
  } else if (hour >= 18 && hour < 24) {
    // Evening
    document.body.style.backgroundColor = "darkblue";
  } else {
    // Night
    document.body.style.backgroundColor = "black";
  }
  
  
  

}

bkChange();