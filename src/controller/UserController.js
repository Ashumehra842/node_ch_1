const User = require('../model/user.js');

exports.myfun = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Hello from controller',
    data: Object,
  });
};

exports.insert = async (req, res) => {
  const { username, email, password } = req.body;

  const user = { username, email, password };
  try {
    const response = await User.create(user);
    res.status(200).json({
      status: 200,
      message: 'Data Added Successfully.!',
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Failed',
      data: Object,
    });
  }
};

exports.getUser = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const response = await User.findById(id);

    res.status(200).json({
      status: 200,
      message: 'View User data Successfully.!',
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error,
      data: Object,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const deleteUser = { id: id };
    const response = await User.findByIdAndDelete(deleteUser);
    res.status(200).json({
      status: 200,
      message: 'Data Deleted Successfully.!',
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: 'user not found',
    });
  }
};
