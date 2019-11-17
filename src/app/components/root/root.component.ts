import { Component } from '@angular/core';

@Component({
  selector: 'root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {

  getclick : string;

  getClickTopbar(click: string) {
    this.getclick = click;
    console.log('voici le click', this.getclick);
    if (this.getclick === 'home') {
      document.getElementById('home').scrollIntoView({behavior: 'smooth'});
    }
    if (this.getclick === 'about') {
      document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    }
    if (this.getclick === 'resume') {
      document.getElementById('resume').scrollIntoView({behavior: 'smooth'});
      //document.getElementById('resume').scrollBy(0, 790);
      //window.scrollTo({behavior: 'smooth', top: 1580});
    }
    if (this.getclick === 'contact') {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }
  }


}
