exports.getAllCategories = async (req, res) => {
    res.status(200).json({
        message: "Success",
        data: [
            {
                id: 1,
                name: "Makanan",
            },
            {
                id: 2,
                name: "Minuman",
            },
            {
                id: 3,
                name: "Desert",
            },
        ],
    })
}

exports.storeCategory = async (req, res) => {
    let name = req.body.name;
    let description = req.body.description;

    if(!name && !description) {
        return res.status(400).json({
           status: "failed",
           error: "Please provide name and description"
        })
    }

    return res.status(200).json({
        status: "success",
        message: "Category created",
        data: {
            name,
            description
        }
    })
}