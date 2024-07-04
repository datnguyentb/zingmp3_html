var delete_input = document.querySelector('#header .delete_input');
var search_input = document.querySelector('#header .search_input');

search_input.addEventListener('input', (event)=> {
    if(event.target.value) {
        delete_input.classList.remove('hidden');
    } else {
        delete_input.classList.add('hidden');
    }
})

delete_input.addEventListener('click', () => {
    search_input.value = '';
})