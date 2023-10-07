const { Category } = require("../models");

exports.getAllCategories = async (req, res) => {
 
try {
    const categories = await Category.findAll();
    return res.status(200).json({
        status: "Success",
        data: categories
    })
} catch (error) {
    return res.status(500).json({
        status: "Fail",
        error: "Server Error",
    })
}   
};

exports.detailCategory = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findByPk(id);
        if(!category){
            return res.status(404).json({
                status: "Fail",
                error: "Category not found",
            })
        }
        return res.status(200).json({
            status: "Success",
            data: category
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            error: "Server Error",
        })
    }
}

exports.storeCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const newCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({
      status: "Success",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Fail",
      error: error.errors,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.update(req.body, {
      where: {
        id: id,
      },
    });
    const updatedCategory = await Category.findByPk(id);
    if(!updatedCategory){
        return res.status(404).json({
            status: "Fail",
            error: "Category not found",
        })
    }
    return res.status(200).json({
        status: "Success",
        data: updatedCategory,
    })
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: error.errors,
    });
  }
}