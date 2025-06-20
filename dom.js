function changeHeading() {
  const heading = document.getElementById("main-heading");
  heading.textContent = "You clicked the button!";
  
  const output = document.getElementById("output");
  output.textContent = "DOM accessed ✅ JavaScript is working!";
}

// Listen for typing in the input field

const nameInput = document.getElementById("nameInput");
const liveName = document.getElementById("liveName");

nameInput.addEventListener("input", function () {
  liveName.textContent = nameInput.value || "...";
}); 
// Hover effect on a box
// This will change the text when hovering over a box
// and revert it when the mouse moves away.
// This is a simple example of DOM manipulation using JavaScript.
// It demonstrates how to change text content based on user interaction.
// The box will display a message when hovered over and revert when the mouse leaves.
// The hover effect is achieved using mouseover and mouseout events.
// The hover box will show a message when the mouse is over it and change it back when
// the mouse leaves.
const hoverBox = document.getElementById("hoverBox");
const hoverMessage = document.getElementById("hoverMessage");

hoverBox.addEventListener("mouseover", function () {
  hoverMessage.textContent = "You're hovering! 👆";
});

hoverBox.addEventListener("mouseout", function () {
  hoverMessage.textContent = "You moved away. 😢";
});

// Form validation example
// This code validates a simple contact form.
// It checks if all fields are filled out before allowing submission.       
const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("formStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual submission

  const name = document.getElementById("formName").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  const message = document.getElementById("formMessage").value.trim();

  if (name === "" || email === "" || message === "") {
    
    statusMessage.textContent = "❌ Please fill out all fields.";
    statusMessage.style.color = "red";
    } else {
    statusMessage.textContent = "✅ Message ready to send!";
    statusMessage.style.color = "green";
  }
});