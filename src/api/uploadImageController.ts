const upload = require("./middleware/upload.js");

export class UploadImageController {
    async uploadImages(req: any, res: any) {
      try {
        await upload(req, res);
        if (req.files.length <= 0) {
          return res.send(`You must select at least 1 file.`);
        }
    
        return res.status(200).send({data: `Files has been uploaded.`});
      } catch (error:any) {
        if (error.code === "LIMIT_UNEXPECTED_FILE") {
          return res.send("Too many files to upload.");
        }
        return res.send(`Error when trying upload many files: ${error}`);
      }
  }
}
