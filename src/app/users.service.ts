import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClientModule} from '@angular/common/http';
import {Http} from '@angular/http';

@Injectable()
export class UsersService {

  size = 8;

  constructor (private http: Http) {
  }

  getUsers() {
   return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
     .map(response => response.json()).map(response => response.results)
     .map(users => {
       return users.map(u => {
         return {
           name: u.name.title + ' ' + u.name.first + '  ' + u.name.last,
           image: u.picture.large,
           geo: 'City ' + u.location.city + ' ' + 'State ' + u.location.state + ' ' + 'Street ' + u.location.street
         };
       });
     });
  }

 setSize(size) {
  this.size = size;
 }

 users = [
     {name: 'WFM1'},
     {name: 'WFM2'},
     {name: 'WFM3'},
     {name: 'WFM4'},
     {name: 'WFM5'},
     {name: 'WFM6'}
 ]
}