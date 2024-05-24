document.getElementById("submitBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

 // Check if email or password fields are empty
 if (email.trim() === '') {
    alert('Please fill in the email field.');
    return; 
}

if (password.trim() === '') {
    alert('Please fill in the password field.');
    return; 
}


    if (email === 'dhanyakarkera100@gmail.com' && password === 'Dhanya123') {
        alert('Login successful');
    } else {
        console.log('Login failed, Incorrect email or password.');
    }
});