import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private titleSerivce: Title) { }

  ngOnInit(): void {
    console.log('supppp')
    this.titleSerivce.setTitle('404');
  }


}
