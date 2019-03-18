import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { GraficosService } from '../../servicios/graficos.service';
import { Router } from '@angular/router';

export interface DatosPersonas {
  id: number;
  nombre: string;
  fecha: Date;
  value: string;
}

 @Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  constructor(private graficos: GraficosService, private router: Router) { }

  displayedColumns: string[] = ['Id', 'nombre', 'fecha', 'value'];
  dataSource = new MatTableDataSource<DatosPersonas>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    if (localStorage.getItem('session') === null) {
      this.router.navigate(['']);
    } else {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.graficos.getDatos().subscribe(data => {
        this.dataSource.data = data;

        console.log(this.dataSource);
      });
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('session');
    this.router.navigate(['']);
  }

}





