import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ComponentFixture } from '@angular/core/testing';
import { routes } from './app-routing.module';
import { ActiveUsersComponent } from './active/active-users/active-users.component';
import { DeletedUsersComponent } from './deleted/deleted-users/deleted-users.component';
import { ManageUsersComponent } from './manage/manage-users/manage-users.component';
import { HomeComponent } from './home/home.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app1');
  });

  it('should contain route for /active', () => {
    const expectedRoute = { path: 'active', component: ActiveUsersComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /deleted', () => {
    const expectedRoute = { path: 'deleted', component: DeletedUsersComponent };
    expect(routes).toContain(expectedRoute);
  });

  it('should contain route for /home', () => {
    const expectedRoute = { path: 'home', component: HomeComponent };
    expect(routes).toContain(expectedRoute);
  });
});
