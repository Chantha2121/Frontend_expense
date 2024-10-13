const signupForm = document.getElementById('signupForm');
const baseUrl = 'http://localhost:3009';

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);
    formData.append('balance', document.getElementById('balance').value);
    formData.append('user_image', document.getElementById('user_image').files[0]);

    try {
        const result = await fetch(`${baseUrl}/auth/signup`, {
            method: 'POST',
            body: formData // Send FormData
        });

        if (!result.ok) {
            const errorText = await result.text(); // Get the actual error text (HTML or plain text)
            throw new Error(errorText);
        }

        const data = await result.json(); // This will try to parse as JSON only if no error
        console.log('Sign-up successful:', data);
    } catch (e) {
        console.error('Error during sign up:', e.message); // Print the actual error message
    }
});
