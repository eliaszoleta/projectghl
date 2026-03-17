/**
 * [EZ-005] Purchase & Membership Access Workflow Blueprint
 *
 * TRIGGER: Order Form Submitted (GHL order form with Stripe connected)
 *          OR: Payment Received (Stripe webhook via GHL)
 *
 * This workflow fires when a contact purchases the course.
 */

export const WF005 = {
  id: 'EZ-005',
  name: '[EZ-005] Purchase & Membership Access',
  trigger: {
    type: 'Order Form Submitted',
    note: 'Select your GHL order form connected to Stripe. Alternatively trigger on "Payment Received" once Stripe is connected.',
  },
  steps: [
    // ── Immediate: Stop Offer Sequences ───────────────────────────────────
    {
      step: 1,
      action: 'Remove from Workflow',
      workflows: ['[EZ-003] Post-Webinar – Attended', '[EZ-004] Post-Webinar – No-Show'],
      note: 'Stop sending offer emails once they purchase. Use "Remove from Workflow" action.',
    },
    {
      step: 2,
      action: 'Remove Tag',
      values: ['ez_webinar-offer-sent'],
    },
    {
      step: 3,
      action: 'Add Tag',
      values: ['ez_customer', 'ez_course-member'],
    },
    {
      step: 4,
      action: 'Move Opportunity Stage',
      pipeline: '[EZ-006] Webinar Pipeline',
      stage: 'Purchased',
    },

    // ── Grant Membership Access ────────────────────────────────────────────
    {
      step: 5,
      action: 'Grant Membership Access',
      product: '[EZ-009] Online Course',
      note: 'Go to action "Grant offer access" → select your GHL Membership product named [EZ-009] Online Course',
    },

    // ── Confirmation Communications ────────────────────────────────────────
    {
      step: 6,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-15] Purchase Confirmation + Course Access',
      body: EMAIL_PURCHASE_CONFIRM,
    },
    {
      step: 7,
      action: 'Send SMS',
      templateName: '[EZ-SMS-09] Purchase Confirmation',
      body: SMS_PURCHASE_CONFIRM,
    },

    // ── Onboarding Sequence ────────────────────────────────────────────────
    {
      step: 8,
      action: 'Wait',
      duration: '1 day',
    },
    {
      step: 9,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-16] Onboarding Day 1 – Getting Started',
      body: EMAIL_ONBOARDING_D1,
    },
    {
      step: 10,
      action: 'Wait',
      duration: '2 days',
    },
    {
      step: 11,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-17] Onboarding Day 3 – Your First Win',
      body: EMAIL_ONBOARDING_D3,
    },
    {
      step: 12,
      action: 'Wait',
      duration: '4 days',
    },
    {
      step: 13,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-18] Onboarding Day 7 – Check-In',
      body: EMAIL_ONBOARDING_D7,
    },
  ],
};

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_PURCHASE_CONFIRM = {
  subject: '🎉 You\'re in! Here\'s how to access your course',
  body: `Hi {{contact.firstName}},

Welcome to [COURSE NAME]! We're so excited to have you on board.

Your payment was successful and your course access is ready right now.

👉 Access your course here: [MEMBERSHIP PORTAL LINK]

Here's how to get started:
1. Click the link above
2. Log in (or create your account if it's your first time)
3. Start with [Module 1 / First Step]

If you have any questions or need help getting in, just reply to this email and we'll sort you out right away.

Welcome to the community!

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_ONBOARDING_D1 = {
  subject: '🚀 Day 1: Start here – your success roadmap',
  body: `Hi {{contact.firstName}},

You made a great decision joining [COURSE NAME].

Today I want to give you a quick roadmap so you know exactly where to start:

📍 Step 1: [First action in the course]
📍 Step 2: [Second action]
📍 Step 3: [Third action]

The biggest mistake new students make is trying to do everything at once. Focus on Step 1 first.

👉 Log in and get started: [MEMBERSHIP PORTAL LINK]

Rooting for you!

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_ONBOARDING_D3 = {
  subject: '🏆 Day 3: Here\'s how to get your first win',
  body: `Hi {{contact.firstName}},

By now you should have gone through [Module 1].

Here's a quick challenge for today: [specific, actionable challenge].

When you complete it, you'll [benefit/result].

If you haven't logged in yet — no worries! Jump in right now:
👉 [MEMBERSHIP PORTAL LINK]

You've got this.

[Your Name / Brand]
[Unsubscribe]`,
};

export const EMAIL_ONBOARDING_D7 = {
  subject: '📊 One week in – how\'s it going?',
  body: `Hi {{contact.firstName}},

It's been about a week since you joined [COURSE NAME] — how are you doing?

If you're making progress, that's amazing — keep going!

If you haven't started yet, that's okay too. The course isn't going anywhere, but the best time to start is today.

Here's your course access:
👉 [MEMBERSHIP PORTAL LINK]

And remember — if you ever get stuck or have a question, just reply to this email. I'm here to help.

[Your Name / Brand]
[Unsubscribe]`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_PURCHASE_CONFIRM = {
  body: `🎉 You're in {{contact.firstName}}! Access [COURSE NAME] here: [MEMBERSHIP PORTAL LINK] – Welcome! STOP to opt out.`,
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-005] Purchase & Membership Access                       ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Order Form Submitted (GHL + Stripe)                ║');
  log('║                                                              ║');
  log('║  Immediate:                                                  ║');
  log('║    Step 1 → Remove from Workflow: EZ-003 & EZ-004           ║');
  log('║    Step 2 → Remove Tag: ez_webinar-offer-sent               ║');
  log('║    Step 3 → Add Tags: ez_customer, ez_course-member         ║');
  log('║    Step 4 → Move Stage: Purchased                           ║');
  log('║    Step 5 → Grant Membership: [EZ-009] Online Course        ║');
  log('║    Step 6 → Email: [EZ-EMAIL-15] Purchase Confirmation      ║');
  log('║    Step 7 → SMS:   [EZ-SMS-09]   Purchase Confirmation      ║');
  log('║  +1 day: Onboarding                                         ║');
  log('║    Step 8 → Wait 1 day                                      ║');
  log('║    Step 9 → Email: [EZ-EMAIL-16] Onboarding Day 1           ║');
  log('║  +2 days:                                                    ║');
  log('║    Step 10→ Wait 2 days                                     ║');
  log('║    Step 11→ Email: [EZ-EMAIL-17] Onboarding Day 3           ║');
  log('║  +4 days:                                                    ║');
  log('║    Step 12→ Wait 4 days                                     ║');
  log('║    Step 13→ Email: [EZ-EMAIL-18] Onboarding Day 7           ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
