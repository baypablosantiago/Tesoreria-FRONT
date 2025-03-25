import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-dash-button',
  templateUrl: 'dash-button.component.html',
  styleUrl: 'dash-button.component.scss',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class DashButtonComponent {}
