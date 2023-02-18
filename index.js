
//get variables from Form.

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');

//

form.addEventListener('submit', e => {
    e.preventDefault(); //Event to prevent the form from being submitted directly on button click

    checkInputs(); //To validate Form inputs
});

//SUCCESS: We handle the success case, checking for the error, adding the success, and removing the error from the action List.
const setSuccess = inputElement => {
    const inputControl = inputElement.parentElement;
    const errorText = inputControl.querySelector('.error');

    errorText.innerText = '';
    inputControl.classList.add('success');
	inputControl.classList.add('successAlert');
    inputControl.classList.remove('error');
};

//ERROR: We handle the error case by checking for the error, adding the error text, and removing the success from the action List.
const setError = (inputElement, messageError) => {
    const inputControl = inputElement.parentElement;
    const errorText = inputControl.querySelector('.error');

    errorText.innerText = messageError;
    inputControl.classList.add('error');
	inputControl.classList.add('errorAlert');
    inputControl.classList.remove('success')
}

const isValidUsername = username => {
	const regexName = /^[a-zA-Z\u00C0-\u017F\s]+$/;
	console.log('---> Username: ' + username);
	console.log('---> regexName: ' + regexName.test(username));
	return regexName.test(username);
}

//Regex Email
const isValidEmail = email => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

//Method for validate inputs
const checkInputs = () => {
    const usernameValue = username.value.trim(); // *** With trim(), we remove the possible blank spaces inserted in the inputs. ***
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = passwordcheck.value.trim();
	
	let isCorrect = true;

    if(usernameValue === '') {
        setError(username, 'Rellene este campo');
		isCorrect = false;
    } else if (!isValidUsername(usernameValue)){
		setError(username, 'Nombre inválido');
		isCorrect = false;
	} else {
        setSuccess(username);
    }
	
	if(emailValue === '') {
        setError(email, 'Rellene este campo');
		isCorrect = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email inválido');
		isCorrect = false;
    } else {
        setSuccess(email);
    }
	
	if(passwordValue === '') {
        setError(password, 'Rellene este campo');
		isCorrect = false;
    } else if (passwordValue.length > 8 ) {
        setError(password, 'No debe tener más de 8 caracteres')
		isCorrect = false;
    } else {
        setSuccess(password);
    }
	
	if(checkPasswordValue === '') {
        setError(passwordcheck, 'Rellene este campo');
		isCorrect = false;
    } else if (checkPasswordValue !== passwordValue) {
        setError(passwordcheck, "Las contraseñas no coinciden");
		isCorrect = false;
    } else {
        setSuccess(passwordcheck);
    }
	
	if(isCorrect){
		alert("La inscripción ha sido correcta");
	}

};

