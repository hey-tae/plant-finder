document.querySelector('button').addEventListener('click', getPlantName)

function getPlantName(){
console.log(4+4)
}

// async function getPlantName(){
//     try{
//     const plantName =  document.querySelector('input').value
//     const response = await fetch(`http://localhost:8000/api/plants/${plantName}`)
//     const data = await response.json()
//     console.log(data)
//     document.querySelector('h2').innerText = data.plant
//     }catch(err){
//         console.log(err)
//     }
   
// }