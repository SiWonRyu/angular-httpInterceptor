import { Component } from '@angular/core';
import { ExampleService } from 'src/services/example.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  successData$: Observable<string[]>;;

  constructor(private service: ExampleService) { }

  getBook() {
    this.successData$ = this.service.getBookList().pipe(take(1));
  }

  getError() {
    this.service.getBookListError().pipe(take(1)).subscribe();
  }
}
