console.log("sdfsdfsdf")
const lists = document.querySelectorAll(".feature-sub");

const btns = document.querySelectorAll(".feature__link");
console.dir(btns);
console.dir(lists);
btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        btns.forEach(btnitem => {
            btnitem.classList.remove('feature__link_active')
        })
        item.classList.add('feature__link_active')

        lists.forEach(listitem => {
            listitem.classList.add('hidden')
        })
        lists[index].classList.remove('hidden')
    })


});