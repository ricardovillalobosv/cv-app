import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiesStudiesComponent } from './certifies-studies.component';

describe('CertifiesStudiesComponent', () => {
  let component: CertifiesStudiesComponent;
  let fixture: ComponentFixture<CertifiesStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifiesStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiesStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
