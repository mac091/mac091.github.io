const button = document.getElementById('add-button');
button.addEventListener('click', () => {
    const input = document.getElementById('add-yarukoto');

    const li = document.createElement('li');
    li.innerText = input.value;

    const doneButton = document.createElement('button');
    doneButton.innerHTML = '完了';
    li.appendChild(doneButton);

    doneButton.addEventListener('click', () => {
        const li = doneButton.closest('li');
        li.classList.add('yokosen');
    });

    const ol = document.querySelector('ol');
    ol.appendChild(li);
});