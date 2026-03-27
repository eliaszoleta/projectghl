/**
 * [EZ-001] Webinar Registration Workflow Blueprint
 *
 * TRIGGER: Form submission (webinar opt-in form on landing page)
 *
 * Build this workflow in GHL → Automations → Workflows → + New Workflow
 */

// ── Email Templates ────────────────────────────────────────────────────────

export const EMAIL_CONFIRMATION = {
  subject: "Confirm Your Registration for Our Upcoming Webinar!",
  body: `Dear [Parent's Name],

Thank you for signing up for our webinar titled "5 Biggest Fears Parents Face Sending Their Child to College." We are excited to have you join us on February 5, 2026, at 6:00 PM ET.

Before we can confirm your registration, we need you to verify your email address. This helps us ensure that you receive all the important details and updates regarding the webinar.

[Click here to verify your email!](#)

In this exclusive webinar, you will discover how to eliminate your biggest fears and set your child up for success as they transition to college. Here's a sneak peek of what you can expect:

• Understand the Full Picture: Gain clarity on parent perceptions of college readiness.
• Effective Academic Strategies: Discover powerful techniques that boost your student's learning.
• Beyond Academics: Prepare your child socially and emotionally for college life.
• Navigating Transition Concerns: Tackle fears regarding academics and emotional stability.
• Career Readiness: Equip your child with essential skills for their future career.

Don't miss out on this opportunity to empower both you and your child!

We look forward to having you with us on this journey to transform anxiety into action.

Sincerely,
Debbie Elder

P.S. Don't forget to verify your email to secure your spot for the webinar!`,
};

// ── SMS Templates ──────────────────────────────────────────────────────────

export const SMS_CONFIRMATION = {
  body: `Hey {{contact.firstName}}! You're registered 🎉 Webinar on {{custom.ez_webinar_date}}. Your join link: {{custom.ez_zoom_join_link}} – Reply STOP to unsubscribe.`,
};

// ── Workflow Blueprint ──────────────────────────────────────────────────────

export const WF001 = {
  id: 'EZ-001',
  name: '[EZ-001] Webinar Registration',
  trigger: {
    type: 'Form Submitted',
    form: 'Webinar Opt-In Form (your landing page form)',
  },
  steps: [
    {
      step: 1,
      action: 'Add Tag',
      value: 'ez_webinar-registered',
    },
    {
      step: 2,
      action: 'Create Opportunity',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'Registered',
      opportunityName: '{{contact.firstName}} {{contact.lastName}} – Webinar',
    },
    {
      step: 3,
      action: 'Zoom – Add Registrant',
      note: 'Use the Zoom integration (GHL Marketplace) or Zapier/Make to add the contact as a Zoom webinar registrant and store the unique join URL in the [EZ-007] Zoom Join Link custom field.',
    },
    {
      step: 4,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-01] Webinar Confirmation',
      body: EMAIL_CONFIRMATION,
    },
    {
      step: 5,
      action: 'Send SMS',
      templateName: '[EZ-SMS-01] Webinar Confirmation',
      body: SMS_CONFIRMATION,
    },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-001] Webinar Registration Workflow                      ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Form Submitted → Webinar Opt-In Form               ║');
  log('║                                                              ║');
  log('║  Step 1 → Add Tag: ez_webinar-registered                     ║');
  log('║  Step 2 → Create Opportunity                                 ║');
  log('║           Pipeline: [EZ-006] Webinar Pipeline                ║');
  log('║           Stage: Registered                                  ║');
  log('║  Step 3 → Zoom: Add Registrant + store join link             ║');
  log('║           → Custom Field: [EZ-007] Zoom Join Link            ║');
  log('║  Step 4 → Send Email: [EZ-EMAIL-01] Webinar Confirmation     ║');
  log('║  Step 5 → Send SMS:   [EZ-SMS-01] Webinar Confirmation       ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
