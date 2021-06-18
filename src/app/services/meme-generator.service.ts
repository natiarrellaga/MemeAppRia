import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meme } from '../interfaces/meme';

@Injectable({
  providedIn: 'root'
})
export class MemeGeneratorService {

  api_url: string = 'https://api.imgflip.com/';

  constructor(private http: HttpClient) { }

  getMemes(){
    return this.http.get<any>(this.api_url+"get_memes");
  }
  createMeme(meme: any){
    const params = new URLSearchParams();
    params.set('username', meme.username);
    params.set('password', meme.password);
    params.set('text1', meme.text1);
    params.set('text0', meme.text0);
    params.set('template_id', meme.template_id);

    return this.http.post(this.api_url+`caption_image?${params.toString()}`, params, {
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
  });
  }

}
