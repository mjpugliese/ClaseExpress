const button = document.querySelector('button')
const h2 = document.querySelector('h2')
button.addEventListener('click', getAlbums)
const input = document.querySelector('input')
const span = document.querySelector('span')

// async function obtenerChiste() {
//     try {
//       const response = await axios.get('https://api.chucknorris.io/jokes/random');
//       console.log(response.data);
//       h2.textContent = response.data.value     
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
async function getAlbums (){
    try {
       const response = await axios.get('http://localhost:3000/discos/discos/'+input.value)
       console.log(response.data)

       h2.textContent = response.data[0].titulo
       span.textContent = response.data[0].precio

    } catch (error) {
        console.error(error);

    }
}

async function createAlbum(){
    // const titulo = input.value
    try {
        const response = await axios.post('http://localhost:3000/discos/discos', {
            titulo: input.value,
            precio: 5640
        })


        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

createAlbum()




//getAlbums()