import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedUsersComponent } from './deleted-users.component';
import {UserdataService} from '../../services/userdata.service';
describe('DeletedUsersComponent', () => {
  let component: DeletedUsersComponent;
  let fixture: ComponentFixture<DeletedUsersComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ DeletedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedUsersComponent);
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
  it("testing functionality of SetActivate",()=>{
    let countBeforeActivation=component.deletedCount();
    component.activate(4);
    let countAfterActivation=component.deletedCount();
    expect(countBeforeActivation-1).toBe(countAfterActivation);
  })

});

