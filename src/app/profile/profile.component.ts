import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  constructor(private titleSerivce: Title, private router: Router) { }

  ngOnInit(): void {
    this.titleSerivce.setTitle('Steven Wong')
  }

 /**
  * 
  * @returns 
  */
  getRoute(): string{
    let url = this.router.url
    return url;
  }

  /**
   * 
   * @returns 
   */
  isMobile(){
    return innerWidth <= 1260;
  }

  openCalendly(){
    window.open('https://calendly.com/wongsteven11/15-minute-meeting');
  }

  scrollUp(){
      window.scroll(0,0);
  }

}
