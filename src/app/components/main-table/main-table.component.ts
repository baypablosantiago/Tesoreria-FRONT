import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StatesComponent } from "../states/states.component";
import { DashButtonComponent } from "../dash-button/dash-button.component";

export interface PolicyData {
  number: string;
  concept: string;
  states: { name: string; checked: boolean }[];
}

const CONCEPTS: string[] = [
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Compra de equipos informáticos',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicio de mantenimiento de edificios',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Adquisición de mobiliario de oficina',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Construcción de carreteras',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Suministro de material de oficina',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicio de transporte',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Consultoría en tecnología',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Contratación de personal de seguridad',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Implementación de software empresarial',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Mantenimiento de equipos médicos',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicios de telecomunicaciones',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Diseño y construcción de parques',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Producción de material educativo',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicios de limpieza',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Capacitación para empleados',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Alquiler de vehículos oficiales',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Implementación de energías renovables',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Suministro de alimentos para comedores',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Desarrollo de plataformas web',
];


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-main-table',
  styleUrl: 'main-table.component.scss',
  templateUrl: 'main-table.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, StatesComponent, DashButtonComponent],
})
export class MainTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['number', 'concept', 'states', 'action'];
  dataSource: MatTableDataSource<PolicyData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Genera un conjunto de estados aleatorios */
function generateRandomStates(): { name: string; checked: boolean }[] {
  const stateNames = ['Recibida en correo', 'Cargado en SIAF', 'Retención Pagada'];
  return stateNames.map(name => ({
    name,
    checked: Math.random() > 0.5, // Aleatoriamente true o false
  }));
}

/** Builds and returns a new User. */
function createNewUser(nro: number): PolicyData {
    const concept = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
  return {
    number: nro.toString(),
    concept: concept,
    states: generateRandomStates(),
  };
}