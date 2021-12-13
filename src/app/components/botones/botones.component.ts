import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  regiones: string[] = [
    'Africa',
    'Americas', 
    'Asia', 
    'Europe', 
    'Oceania'
  ]

  obs = new Observable<number[]>(sus=>{
    sus.next([1,2,3]);
    sus.next([-4,-5]);
  }).pipe(
    tap(aca=>{
      if(aca[0] == 1 || aca[0] == 4){
        console.log('En el tap');
      }
    }),
    filter(numero => numero.length > 2),
    map(aca=>{
      console.log('En el map');
      aca.forEach(c=>{
        console.log(c);
      });
      return aca[0];
    })
    
  )
  

  constructor(private country: CountryService) { }

  ngOnInit(): void {
    this.obs.subscribe(data=>{
      const i = data;
      console.log('Valor de i ahora: ',i);
    })
  }

  activarRegion(region: string) {
    this.country.getByRegion(region)
                .subscribe(response => {
                  console.log(response);
                }).unsubscribe
  }

}
