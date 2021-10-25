const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const figlet = require('figlet')
app.use(cors())

let plants = {

    'monstera': {
        'plant': 'monstera',
        'light': 'low',
        'maintenence': 'low',
        'petSafe': 'Toxic to cats',
        'waterFrequency': 'weekly'

    },

    'snake plant': {
        'plant': 'snake plant',
        'light': 'low',
        'maintenence': 'low',
        'petSafe': 'Toxic to cats',
        'waterFrequency': 'weekly'
    },

    'aloe plant': {
        'plant': 'aloe plant',
        'light': 'low',
        'maintenence': 'low',
        'petSafe': 'Toxic to cats',
        'waterFrequency': 'weekly'
    },

    'golden pathos': {
        'plant': 'golden pathos',
        'light': 'low',
        'maintenence': 'low',
        'petSafe': 'Toxic to cats',
        'waterFrequency': 'weekly'
    },

    'fiddle': {
        'plant' : 'fiddle',
        'light': 'low',
        'maintenence': 'low',
        'petSafe': 'Toxic to cats',
        'waterFrequency': 'weekly'
    },

    'unknown': "sorry not in database yet"

}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/clientSide/index.html')
    
})

app.get('/api/plants/:plantName', (request, response)=>{
    const plantType = request.params.plantName
    response.json(plants[plantType])
    console.log(plantType)
    if(plants[plantType]){
        response.json(plants[plantType])
    }else {
        response.json(plants['unknown'])
    }
    console.log(response)
})

// app.get('/api/rappers/:rapperName', (request, response)=>{
//     const rapName = request.params.rapperName
//     response.json(rappers[rapName])
//     console.log(rapName)
//     if (rappers[rapName]){
//         response.json(rappers[rapName])
//     }else {
//         response.json(rappers['unknown'])
//     }
//     console.log(response)
// })
// app.get('/api/rappers/:rapperName', (request, response)=>{
//     const rapName = request.params.rapperName
//     response.json(rappers[rapName])
//     console.log(rapName)
//     if (rappers[rapName]){
//         response.json(rappers[rapName])
//     }else {
//         response.json(rappers['unknown'])
//     }
//     console.log(response)
// })













app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})