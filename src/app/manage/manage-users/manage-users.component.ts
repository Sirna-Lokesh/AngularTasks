import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  showIndex:number=-1;
  userdata:any;
  constructor(data:UserdataService) {
    this.userdata=UserdataService.userData();
  }
  getDetails(id:number){
    this.showIndex=id;
  }
  ngOnInit(): void {
  }

}
