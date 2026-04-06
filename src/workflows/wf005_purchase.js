/**
 * [EZ-005] Purchase & Membership Access Workflow Blueprint
 *
 * TRIGGER: Order Form Submitted (GHL order form with Stripe connected)
 *          OR: Payment Received (Stripe webhook via GHL)
 *
 * This workflow fires when a contact purchases the course.
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_PURCHASE_CONFIRM = {
  subject: "You're in — here's how to access your 6-Week Course",
  body: `Hi {{contact.firstName}},

Welcome to the 6-Week Virtual College Success Course. I am so glad you're here.

You just made one of the most important investments you can make in your child's future — and I don't say that lightly.

Your course access is ready right now.

👉 Log in and get started here: [COURSE PORTAL LINK]

Here's what to do first:
1. Click the link above and log in (or create your account if it's your first time)
2. Head to Week 1 and watch the orientation video — it's short and sets up everything that follows
3. Download the Parent & Student Action Plan for Week 1 — you'll use this throughout the week

That's it. One video. One action plan. That's your Day 1.

The 6 weeks ahead are designed to build on each other — so you don't need to do everything at once. You just need to start.

If you run into any issues logging in or have questions about where to begin, reply to this email and I'll personally make sure you're taken care of.

So excited for what's ahead for your family,

Debbie Elder

P.S. Save this email — it has your course access link. You'll want it handy.`,
};

export const EMAIL_ONBOARDING_D1 = {
  subject: "Day 1: Start here — your roadmap for Week 1",
  body: `Hi {{contact.firstName}},

Welcome back. Day 1 starts today — and I want to make sure you begin the right way.

Here's your roadmap for this first week:

📍 Step 1: Watch the Week 1 orientation in your course portal — it lays the foundation for everything we'll build over the next 6 weeks
📍 Step 2: Download and review the Week 1 Parent & Student Action Plan — this is your guide for the conversations you'll want to have with your child this week
📍 Step 3: Complete the Student Readiness Self-Assessment — this will show you exactly where your child stands right now across the 5 dimensions we focus on

One thing I've seen consistently: the parents and students who complete Week 1 in the first few days set the tone for the entire course. Don't let the week slip by without getting started.

👉 Log in here: [COURSE PORTAL LINK]

If anything feels unclear or you have questions after watching, just reply to this email. I'm here.

Cheering you on,
Debbie Elder

P.S. The most important thing you can do today is start — even if it's just the first video. Momentum matters.`,
};

export const EMAIL_ONBOARDING_D3 = {
  subject: "Day 3 — the shift that changes everything",
  body: `Hi {{contact.firstName}},

By Day 3, most families who are on track have completed the Week 1 content and had at least one conversation with their child based on the Action Plan.

If that's you — great work. Keep going. The shift that happens when a student starts seeing their college future as something they're actively building (rather than something that's just happening to them) is one of the most powerful moments in this program.

If you haven't started yet — that's okay. No guilt, no judgment. Just log in today.

👉 [COURSE PORTAL LINK]

Even 20 minutes today puts you ahead of where you'd be otherwise.

Here's your challenge for Day 3: have one conversation with your child about college readiness that isn't about grades or applications. Ask them: "What are you most excited about? What are you most nervous about?" Just listen. That conversation alone will tell you more about where they are than any transcript.

Reply and tell me how it goes. I read every response.

Debbie Elder

P.S. Week 2 unlocks on Day 7 — so the best time to finish Week 1 is now.`,
};

export const EMAIL_ONBOARDING_D7 = {
  subject: "One week in — let's make sure you're set up for success",
  body: `Hi {{contact.firstName}},

One week in. I want to check in.

If you've been working through the course — how is it going? What's clicking? What questions do you have? Just hit reply and let me know. This is a program, not just a product, and your experience matters to me.

If you haven't started yet — I want to say something important:

It's not too late. And I'm not going to tell you it's fine and there's no rush. Because the truth is, the earlier you and your child work through this material, the more time you have to act on it.

The 6-week framework is designed to build progressively. Every week connects to the next. And the families who get the most out of this are the ones who move through it together — parent and student, side by side.

Your course is waiting for you right now.

👉 Log in here: [COURSE PORTAL LINK]

Start with Week 1. Give yourself an hour this weekend. That's all it takes to get the momentum going.

And if there's something holding you back — a question, a concern, something that feels confusing — reply to this email. I will personally respond.

You invested in your child's future. Let's make sure you get everything this program has to offer.

Rooting for you,
Debbie Elder

P.S. Coming up in Week 2: the academic skills deep dive — where we get specific about what college-level study actually requires and how to build those skills now. Don't miss it.`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_PURCHASE_CONFIRM = {
  body: `🎉 You're in {{contact.firstName}}! Access your 6-Week College Success Course here: [COURSE PORTAL LINK] – Welcome! STOP to opt out.`,
};

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
