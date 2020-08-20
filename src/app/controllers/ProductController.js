const Category = require("../models/Product")

module.exports = {
    create(req, res) {
        return res.render("products/create.njk")
    },
    async post(req, res){
        const keys = Object.keys(req.body)

        for (key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields!")
            }
        }

        let results = await Product.create(req.body)
        const productId = results.rows[0].productId

        results = await Category.all()
        const categories = results.rows
    
        return res.render("products/create.njk", {productId, categories})
    }
}