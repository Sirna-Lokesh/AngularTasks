import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
  userdata:any;
  constructor(data:UserdataService) {
    this.userdata=UserdataService.userData();
  }

  deactivate(id:number){
    console.log(id);
    this.userdata[id].isDeleted=false;
    UserdataService.setDeActive(id);
  }
  activeCount(){
    let count=0;
    for(let item of this.userdata){
      if(!item.isDeleted){
        count++;
      }
    }
    return count;
  }
  ngOnInit(): void {
  }

}
