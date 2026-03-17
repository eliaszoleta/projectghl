/**
 * [EZ-004] Post-Webinar – No-Show Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-no-show
 * (This tag is applied via Zoom webhook when the webinar ends.
 *  Contacts who registered but did NOT attend get this tag.)
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_MISSED = {
  subject: 'We missed you – here\'s the replay 🎬',
  body: `Hi {{contact.firstName}},

Looks like life got in the way — totally okay! We missed you at the webinar, but we've got you covered.

Here's the replay so you can catch everything you missed:
👉 [REPLAY LINK HERE]

The replay covers:
• [Key topic 1]
• [Key topic 2]
• [Key topic 3]

It's available for a limited time, so make sure you watch it soon!

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_SOFT_OFFER = {
  subject: 'Did you get a chance to watch the replay?',
  body: `Hi {{contact.firstName}},

I hope you got a chance to watch the replay from the webinar!

If you did — and you're ready to take the next step — I'd love to invite you to check out [COURSE NAME].

It's designed specifically for people who want to [main outcome], and right now there's a special offer available:
👉 [OFFER LINK]

No pressure at all. Just wanted to make sure you had the chance.

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_NUDGE = {
  subject: 'Still thinking about [COURSE NAME]?',
  body: `Hi {{contact.firstName}},

Just checking in — did you get a chance to look at [COURSE NAME]?

Here's a quick summary of what's inside:
✅ [Module 1 – result]
✅ [Module 2 – result]
✅ [Module 3 – result]

Plus you get [BONUS] when you join this week.

👉 Check it out: [OFFER LINK]

The offer closes [DATE].

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_LAST_CHANCE = {
  subject: '⏳ Last chance to join [COURSE NAME]',
  body: `Hi {{contact.firstName}},

This is the last email I'll send about this — promise!

The offer for [COURSE NAME] closes today. After that, the special pricing goes away.

If you've been on the fence, now is the time.

👉 Join here: [OFFER LINK]

See you on the inside,

[Your Name / Brand]
[Unsubscribe]`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_NUDGE = {
  body: `{{contact.firstName}}, wanted to make sure you saw the replay and offer for [COURSE NAME] 👉 [OFFER LINK] Closes [DATE]. STOP to opt out.`,
};

export const WF004 = {
  id: 'EZ-004',
  name: '[EZ-004] Post-Webinar – No-Show',
  trigger: {
    type: 'Tag Added',
    tag: 'ez_webinar-no-show',
  },
  steps: [
    // ── Immediate ─────────────────────────────────────────────────────────
    {
      step: 1,
      action: 'Move Opportunity Stage',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'No-Show',
    },
    {
      step: 2,
      action: 'Remove Tag',
      value: 'ez_webinar-registered',
    },
    {
      step: 3,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-11] Sorry We Missed You + Replay',
      body: EMAIL_MISSED,
    },

    // ── Day 2 After: Soft Offer ────────────────────────────────────────────
    {
      step: 4,
      action: 'Wait',
      duration: '48 hours',
    },
    {
      step: 5,
      action: 'Add Tag',
      value: 'ez_webinar-offer-sent',
    },
    {
      step: 6,
      action: 'Move Opportunity Stage',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'Offer Sent',
    },
    {
      step: 7,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-12] Soft Offer (No-Show)',
      body: EMAIL_SOFT_OFFER,
    },

    // ── Day 4 After: Second Nudge ──────────────────────────────────────────
    {
      step: 8,
      action: 'Wait',
      duration: '48 hours',
    },
    {
      step: 9,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-13] Offer Reminder (No-Show)',
      body: EMAIL_NUDGE,
    },
    {
      step: 10,
      action: 'Send SMS',
      templateName: '[EZ-SMS-08] Offer Nudge (No-Show)',
      body: SMS_NUDGE,
    },

    // ── Day 6 After: Last Chance ───────────────────────────────────────────
    {
      step: 11,
      action: 'Wait',
      duration: '48 hours',
    },
    {
      step: 12,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-14] Last Chance (No-Show)',
      body: EMAIL_LAST_CHANCE,
    },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-004] Post-Webinar – No-Show                             ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Tag Added → ez_webinar-no-show                     ║');
  log('║                                                              ║');
  log('║  Immediate:                                                  ║');
  log('║    Step 1 → Move Stage: No-Show                             ║');
  log('║    Step 2 → Remove Tag: ez_webinar-registered               ║');
  log('║    Step 3 → Email: [EZ-EMAIL-11] Missed You + Replay        ║');
  log('║  +48h: Day 2 Soft Offer                                     ║');
  log('║    Step 4 → Wait 48h                                        ║');
  log('║    Step 5 → Add Tag: ez_webinar-offer-sent                  ║');
  log('║    Step 6 → Move Stage: Offer Sent                         ║');
  log('║    Step 7 → Email: [EZ-EMAIL-12] Soft Offer                 ║');
  log('║  +48h: Day 4 Nudge                                          ║');
  log('║    Step 8 → Wait 48h                                        ║');
  log('║    Step 9 → Email: [EZ-EMAIL-13] Offer Reminder             ║');
  log('║    Step 10→ SMS:   [EZ-SMS-08]   Offer Nudge               ║');
  log('║  +48h: Day 6 Last Chance                                    ║');
  log('║    Step 11→ Wait 48h                                        ║');
  log('║    Step 12→ Email: [EZ-EMAIL-14] Last Chance                ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
