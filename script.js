function checkPassword() {
    const correctPassword = "pokcat10"; // Replace with your desired password
    const userInput = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (userInput === correctPassword) {
      // Redirect to the main website page
      window.location.href = "main.html"; // Replace with your main page
    } else {
      errorMessage.textContent = "Incorrect password. Please try again.";
    }
  }