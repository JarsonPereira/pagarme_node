const pagarme = require('pagarme');
const polly = require('polly-js');
const axios = require('axios');
require('dotenv').config();
const api = axios.create({
    baseURL: 'https://api.pagar.me/1',
    params: {
        'api_key': process.env.KEY_PAGAR_ME_TESTE
      }
});


async function findAllCards() {

    let data = await polly()
    .waitAndRetry(5)
    .executeForPromise(async function ()  {
        let resp = await api.get('/cards');
        return resp.data;
    })
    .then(function(result) {
        return result;
    }, function(err) {
        return [];
    });

    return data;
}

async function findAllTransactions() {

    let data = await polly()
    .waitAndRetry(5)
    .executeForPromise(async function ()  {
        let resp = await api.get('/transactions');
        return resp.data;
    })
    .then(function(result) {
        return result;
    }, function(err) {
        return [];
    });

    return data;
}

async function createCreditCard(card) {
   
    let data = await polly()
    .waitAndRetry(3)
    .executeForPromise(async function ()  {
        let cardId =  await pagarme.client.connect({ api_key: process.env.KEY_PAGAR_ME_TESTE })
        .then(client => client.cards.create(card))
        .then(card => card.id)
        return cardId;
    })
    .then(function(result) {
        return result;
    }, function(err) {
        return null;
    });

    return data;
}

async function createTransaction(transaction)
{
    let data = await polly()
    .waitAndRetry(3)
    .executeForPromise(async function ()  {
        let data = await pagarme.client.connect({ api_key: process.env.KEY_PAGAR_ME_TESTE })
        .then(client => client.transactions.create(transaction))
        .then(transaction => transaction);

        return data;
    })
    .then(function(result) {
        return result;
    }, function(err) {
        return null;
    });

    return data;
 
}


module.exports = { findAllCards, createCreditCard,createTransaction,findAllTransactions };