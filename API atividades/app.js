'use strict'

async function pegarImagens(){
    const endPoint ='https://api.clashroyale.com/v1/cards'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

