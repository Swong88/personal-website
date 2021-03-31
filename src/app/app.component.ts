import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  ngOnit(): void{
    this.innerWidth =  window.innerWidth;
  }

  /**
   * 
   * @returns 
   */
  isMobile(){
    return innerWidth <= 1260;
  }

  
  /**
   * 
   */
   scrollUp(){
    window.scroll(0,0);
}
}
