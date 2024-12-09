const display = document.getElementById("loginDisplay");

let inputValue = "";

document.querySelectorAll(".formCadastro button").forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "C") {
            limpa();
        } else if (button.textContent === "✓") {
            show();
        } else {
            if (inputValue.length < 6) {
                inputValue += button.textContent;
                display.value = "*".repeat(inputValue.length);
            }
        }
    });
});

function show() {
    const loginCode = "123456";
    if (inputValue === loginCode) {
        alert("Login com sucesso!");
        window.location.href = "pagina2.html";
    } else {
        alert("Falha ao entrar. Tente novamente.");
        clearDisplay();
    }
}

function limpa() {
    inputValue = "";
    display.value = "";
}
