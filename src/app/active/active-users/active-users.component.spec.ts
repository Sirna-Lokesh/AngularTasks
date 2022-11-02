import { ComponentFixture, TestBed } from '@angular/core/testing';
import {UserdataService} from '../../services/userdata.service';
import { ActiveUsersComponent } from './active-users.component';
describe('ActiveUsersComponent', () => {
  let component: ActiveUsersComponent;
  let fixture: ComponentFixture<ActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveUsersComponent);
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
    let countBeforeDeactivation=component.activeCount();
    component.deactivate(1);
    let countAfterDeactivation=component.activeCount();
    expect(countBeforeDeactivation).toBe(countAfterDeactivation+1);
  })
});
