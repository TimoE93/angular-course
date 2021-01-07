import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [`
    div {
      width: 100px;
      height: 100px;
      background-color: green;
    }
  `]
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClick() {
    this.clicked.emit('Neuer Text');
  }
}
