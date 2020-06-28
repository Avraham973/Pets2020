import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: './server/file',
  filename(req, file, cb) {
    cb(null, `IMAGE-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const files = multer({
  storage
});

module.exports = files;
