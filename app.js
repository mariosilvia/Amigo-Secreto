// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = amigo;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.onclick = () => eliminarAmigo(index);
    botonEliminar.style.marginLeft = "10px";

    item.appendChild(botonEliminar);
    lista.appendChild(item);
  });
}

function eliminarAmigo(index) {
  amigos.splice(index, 1);
  actualizarLista();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe agregar al menos un amigo para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  amigos = [];
  actualizarLista();

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}
