//Находим элементы на странице
const addTask = document.querySelector('.task-manager__task');//Поле ввода для задачи
const addBtn = document.querySelector('.task-manager__btn');//Кнопка "Добавить"
const noTask = document.querySelector('.todo-list__title');//Текст "Нет задач"
const toDoTask = document.querySelector('.todo-list__item');//Поле для отображения задач
const clearBtn = document.querySelector('.todo-list__clear-btn');//Кнопка "Очистить список задач"
const tasksList = document.querySelector('.todo-list__items');



//Создаём функцию для кнопки "Добавить"

addBtn.addEventListener('click', function(event){
event.preventDefault();
const taskText = addTask.value

//Добавляем задачу в список задач
const taskHTML = 
`<div class="todo-list_item_input"> 
    <p class="todo-list_item_text">
    ${taskText}
    </p>  
    <label for="checkbox"> 
    <input class="todo-list_item_checkbox" type="checkbox" name="ready" id="checkbox">
    </label>
    </div>   
`;


//Убираем надпись "Нет задач"
noTask.remove();

//Показать кнопку "Очистить список задач" активной
document.querySelector('.todo-list__clear-btn').removeAttribute('disabled');



//Показать новые задачи в блоке "список задач"
document.querySelector('.todo-list__items').removeAttribute('hidden');

//Добавляем задачу на страницу 
tasksList.insertAdjacentHTML('beforeend', taskHTML);

//Очищаем поле ввода и возвращаем на него фокус
addTask.value = "";  
addTask.focus();
})


//Создаём функцию для кнопки "Очистить список задач"
clearBtn.addEventListener('click', ()=>{
    tasksList.remove();//Очищаем поле

// Добавляем надпись "Нет задач"
const toDoTaskBox = document.querySelector('.todo-list');
toDoTaskBox.innerHTML = `<h2 class="todo-list__title">Нет задач</h2>`;

//Показать кнопку "Очистить список задач" неактивной
clearBtn.setAttribute("disabled", " ");

})











