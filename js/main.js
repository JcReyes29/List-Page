fetch('https://jsonplaceholder.typicode.com/todos')

.then((value) => value.json())
.then((data) => showData(data.results))
.catch((error) => console.log(error)); /* Captura si hay un error */

