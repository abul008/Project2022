import multer from "multer";


const fileStorageEngine = multer.diskStorage({
    destination: '../AmyBoxingCompanent/media/bookfoto/', //important this is a direct path fron our current file to storage location
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    },
  });


  const caruselfileStorageEngine = multer.diskStorage({
    destination: '../AmyBoxingCompanent/media/carusel/', 
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
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
export const caruselupload = multer({storage: caruselfileStorageEngine, fileFilter: filefilter});

