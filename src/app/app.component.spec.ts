import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('creates the shell', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the header and footer chrome', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('app-site-header')).toBeTruthy();
    expect(element.querySelector('app-site-footer')).toBeTruthy();
  });
});
