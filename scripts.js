const btnAdd = document.querySelector('.btnAdd');
const btnDelete = document.querySelector('.btnDelete');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const emptyList = document.querySelector('.empty-list');
const textoError = document.getElementById("texto-error-id");
const emptyMessage = document.querySelector('.empty-message');
const btnSingleDelete = document.querySelector('.delete-button');


// Este array almacena los valores previos que se colocaron en el input, se utiliza para evaluar si ya existe alguna task
let tasks = [];


// Escucha por el evento de 'click' a la hora de hacer click en el boton de "Agregar task";
input.addEventListener('keypress', (e) => {

    // Variable que "lee" lo que se coloca en el input
    const text = input.value;
    
    const comprobacion = tasks.includes(text);
    if(comprobacion == true) {
        textoError.innerHTML = "You can't add an existing task";
    } else {
        if ( text.charAt(0) == " " ) {
            textoError.innerHTML = "You can't add a task that starts with an empty space";
        }
        else if ( text !== "" && e.key === 'Enter') {

            const li = document.createElement('li');
            const p = document.createElement('p');
            const button = document.createElement('button');

            p.textContent = text;

            button.classList.add('delete-button');
            button.textContent = "Delete";
            button.onclick = () => {
                ul.removeChild(li);
                tasks.splice(li.textContent);
            };

            tasks.push(text);
        
            li.appendChild(p);
            li.appendChild(button);
            ul.appendChild(li);
    
            textoError.innerHTML = "";

            input.value = "";
    
        } else {
            if( e.key === 'Enter' ) {
                textoError.innerHTML = "You can't add an empty task";
            }
 
        }
    }

    if(tasks.length > 0) {
        emptyMessage.textContent = '';
    }

});

btnDelete.addEventListener('click', (e) => {
    ul.textContent = '';
    textoError.innerHTML = "";
    tasks = [];
    emptyMessage.textContent = "You don't have anything to do.";
});