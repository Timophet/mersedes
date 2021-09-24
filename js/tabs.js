console.log('tabs')
const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
const tabsCaption = document.querySelectorAll('.design__title');
console.dir(tabsCaption)

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active');
        //console.dir(btn.dataset.tabsHandler);
        tabsContentElems.forEach(item => {
            //console.dir(item)
            //console.log(item.dataset.tabsField)
            //console.log(btn.dataset.tabsHandler)
            if (item.dataset.tabsField == btn.dataset.tabsHandler) {
                item.classList.remove('hidden');
            }

            else {
                item.classList.add('hidden');
            }//*/
        })
        tabsCaption.forEach(cap => cap.classList.toggle('hidden'));


    })

}