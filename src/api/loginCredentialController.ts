
import fetch from 'node-fetch';
const host = process.env['HOST'];

export class LoginCredentialController {
  
  async findByloginCredential(req: any, res: any) {
    var url = `${host}/api/findByloginCredential`
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
  
  async findAllLoginCredential(req: any, res: any) {
    var url = `${host}/api/loginCredential`
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
}
