import {ImageController} from './src/api/ImageController'
import { Section1Controller } from './src/api/section1Controller'

const imageController = new ImageController();
const section1Controller = new Section1Controller();


export class Routes{
    public apiRoutes(server:any): void{
        server.get('/api/images', imageController.getImages);
        server.get('/api/section1', section1Controller.getAllData);
        server.post('/api/section1', section1Controller.postData);
        server.put('/api/section1', section1Controller.updateData);
        server.delete('/api/section1/:id', section1Controller.deleteData);

    }
}