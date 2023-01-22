import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticsSingleComponent } from './cosmetics-single.component';

describe('CosmeticsSingleComponent', () => {
  let component: CosmeticsSingleComponent;
  let fixture: ComponentFixture<CosmeticsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmeticsSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmeticsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
