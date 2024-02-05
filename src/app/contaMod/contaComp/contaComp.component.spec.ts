import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contaCompComponent } from './contaComp.component';

describe('contaCompComponent', () => {
  let component: contaCompComponent;
  let fixture: ComponentFixture<contaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [contaCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(contaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
