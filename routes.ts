import {ImageController} from './src/api/ImageController'
import { Section1Controller } from './src/api/section1Controller'
import { DynmamicApiController } from './src/api/dynamicApiController'

const imageController = new ImageController();
const section1Controller = new Section1Controller();
const dynmamicApiController = new DynmamicApiController();

export class Routes{
    public apiRoutes(server:any): void{
        server.get('/api/images', imageController.getImages);
        server.get('/api/section1', section1Controller.getAllData);
        server.post('/api/section1', section1Controller.postData);
        server.put('/api/section1', section1Controller.updateData);
        server.delete('/api/section1/:id', section1Controller.deleteData);
        server.delete('/api/deleteImage/:name',  imageController.deleteImage);
        server.get('/ng/api/dynamicApi/get/:url',  dynmamicApiController.getAllData);
        server.post('/ng/api/dynamicApi/update',  dynmamicApiController.updateData);
        server.post('/ng/api/dynamicApi/delete',  dynmamicApiController.deleteData);
        server.post('/ng/api/dynamicApi/add',  dynmamicApiController.postData);
        server.post('/ng/api/dynamicApi/update/v2',  dynmamicApiController.updateData);
        server.get('/ng/api/DynamicPageContent/pagename/:url',  dynmamicApiController.getDynamicData);
    }
}