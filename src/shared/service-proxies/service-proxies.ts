import { Injectable, InjectionToken, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class SessionServiceProxy {
    constructor(
        private http: HttpClient,
        @Inject(API_BASE_URL) private baseUrl: string,
    ) { }
    
    getUserInfo(input): Observable<any>{
        let url_ = this.baseUrl + '/api/getUserInfo';
        url_ = url_.replace(/[?&]$/,"");

        let options_ = {
            body: JSON.stringify(input),
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        }

        return this.http.request('post',url_, options_)

    }
}