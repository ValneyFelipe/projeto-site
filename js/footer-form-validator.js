const form = document.querySelector('.footer-form');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Trim whitespace from the message input
  const message = messageInput.value.trim();

  // If the message input is empty or only whitespace
  if (!message) {
    // Show an error message
    alert('Please enter a message');
  } else {
    // Submit the form
    form.submit();
    // Or show a success message
    // alert('Message sent successfully!');
  }
});
