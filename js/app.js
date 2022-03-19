window.addEventListener('load',()=>{
    const form = document.querySelector('#task-form')
    const input = document.querySelector('#task-input')
    const listEle = document.querySelector('#tasks')
    form.addEventListener('submit',(e)=> {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert('Se recomienda completar campos');
            return;
        }

        const taskElem = document.createElement('DIV');
        taskElem.classList.add(task);

        const taskConstEle = document.createElement('DIV');
        taskConstEle.classList.add('contenedor');
        taskConstEle.innerText=task;

        taskElem.appendChild(taskConstEle);
        const imputEl = document.createElement('input');
        imputEl.classList.add('text')
        imputEl.type= 'text';
        imputEl.value=task;
        imputEl.setAttribute('readonly','readonly');
         
        listEle.appendChild(taskElem);
    })

})