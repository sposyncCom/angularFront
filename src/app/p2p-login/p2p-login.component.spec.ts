import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pLoginComponent } from './p2p-login.component';

describe('P2pLoginComponent', () => {
  let component: P2pLoginComponent;
  let fixture: ComponentFixture<P2pLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P2pLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2pLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
