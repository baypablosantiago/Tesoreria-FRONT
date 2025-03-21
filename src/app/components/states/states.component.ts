import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface State {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
  imports: [CommonModule, MatIconModule],
})
export class StatesComponent {
  @Input() states: State[] = [
    { name: 'Recibida en correo', checked: false },
    { name: 'Cargada en SIAF', checked: false },
    { name: 'Con expediente', checked: false },
    { name: 'Retención Pagada', checked: false }
  ];

  // Método para que el sistema actualice los estados
  updateState(index: number, checked: boolean) {
    this.states[index].checked = checked;
  }
}
