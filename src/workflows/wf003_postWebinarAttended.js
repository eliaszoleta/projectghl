/**
 * [EZ-003] Post-Webinar – Attended Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-attended
 * (This tag is applied via Zoom webhook when the webinar ends.
 *  Set up a Zoom webhook → GHL Custom Webhook or Zapier/Make to:
 *  1. Check if contact attended (duration > 0 minutes)
 *  2. Add tag: ez_webinar-attended
 *  3. Remove tag: ez_webinar-registered (cleanup)
 *  4. Move pipeline stage to "Attended")
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_REPLAY_ATTENDED = {
  subject: 'Thank you for joining! Here\'s your replay 🎬',
  body: `Hi {{contact.firstName}},

Thank you so much for joining the webinar — it was amazing having you there!

Here's the replay in case you want to revisit anything:
👉 [REPLAY LINK HERE]

The replay will be available for [X days], so make sure you watch it while you can.

During the webinar I mentioned something special for attendees only — keep an eye on your inbox over the next 24 hours.

Thanks again for showing up,

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_OFFER_D1 = {
  subject: '🎁 Special offer for webinar attendees (expires soon)',
  body: `Hi {{contact.firstName}},

As promised, here's your exclusive attendee offer.

Because you showed up and invested your time in the webinar, I want to reward you with a special deal on [COURSE NAME].

🎓 [COURSE NAME] gives you:
• [Benefit 1]
• [Benefit 2]
• [Benefit 3]

👉 Get instant access here: [OFFER LINK]

This offer expires in [X days], so don't wait.

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_OFFER_D3 = {
  subject: '💡 Still thinking about it? Read this.',
  body: `Hi {{contact.firstName}},

I know you're busy. But I want to make sure you don't miss out on this.

A few days ago I shared a special offer for [COURSE NAME] with you.

Here's what's inside:
✅ [Module 1]
✅ [Module 2]
✅ [Module 3]

Here's what students are saying:
"[Testimonial 1]" – [Name]
"[Testimonial 2]" – [Name]

👉 Claim your spot: [OFFER LINK]

Offer closes [DATE].

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_OFFER_D5 = {
  subject: 'Real results from real students 🏆',
  body: `Hi {{contact.firstName}},

I want to show you what's possible when you take action.

[Student Name] went from [before] to [after result] in just [timeframe].

[Student Name 2] said: "[quote]"

These are real people who decided to invest in themselves — and it paid off.

You can get the same results. Here's how:
👉 [OFFER LINK]

Offer ends [DATE]. Don't let it pass you by.

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_URGENCY = {
  subject: '⚠️ Offer closes TOMORROW – don\'t miss it',
  body: `Hi {{contact.firstName}},

Quick heads up — the special offer for [COURSE NAME] closes TOMORROW.

After that, the price goes back up (or the bonus goes away — your choice on which to use).

👉 Get access before it's gone: [OFFER LINK]

This is your last real chance to get in at this price.

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_LAST_CHANCE = {
  subject: '🚪 LAST CHANCE – offer closes today',
  body: `Hi {{contact.firstName}},

Today is the LAST DAY to get [COURSE NAME] at this special price.

At midnight, this offer disappears.

👉 Join now: [OFFER LINK]

If you're ready to [main outcome], this is your moment.

[Your Name / Brand]
[Unsubscribe]`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_OFFER_D1 = {
  body: `{{contact.firstName}}, special offer for webinar attendees 🎁 Check your email or grab it here: [OFFER LINK] – STOP to opt out.`,
};

export const SMS_OFFER_D5 = {
  body: `{{contact.firstName}}, offer for [COURSE NAME] closes [DATE]. Don't miss it 👉 [OFFER LINK] – STOP to opt out.`,
};

export const SMS_LAST_CHANCE = {
  body: `LAST CHANCE {{contact.firstName}}! Offer closes TODAY 🚪 [OFFER LINK] – STOP to opt out.`,
};

export const WF003 = {
  id: 'EZ-003',
  name: '[EZ-003] Post-Webinar – Attended',
  trigger: {
    type: 'Tag Added',
    tag: 'ez_webinar-attended',
  },
  steps: [
    // ── Immediate (within 1 hour after webinar) ────────────────────────────
    {
      step: 1,
      action: 'Move Opportunity Stage',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'Attended',
    },
    {
      step: 2,
      action: 'Remove Tag',
      value: 'ez_webinar-registered',
    },
    {
      step: 3,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-05] Replay + Thank You (Attended)',
      body: EMAIL_REPLAY_ATTENDED,
    },

    // ── Day 1 After: Offer Intro ───────────────────────────────────────────
    {
      step: 4,
      action: 'Wait',
      duration: '24 hours',
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
      templateName: '[EZ-EMAIL-06] Offer Day 1 (Attended)',
      body: EMAIL_OFFER_D1,
    },
    {
      step: 8,
      action: 'Send SMS',
      templateName: '[EZ-SMS-05] Offer Day 1 (Attended)',
      body: SMS_OFFER_D1,
    },

    // ── Day 3 After: Value + Reminder ──────────────────────────────────────
    {
      step: 9,
      action: 'Wait',
      duration: '48 hours',
    },
    {
      step: 10,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-07] Offer Day 3 (Attended)',
      body: EMAIL_OFFER_D3,
    },

    // ── Day 5 After: Social Proof ──────────────────────────────────────────
    {
      step: 11,
      action: 'Wait',
      duration: '48 hours',
    },
    {
      step: 12,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-08] Offer Day 5 (Attended)',
      body: EMAIL_OFFER_D5,
    },
    {
      step: 13,
      action: 'Send SMS',
      templateName: '[EZ-SMS-06] Offer Day 5 (Attended)',
      body: SMS_OFFER_D5,
    },

    // ── Day 6 After: Urgency ───────────────────────────────────────────────
    {
      step: 14,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 15,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-09] Urgency – Offer Closes Tomorrow',
      body: EMAIL_URGENCY,
    },

    // ── Day 7 After: Last Chance ───────────────────────────────────────────
    {
      step: 16,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 17,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-10] Last Chance',
      body: EMAIL_LAST_CHANCE,
    },
    {
      step: 18,
      action: 'Send SMS',
      templateName: '[EZ-SMS-07] Last Chance',
      body: SMS_LAST_CHANCE,
    },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-003] Post-Webinar – Attended                            ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Tag Added → ez_webinar-attended                    ║');
  log('║                                                              ║');
  log('║  Immediate:                                                  ║');
  log('║    Step 1 → Move Stage: Attended                            ║');
  log('║    Step 2 → Remove Tag: ez_webinar-registered               ║');
  log('║    Step 3 → Email: [EZ-EMAIL-05] Replay + Thank You         ║');
  log('║  +24h: Day 1 Offer                                          ║');
  log('║    Step 4 → Wait 24h                                        ║');
  log('║    Step 5 → Add Tag: ez_webinar-offer-sent                  ║');
  log('║    Step 6 → Move Stage: Offer Sent                         ║');
  log('║    Step 7 → Email: [EZ-EMAIL-06] Offer Day 1               ║');
  log('║    Step 8 → SMS:   [EZ-SMS-05]   Offer Day 1               ║');
  log('║  +48h: Day 3 Value                                          ║');
  log('║    Step 9 → Wait 48h                                        ║');
  log('║    Step 10→ Email: [EZ-EMAIL-07] Offer Day 3               ║');
  log('║  +48h: Day 5 Social Proof                                   ║');
  log('║    Step 11→ Wait 48h                                        ║');
  log('║    Step 12→ Email: [EZ-EMAIL-08] Offer Day 5               ║');
  log('║    Step 13→ SMS:   [EZ-SMS-06]   Offer Day 5               ║');
  log('║  +24h: Day 6 Urgency                                        ║');
  log('║    Step 14→ Wait 24h                                        ║');
  log('║    Step 15→ Email: [EZ-EMAIL-09] Urgency                   ║');
  log('║  +24h: Day 7 Last Chance                                    ║');
  log('║    Step 16→ Wait 24h                                        ║');
  log('║    Step 17→ Email: [EZ-EMAIL-10] Last Chance               ║');
  log('║    Step 18→ SMS:   [EZ-SMS-07]   Last Chance               ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
