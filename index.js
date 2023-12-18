


document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        // Assuming you have a function named submitFormToServer to handle the form submission
        submitFormToServer(formData)
            .then(() => {
                // Show success message
                successMessage.style.display = 'block';
                // Add the fade-out class after 3 seconds
                setTimeout(() => {
                    successMessage.classList.add('fade-out');
                }, 3000);
                // You can also reset the form if needed
                contactForm.reset();
            })
            .catch(error => {
                console.error('Form submission failed:', error);
                // Handle error if necessary
            });
    });
});

async function submitFormToServer(formData) {
  

    const response = await fetch('https://backend-port-dj5l.onrender.com/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Form submission failed.');
    }
}
document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactFormSection').scrollIntoView({ behavior: "instant"});
  });