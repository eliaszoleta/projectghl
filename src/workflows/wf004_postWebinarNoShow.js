/**
 * [EZ-004] Post-Webinar – No-Show Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-no-show
 * (This tag is applied via Zoom webhook when the webinar ends.
 *  Contacts who registered but did NOT attend get this tag.)
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_MISSED = {
  subject: "We missed you at the webinar — here's the replay",
  body: `Hi {{contact.firstName}},

Life happens — I completely understand.

But I didn't want you to miss out on what we covered last night, because if you registered, it's because something about this topic resonated with you.

Here's your replay link:
👉 {{custom.ez_replay_link}}

On the webinar, I walked through the 5 biggest fears I hear from parents every single day — and more importantly, how to work through each one before your child heads off to college:

• The fear that your child isn't truly "ready" — and what readiness actually looks like
• Why good grades can still lead to struggling freshmen (and what the research says really predicts success)
• The hidden emotional and social gaps most parents don't see until it's too late
• How to talk about money and college costs without it becoming a source of shame or stress
• What career-readiness really means — and why waiting until senior year is too late

The replay will only be available for a few days, so carve out 60 minutes soon and watch it.

One more thing: at the end of the webinar, I share something special for parents who want to take the next step. Make sure you watch through to the end.

Rooting for you and your family,

Debbie Elder

P.S. If this is a bad time, save the link and come back to it. But don't wait too long — the replay comes down shortly.`,
};

export const EMAIL_SOFT_OFFER = {
  subject: "What the webinar revealed (and what to do next)",
  body: `Hi {{contact.firstName}},

Whether you've had a chance to watch the replay or not, I want to share the single most important thing parents took away from the webinar:

**Helping your child succeed in college isn't about working harder. It's about having the right information at the right time.**

Most parents don't realize until it's too late that the skills, mindset, and support systems their child needs for college success are completely different from what got them through high school.

That gap — between what high school demands and what college actually requires — is exactly what causes bright, capable students to struggle, stall out, or drop out in their first year.

That's why I created the 6-Week Virtual College Success Course.

Here's what's inside:

✅ College Prep Masterclass Series ($2,997 value) — 6 weeks of live virtual sessions covering the academic, social, emotional, and career-readiness skills your child needs to hit the ground running
✅ Parent & Student Action Plans — step-by-step guides for each week so nothing falls through the cracks
✅ Private support community — connect with other parents going through the same journey
✅ Direct access to me and my team throughout the program

Total value: $3,497

If you've been wondering "what's the most important thing I can do for my child right now?" — this is it.

👉 Get the details and enroll here: [OFFER LINK]

A few spots remain, and the cart closes [CART CLOSE DATE] at midnight ET.

Debbie Elder

P.S. Still haven't watched the replay? Here it is again: {{custom.ez_replay_link}} — watch through to the end to hear about everything that's included.`,
};

export const EMAIL_NUDGE = {
  subject: "A parent just sent me this message...",
  body: `Hi {{contact.firstName}},

I got a message this week from a parent in our last cohort. I asked if I could share it:

*"Before working with Debbie, I thought my son was ready for college. He had the grades, he had the scores. What I didn't realize was how unprepared he was for everything else — the independence, the social pressure, the self-management. We went through the program together and it completely changed how we talked about college. He's now thriving in his second semester and I feel like I actually prepared him — not just helped him get in."*

That's exactly why this program exists.

Getting into college and thriving in college are two completely different things. And most families only focus on one of them.

The 6-Week Virtual College Success Course gives your child — and you — the tools, the framework, and the support to bridge that gap before they ever set foot on campus.

Here's what you get:
✅ 6-Week College Prep Masterclass Series ($2,997 value)
✅ Parent & Student Action Plans for each week
✅ Private community + direct access to Debbie and her team
✅ Total value: $3,497

The cart closes TOMORROW — [CART CLOSE DATE] at midnight ET.

👉 Secure your spot here: [OFFER LINK]

If you have any questions before enrolling, just reply to this email. I'll personally get back to you.

Debbie Elder

P.S. If you still haven't watched the replay, it's worth 60 minutes of your time: {{custom.ez_replay_link}}`,
};

export const EMAIL_LAST_CHANCE = {
  subject: "Closes tonight at midnight — final notice",
  body: `Hi {{contact.firstName}},

This is it — the cart for the 6-Week Virtual College Success Course closes tonight at midnight ET.

After that, enrollment is closed. No exceptions.

I want to be straight with you: if you've been thinking about this but keep putting it off, I understand. It's easy to say "I'll figure it out later." But the families who wait usually end up scrambling — after the struggles start, after the first semester grades come in, after their child is already in crisis mode.

The parents who thrive are the ones who prepared early.

You still have a few hours to be one of them.

Here's what you get when you enroll today:
✅ 6-Week Virtual College Prep Masterclass Series ($2,997 value)
✅ Parent & Student Action Plans — week by week
✅ Private support community + direct access to Debbie
✅ Everything your child needs to go from "I hope this works out" to confident, ready, and set up for success

Total value: $3,497

👉 Enroll now before midnight: [OFFER LINK]

Your child has one shot at their college experience. Make it count.

Rooting for you,

Debbie Elder

P.S. If you have a quick question before enrolling, reply right now and I'll respond personally. The cart closes at midnight — don't wait.`,
};

// ── SMS Copy ───────────────────────────────────────────────────────────────

export const SMS_NUDGE = {
  body: `{{contact.firstName}}, the 6-Week College Success Course offer closes [CART CLOSE DATE] at midnight. Don't miss it 👉 [OFFER LINK] – STOP to opt out.`,
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

    // ── Day 3 After: Social Proof Nudge ───────────────────────────────────
    {
      step: 8,
      action: 'Wait',
      duration: '24 hours',
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

    // ── Day 4 After: Last Chance ([CART CLOSE DATE] – cart closes midnight) ───────────
    {
      step: 11,
      action: 'Wait',
      duration: '24 hours',
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
  log('║  +24h: Day 3 Social Proof Nudge                             ║');
  log('║    Step 8 → Wait 24h                                        ║');
  log('║    Step 9 → Email: [EZ-EMAIL-13] Offer Reminder             ║');
  log('║    Step 10→ SMS:   [EZ-SMS-08]   Offer Nudge               ║');
  log('║  +24h: Day 4 Last Chance ([CART CLOSE DATE] – midnight close)          ║');
  log('║    Step 11→ Wait 24h                                        ║');
  log('║    Step 12→ Email: [EZ-EMAIL-14] Last Chance                ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
