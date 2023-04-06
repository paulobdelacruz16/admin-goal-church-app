export class ImageController {
  
  getImages(req: any, res: any) {
    // console.log(res, req)
    console.log('heey');
    // res.status(200).send({data: 'IMAGES SUCCESSFULY RETURN'});

    const path = require('path');
    const fs = require('fs');
    //joining path of directory
    console.log('__dirname', __dirname);
    const directoryPath = path.join(__dirname, '../../../../public_images');
    //passsing directoryPath and callback function
    console.log('directoryPath', directoryPath);

    fs.readdir(directoryPath, function (err: any, files: any[]) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      res.status(200).send({ data: files, location: directoryPath });
    });
  }
}
