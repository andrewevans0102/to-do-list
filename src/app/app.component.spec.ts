import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Item } from './models/item';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call the add method and return an array with values', () => {
    component.addItem('created item');
    expect(component.items.length).toBe(1);
  });

  it('should call add an item when onSubmit is called', () => {
    component.createItem = 'created item';
    component.onSubmit();
    expect(component.items.length).toBe(1);
  });

  it('should call delete items when deleteItem is called', () => {
    const mockItem = new Item();
    mockItem.id = '1';
    mockItem.name = 'created item';
    component.items.push(mockItem);
    component.deleteItem(mockItem);
    expect(component.items.length).toBe(0);
  });
});
