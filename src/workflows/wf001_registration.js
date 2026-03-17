/**
 * [EZ-001] Webinar Registration Workflow Blueprint
 *
 * TRIGGER: Form submission (webinar opt-in form on landing page)
 *
 * Build this workflow in GHL → Automations → Workflows → + New Workflow
 */

// ── Email Templates ────────────────────────────────────────────────────────

export const EMAIL_CONFIRMATION = {
  subject: "You're registered! Here's your webinar info 🎉",
  body: `Hi {{contact.firstName}},

You're officially registered for the webinar!

📅 Date: {{custom.ez_webinar_date}}
🔗 Your personal join link: {{custom.ez_zoom_join_link}}

Add it to your calendar so you don't miss it:
[Add to Google Calendar] [Add to Outlook]

We're so excited to have you join us. In this webinar you'll learn:
• [Key learning point 1]
• [Key learning point 2]
• [Key learning point 3]

See you there!

[Your Name / Brand]
[Unsubscribe]`,
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
