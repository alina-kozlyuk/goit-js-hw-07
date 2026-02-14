const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const titleElement = item.querySelector('h2'); // як знайти h2?
    const title = titleElement.textContent; // як отримати текст?

    const elems = item.querySelectorAll('li');
    const elemCount = elems.length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elemCount}`);
});



