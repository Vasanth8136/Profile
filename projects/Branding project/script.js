document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var message = document.querySelector('textarea').value;

    // Here you can handle the form data, for example, send it to a server using AJAX
    // For simplicity, let's just log the form data for now
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);

    // You can add further logic here, such as displaying a confirmation message to the user
});
