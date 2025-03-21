import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MainTableComponent } from "./components/main-table/main-table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, MainTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tesoreria-FRONT';
}