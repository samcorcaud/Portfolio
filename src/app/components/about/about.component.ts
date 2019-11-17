import { Component } from '@angular/core';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  competences = [{url : '../../../assets/icons/javascript.png', isHovered : false, text : 'Javascript ES6'},
    {url : '../../../assets/icons/matlab.png', isHovered : false, text : 'Matlab'},
    {url : '../../../assets/icons/angular.svg', isHovered : false, text : 'Angular'},
    {url : '../../../assets/icons/react.png', isHovered : false, text : 'React & React-Native'},
    {url : '../../../assets/icons/node.png', isHovered : false, text : 'Node Js'}
  ];
}
