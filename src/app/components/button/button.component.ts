import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string = '#999'; // Attribute
  @Input() text: string = 'Click';

  @Output() customClick = new EventEmitter()

  handleButtonClick () {
    this.customClick.emit()
  }

}