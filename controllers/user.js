const {UserData} = require('./../models');
const path = require('path')
exports.userDetail = async (req, res, next) => {
  try{
    const user = await new UserData(req.body);
    await user.save()
    return res.status(200).sendFile(path.join(__dirname, '../', 'files', 'The Accidental Entrepreneur_ The 50 Things I Wish Someone Had Told Me About Starting a Business ( PDFDri.pdf'))
  }catch(err){
    return res.status(400).json({
      status: 400,
      message: err.message
    })
  }
}