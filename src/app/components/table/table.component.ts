import {  AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { my_friend } from '../../interfaces/my_friend.interface';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  
  dataSource: my_friend[] = [];
  displayedColumns: string[] = ['id','gender', 'name', 'lastName'];
  @ViewChild('table') table!: MatTable<any>;

  constructor(private socket: SocketService) { }

  ngAfterViewInit(): void {
    this.socket.listen('actualizacion')
              .subscribe((resp)=>{
                
                this.dataSource.unshift(resp); 
                this.table.renderRows();
              })
  }
  
  ngOnInit(): void {
    /*
    this.socket.listen('actualizacion')
              .subscribe((resp)=>{
                
                this.dataSource.unshift(resp); 
                this.table.renderRows();
              })
              */
    
  }

}
