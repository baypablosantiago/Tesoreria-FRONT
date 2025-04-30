import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-endorsement-row',
  imports: [],
  templateUrl: './endorsement-row.component.html',
  styleUrl: './endorsement-row.component.scss'
})
export class EndorsementRowComponent {
  @Input() number!: string;
  @Input() amount!: number;

  get endorsementAmount(): string {
    return this.amount == 0 ? 'Ninguno.' : this.amount.toString();
  }
}

