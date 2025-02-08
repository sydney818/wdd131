const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);  
});

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value);  
        chaptersArray.push(input.value);  
        setChapterList(); 
        input.value = '';  
        input.focus(); 
    } else {
        alert('Enter chapter!'); 
        input.focus(); 
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);  
        input.focus();
    });
    console.log(item);
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);  
    setChapterList();  
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || [];  
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));  
}
