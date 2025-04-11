import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StatesComponent } from '../states/states.component';
import { DashButtonComponent } from '../dash-button/dash-button.component';
import { RouterModule } from '@angular/router';
import { PolicyCreateComponent } from "../policy-create/policy-create.component";
import { Policy } from '../../models/policy';
import { RetrivePolicyService } from '../../services/retrive-policy.service';

const CONCEPTS: string[] = [
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Compra de equipos informáticos para la modernización de las oficinas gubernamentales, incluyendo computadoras, servidores y periféricos de última generación, con el objetivo de optimizar los procesos administrativos y mejorar la eficiencia en la gestión pública. Se requiere también la instalación, configuración y mantenimiento de los equipos, asegurando su compatibilidad con los sistemas existentes.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicio de mantenimiento de edificios públicos, abarcando limpieza profunda, reparaciones estructurales, impermeabilización de techos y mejoras en sistemas eléctricos y de plomería. Se busca garantizar la seguridad y comodidad de los trabajadores y ciudadanos que utilizan estas instalaciones. ',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Adquisición de mobiliario de oficina ergonómico y funcional para mejorar la comodidad y productividad de los empleados. Se requiere la compra de escritorios, sillas, archivadores, estaciones de trabajo modulares y mobiliario especializado para salas de reuniones, asegurando estándares de calidad, durabilidad y ergonomía para reducir problemas de salud ocupacional.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Construcción de carreteras en zonas rurales y urbanas, mejorando la conectividad y facilitando el transporte de bienes y personas. El proyecto incluirá estudios geotécnicos, asfaltado, instalación de señalización vial, construcción de puentes y drenajes, así como medidas de mitigación ambiental para reducir el impacto ecológico de la obra.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Suministro de material de oficina, incluyendo papel, bolígrafos, carpetas, tóner y otros insumos esenciales para el funcionamiento administrativo. Los productos deben cumplir con criterios de calidad y sostenibilidad, priorizando materiales reciclados o ecológicos',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicio de transporte oficial para funcionarios y empleados, con vehículos adecuados para cada tipo de desplazamiento requerido. Se incluye el mantenimiento preventivo y correctivo de las unidades, el suministro de combustible y la capacitación de los conductores en normas de tránsito y seguridad vial.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Consultoría en tecnología para la digitalización de procesos administrativos y la implementación de soluciones innovadoras en gestión pública. Se busca desarrollar estrategias de transformación digital, mejorando la interoperabilidad de sistemas, automatizando trámites y fortaleciendo la ciberseguridad en las plataformas gubernamentales.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Contratación de personal de seguridad capacitado para la vigilancia y protección de instalaciones gubernamentales y espacios públicos. Los guardias deberán contar con formación en prevención de riesgos, manejo de situaciones de emergencia y primeros auxilios, además de estar equipados con tecnología moderna para monitoreo y respuesta rápida.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Implementación de software empresarial para la automatización de tareas y la optimización de recursos en la administración pública.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Mantenimiento de equipos médicos en hospitales y centros de salud, asegurando su correcto funcionamiento y disponibilidad para emergencias. Se incluyen revisiones técnicas periódicas, calibración de equipos, reemplazo de piezas desgastadas y formación para el personal en el uso adecuado de los dispositivos médicos.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicios de telecomunicaciones, incluyendo internet de alta velocidad, telefonía y redes de comunicación para instituciones públicas. Se requiere una infraestructura robusta, con medidas de seguridad para proteger la información gubernamental, garantizando conectividad ininterrumpida y soporte técnico permanente.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Diseño y construcción de parques recreativos y áreas verdes para el esparcimiento y bienestar de la comunidad. El proyecto incluirá senderos, juegos infantiles, iluminación, mobiliario urbano y sistemas de riego automatizados, promoviendo la sostenibilidad y el uso eficiente de los recursos naturales.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Producción de material educativo para escuelas y universidades, incluyendo libros, guías didácticas y plataformas digitales.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Servicios de limpieza y desinfección en edificios públicos, con protocolos de higiene estrictos y uso de productos ecológicos. Se requiere personal capacitado, equipamiento adecuado y procedimientos específicos para la eliminación de residuos, garantizando espacios saludables para trabajadores y ciudadanos.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Capacitación para empleados del sector público en temas de administración, liderazgo, nuevas tecnologías y atención al ciudadano. Los programas de formación deberán estar alineados con las necesidades institucionales, promoviendo el desarrollo profesional y la mejora en la prestación de servicios públicos.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Alquiler de vehículos oficiales para el traslado de funcionarios en misiones oficiales y operativos especiales. Se requiere una flota de vehículos con mantenimiento garantizado, seguros actualizados y conductores con licencia y experiencia comprobada en transporte gubernamental.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Implementación de energías renovables en edificios gubernamentales, promoviendo la sostenibilidad y eficiencia energética. Se incluirán paneles solares, sistemas de captación de agua de lluvia, iluminación LED y otras soluciones ecológicas para reducir el impacto ambiental y los costos operativos.',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Suministro de alimentos para comedores escolares y programas de asistencia social, garantizando calidad y valor nutricional. ',
  'OBJETO DE LA LICITACIÓN O EL CONTRATO: Desarrollo de plataformas web y aplicaciones móviles para facilitar trámites ciudadanos y mejorar la transparencia en la gestión pública. Se requiere una interfaz accesible e intuitiva, con funcionalidades de autogestión y herramientas de participación ciudadana para fortalecer la relación entre gobierno y sociedad.',
];

const COMPANIES: { name: string; cuil: string }[] = [
  { name: 'DEL LITORAL OBRAS, SERVICIOS Y MONTAJES S.A.', cuil: '30-69155938-2' },
  { name: 'CONSTRUCCIONES DEL SUR S.A.', cuil: '30-61234567-8' },
  { name: 'INGENIERÍA Y MONTAJES ARGENTINA S.R.L.', cuil: '30-70987654-3' },
  { name: 'TECNOLOGÍAS AMBIENTALES S.A.', cuil: '30-65432198-7' },
  { name: 'SERVICIOS INDUSTRIALES DEL NORTE S.R.L.', cuil: '30-67895432-1' },
];

const INSURERS: string[] = [
  'IAPSER',
  'La Caja',
  'Federación Patronal',
  'Sancor Seguros',
  'Seguros Rivadavia',
  'La Segunda',
  'San Cristóbal Seguros',
  'Provincia Seguros S.A.',
  'Meridional Seguros',
  'Nación Seguros S.A.',
  'Orbis Seguros',
  'Allianz Argentina',
  'Zurich',
  'BBVA Seguros',
  'Mapfre Argentina',
  'Berkley International',
  'Triunfo Seguros',
  'Galeno Seguros',
  'Paraná Seguros',
  'Boston Seguros',
];

const POLICIES_RECEIPT: string[] = [
  '01/04/2024 - 09:30',
  '02/04/2024 - 14:15',
  '03/04/2024 - 10:45',
  '04/04/2024 - 16:20',
  '05/04/2024 - 11:10',
  '06/04/2024 - 08:50',
  '07/04/2024 - 12:30',
  '08/04/2024 - 15:00',
  '09/04/2024 - 09:00',
  '10/04/2024 - 13:45',
];

@Component({
  selector: 'app-main-table',
  styleUrl: 'main-table.component.scss',
  templateUrl: 'main-table.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    StatesComponent,
    DashButtonComponent,
    RouterModule,
    PolicyCreateComponent
],
})
export class MainTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['number', 'reception','concept', 'company', 'states', 'action'];  dataSource: MatTableDataSource<Policy>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private retrivePolicy: RetrivePolicyService) {
    
    this.dataSource = new MatTableDataSource();
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

  fakeData():void{
    const users = Array.from({length: 100}, (_, k) => createNewPolicy(Math.round(Math.random() * (150000 - 180000) + 150000)));
    this.dataSource = new MatTableDataSource(users);
    this.ngAfterViewInit();
  }

  testApi(){
    this.retrivePolicy.getNewPolicies().subscribe({
      next: (data) => {
        console.log(data)
        alert("WORKING!")
      },
      error: () => {
        alert("dotnet run?")
      }
    });
  }
}

function generateRandomStates(): { name: string; checked: boolean }[] {
  const stateNames = ['Recibida en correo.', 'Cargado en SIAF con concepto: ___', 'Tiene retencion de fondo de reparo.','Retención Pagada.'];
  return stateNames.map(name => ({
    name,
    checked: Math.random() > 0.5, 
  }));
}

function createNewPolicy(nro: number): Policy {
  const concept = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
  const company = COMPANIES[Math.floor(Math.random() * COMPANIES.length)];
  const insurer = INSURERS[Math.floor(Math.random() * INSURERS.length)];
  const receip = POLICIES_RECEIPT[Math.floor(Math.random() * POLICIES_RECEIPT.length)];

  return {
    number: nro.toString(),
    receipt_date: receip,
    concept: concept,
    companyName: company.name,
    companyCuil: company.cuil,
    insurer: insurer,
    states: generateRandomStates(),
  };
}