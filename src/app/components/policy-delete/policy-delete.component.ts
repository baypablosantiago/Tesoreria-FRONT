import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-policy-delete',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './policy-delete.component.html',
  styleUrl: './policy-delete.component.scss'
})
export class PolicyDeleteComponent {

}
