import { Injectable, InjectionToken, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from "rxjs";

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

@Injectable()
export class HotelServiceProxy {
    constructor(
        private http: HttpClient,
        @Inject(API_BASE_URL) private baseUrl: string,
    ) { }

    getProducts(input): Observable<any> {
        let url_ = this.baseUrl + '/api/getUserInfo';
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            body: JSON.stringify(input),
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        }

        return Observable.create((observer) => {
            setTimeout(() => {
                observer.next([
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10001, merchantId: 'a0001' },
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10002, merchantId: 'a0002' },
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10003, merchantId: 'a0003' },
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10004, merchantId: '' },
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10005, merchantId: '' },
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10006, merchantId: '' },
                    { title: 'Apple Watch Series 3智能手表', price: '2068元', img: '/assets/images/watch.jpg',id: 10007, merchantId: '' }
                ])
            },500)
        })

    }
}