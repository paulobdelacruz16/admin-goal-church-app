import {ImageController} from './src/api/ImageController'
const imageController = new ImageController();

export class Routes{
    public apiRoutes(server:any): void{
        server.get('/api/images', imageController.getImages);
    }
}