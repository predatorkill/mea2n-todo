import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TodosService {

  constructor(private _http:Http){

  }

  getTodos() {
    return this._http.get('http://localhost:3000/api/v1/todos')
      .map(res => res.json())
  }

  saveTodo(todo){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/v1/todo', JSON.stringify(todo), {headers:headers})
      .map(res => res.json())
  }

  updateTodo(todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('http://localhost:3000/api/v1/todo/' + todo._id, JSON.stringify(todo), {headers:headers})
      .map(res => res.json())
  }

  deleteTodo(id) {
    return this._http.delete('http://localhost:3000/api/v1/todo/' + id)
      .map(res => res.json());
  }
}
