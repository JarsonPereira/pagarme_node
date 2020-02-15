const  pagarme =  require('../repository/pagarmeDb')

module.exports = {
    async create(request, response) {
        return response.json(await pagarme.createInvoice(request.body));
    },
    async get(request, response) {
        return response.json(await pagarme.findAllTransactions());
    },
}



