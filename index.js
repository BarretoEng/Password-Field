const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Toggle "Stay signed in"
const toggleBtn = document.getElementById("toggleRemember");
const toggleCircle = document.getElementById("toggleCircle");
const rememberInput = document.getElementById("rememberInput");

let isOn = false;

toggleBtn.addEventListener("click", () => {
    isOn = !isOn;
    toggleBtn.classList.toggle("bg-blue-600", isOn);
    toggleBtn.classList.toggle("bg-gray-300", !isOn);
    toggleCircle.style.transform = isOn ? "translateX(100%)" : "translateX(0)";
    rememberInput.value = isOn.toString();
});

// Validação simples
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Login enviado com sucesso!");
});
