import multer from "multer";
import path from "path";


const fileStorageEngine = multer.diskStorage({
    destination: path.resolve("./media/bookfoto/"), 
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });

 


  const homefileStorageEngine = multer.diskStorage({
    destination: path.resolve("./media/carusel"), 
    filename: (req, file, cb) => {
      cb(null,  Date.now() + "--" + file.originalname);
    },
  });



const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' 
        || file.mimetype === 'image/jpeg'){
            cb(null, true);
        }else {
            cb(null, false);
        }
}


export const upload = multer({storage: fileStorageEngine, fileFilter: filefilter});
export const homeupload = multer({storage: homefileStorageEngine, fileFilter: filefilter});

