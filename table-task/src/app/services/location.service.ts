import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) { }
  public message: string = "Uninitialized";
  private apiURL = "https://api.megaport.com/v2/locations";

  public response:any;
  async getLocations() {
    this.message = "Fetching..";
    this.response = "";
    this.response = await this.http
      .get<any>(this.apiURL)
      .pipe(delay(1000))
      .subscribe();
    this.message = "Fetched";
  }

}