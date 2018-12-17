import { Action } from '@ngrx/store';
import { Person } from '../models/person';

export const CREATE_PERSON = 'Person_Create';
export const DELETE_PERSON = 'Person_Delete';

export class CreatePerson implements Action {
    readonly type = CREATE_PERSON;

    constructor(public payload: Person) { }
}

export class DeletePerson implements Action {
    readonly type = DELETE_PERSON;

    constructor(public id: string) { }
}

export type Actions = CreatePerson | DeletePerson;

