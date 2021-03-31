import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
// import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebookF";
// import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
// import faLinkedinIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn";
// import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
// import faEnvelope from "@fortawesome/fontawesome-free-regular/faEnvelope";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleSerivce: Title) { }

  ngOnInit(): void {this.titleSerivce.setTitle('Contact | Steven Wong');}

}
