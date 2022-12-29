import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data-handle/data.service';
import { CommonService } from 'src/app/services/common/common.service';

import { CharacterCardComponent } from './character-card.component';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardComponent],
      providers: [{ provide: DataService }, { provide: CommonService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
