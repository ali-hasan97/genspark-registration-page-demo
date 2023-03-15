var formId = document.getElementById("formId");

function submitForm(e) {
     e.preventDefault();
}

formId.addEventListener('submit', submitForm);

const validator = () => {
     const email = document.getElementById("email");
     const password = document.getElementById("password");
     const username = document.getElementById("username");
     const phone = document.getElementById("phone");

     // validates emails
     const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const emailNode = document.createElement('span');

     if (emailValidator.test(email.value)) {
          console.log("Valid email address");
          emailNode.innerText = 'Valid email address';
          emailNode.style.color = 'limegreen';
     } else {
          console.log("Invalid email address");
          emailNode.innerText = 'Invalid email address';
          emailNode.style.color = 'red';
     }

     email.insertAdjacentElement('afterend', emailNode);
     email.classList.add("checked");
     
     setTimeout(() => {
          emailNode.textContent = '';
          email.classList.remove("checked");
        }, 5000);


     // checks US phone numbers. Must be ten digits
     const phoneValidator = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
     const phoneNode = document.createElement('span');

     if (phoneValidator.test(phone.value)) {
          console.log("Valid phone number");
          phoneNode.innerText = 'Valid phone number';
          phoneNode.style.color = 'limegreen';
     } else {
          console.log("Invalid phone number");
          phoneNode.innerText = 'Invalid phone number';
          phoneNode.style.color = 'red';
     }

     phone.insertAdjacentElement('afterend', phoneNode);
     phone.classList.add("checked");
     
     setTimeout(() => {
          phoneNode.textContent = '';
          phone.classList.remove("checked");
        }, 5000);


     // checks usernameLength >= 6
     const usernameValidator = /^.{6,}$/;
     const usernameNode = document.createElement('span');

     if (usernameValidator.test(username.value)) {
          console.log("Valid username");
          usernameNode.innerText = 'Valid username';
          usernameNode.style.color = 'limegreen';
     } else {
          console.log("Invalid username");
          usernameNode.innerText = 'Username must be at least 6 characters long';
          usernameNode.style.color = 'red';
     }

     username.insertAdjacentElement('afterend', usernameNode);
     username.classList.add("checked");
     
     setTimeout(() => {
          usernameNode.textContent = '';
          username.classList.remove("checked");
        }, 5000);


     // minimum 8 characters, minimum one uppercase letter, one lowercase letter and one number:
     const passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     const passNode = document.createElement('span');

     if (passwordValidator.test(password.value)) {
          console.log("Valid password");
          passNode.innerText = 'Valid password';
          passNode.style.color = 'limegreen';
     } else {
          console.log("Invalid password");
          passNode.innerText = 'Password must be min 8 characters, and contain min one number, one upper case letter, and one lower case letter';
          passNode.style.color = 'red';
     }

     password.insertAdjacentElement('afterend', passNode);
     password.classList.add("checked");
     
     setTimeout(() => {
          passNode.textContent = '';
          password.classList.remove("checked");
        }, 5000);
}