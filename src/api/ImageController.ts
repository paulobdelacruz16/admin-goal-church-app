const path = require('path');
const fs = require('fs');
export class ImageController {
  
  getImages(req: any, res: any) {
    const directoryPath = path.join(__dirname, '../../../../public_images');
    console.log('directoryPath', directoryPath);
    fs.readdir(directoryPath, function (err: any, files: any[]) {
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      res.status(200).send({ data: files, location: directoryPath });
    });
  }

  deleteImage(req: any, res: any) {
    const fileName = req.params.name.replace(/^./, "");
    const directoryPath = path.join(__dirname, '../../../../public_images/');
    try {
      fs.unlinkSync(directoryPath + fileName);
  
      res.status(200).send({
        message: "File is deleted.",
      });
    } catch (err) {
      res.status(500).send({
        message: "Could not delete the file. " + err,
      });
    }
  }
}
