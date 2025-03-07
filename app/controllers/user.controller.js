const db = require('../models');
const user = db.user;

exports.findAllProduct = (req, res) => {
    try {
        user.findAll()
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.json({ message: error.message });
            });
    } catch (error) {
        console.log(error);
    }
};

exports.createProduct = (req, res) => {
    try {
        if (!req.body.memberNumber) {
            res.status(400).json({ message: "Not empty!" })
            return
        };

        const newProduct = {
            memberNumber: req.body.memberNumber, 
            fullName: req.body.fullName,
            phone: req.body.phone, 
            voteDate: req.body.voteDate
        }
        user.create(newProduct)
            .then(data => {
                res.status(200).json({ message: "Product created!" })
            })
            .catch(error => {
                res.status(500).json({ message: error.message })
            });

    } catch (error) {
        console.log(error.message)
    };
};

exports.findProductById = (req, res) => {
    try {
        const id = req.params.id;
        user.findByPk(id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(404).json({message:'error'})
            })

    } catch (error) {
        console.log(error.message);

    }


};

exports.updateProductById = (req, res) => {
    try {
        const id = req.params.id;
        const updateProduct = {
            memberNumber: req.body.memberNumber, 
            fullName: req.body.fullName, 
            phone: req.body.phone,
            voteDate: req.body.voteDate   
        }
        user.update(updateProduct, { where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Updated Succesfully!" })
                }
                else {
                    res.status(400).json({ message: "Updated Failed!" })
                }

            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    } catch (error) {
        console.log(error);

    }
};

exports.deleteProductById = (req, res) => {
    try {
        const id = req.params.id;
        user
            .destroy({ where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Product deleted Successfully!" });
                }
                else {
                    res.status(200).json({ message: "Product deleted Failed!" });
                }
            })
            .catch(err => {
                res.status(404).json({ message: err.message })
            });

    } catch (err) {
        console.log(err);
    }
};