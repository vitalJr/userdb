import File from '../models/File';

class FileController {

    async store(req, res) {
        const file = await File.create({
            name: req.file.originalname,
            path: req.file.filename
        })

        return res.json(file);
    }

}

export default new FileController();