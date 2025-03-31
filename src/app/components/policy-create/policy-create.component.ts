import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-policy-create',
  imports: [MatButtonModule, MatDividerModule, MatIconModule,],
  templateUrl: './policy-create.component.html',
  styleUrl: './policy-create.component.scss'
})
export class PolicyCreateComponent {

}
