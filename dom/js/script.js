const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const bomItem = document.createElement('li');
    const bomText = document.createElement('span');
    const bomBtn = document.createElement('button');

    bomItem.appendChild(bomText);
    bomText.textContent = myItem;
    bomItem.appendChild(bomBtn);
    bomBtn.textContent = '❌';
    list.appendChild(bomItem);

    bomBtn.addEventListener('click', () => {
        list.removeChild(bomItem);
    });

    input.focus();
});