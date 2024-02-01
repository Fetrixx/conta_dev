import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2CompoComponent } from './test2-compo.component';

describe('Test2CompoComponent', () => {
  let component: Test2CompoComponent;
  let fixture: ComponentFixture<Test2CompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test2CompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test2CompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
