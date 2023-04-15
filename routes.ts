import {ImageController} from './src/api/ImageController'
import { Section1Controller } from './src/api/section1Controller'
import { UploadImageController } from './src/api/uploadImageController'
import { LoginCredentialController } from './src/api/loginCredentialController'

const imageController = new ImageController();
const section1Controller = new Section1Controller();
const uploadImageController = new UploadImageController();
const loginCredentialController = new LoginCredentialController();

export class Routes{
    public apiRoutes(server:any): void{
        server.get('/api/images', imageController.getImages);
        server.get('/api/section1', section1Controller.getAllData);
        server.post('/api/section1', section1Controller.postData);
        server.put('/api/section1', section1Controller.updateData);
        server.delete('/api/section1/:id', section1Controller.deleteData);
        server.post('/api/uploadImage',  uploadImageController.uploadImages);
        server.delete('/api/deleteImage/:name',  imageController.deleteImage);
        server.post('/ng/api/loginCredential',  loginCredentialController.findLoginCredential);
        server.post('/ng/api/getAllUsers',  loginCredentialController.findAllLoginCredential);

        
    }
}