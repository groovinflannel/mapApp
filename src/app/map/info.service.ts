import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InfoService {

    newCountry = {
        "name": '',
        "capital": '',
        "region": '',
        "incomeLevel": '',
        "longitude": '',
        "latitude": ''
    };

    constructor(private http: HttpClient) {}

    fetchCountryData(): Observable<Object> {
        return this.http.get('https://api.worldbank.org/V2/country/all?format=json&per_page=300');
    }

    getCountryDataByName(countryName: string) {
        this.fetchCountryData().subscribe(res => {
    
          for (let i = 0; i < res[1].length; i++) {
            if (countryName === res[1][i]["name"]) {
              this.newCountry.name = res[1][i]["name"];
              this.newCountry.capital = res[1][i]["capitalCity"];
              this.newCountry.region = res[1][i]["region"]["value"];
              this.newCountry.incomeLevel = res[1][i]["incomeLevel"]["value"];
              this.newCountry.longitude = res[1][i]["longitude"];
              this.newCountry.latitude = res[1][i]["latitude"];
            }
          }
          
          return this.newCountry;
        });
    
      }

      returnCountryObject() {
        return this.newCountry;
    }
}