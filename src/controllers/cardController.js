const  pagarme =  require('../repository/pagarmeDb')

module.exports = {
    async get(request, response) {
        return response.json(await pagarme.findAllCards());
    },
    async create(request, response) {
        return response.json(await pagarme.createCreditCard(request.body));
    }
}



