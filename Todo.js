'use strict;'
const storage = localStorage;

const table = document.querySelector('table');
const todo = document.getElementById('todo');
const priority = document.querySelector('select');
const deadline = document.querySelector('input[type="date"]');
const submit = document.getElementById('submit');

let list = [];

document.addEventListener('DOMContentLoaded', () => {
    //1.ストレージデータ（JSON）の読み込み
    const json = storage.todoList;
    if(json == undefined) {
        return;
    }
    //2.JSONをオブジェクトの配列の変換して配列listに代入
    list = JSON.parse(json);
    //3.配列listのデータを元にテーブルに要素を追加
    for (const item of list) {
        addItem(item);
    }
});

const addItem = (item) => {
    const tr = document.createElement('tr');

    for (const prop in item) {
        const td = document.createElement('td');
        if (prop == 'done') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item[prop];
            td.appendChild(checkbox);
        } else {
            td.textContent = item[prop];
        }
        tr.appendChild(td);
    }

    table.append(tr);
};

submit.addEventListener('click', () => {
    const item = {};

    if(todo.value != '') {
        item.todo = todo.value;
    } else {
        item.todo = 'ダミーTODO';
    }
    item.priority = priority.value;
    if(deadline.value != '') {
        item.deadline = deadline.value;
    } else {
        const date = new Date();
        item.deadline = date.toLocaleDateString().replace(/\//g, '-');
    }
    item.done = false;

    todo.value = '';
    priority.value = '普';
    deadline.value = '';
    
    addItem(item);
    
    list.push(item);
    storage.todoList = JSON.stringify(item);
    
});
