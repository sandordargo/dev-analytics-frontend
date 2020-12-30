import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagStatsCardComponent } from './tag-stats-card.component';

describe('TagStatsCardComponent', () => {
  let component: TagStatsCardComponent;
  let fixture: ComponentFixture<TagStatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagStatsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagStatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
