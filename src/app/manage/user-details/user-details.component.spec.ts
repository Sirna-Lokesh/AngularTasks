import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import {UserdataService} from "../../services/userdata.service"
describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Testing whether we can fetch  service Data or not",()=>{
    let userdata=UserdataService.userData();
    expect(typeof userdata).toBe(typeof []);
  });

  it("Testing whether we can fetch  service Data or not",()=>{
    let userdata=UserdataService.userData();
    expect(userdata.length).toBeGreaterThan(0);
  });

  
});
