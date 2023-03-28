export class ImageController {
    getImages(req: any, res: any){
        // console.log(res, req)
        res.status(200).send('IMAGES SUCCESSFULY RETURN')
    }
}