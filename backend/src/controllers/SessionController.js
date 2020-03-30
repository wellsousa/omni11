const connection = require("../database/connection")

module.exports = {
    async create(request, response){
        const { email, password } = request.body

        const ong = await connection('ongs')
            .where('email', email)
            .select('id','name')
            .first();

        if(! ong ){
            return response.status(400).json({ error: "No ONG found with this ID" })
        }

        return response.json(ong)
    }
}   
