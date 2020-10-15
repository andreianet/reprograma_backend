const express = require('express')
const router = express.Router()
const cors = require('cors')
const constroller = require('../controller/gamesController')

//@route GET jogos
router.get('/jogos', cors(), constroller.obterJogos)

//@route PUT jogos/:id
router.put('/jogos/:id',cors(), constroller.putJogos)

router.patch('/jogos/:id',cors(), constroller.patchJogos)


module.exports = router