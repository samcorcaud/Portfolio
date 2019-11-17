import { Component } from '@angular/core';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = [{url : '../../../assets/icons/linkedin_white.svg', id : 'linkedIn', isHovered : false, text : 'LinkedIn profil'},
    {url : '../../../assets/icons/mail_white.svg', id : 'email', isHovered : false, text : 'Send an email'},
    {url : '../../../assets/icons/github_white.svg', id : 'github', isHovered : false, text : 'Repo Github'}
  ];

  contactsClicked(contactClicked: string) {
    if (contactClicked === 'linkedIn') {
      window.open('https://www.linkedin.com/in/samuelcorcaud/');
    }
    if (contactClicked === 'email') {
      window.open('mailto:samcorcaud@gmail.com?Subject=Let\'s get in touch !');
    }
    if (contactClicked === 'github') {
      window.open('http://github.com/samcorcaud');
    }
  }
}


