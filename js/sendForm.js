const form = document.querySelector('.form-test-drive')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {}
    for (let { name, value } of form.elements) {
        if (name) {
            if (value == '' || value == ' ') {
                alert("Все поля должны быть заполнены!")
                return;
            }
            data[name] = value;

        }

    }
    //console.dir(data)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', body: JSON.stringify(data)
    })
        .then(
            response => {
                if (response.status == 200 || response.status == 201) {
                    return response.json()
                }
                else {
                    throw new Error(response.status)
                }

            }
        )
        .then(data => {

            console.log(data)
            /*
            for (let input in data) {
                console.log(input)
            }
            */
            //str = str.replace(/\s+/g, '')


            alert('Данные успешно сохранены');
            form.reset();
            //console.log(data)
        })
        .catch((error) => {
            //console.dir(error)
        })

})

//https://jsonplaceholder.typicode.com