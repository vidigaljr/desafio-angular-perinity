import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit() {
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    
  }

  onShare(url: string){
    window.open(url, "_blank");
  }

}
