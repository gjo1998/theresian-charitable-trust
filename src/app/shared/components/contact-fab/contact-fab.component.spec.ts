import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactFabComponent } from './contact-fab.component';

describe('ContactFabComponent', () => {
  let fixture: ComponentFixture<ContactFabComponent>;
  let element: HTMLElement;

  const toggle = () => element.querySelector<HTMLButtonElement>('button[aria-controls="contactFabMenu"]')!;
  const menu = () => element.querySelector('#contactFabMenu');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFabComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFabComponent);
    element = fixture.nativeElement;
    // Attached to the page, so focus really moves.
    document.body.appendChild(element);
    fixture.detectChanges();
  });

  afterEach(() => element.remove());

  function open(): void {
    toggle().click();
    fixture.detectChanges();
    tick();
  }

  it('toggles the menu open and closed, keeping aria-expanded in step', fakeAsync(() => {
    expect(menu()).toBeNull();
    expect(toggle().getAttribute('aria-expanded')).toBe('false');

    open();
    expect(menu()).toBeTruthy();
    expect(toggle().getAttribute('aria-expanded')).toBe('true');

    toggle().click();
    fixture.detectChanges();
    expect(menu()).toBeNull();
    expect(toggle().getAttribute('aria-expanded')).toBe('false');
  }));

  it('moves focus to the first option when it opens', fakeAsync(() => {
    open();
    expect(document.activeElement).toBe(menu()!.querySelector('a'));
  }));

  it('closes on Escape and returns focus to the toggle', fakeAsync(() => {
    open();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(menu()).toBeNull();
    expect(document.activeElement).toBe(toggle());
  }));

  it('returns focus to the toggle when closed with the toggle', fakeAsync(() => {
    open();
    toggle().click();
    fixture.detectChanges();
    expect(document.activeElement).toBe(toggle());
  }));

  it('closes on a click anywhere else, without stealing focus', fakeAsync(() => {
    const outside = document.createElement('button');
    document.body.appendChild(outside);
    open();

    outside.focus();
    outside.click();
    fixture.detectChanges();
    expect(menu()).toBeNull();
    expect(document.activeElement).toBe(outside);
    outside.remove();
  }));

  it('stays open when the click is inside it', fakeAsync(() => {
    open();
    menu()!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();
    expect(menu()).toBeTruthy();
  }));

  it('offers WhatsApp and a phone call', fakeAsync(() => {
    open();
    const hrefs = Array.from(menu()!.querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(hrefs[0]).toMatch(/^https:\/\/wa\.me\//);
    expect(hrefs[1]).toMatch(/^tel:\+/);
  }));
});
