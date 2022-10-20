import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {

    static users= [
    {
      id:1,
      loginId: 'user1',
      firstname: 'one',
      lastname: 'user',
      age: 30,
      password: '1234',
      isDeleted: false,
    },
    {
      id:2,
      loginId: 'user2',
      firstname: 'two',
      lastname: 'user',
      age: 18,
      password: '1234',
      isDeleted: false,
    },
    {
      id:3,
      loginId: 'user3',
      firstname: 'three',
      lastname: 'user',
      age: 20,
      password: '1243',
      isDeleted: false,
    },
    {
      id:4,
      loginId: 'user4',
      firstname: 'four',
      lastname: 'user',
      age: 40,
      password: '12435',
      isDeleted: true,
    },
    {
      id:5,
      loginId: 'user5',
      firstname: 'five',
      lastname: 'user',
      age: 39,
      password: '1234',
      isDeleted: true,
    },
    
  ];
  static userData() {
    return this.users;
  }
  static setActive(id:number){
    this.users[id].isDeleted=false;
  }
  static setDeActive(id:number){
    this.users[id].isDeleted=true;
  }
  static activeCount(){
    let count=0;
    for(let item of UserdataService.userData()){
      if(!item.isDeleted){
        count++;
      }
    }
    return count;
  }
  static inActiveCount(){
    let count=0;
    for(let item of UserdataService.userData()){
      if(item.isDeleted){
        count++;
      }
    }
    return count;
  }
  constructor() {}
}
