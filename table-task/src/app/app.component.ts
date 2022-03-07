import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  ELEMENT_DATA: any[] = []; 
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  constructor(private dataService: DataService){

  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(data => {
        console.log('data ', data);
        this.dataSource.data = data as any[];
      });
  }

  displayedColumns = ['id', 'type', 'name', 'topping'];
}
