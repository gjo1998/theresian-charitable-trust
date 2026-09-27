import { emailLink, mapsLink, phoneLink, whatsappLink } from './contact-links';
import { TRUST } from './data/site-content';

describe('contact-links', () => {
  describe('emailLink', () => {
    it('addresses the trust with no extras when given nothing', () => {
      expect(emailLink()).toBe(`mailto:${TRUST.email}`);
    });

    it('builds a valid mailto: with subject and body, encoding special characters', () => {
      const href = emailLink('Help & hope: 100%?', 'Line one\nLine two — "quoted"');
      const url = new URL(href);
      expect(url.protocol).toBe('mailto:');
      expect(url.pathname).toBe(TRUST.email);
      expect(href).toContain('subject=Help%20%26%20hope%3A%20100%25%3F');
      expect(href).not.toContain(' ');
      expect(href).not.toContain('\n');
      expect(decodeURIComponent(href.split('body=')[1])).toBe('Line one\nLine two — "quoted"');
    });

    it('never lets a subject break out into another parameter', () => {
      const href = emailLink('a&cc=someone@example.org');
      expect(href.split('&').length).toBe(1);
    });
  });

  describe('whatsappLink', () => {
    it('uses wa.me with the digits-only number', () => {
      const url = new URL(whatsappLink('Hi'));
      expect(url.origin).toBe('https://wa.me');
      expect(url.pathname).toBe(`/${TRUST.phoneE164}`);
      expect(TRUST.phoneE164).toMatch(/^\d+$/);
    });

    it('encodes the message, and defaults to the site-wide one', () => {
      expect(new URL(whatsappLink("I'd like to help with: bags & books")).searchParams.get('text')).toBe(
        "I'd like to help with: bags & books",
      );
      expect(new URL(whatsappLink()).searchParams.get('text')).toBe(TRUST.whatsappMessage);
    });
  });

  describe('phoneLink', () => {
    it('builds a tel: link in international form', () => {
      expect(phoneLink()).toBe(`tel:+${TRUST.phoneE164}`);
      expect(phoneLink()).toMatch(/^tel:\+\d+$/);
    });
  });

  describe('mapsLink', () => {
    it('searches Google Maps for the address, properly encoded', () => {
      const url = new URL(mapsLink());
      expect(url.hostname).toBe('www.google.com');
      const query = url.searchParams.get('query')!;
      expect(query).toContain(TRUST.address.line1);
      expect(query).toContain(TRUST.address.district);
      expect(mapsLink()).not.toContain(' ');
    });
  });
});
