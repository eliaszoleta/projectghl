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
  body: `Hi {{contact.firstName}},

You're in! Your spot for "5 Biggest Fears Parents Face Sending Their Child to College" is confirmed.

Here are your event details:
📅 Date: February 5, 2026
🕕 Time: 6:00 PM ET
🔗 Your join link: {{custom.ez_zoom_join_link}}

Save this email — you'll want it on February 5th.

Here's a preview of what you're going to discover on the webinar:

→ The #1 mindset mistake parents make about college readiness (and how to fix it before it's too late)
→ Why academic grades alone won't guarantee your child's success in college — and what actually does
→ The social and emotional blind spots most parents miss that lead to students struggling or dropping out
→ How to navigate the real cost of college without your child sacrificing the right opportunities
→ Career-readiness strategies your child needs NOW — not after they graduate

This is a live session, so your questions get answered in real time.

One more thing: attendees get access to something special I'll be sharing on the webinar. Show up live — you won't want to miss it.

See you February 5th at 6:00 PM ET!

Debbie Elder

P.S. Add the webinar to your calendar now so it doesn't slip through the cracks.
[Add to Google Calendar] [Add to Outlook]`,
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
