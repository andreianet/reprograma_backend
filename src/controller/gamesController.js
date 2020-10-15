const jogos = require('../models/games.json')

const obterJogos = (req, res) => {
    res.statusCode = 200
    return res.json(jogos)
}

 
/*
let jogosSemRepetir = []

jogos.forEach(jogo =>{
    if(!jogosSemRepetir.find(item => item.id==jogo.id)){
        jogosSemRepetir.push(jogo)
    }
})*/

//@route PUT
const putJogos = (req, res) =>{
    const jogoUpdate = req.body
    const id = parseInt(req.params.id)

    const jogosId = jogos.map(jogo => jogo.id)
    const updateId = jogosId.indexOf(id)

    //... significa: Spread syntax
    const jogoUpdateId = {id, ...jogoUpdate}
    //1   significa: a quantidade de itens que serão removidos após a index que você passou
    jogos.splice(updateId, 1 , jogoUpdateId)

    res.status(200).send(jogos.find(jogo=>jogo.id==id))
    console.log(jogos);
}

//@route PATCH
const patchJogos = (req, res) =>{
    const updateJogos = req.body 
    const id = parseInt(req.params.id)
    const jogoForUpdate = jogos.find(jogo => jogo.id==id)

    for (key  in updateJogos) {        
            jogoForUpdate[key] = updateJogos[key];
            
    }    
    res.status(200).send(jogoForUpdate)
}



module.exports = {
    obterJogos,
    putJogos, 
    patchJogos
} 