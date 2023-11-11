import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pLabComponent } from './p2p-lab.component';

describe('P2pLabComponent', () => {
  let component: P2pLabComponent;
  let fixture: ComponentFixture<P2pLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2pLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2pLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
