import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { my_friend } from 'src/app/interfaces/my_friend.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input('lista') dataSource: my_friend[] = [];

  constructor() { }
  
  ngOnInit(): void {
  }


}
