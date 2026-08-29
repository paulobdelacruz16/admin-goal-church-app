
import fetch from 'node-fetch';
const host = process.env['HOST'];

export class DynmamicApiController {
  
   async getAllData(req: any, res: any) {
    console.log('welcome to get all data DynmamicApiController test');
    const param = req.params.url.replace(/^./, "");
    var url = `${host}/api/${param}`
    console.log('url', url);
    var response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    console.log('data', data);
    res.status(200).send({data});
    return data;
  }

  async getDynamicData(req: any, res: any) {
    console.log('welcome to get all data DynmamicApiController test1');
    const param = req.params.url.replace(/^./, "");
    console.log('param123', param);
    var url = `${host}/api/DynamicPageContent/${param}`
    var response = await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    res.status(200).send({data});
    return data;
  }


  async postData(req: any, res: any) {
    var url = `${host}/${req.body.url}`
    var response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req.body.body),
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    res.status(200).send({data});
    return data;
  }

  async updateData(req: any, res: any) {
    console.log('welcome to update data');
    var url = `${host}/${req.body.url}/${req.body.id}`
    console.log('url', url);
    console.log('req.body', req.body);
    var response = await fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req.body.body),
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    res.status(200).send({data});
    return 'data';
  }

  async updateDataV2(req: any, res: any) {
    console.log('welcome to update data');
    var url = `${host}/${req.body.url}/${req.body.id}`
    var response = await fetch(url, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req.body.body),
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    res.status(200).send({data});
    return data;
  }

  async deleteData(req: any, res: any) {
    var url = `${host}/${req.body.url}/${req.body.id}`
    var response = await fetch(url, {
      method: 'DELETE',
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    res.status(200).send({data});
    return data;
  }
}
