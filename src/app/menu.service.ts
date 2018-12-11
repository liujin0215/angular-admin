import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from './model/menu';
import { Resp } from './resp';
import { host } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';




@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private http: HttpClient) { }
    private baseUrl = host + 'menu/';

    private handleError<T>(result: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    retrieve(): Observable<Menu[]> {
        return this.http.post<Resp>(this.baseUrl + 'retrieve', {})
            .pipe(
                map<Resp, Menu[]>(res => {
                    if (res.code !== 0 || !res.data) {
                        throw res.err;
                    }
                    return res.data as Menu[];
                }),
                catchError(this.handleError<Menu[]>([]))
            );
    }
}
