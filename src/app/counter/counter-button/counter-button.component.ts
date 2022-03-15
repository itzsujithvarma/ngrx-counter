import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store: Store<{counterStore : {counter: number}}>)
  {}

  ngOnInit(): void {
  }

  change(ev:string){
    if(ev == 'increment'){
      this.store.dispatch(increment());
    }
    else if(ev == 'decrement'){
      this.store.dispatch(decrement());
    }
    else if(ev == 'reset'){
      this.store.dispatch(reset());

    }
  }

}
