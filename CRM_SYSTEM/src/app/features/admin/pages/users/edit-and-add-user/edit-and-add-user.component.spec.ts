import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndAddUserComponent } from './edit-and-add-user.component';

describe('EditAndAddUserComponent', () => {
  let component: EditAndAddUserComponent;
  let fixture: ComponentFixture<EditAndAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAndAddUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAndAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
