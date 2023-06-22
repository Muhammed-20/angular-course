import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CikisModalComponent } from './cikis-modal.component';

describe('CikisModalComponent', () => {
  let component: CikisModalComponent;
  let fixture: ComponentFixture<CikisModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CikisModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CikisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
