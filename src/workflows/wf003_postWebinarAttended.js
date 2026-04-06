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
  subject: "Here's the Replay!",
  body: `Hi {{contact.firstName}},

Thank you for showing up last night. It meant a lot to have you in the room.

Here's your replay link: [REPLAY LINK]
⚠️ This replay will only be available until [CART CLOSE DATE] at midnight.

If you were there live, you know we covered a lot of ground — the readiness gaps most parents overlook, the social and emotional factors that determine whether students thrive or struggle, and the career blind spots that catch families off guard.

But here's what I didn't get to fully share during the webinar (because I didn't want to rush it):

The exact 6-week system I use with the families I work with privately — the one that takes everything we talked about and turns it into a real, personalized plan for your child.

It's called the 6-Week Virtual College Success Course. And it's the natural next step for parents who are serious about their child's outcome.

Here's what it includes:

→ The College Prep Masterclass Series (valued at $2,997) — a step-by-step program that builds the self-leadership skills your student needs to succeed in college and beyond
→ 6 weeks of structured guidance so you know exactly what to focus on each week
→ A complete collegiate roadmap built around your child's specific goals

Total value: $3,497

I'll share the full details — including the special attendee pricing — in tomorrow's email.

For now, watch the replay while it's still fresh: [REPLAY LINK]

Talk soon,
Debbie Elder

P.S. Have questions before tomorrow? Just reply to this email. I read every one.`,
};

export const EMAIL_OFFER_D1 = {
  subject: "Replay + How 6-Week Course Empowers Your Student",
  body: `Hi {{contact.firstName}},

Yesterday I mentioned something I've been building for parents exactly like you.

Today I want to tell you everything about it.

It's called the 6-Week Virtual College Success Course — and if your child is heading to college in the next 1–4 years, this might be the most important investment you make in their future.

Here's what's inside:

THE COLLEGE PREP MASTERCLASS SERIES (valued at $2,997)
A step-by-step curriculum that gives your student the self-leadership skills, study strategies, and emotional resilience they need to not just survive college — but excel. This alone has helped students go from overwhelmed and struggling to confident and on-track.

THE 6-WEEK PARENT SUCCESS FRAMEWORK
Each week has a clear focus: what to work on, what conversations to have with your child, and how to track progress. No guessing. No overwhelm. Just a proven path forward.

WHAT YOU'LL HAVE AFTER 6 WEEKS:
✔ A complete collegiate roadmap tailored to your child's specific goals
✔ A student who knows how to manage themselves academically, socially, and emotionally
✔ Peace of mind that you've done everything possible to set them up for success

Total program value: $3,497

As a webinar attendee, you have access to this at a special enrollment price — but only until [CART CLOSE DATE] at midnight. After that, this offer closes.

👉 [Click here to learn more and enroll] — [targeturl]

Still need to watch the replay? It's still available here: [REPLAY LINK] (until [CART CLOSE DATE])

Debbie Elder

P.S. Enrollment is limited to make sure every family gets the support they need. Once spots are filled, they're gone. Don't sit on this one.`,
};

export const EMAIL_OFFER_D3 = {
  subject: "Don't Miss Out: Unlock Your Student's True Potential",
  body: `Hi {{contact.firstName}},

Since yesterday's email about the 6-Week Virtual College Success Course, I've gotten a handful of questions. Let me answer the most common ones here.

"Is this right for my child even if they're only a sophomore?"
Yes — in fact, the earlier you start, the better. The skills in this course compound over time. A student who builds these habits in 10th grade has a massive advantage over one who tries to figure it out freshman year of college.

"What if my child isn't motivated?"
That's exactly what this course addresses. One of the core components is developing intrinsic motivation and self-leadership — so the drive to succeed comes from them, not from you constantly pushing. Many parents say this is the biggest shift they see.

"Is it worth the investment?"
Consider this: the average cost of a student dropping out in their first year — tuition, room and board, lost time — is tens of thousands of dollars. This course exists to prevent that. The ROI isn't just financial. It's your child's confidence, their career trajectory, and your peace of mind.

"Do I need to be tech-savvy?"
Not at all. Everything is delivered through a simple online platform. If you can watch a video, you can do this.

Still have a question I haven't answered? Reply to this email — I'm happy to help you figure out if this is the right fit for your family.

Ready to move forward? The special offer is open until [CART CLOSE DATE] at midnight.

👉 [Click here to enroll in the 6-Week Virtual College Success Course] — [targeturl]

Replay still available here (until [CART CLOSE DATE]): [REPLAY LINK]

Debbie Elder

P.S. The families who hesitate are the ones who wish they hadn't. Don't let the deadline sneak up on you.`,
};

export const EMAIL_OFFER_D5 = {
  subject: "Time Is Running Out – Replay & Offer Closing Soon!",
  body: `Hi {{contact.firstName}},

Quick update: the replay and the enrollment offer for the 6-Week Virtual College Success Course both close tomorrow — [CART CLOSE DATE] at midnight.

After that, the course goes back to its regular price, and I can't guarantee when enrollment reopens.

I want to give you one more reason to act now.

One of the parents who went through this course sent me this:

"Before this course, I didn't know where to start. My daughter was a junior and I was panicking. After going through the material with her, she has a real plan. She knows what she wants, she knows how to study, and she's actually excited about college now. I wish I had found this sooner."

That's what's possible on the other side of this decision.

Here's what you get when you enroll:
→ The College Prep Masterclass Series ($2,997 value)
→ The 6-Week Parent Success Framework — one clear focus per week, no overwhelm
→ A complete collegiate roadmap for your child
→ Total value: $3,497, at a special attendee price — until tomorrow midnight

👉 [Click here to enroll before the offer closes] — [targeturl]

Replay link (expires tomorrow midnight): [REPLAY LINK]

Debbie Elder

P.S. Ask yourself this: what is it worth to know — really know — that your child is ready for college? That answer is worth more than any price tag on this course.`,
};

export const EMAIL_URGENCY = {
  subject: "Last Call - Replay and Offer Closing Today!",
  body: `Hi {{contact.firstName}},

Today is the last day.

The replay of "5 Biggest Fears Parents Face Sending Their Child to College" comes down tonight at midnight. The enrollment offer for the 6-Week Virtual College Success Course closes with it.

After tonight, this is gone.

I don't say that to pressure you. I say it because I've seen what happens when parents wait.

They tell themselves they'll deal with it later. And later becomes: their child struggling through freshman year. Calling home overwhelmed. Losing scholarship eligibility. Changing majors three times because no one helped them figure out who they are and where they're going.

This course prevents that.

Here's what closes tonight at midnight:

✔ Enrollment in the 6-Week Virtual College Success Course
✔ The College Prep Masterclass Series ($2,997 value) included at no extra charge
✔ The special attendee pricing — not available after tonight
✔ Access to the webinar replay

Total value: $3,497. Tonight only.

👉 [Click here to enroll — offer closes at midnight] — [targeturl]

Debbie Elder

P.S. If you have any last questions before you decide, reply to this email right now. I'll get back to you as fast as I can.`,
};

export const EMAIL_LAST_CHANCE = {
  subject: "Last Chance: Course Offer Ends Tonight!",
  body: `Hi {{contact.firstName}},

A few hours left.

The 6-Week Virtual College Success Course enrollment closes at midnight tonight — and I mean it. No extensions, no exceptions.

I know you've been thinking about this. And I know the hesitation is real. Every investment feels significant when you're in the moment of deciding.

But here's what I want you to consider:

You showed up to the webinar because something about your child's college readiness was worrying you. That worry didn't come from nowhere. It came from the part of you that knows the stakes are real — and that wants to get this right.

This course is the answer to that worry.

6 weeks. A proven system. A roadmap built around your child. And the College Prep Masterclass Series — a $2,997 program on its own — included as part of enrollment.

What you get:
✔ The College Prep Masterclass Series ($2,997 value) — self-leadership skills that last a lifetime
✔ 6-Week Parent Success Framework — a clear plan, week by week
✔ A confident, prepared student on the other side
✔ Total value: $3,497

Tonight only. Midnight deadline. Hard close.

👉 [Click here to enroll now] — [targeturl]

If you decide this isn't the right time, I understand. But if you're on the fence — lean in. The parents who've done this don't regret it.

Debbie Elder

P.S. After midnight, the offer is closed and I cannot make exceptions. If you want in, now is the time. [Enroll here — targeturl]`,
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

    // ── Day 2 After: FAQ / Unlock Potential ────────────────────────────────
    {
      step: 9,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 10,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-07] Offer Day 2 (Attended)',
      body: EMAIL_OFFER_D3,
    },

    // ── Day 3 After: Urgency / Offer Closing Soon ──────────────────────────
    {
      step: 11,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 12,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-08] Offer Day 3 (Attended)',
      body: EMAIL_OFFER_D5,
    },
    {
      step: 13,
      action: 'Send SMS',
      templateName: '[EZ-SMS-06] Offer Day 3 (Attended)',
      body: SMS_OFFER_D5,
    },

    // ── Day 4 Morning: Last Call ───────────────────────────────────────────
    {
      step: 14,
      action: 'Wait',
      duration: '24 hours',
    },
    {
      step: 15,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-09] Last Call – Morning',
      body: EMAIL_URGENCY,
    },

    // ── Day 4 Evening: Final Chance (same day, ~8 hours later) ────────────
    {
      step: 16,
      action: 'Wait',
      duration: '8 hours',
    },
    {
      step: 17,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-10] Last Chance – Evening',
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
  log('║  +24h: Day 2 FAQ / Unlock Potential                         ║');
  log('║    Step 9 → Wait 24h                                        ║');
  log('║    Step 10→ Email: [EZ-EMAIL-07] Offer Day 2               ║');
  log('║  +24h: Day 3 Urgency / Offer Closing Soon                   ║');
  log('║    Step 11→ Wait 24h                                        ║');
  log('║    Step 12→ Email: [EZ-EMAIL-08] Offer Day 3               ║');
  log('║    Step 13→ SMS:   [EZ-SMS-06]   Offer Day 3               ║');
  log('║  +24h: Day 4 Morning – Last Call                            ║');
  log('║    Step 14→ Wait 24h                                        ║');
  log('║    Step 15→ Email: [EZ-EMAIL-09] Last Call Morning         ║');
  log('║  +8h:  Day 4 Evening – Final Chance                         ║');
  log('║    Step 16→ Wait 8h                                         ║');
  log('║    Step 17→ Email: [EZ-EMAIL-10] Last Chance Evening       ║');
  log('║    Step 18→ SMS:   [EZ-SMS-07]   Last Chance               ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
