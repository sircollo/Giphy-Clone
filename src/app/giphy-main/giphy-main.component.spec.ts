import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyMainComponent } from './giphy-main.component';

describe('GiphyMainComponent', () => {
  let component: GiphyMainComponent;
  let fixture: ComponentFixture<GiphyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
