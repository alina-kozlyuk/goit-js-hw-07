const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.elements.email.value.trim() === '' || form.elements.password.value.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        const email = form.elements.email.value.trim();
        const password = form.elements.password.value.trim();

     console.log({email: email, password: password});
        form.reset();
    }
    
});


