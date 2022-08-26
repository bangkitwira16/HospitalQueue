import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  httpGet(url: string, params?: any) {
    return this.http
      .get(this.apiUrl + url, params)
      .toPromise()
      .then((res) => res)
      .catch((error) => error);
  }

  httpPost(url: string, payload?: any) {
    return this.http
      .post(this.apiUrl + url, payload)
      .toPromise()
      .then((res) => res)
      .catch((error) => error);
  }

  httpPut(url: string, id: string | undefined, payload?: any) {
    return this.http
      .put(this.apiUrl + `${url}/${id}`, payload)
      .toPromise()
      .then((res) => res)
      .catch((error) => error);
  }

  httpDelete(url: string, id: string | undefined) {
    return this.http
      .delete(this.apiUrl + `${url}/${id}`)
      .toPromise()
      .then((res) => res)
      .catch((error) => error);
  }
}
