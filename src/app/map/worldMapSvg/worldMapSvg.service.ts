import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WorldMapSvgService {

    constructor(private http: HttpClient) {}

    fetchAllCountryData(): Observable<Object> {
        return this.http.get('https://api.worldbank.org/V2/country?format=json');
    }
}