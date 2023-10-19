const { Category, Product } = require("../models");
const asyncHandle = require("../middleware/asyncHandler");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({
      status: "Success",
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: "Server Error",
    });
  }
};

exports.detailCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id , {
      include: [
        {
          model: Product,
          attributes: {exclude : ["categoryId"]},
        }
      ]
    });
    if (!category) {
      return res.status(404).json({
        status: "Fail",
        error: "Category not found",
      });
    }
    return res.status(200).json({
      status: "Success",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Fail",
      error: "Server Error",
    });
  }
};

exports.storeCategory = asyncHandle (async (req, res) => {
    const { name, description } = req.body;

    const newCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({
      status: "Success",
      data: newCategory,
    });
});

exports.updateCategory = asyncHandle(async (req, res) => {
  const id = req.params.id;
  await Category.update(req.body, {
    where: {
      id: id,
    },
  });
  const updatedCategory = await Category.findByPk(id);
  if (!updatedCategory) {
    res.status(404);
    throw new Error("Category not found");
  }

  return res.status(200).json({
    status: "Success",
    data: updatedCategory,
  });
});

exports.deleteCategory = async (req, res) => {
  const id = req.params.id;
  const idCategory = await Category.findByPk(id);

  if (!idCategory) {
    return res.status(404).json({
      status: "Fail",
      error: "Category not found",
    });
  }

  await Category.destroy({
    where: {
      id: id,
    },
  });

  return res.status(200).json({
    status: "Success",
    message: `Category with id ${id} deleted`,
  });
};
