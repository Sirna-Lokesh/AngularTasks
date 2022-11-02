import { TestBed } from '@angular/core/testing';

import { UserdataService } from './userdata.service';

describe('UserdataService', () => {
  let service: UserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("setActivate Functionality Check",()=>{
    let  countBefore=UserdataService.activeCount();
    UserdataService.setActive(3);
    let countAfter=UserdataService.activeCount();
    expect(countAfter-1).toBe(countBefore)
  });

  it("setDeactivate Functionality Check",()=>{
    let  countBefore=UserdataService.activeCount();
    UserdataService.setDeActive(0);
    let countAfter=UserdataService.activeCount();
    expect(countAfter).toBe(countBefore-1)
  })
});
