import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get auth() {
    return {id: '01', user: 'Test'}
  }
}
