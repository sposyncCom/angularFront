import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIndexComponent } from './index-index.component';

describe('IndexIndexComponent', () => {
  let component: IndexIndexComponent;
  let fixture: ComponentFixture<IndexIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
