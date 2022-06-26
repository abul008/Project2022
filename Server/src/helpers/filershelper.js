import multer from "multer";
import path from "path";

const fileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, path.resolve(`./media/${req.params.upload}`))
  },
  filename: (req, file, cb) => {
  cb(null, Date.now() + "--" + file.originalname);
  }
 }
)

const homefileStorageEngine = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, path.resolve(`./media/${req.params.upload}`))
  },
  // destination: path.resolve("./media/carusel"), 
  filename: (req, file, cb) => {
  cb(null,  Date.now() + "--" + file.originalname);
  }
})

const filefilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
    cb(null, true);
  }else {
    cb(null, false);
  }
}

export const upload = multer({storage: fileStorageEngine, fileFilter: filefilter})
export const homeupload = multer({storage: homefileStorageEngine, fileFilter: filefilter})

