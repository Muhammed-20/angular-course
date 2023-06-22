import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunEditModalComponent } from './urun-edit-modal.component';

describe('UrunEditModalComponent', () => {
  let component: UrunEditModalComponent;
  let fixture: ComponentFixture<UrunEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrunEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
