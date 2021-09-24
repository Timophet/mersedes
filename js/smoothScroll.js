console.log('smooth')
const linksHead = document.querySelectorAll(".menu-list__link");
console.dir(linksHead)

const design = document.querySelector(".main__scroll");

const newArray = [...linksHead, design];

newArray.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const ID = event.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })


});
//* /