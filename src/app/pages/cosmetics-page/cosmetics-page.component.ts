import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmetics-page',
  templateUrl: './cosmetics-page.component.html',
  styleUrls: ['./cosmetics-page.component.css']
})
export class CosmeticsPageComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  quotes=[
          "\"Beauty is power; a smile is its sword.\" - John Ray",
          "\"The beauty of a woman is not in a facial mode but the true beauty in a woman is reflected in her soul.\" - Audrey Hepburn",
          "\"To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself.\” - Thich Nhat Hanh",
          "\"Beauty is not in the face; beauty is a light in the heart.\" - Kahlil Gibran",
          "\"Cosmetics are like perfume for the soul.\" - Christian Dior",
          "\"Beauty is not something physical. It’s something spiritual, coming from inside, radiating out.\" - Erykah Badu",
          "\"True beauty in a woman is reflected in her soul. It’s the caring that she lovingly gives, the passion that she shows & the beauty of a woman only grows with passing years.\" - Audrey Hepburn",
          "\"The beauty of a woman is not in the clothes she wears, the figure that she carries, or the way she combs her hair. The beauty of a woman is seen in her eyes, because that is the doorway to her heart, the place where love resides.\" - Audrey Hepburn"
  ]
  ngOnInit(): void {
    console.log("In Cosmetic Page");
    //this.selectOne();
  }
  ngOndestroy() {
     this.elementRef.nativeElement.remove();
    this.stop_timer();
    console.warn("distroying timer");
  }

  inverval_timer:any;
  selectOne(){
    this.inverval_timer = setInterval(() => { 
      console.log("5 seconds completed");
      console.log(this.quotes[Math.max(0,Math.floor(Math.random()*10)-2)]);
  }, 5000);
    
  }
  
      
  //IF you want to stop above timer
  stop_timer() {
      clearInterval(this.inverval_timer); 
}
}
