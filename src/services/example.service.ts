import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient
  ) { }

  getBookList(): Observable<any> {
    return this.http.get(`${this.GOOGLE_API}?orderBy=newest&q=korean`)
      .pipe(map((books: any) => books.items || []));
  }

  getBookListError(): Observable<any> {
    return this.http.get(`${this.GOOGLE_API}?eerroorr`);
  }
}