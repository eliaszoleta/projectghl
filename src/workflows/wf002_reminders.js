/**
 * [EZ-002] Webinar Reminder Sequence Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-registered
 * (Runs immediately after EZ-001 tags the contact)
 *
 * Build in GHL → Automations → Workflows → + New Workflow
 */

export const WF002 = {
  id: 'EZ-002',
  name: '[EZ-002] Webinar Reminder Sequence',
  trigger: {
    type: 'Tag Added',
    tag: 'ez_webinar-registered',
  },
  steps: [
    // ── 3 Days Before ───────────────────────────────────────────────────────
    {
      step: 1,
      action: 'Wait',
      waitUntil: '3 days before [EZ-008] Webinar Date at 10:00 AM (contact time zone)',
      note: 'Use "Wait until date" and reference the custom field [EZ-008] Webinar Date, subtract 3 days',
    },
    {
      step: 2,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-02] 3 Days Before Reminder',
      body: EMAIL_3_DAYS,
    },

    // ── 1 Day Before ────────────────────────────────────────────────────────
    {
      step: 3,
      action: 'Wait',
      waitUntil: '1 day before [EZ-008] Webinar Date at 9:00 AM',
    },
    {
      step: 4,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-03] 1 Day Before Reminder',
      body: EMAIL_1_DAY,
    },
    {
      step: 5,
      action: 'Send SMS',
      templateName: '[EZ-SMS-02] 1 Day Before Reminder',
      body: SMS_1_DAY,
    },

    // ── 1 Hour Before ───────────────────────────────────────────────────────
    {
      step: 6,
      action: 'Wait',
      waitUntil: '1 hour before [EZ-008] Webinar Date',
    },
    {
      step: 7,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-04] 1 Hour Before Reminder',
      body: EMAIL_1_HOUR,
    },
    {
      step: 8,
      action: 'Send SMS',
      templateName: '[EZ-SMS-03] 1 Hour Before Reminder',
      body: SMS_1_HOUR,
    },

    // ── 15 Minutes Before ───────────────────────────────────────────────────
    {
      step: 9,
      action: 'Wait',
      waitUntil: '45 minutes after previous wait (15 min before webinar)',
    },
    {
      step: 10,
      action: 'Send SMS',
      templateName: '[EZ-SMS-04] 15 Minutes Before',
      body: SMS_15_MIN,
    },
  ],
};

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_3_DAYS = {
  subject: '📅 Your webinar is in 3 days – here\'s what to expect',
  body: `Hi {{contact.firstName}},

Just a reminder — you're registered for the webinar in 3 days!

📅 Date: {{custom.ez_webinar_date}}
🔗 Your join link: {{custom.ez_zoom_join_link}}

Here's a quick preview of what we'll cover:
• [Key topic 1]
• [Key topic 2]
• [Key topic 3]

We recommend joining 5 minutes early to make sure your audio and video are working.

See you soon!

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_1_DAY = {
  subject: '⏰ Tomorrow! Your webinar link is inside',
  body: `Hi {{contact.firstName}},

Tomorrow is the big day! We're going live and we'd love to see you there.

📅 Date: {{custom.ez_webinar_date}}
🔗 Your personal join link: {{custom.ez_zoom_join_link}}

Pro tip: Add this link to your calendar now so it's easy to find tomorrow.

Can't wait to see you!

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_1_HOUR = {
  subject: '🚨 We go live in 1 hour – join link inside',
  body: `Hi {{contact.firstName}},

In just ONE HOUR we go live. Don't miss it!

🔗 Click here to join: {{custom.ez_zoom_join_link}}

We'll be starting right on time, so make sure you grab a seat early.

See you in there!

[Your Name / Brand]
[Unsubscribe]`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_1_DAY = {
  body: `Hey {{contact.firstName}}! Webinar tomorrow – {{custom.ez_webinar_date}}. Your link: {{custom.ez_zoom_join_link}} – STOP to unsubscribe.`,
};

export const SMS_1_HOUR = {
  body: `{{contact.firstName}}, we go LIVE in 1 hour! Join here: {{custom.ez_zoom_join_link}} – STOP to unsubscribe.`,
};

export const SMS_15_MIN = {
  body: `{{contact.firstName}}, we're LIVE in 15 minutes! Don't miss it 👉 {{custom.ez_zoom_join_link}}`,
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-002] Webinar Reminder Sequence                          ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Tag Added → ez_webinar-registered                  ║');
  log('║                                                              ║');
  log('║  Step 1  → Wait until 3 days before [EZ-008] Webinar Date   ║');
  log('║  Step 2  → Email: [EZ-EMAIL-02] 3 Days Before               ║');
  log('║  Step 3  → Wait until 1 day before Webinar Date             ║');
  log('║  Step 4  → Email: [EZ-EMAIL-03] 1 Day Before                ║');
  log('║  Step 5  → SMS:   [EZ-SMS-02]   1 Day Before                ║');
  log('║  Step 6  → Wait until 1 hour before Webinar Date            ║');
  log('║  Step 7  → Email: [EZ-EMAIL-04] 1 Hour Before               ║');
  log('║  Step 8  → SMS:   [EZ-SMS-03]   1 Hour Before               ║');
  log('║  Step 9  → Wait 45 minutes (= 15 min before webinar)        ║');
  log('║  Step 10 → SMS:   [EZ-SMS-04]   15 Minutes Before           ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
