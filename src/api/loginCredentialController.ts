
import fetch from 'node-fetch';

export class LoginCredentialController {
  
  async findLoginCredential(req: any, res: any) {
    var url = "http://localhost:3001/api/loginCredential"
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
}
