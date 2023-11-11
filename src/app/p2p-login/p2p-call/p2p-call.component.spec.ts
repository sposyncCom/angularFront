import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pCallComponent } from './p2p-call.component';

describe('P2pCallComponent', () => {
  let component: P2pCallComponent;
  let fixture: ComponentFixture<P2pCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2pCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2pCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
