
import fetch from 'node-fetch';

export class Section1Controller {
  
   async getAllData(req: any, res: any) {
    var url = "http://localhost:3001/api/section1"
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
    var url = "http://localhost:3001/api/section1"
    var response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req.body),
    }).then((response: any) => {
      return response;
    }).catch((err: any) => {console.log(err);});
    const data = await response.json();
    res.status(200).send({data});
    return data;
  }

  async updateData(req: any, res: any) {
    console.log('welcome to update data');
    var url = `http://localhost:3001/api/section1/${req.body.id}`
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
    let id = req.params.id.replace(/^./, "");
    var url = `http://localhost:3001/api/section1/${id}`
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
