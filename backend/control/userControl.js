const userCollecation = require("../module/user");
const adminProductsCollecation = require("../module/adminProducts");
const userQueryCollecation = require("../module/query");

exports.homeControl = (req, res) => {
  res.send("Home page...");
};

exports.signupControl = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    let record = new userCollecation({
      username: userName,
      useremail: userEmail,
      password: userPassword
    });

    await record.save(record);

    res.status(200).json({ message: "Successfully Insert db..." });
  } catch {
    res.status(500).json({ message: "Server error..." });
  }
};

exports.returndatalogin = async (req, res) => {
  const loginData = await userCollecation.find();
  res.send(loginData);
};

exports.loginUserDataControl = async (req, res) => {
  const { idUser, passUser } = req.body;

  let checkId = await userCollecation.findOne({ useremail: idUser });

  if (checkId !== null) {
    if (checkId.password == passUser && checkId.useremail == idUser) {
      res.json({ checkId, message: "Successfully Login..." });
    } else {
      res.json({ message: "Email and Password did not match..." });
    }
  } else {
    res.json({ message: "Email and Password did not match..." });
  }
};

exports.productpageControl = async (req, res) => {
  const data = await adminProductsCollecation.find({
    productstatus: "In-of-Stock"
  });
  res.json(data);
};

exports.queryDataControl = async (req, res) => {
  try {
    const { mail, userQuery } = req.body;

    console.log(userQuery);

    let recordQuery = new userQueryCollecation({
      useremail: mail,
      userquery: userQuery
    });

    await recordQuery.save(recordQuery);
    res.status(200).json({ message: "Successfully send query..." });
  } catch {
    res.status(500).json({ message: "Server error..." });
  }
};
