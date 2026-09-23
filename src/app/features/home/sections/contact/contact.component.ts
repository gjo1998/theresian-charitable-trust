import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { INQUIRY_SUBJECTS, TRUST } from '../../../../core/data/site-content';
import { UiService } from '../../../../core/services/ui.service';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly ui = inject(UiService);
  private readonly fb = inject(FormBuilder);
  private readonly sanitizer = inject(DomSanitizer);

  readonly trust = TRUST;
  readonly subjects = INQUIRY_SUBJECTS;

  /**
   * Google's keyless embed endpoint. Trusted because the URL is built here from
   * our own constant, not from anything a visitor can influence.
   */
  readonly mapEmbedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://maps.google.com/maps?q=${TRUST.mapsQuery}&z=14&output=embed`,
  );

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{8,18}$/)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [INQUIRY_SUBJECTS[0].value, Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get mapsUrl(): string {
    return `https://maps.google.com/?q=${this.trust.mapsQuery}`;
  }

  get whatsappUrl(): string {
    return `https://wa.me/${this.trust.phoneE164}?text=${encodeURIComponent(this.trust.whatsappMessage)}`;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.ui.showToast('Please complete the required fields before sending.', 'error');
      return;
    }

    this.form.reset({ subject: this.subjects[0].value });
    this.ui.showToast('Thank you - your message has been noted and the trust will be in touch.');
  }

  /**
   * The site has no backend, so the form also offers to hand the message to the
   * visitor's own mail client rather than silently dropping it.
   */
  mailtoLink(): string {
    const { name, phone, email, subject, message } = this.form.getRawValue();
    const label = this.subjects.find((item) => item.value === subject)?.label ?? 'Inquiry';
    const body = encodeURIComponent(
      [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email}`, '', message].join('\n'),
    );
    return `mailto:${this.trust.email}?subject=${encodeURIComponent(label)}&body=${body}`;
  }
}
