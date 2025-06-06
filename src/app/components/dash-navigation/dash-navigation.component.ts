import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash-navigation',
  templateUrl: './dash-navigation.component.html',
  styleUrl: './dash-navigation.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    DashboardComponent,
]
})
export class DashNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // Obtener el número de la póliza desde la URL
  constructor(private route: ActivatedRoute) {}
  
  // Puedes acceder al número de la póliza de esta forma:
  get number(): string | null {
    return this.route.snapshot.paramMap.get('number');
  }
}
