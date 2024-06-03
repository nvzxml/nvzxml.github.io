document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username === 'user' && password === 'password') {
        alert('Login berhasil!');
        window.location.href = 'index.html';
    } else {
        alert('Username atau password salah!');
    }
});
