import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interfaces/country.interface';
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl: string = 'https://restcountries.eu/rest/v2/region';
  nombrePaises: string[] = []

  constructor(private http: HttpClient) { }

  getByRegion(region: string) {
    const url = `${this.baseUrl}/${region}`;
    return this.http.get<Pais[]>(url)
                    .pipe(
                      map(response => {
                        this.nombrePaises = [];
                        response.forEach(c => {
                          this.nombrePaises.push(c.name);
                        })
                        return this.nombrePaises;
                      })
                    )
  }
}
