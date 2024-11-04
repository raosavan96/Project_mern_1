const ProductsCollecation = require("../module/adminProducts");
const userQueryCollecation = require("../module/query");
const  nodemailer = require("nodemailer")

exports.addPriductsControl = async (req, res) => {
  const { title, description, price, rating } = req.body;

  const productImg = req.file.filename;

  const record = new ProductsCollecation({
    title: title,
    description: description,
    price: price,
    rating: rating,
    proimg: productImg
  });

  await record.save(record);
  res.json({ message: "Successfully add product..." });
};

exports.productDataControl = async (req, res) => {
  const products = await ProductsCollecation.find();
  res.json(products);
};

exports.updateIdControl = async (req, res) => {
  const { uid } = req.params;

  const findidUpdate = await ProductsCollecation.findById(uid);
  res.json(findidUpdate);
};

exports.updatedValueControl = async (req, res) => {
  const { UpTitle, Updescription, Upprice, Uprating, status } = req.body;
  const { nid } = req.params;

  await ProductsCollecation.findByIdAndUpdate(nid, {
    title: UpTitle,
    description: Updescription,
    price: Upprice,
    rating: Uprating,
    productstatus: status
  });

  res.json({ message: "Successfully updated..." });
};

exports.deleteDataControl = async (req, res) => {
  const { did } = req.params;

  await ProductsCollecation.findByIdAndDelete(did);

  res.json({ message: "Successfully Deleted..." });
};

exports.userQueryControl = async (req, res) => {
  const querysData = await userQueryCollecation.find();
  res.json(querysData);
};

exports.replyUserControl = async (req, res) => {
  const { rid } = req.params;

  const replyUser = await userQueryCollecation.findById(rid);
  res.json(replyUser);
};

exports.queryReplyDataControl = async (req, res) => {
  const { to, reply, sub } = req.body;
  const { cid } = req.params;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "dkexpress06@gmail.com",
      pass: "isrluqaunwephlts"
    }
  });

  await userQueryCollecation.findByIdAndUpdate(cid, {
    queryStatus: "Read"
  });

  const info = transporter.sendMail({
    from: "dkexpress06@gmail.com", // sender address
    to: to, // list of receivers
    subject: sub, // Subject line
    text: reply, // plain text body
    html: reply // html body
  });

  res.json({ message: "Successfully Replyed..." });
};

exports.queryDeleteControl = async (req, res) => {
  const { did } = req.params;

  await userQueryCollecation.findByIdAndDelete(did);
  res.json({ message: "Successfully query deleted..." });
};

exports.statusdetailsControl = async (req, res) => {
  const {sid} = req.params
  const statusData = await ProductsCollecation.findById(sid);
  res.json(statusData);
};
