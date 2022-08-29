import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  item: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onLike(e){        
    this.item++;   
    switch (this.item) {
      case 5:
        document.querySelector('.btn-like').classList.add('blue');        
        break;

      case 10:
        document.querySelector('.btn-like').classList.add('red');
        break;  
    
      default:
        break;
    }
  }


  onShare(url: string){
    window.open(url, "_blank");
  }

}
