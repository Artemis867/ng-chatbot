import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { History } from './model/history.model';
import * as HistoryActions from './action/history.actions';
import { Observable } from 'rxjs';


interface AppState {
  history: History 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-chatbot';
  text: string;
  list$: Observable<History>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.list$ = this.store.select('history');
  }


  addMessage() {
    this.store.dispatch(new HistoryActions.AddMessage(this.text));
  }

}
