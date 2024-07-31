import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeSectionComponent } from './equipe-section.component';

describe('EquipeSectionComponent', () => {
  let component: EquipeSectionComponent;
  let fixture: ComponentFixture<EquipeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
