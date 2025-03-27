import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MainTableComponent } from './pages/main-table/main-table.component';
import { DashNavigationComponent } from "./pages/dash-navigation/dash-navigation.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, MainTableComponent, DashNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tesoreria-FRONT';
}