window.addEventListener('load', () => {
    const form = document.querySelector('#task-form')
    const input = document.querySelector('#task-input')
    const listEle = document.querySelector('#tasks')
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Se recomienda completar campos');
            return;
        }

        const taskElem = document.createElement('DIV');
        taskElem.classList.add('task');

        const taskConstEle = document.createElement('DIV');
        taskConstEle.classList.add('contenedor');


        taskElem.appendChild(taskConstEle);

        const tImputEl = document.createElement('input');
        tImputEl.classList.add('text')
        tImputEl.type = 'text';
        tImputEl.value = task;
        tImputEl.setAttribute('readonly', 'readonly')



        taskConstEle.appendChild(tImputEl);

        /*        */
        const acccion = document.createElement('div')
        acccion.classList.add('actions')

        const edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerHTML = 'Editar'

        const delet = document.createElement('button')
        delet.classList.add('delete');
        delet.innerHTML = 'Eliminar';

        acccion.appendChild(edit);
        acccion.appendChild(delet);
        taskElem.appendChild(acccion);
        listEle.appendChild(taskElem)
        listEle.appendChild(taskElem);
        input.value = '';


    })

})