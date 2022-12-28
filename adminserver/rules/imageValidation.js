const multer = require('multer')
const path = require('path')

// get image file
const storage = multer.diskStorage({
  destination: (req, file, call) => {
    call(null, 'uploads')
  },
  filename: (req, file, call) => {
    call(null, Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({
  storage,
  limits: {
    fileSize: 100000,
    fileFilter: (req, file, call) => {
      const fileTypes = /jpeg|jpg|JPEG|JPG|PNG|png|svg|SVG/
      const minType = fileTypes.test(file.mimetype)
      const extname = fileTypes.test(path.extname(file.originalname))

      if (minType && extname) {
        return call(null, true)
      } else {
        return call('The image format type is not allowed')
      }
    },
  },
}).fields([
  {
    name: 'home_img',
    maxCount: 1,
  },
  {
    name: 'away_img',
    maxCount: 1,
  },
])

module.exports = upload
