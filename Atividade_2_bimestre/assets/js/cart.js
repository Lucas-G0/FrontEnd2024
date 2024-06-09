let clientCart = JSON.parse(localStorage.getItem('clientCart'));

function salvarCart() {
    localStorage.setItem("clientCart", JSON.stringify(clientCart));
  }
  

function atualizaCart(){
    let listBody = document.getElementById("catalog-list");
  listBody.innerHTML = "";

  clientCart.forEach((item, indice) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <div class="card" style="width: 20rem" height: 15rem;>
              <div class="card-body">
                <div class="card-title">
                    <h5 class="card-title">${item.item}</h5>
                    <h6 class="card-title">R$${item.valor.toFixed(2)}</h6>
                    </div>
                    <img class="card-image" src="${item.img}">
                </div>
                <p class="card-text">
                  ${item.desc}
                </p>
                <div class="btn-container">
                <button onclick="excluirItem(${indice})" class="btn btn-secondary">Excluir</button>
                </div>
              </div>
        </div>
        `;
    listBody.appendChild(li);
});

atualizarValorTotal();
}

function excluirItem(indice) {
    if (
      confirm(`Tem certeza que deseja excluir o item ${clientCart[indice].item}?`)
    ) {
      clientCart.splice(indice, 1);
      salvarCart();
      atualizaCart();
    }
}

function atualizarValorTotal() {
    let valorTotal = clientCart.reduce((total, item) => total + item.valor, 0);
    document.getElementById(
      "valor-total"
    ).textContent = `Valor Total: R$ ${valorTotal.toFixed(2)}`;
  }

atualizaCart();