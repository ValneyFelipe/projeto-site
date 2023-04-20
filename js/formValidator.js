const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Trim the message input to remove leading/trailing whitespace
    const message = messageInput.value.trim();

    // Check if the message is blank or only contains whitespace
    if (!message) {
        // Show an error message
        alert('Please enter a message.');
        return;
    }

    // The message is valid, so submit the form
    // You can send an AJAX request to the server using the fetch API or jQuery
    // For example, using the fetch API:
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Show a success message
        alert('Message sent successfully!');
        // Reset the form
        form.reset();
    })
    .catch(error => {
        console.error('Error submitting the form:', error);
        // Show an error message
        alert('Error submitting the form. Please try again later.');
    });
});
