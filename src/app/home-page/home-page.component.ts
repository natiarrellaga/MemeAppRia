import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MemeGeneratorService } from '../services/meme-generator.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  memes: any;
  p: number = 1;
  id_meme: any;

  constructor(private memeGenerator: MemeGeneratorService) {
  }

  ngOnInit(): void {
    this.memeGenerator.getMemes().subscribe(images => {
      console.log(images.data.memes);
      this.memes = images.data.memes;
    })
  }
}

