const modal = document.getElementById("modal");

// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Adiciona um evento de input para cada campo, para verificar se todos os campos estão preenchidos
itemName.addEventListener('input', verificarCampos);
itemImage.addEventListener('input', verificarCampos);
itemDescription.addEventListener('input', verificarCampos);

// Função para adicionar um novo item
function addNewItem() {
    // Captura os valores dos campos de entrada
    const name = document.getElementById("itemName").value;
    const imageUrl = document.getElementById("itemImage").value;
    const description = document.getElementById("itemDescription").value;
    const isActive = document.getElementById("itemActive").checked;
    const dataInclusao = new Date().toLocaleString(); // Captura a data e hora atuais

    // Cria o elemento HTML para o novo item
    const container = document.getElementById("container");
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <img src="${imageUrl}">
        <div class="item-content">
            <h2>${name}</h2>
            <p>${description}</p>
            <p><strong>Status:</strong> ${isActive ? "Ativo" : "Inativo"}</p>
            <p><strong>Data de Inclusão:</strong> ${dataInclusao}</p>
            <div class="icons">
                <button title="Comentario" onclick="editarComentario()">Comentário</button>
                <button title="Excluir" onclick="openModalExcluir(this.parentNode.parentNode)">Excluir</button>
            </div>
        </div>
    `;

    // Adiciona o novo item ao container
    container.appendChild(newItem);

    // Fecha o modal e limpa os campos
    closeModal();
    document.getElementById("itemName").value = '';
    document.getElementById("itemImage").value = '';
    document.getElementById("itemDescription").value = '';
    document.getElementById("itemActive").checked = false;
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

//////////////////////////////////////////////

function sair() {
    window.location.href = "pagina1.html";
}

//////////////////////////////////////////////

const modalExcluir = document.getElementById("modalExcluir");
let itemToDelete = null; // Variável para armazenar o item a ser excluído

// Função para abrir o modal de exclusão
function openModalExcluir(item) {
    modalExcluir.style.display = "block";
    itemToDelete = item; // Armazena o item a ser excluído
}

// Função para fechar o modal de exclusão
function closeModalExcluir() {
    modalExcluir.style.display = "none";
    itemToDelete = null; // Limpa a referência do item
}

// Função para confirmar a exclusão
function confirmarExclusao() {
    if (itemToDelete) {
        itemToDelete.remove(); // Remove o item da interface
    }
    closeModalExcluir(); // Fecha o modal de exclusão
}

//////////////////////////////////////////////

const modalComentar = document.getElementById("modal");

// Função para abrir o modal
function openModal() {
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

itemDescription.addEventListener('input', verificarCampos);