// import File from '../models/File';
const File = require('../models/File');

class FileController {

    async store(req, res) {
        const file = await File.create({
            name: req.file.originalname,
            path: req.file.filename
        })

        return res.json(file);
    }

}

module.exports = new FileController();
// export default new FileController();