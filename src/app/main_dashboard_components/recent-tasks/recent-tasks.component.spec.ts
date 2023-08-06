import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTasksComponent } from './recent-tasks.component';

describe('RecentTasksComponent', () => {
  let component: RecentTasksComponent;
  let fixture: ComponentFixture<RecentTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentTasksComponent]
    });
    fixture = TestBed.createComponent(RecentTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
