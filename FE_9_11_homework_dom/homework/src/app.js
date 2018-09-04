const newButton = document.querySelector('.btn');
const mainList = document.querySelector('.mainList');
const addInput = document.querySelector('.divInput');
const warn = document.querySelector('.warning');

newButton.onclick = () => {
    mainWork(addInput.value);
}

let counter = 0, maxCounter = 10;
const mainWork = newTextWork => {
    const nLi = document.createElement('li');
    const createP = document.createElement('p');
    const boxIcon = document.createElement('i');
    const buttonCheck = document.createElement('button');
    const delI = document.createElement('i');
    const delNewBtn = document.createElement('button');

    nLi.setAttribute('class', 'list-item');
    boxIcon.setAttribute('class', 'material-icons');
    buttonCheck.setAttribute('class', 'checkbox-btn');
    delI.setAttribute('class', 'material-icons');
    delNewBtn.setAttribute('class', 'delete-btn');


    if (maxCounter <= ++counter ) {
        addInput.disabled = true;
        warn.style.display = 'block';
    }

    buttonCheck.onclick = () => {
        boxIcon.textContent = 'check_box';
    };

    delNewBtn.onclick = () => {
        nLi.remove();

        addInput.disabled = false;
        counter--;
        warn.style.display = 'none';
    };

    addInput.value = '';
    newButton.disabled = true;

    createP.appendChild(document.createTextNode(newTextWork));
    boxIcon.appendChild(document.createTextNode('check_box_outline_blank'));
    delI.appendChild(document.createTextNode('delete'));
    buttonCheck.appendChild(boxIcon);
    buttonCheck.appendChild(createP);
    delNewBtn.appendChild(delI);
    nLi.appendChild(buttonCheck);
    nLi.appendChild(delNewBtn);
    mainList.appendChild(nLi);
}

addInput.onchange = addInput.onkeyup = e => {
    const newTextWork = addInput.value;

    newTextWork ? newButton.disabled = false : newButton.disabled = true;

    if (e.key === 'Enter') {
        if (newTextWork) {
            mainWork(newTextWork);
        }
    }
};
