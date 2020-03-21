import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvel Heroes';

  onButtonGroupClick($event) {
    const clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === 'BUTTON') {

      const isActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isActive) {
        isActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }

  }
}
