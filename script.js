document.getElementById('generate').addEventListener('click', function() {
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const special = document.getElementById('special').checked;
    const length = parseInt(document.getElementById('length').value, 10);
    
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = '';
    if (uppercase) characterPool += upperChars;
    if (lowercase) characterPool += lowerChars;
    if (numbers) characterPool += numberChars;
    if (special) characterPool += specialChars;

    if (characterPool.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('passwordDisplay').innerText = password;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const password = document.getElementById('passwordDisplay').innerText;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});
