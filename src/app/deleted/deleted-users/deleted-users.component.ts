import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css']
})
export class DeletedUsersComponent implements OnInit {

  userdata:any;
  constructor(data:UserdataService) {
    this.userdata=UserdataService.userData();
  }

  activate(id:number){
    console.log(id);
    this.userdata[id].isDeleted=false;
    UserdataService.setActive(id);
  }
  deletedCount(){
    let count=0;
    for(let item of this.userdata){
      if(item.isDeleted){
        count++;
      }
    }
    return count;
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
