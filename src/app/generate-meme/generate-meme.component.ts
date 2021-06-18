import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { MemeGeneratorService } from '../services/meme-generator.service';

@Component({
  selector: 'app-generate-meme',
  templateUrl: './generate-meme.component.html',
  styleUrls: ['./generate-meme.component.css']
})
export class GenerateMemeComponent implements OnInit {

  id: number;
  memeResponse: any;
  memeUrl: any;
  lastestMemes: Array<any> = [];

  constructor(private route: ActivatedRoute, private memeGenerator: MemeGeneratorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.parametro;
    this.getMemeImgUrlById(this.id);
  }
  generateMeme(text0: any, text1: any){
    var data = {
      username: "Tarica",
      password: "taricatarica",
      text1: text1,
      text0: text0,
      template_id: this.id
    }
    this.memeGenerator.createMeme(data).subscribe(data => {
      this.memeResponse = data
      this.lastestMemes.push(data);
    });
  }
  getMemeImgUrlById(id: any){
    var memesList;
    this.memeGenerator.getMemes().subscribe(data => {
      memesList = data.data.memes
      for(let meme of memesList){
        if(meme.id == id){
          this.memeUrl =meme.url;
        }
      }
    });
  }

}
