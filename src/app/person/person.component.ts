import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { DeletePerson, CreatePerson } from '../actions/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  
  persons: Observable<Person[]>;

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(new CreatePerson(
      {
        id: "2",
        name: "test"
      }
    ));
    this.persons = store.select('person');
  }

  ngOnInit() {
    
  }

 

  removePerson(id) {
    this.store.dispatch(new DeletePerson(id));
  }

}
