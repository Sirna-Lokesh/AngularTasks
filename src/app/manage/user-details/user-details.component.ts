import { Component, OnInit,Input } from '@angular/core';
import { FullnamePipe } from 'src/app/fullname.pipe';
import { UserdataService } from 'src/app/services/userdata.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() id:number=0;
  index:number=0;
  userdata:any;
  constructor(data:UserdataService) {
    this.userdata=UserdataService.userData();
  }
  status:boolean=false;
 
  ngOnInit(): void {
    
  }

}
