import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TRUST, VOLUNTEER_ROLES } from '../../../../core/data/site-content';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

type InvolvementTab = 'give' | 'volunteer' | 'partner';

/**
 * Every route through this section ends at Fr. Sebastian: an email with the
 * subject already filled in, WhatsApp, or the phone. The site takes no money
 * and holds no details of its own.
 */
@Component({
  selector: 'app-get-involved',
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './get-involved.component.html',
})
export class GetInvolvedComponent {
  readonly trust = TRUST;
  readonly roles = VOLUNTEER_ROLES;

  readonly activeTab = signal<InvolvementTab>('give');
  readonly selectedRole = signal<string>(VOLUNTEER_ROLES[0].label);

  readonly tabs: { id: InvolvementTab; label: string; icon: string }[] = [
    { id: 'give', label: 'Give', icon: 'fa-heart' },
    { id: 'volunteer', label: 'Volunteer', icon: 'fa-hands-holding' },
    { id: 'partner', label: 'Partner with us', icon: 'fa-building' },
  ];

  setTab(tab: InvolvementTab): void {
    this.activeTab.set(tab);
  }

  onRoleChange(event: Event): void {
    this.selectedRole.set((event.target as HTMLSelectElement).value);
  }

  /** mailto: link with the subject and opening line already written. */
  mailto(subject: string, intro: string): string {
    const body = encodeURIComponent(
      `${intro}\n\n\n---\nMy name:\nMy phone:\nWhere I am writing from:\n`,
    );
    return `mailto:${this.trust.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

  whatsapp(message: string): string {
    return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(message)}`;
  }

  get telLink(): string {
    return `tel:+${this.trust.phoneE164}`;
  }

  giveMailto(): string {
    return this.mailto(
      'I would like to support Ammaveedu',
      'Dear Fr. Sebastian,\n\nI came across the Ammaveedu website and would like to make a donation to the trust. Please let me know how best to send it.',
    );
  }

  giveWhatsapp(): string {
    return this.whatsapp('Hello Fr. Sebastian, I would like to make a donation to Ammaveedu.');
  }

  partnerMailto(): string {
    return this.mailto(
      'Partnership with the Theresian Charitable Trust',
      'Dear Fr. Sebastian,\n\nI am writing on behalf of an organisation that would like to support the work at Ammaveedu. Please let me know how we might begin.',
    );
  }

  volunteerMailto(): string {
    return this.mailto(
      'Volunteering at Ammaveedu',
      `Dear Fr. Sebastian,\n\nI would like to volunteer with the Theresian Charitable Trust. I am most interested in: ${this.selectedRole()}.`,
    );
  }

  volunteerWhatsapp(): string {
    return this.whatsapp(
      `Hello Fr. Sebastian, I would like to volunteer at Ammaveedu - I am interested in ${this.selectedRole()}.`,
    );
  }
}
