import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'topbar-component',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  @Output() clickTopBar = new EventEmitter<string>();
  isOpen = false;
  click = '';

  toogle() {
    this.isOpen = !this.isOpen;
  }

  homeIsClicked() {
    this.click = 'home';
    this.clickTopBar.emit(this.click);
  }

  aboutIsClicked() {
    this.click = 'about';
    this.clickTopBar.emit(this.click);
  }

  resumeIsClicked() {
    this.click = 'resume';
    this.clickTopBar.emit(this.click);
  }

  contactIsClicked() {
    this.click = 'contact';
    this.clickTopBar.emit(this.click);
  }


}
