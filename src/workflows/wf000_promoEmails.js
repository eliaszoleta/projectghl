/**
 * [EZ-000] Webinar Promo Email Campaign Blueprint
 *
 * PURPOSE: Pre-registration promotional emails sent to your existing list
 *          BEFORE the webinar to drive sign-ups.
 *
 * These are NOT automation workflow emails. They are broadcast/campaign emails
 * sent on fixed dates to contacts tagged with ez_promo-list.
 *
 * TWO WAYS TO SEND IN GHL:
 *
 * OPTION A – Email Campaigns (Recommended for fixed dates):
 *   GHL → Marketing → Emails → New Campaign
 *   Schedule each email on its specific send date below.
 *
 * OPTION B – Workflow with "Wait Until Date" steps:
 *   GHL → Automations → Workflows → + New Workflow
 *   TRIGGER: Tag Added → ez_promo-list
 *   Each step waits until the scheduled send date/time.
 */

// ── Email Copy ──────────────────────────────────────────────────────────────

export const PROMO_EMAIL_1 = {
  subject: 'The college readiness mistake most parents don't catch until it's too late',
  sendDate: 'T-7: 7 days before webinar',
  body: `Hi {{contact.firstName}},

Can I ask you something honest?

When you picture your child heading off to college, what's your biggest fear?

Most parents I talk to say the same thing: "I just want to make sure they're ready."

But here's what I've learned after years of working with families through this transition:

"Ready" looks very different from what most parents think.

Parents focus on grades, test scores, and college applications. Those matter. But they're not what determines whether your child thrives in college — or struggles through it.

The students who call home overwhelmed in their first semester? Most of them had good grades. Many of them had great grades.

What they were missing had nothing to do with academics.

That's exactly what I'm covering in a free live webinar: "5 Biggest Fears Parents Face Sending Their Child to College."

On [WEBINAR DATE] at [WEBINAR TIME], I'm breaking down the 5 fears I see holding families back — and the specific strategies that actually prepare students for what college demands.

If your child is heading to college in the next 1–4 years, this is for you.

👉 Grab your free spot here: [REGISTRATION LINK]

See you there,
Debbie Elder

P.S. This is a live session — no replay sold afterward. If you want the information, you need to be there.`,
};

export const PROMO_EMAIL_2 = {
  subject: 'Why a 4.0 GPA doesn't mean your child is ready for college',
  sendDate: 'T-6: 6 days before webinar',
  body: `Hi {{contact.firstName}},

I want to tell you about a student I worked with.

She had a 4.2 GPA. Honor roll every semester. Active in clubs, strong essays, accepted to her first-choice school.

By every measure her family had been using, she was ready.

And then she got to college.

Within six weeks, she was failing two classes, calling home crying every night, and questioning whether she even wanted to be there.

Her problem wasn't intelligence. It wasn't effort. It wasn't even the workload.

It was that the skills that got her through high school — and the skills college actually requires — are completely different. And no one had told her family that.

This is not a rare story. It's one of the most common patterns I see.

There is a gap between where students are when they leave high school and what college actually requires of them — academically, emotionally, socially, and career-wise.

Most families don't know the gap exists until their child is already in it.

My free webinar on [WEBINAR DATE] at [WEBINAR TIME] is specifically designed to help you close that gap before your child ever sets foot on campus.

👉 Save your spot here: [REGISTRATION LINK]

Debbie Elder

P.S. The parents who get the best results are the ones who start early. If your child is in high school right now, this webinar is worth your time.`,
};

export const PROMO_EMAIL_3 = {
  subject: 'What parents don't realize until it's too late',
  sendDate: 'T-5: 5 days before webinar',
  body: `Hi {{contact.firstName}},

After years of working with families through the college transition, I keep seeing the same pattern.

A parent comes to me after their child is already struggling. Freshman year. Maybe second semester. The grades have slipped, the calls home have gotten harder, and the family is trying to figure out what went wrong.

The conversation usually starts with: "But they were such a good student in high school."

And they were. That's not the issue.

The issue is that the skills, habits, and support systems that worked in high school simply don't carry over to college. College is a fundamentally different environment — and most students (and families) are unprepared for exactly how different it is.

Here's what makes this frustrating:

It's entirely preventable. With the right preparation and the right timing, these struggles don't have to happen.

That's what I'll be walking through on my free live webinar, "5 Biggest Fears Parents Face Sending Their Child to College":

→ The academic readiness gaps that GPA doesn't capture
→ The social and emotional factors that actually predict college success
→ The career-readiness blind spots families always overlook
→ The one conversation every parent needs to have with their child — before college begins

Join me on [WEBINAR DATE] at [WEBINAR TIME].

👉 Register free here: [REGISTRATION LINK]

Debbie Elder

P.S. Spots are limited for the live session. Register now to guarantee your place.`,
};

export const PROMO_EMAIL_4 = {
  subject: 'Why I started doing this work (and what it means for your family)',
  sendDate: 'T-4: 4 days before webinar',
  body: `Hi {{contact.firstName}},

I get asked a lot: "Why do you focus specifically on college readiness?"

The honest answer: because I've seen what happens when families don't have the right information.

I've spent years working with students and families as an internationally recognized innovator, best-selling author, and college preparation consultant. I've helped families navigate everything from selecting the right schools to ensuring their children actually succeed once they get there.

What I discovered is that most college preparation focuses on getting in — the application, the essays, the test scores.

Almost nothing prepares families for what happens after.

And the "after" is where everything either works out — or doesn't.

The students who thrive in college aren't the ones with the highest GPAs. They're the ones whose families understood what college actually demands, and prepared for it intentionally.

My free webinar, "5 Biggest Fears Parents Face Sending Their Child to College," is my way of giving every family access to what I've learned — the readiness gaps, the preparation strategies, and the framework for setting your child up for genuine success in college and beyond.

Join me live on [WEBINAR DATE] at [WEBINAR TIME].

👉 Register for free: [REGISTRATION LINK]

Debbie Elder

P.S. I'll be there live to answer your questions in real time. Bring your biggest concern about your child's college readiness — I'll address it directly.`,
};

export const PROMO_EMAIL_5 = {
  subject: 'Here\'s exactly what we\'re covering on [WEBINAR DATE]',
  sendDate: 'T-3: 3 days before webinar',
  body: `Hi {{contact.firstName}},

The webinar is in 3 days. I want to give you a specific preview of what we'll cover — so you know exactly what you're showing up for.

In "5 Biggest Fears Parents Face Sending Their Child to College," here's what we'll walk through together:

FEAR #1: "Is my child actually ready?"
Most parents don't know what college readiness looks like beyond grades. We'll clarify exactly what it means and how to assess where your child truly stands.

FEAR #2: "What if they struggle academically?"
College-level academics are a different challenge than high school. I'll share the specific skills students need that high school rarely builds.

FEAR #3: "What about their social and emotional adjustment?"
The transition to college is one of the biggest identity shifts of a young person's life. We'll cover what parents can do to support it — and what tends to backfire.

FEAR #4: "Is college worth the cost?"
The investment in college is real. I'll give you a framework for making sure your child maximizes it — and graduates positioned for the career they actually want.

FEAR #5: "Will they know what to do with their degree?"
Career readiness starts before graduation — and earlier than most families think. We'll cover what that preparation looks like and when to start.

By the end of the session, you'll have a clear picture of where your child is, what they need, and exactly what to do next.

Join me live: [WEBINAR DATE] at [WEBINAR TIME]

👉 Register here if you haven't yet: [REGISTRATION LINK]

Debbie Elder

P.S. This is a live webinar — your questions get answered in real time. Come ready with your biggest one.`,
};

export const PROMO_EMAIL_6 = {
  subject: '48 hours from now, you\'ll either have this — or you won\'t',
  sendDate: 'T-2: 2 days before webinar',
  body: `Hi {{contact.firstName}},

48 hours from now, this webinar will be over.

Some parents will walk away with a clear picture of where their child stands, what gaps need to be addressed, and a concrete plan for what to do next.

Others will still be wondering.

I want you to be in the first group.

"5 Biggest Fears Parents Face Sending Their Child to College" is a live, interactive session where I'll be breaking down the exact concerns I hear from parents every day — and giving you the strategies that actually work.

What makes this different from the generic advice online:

✔ It's specific to the college transition — not vague encouragement, but exactly what preparation looks like at each stage
✔ It covers all 5 dimensions of readiness — academic, social, emotional, financial, and career
✔ It's live — you can ask your specific question and get a real, tailored answer
✔ I'll be sharing something at the end for parents who want to take the next step — but only for those who show up live

This is the kind of clarity that saves families from expensive, painful trial and error later.

Join us on [WEBINAR DATE] at [WEBINAR TIME].

👉 Save your spot: [REGISTRATION LINK]

Debbie Elder

P.S. If you've been putting off registering, now is the time. Spots are limited and this is not being recorded for sale.`,
};

export const PROMO_EMAIL_7 = {
  subject: 'Tomorrow night — this is what\'s waiting for you',
  sendDate: 'T-1: 1 day before webinar',
  body: `Hi {{contact.firstName}},

Tomorrow night, I'm going live.

And I want to tell you exactly what's waiting for you when you show up.

The content: we're going deep on the 5 biggest fears parents face when sending their child to college. Not surface-level advice — real, specific strategies that address the actual gaps between where most students are and where they need to be.

But more than the content — you're going to walk away with something parents don't often feel when it comes to their child's college future:

Clarity.

That moment where the fog clears. Where you stop wondering if you're doing enough and actually know what to do next. Where you can look at your child's path forward and feel confident — not anxious.

That's what this session delivers.

Tomorrow. [WEBINAR DATE] at [WEBINAR TIME].

Your registration link: [REGISTRATION LINK]

Add it to your calendar right now. Set a reminder for 15 minutes before. And show up.

This is a live event — no recordings sold afterward. The only way to get this information is to be there.

See you tomorrow,
Debbie Elder

P.S. At the end of the session, I'll be sharing something special for parents who want to take this work further with me. You'll want to be there for that.`,
};

export const PROMO_EMAIL_8 = {
  subject: 'Tonight\'s the night — here\'s everything you need',
  sendDate: 'T-0: Morning of webinar',
  body: `Hi {{contact.firstName}},

Tonight is the night.

"5 Biggest Fears Parents Face Sending Their Child to College" goes LIVE at [WEBINAR TIME] today.

Your join link: [REGISTRATION LINK]

A few things to set yourself up for the best experience:

→ Join 5–10 minutes early to get settled and test your audio
→ Grab a notepad — you'll want to write things down
→ Find a quiet spot where you can focus for 60 minutes
→ Have your biggest question ready — we'll have live Q&A

Here's a quick reminder of what we're covering tonight:

✔ The real meaning of "college readiness" — and how to assess where your child stands
✔ The academic, social, and emotional gaps that lead to students struggling in their first year
✔ Career-readiness strategies your child needs now, not after they graduate
✔ How to navigate the financial reality of college without sacrificing the right opportunities

And at the end of the session — something special for parents who want to take the next step with me.

[WEBINAR DATE] | [WEBINAR TIME]
👉 [REGISTRATION LINK]

See you tonight,
Debbie Elder

P.S. This is live — your questions get answered in real time. I'll see you in a few hours.`,
};

export const PROMO_EMAIL_9 = {
  subject: 'We\'re live in 1 hour — join here',
  sendDate: 'T-0: 1 hour before webinar',
  body: `Hi {{contact.firstName}},

One hour from now, we go live.

"5 Biggest Fears Parents Face Sending Their Child to College" starts at [WEBINAR TIME].

👉 Click here to join: [REGISTRATION LINK]

This is your reminder to:

1. Click the link above and get into the room now
2. Make sure your audio is working
3. Have a pen and paper ready

One hour from now, you'll have clarity on exactly where your child stands — and what to do next.

See you inside,
Debbie Elder

P.S. There's something special at the end of tonight's session that I only share with live attendees. Stay until the very end.`,
};

// ── Campaign Blueprint ──────────────────────────────────────────────────────

export const WF000 = {
  id: 'EZ-000',
  name: '[EZ-000] Webinar Promo Email Campaign',
  purpose: 'Pre-registration promotional emails sent to your list to drive webinar sign-ups.',
  sendMethod: 'GHL Email Campaigns (Marketing → Emails) or Workflow with Wait Until Date steps',
  emails: [
    { id: 'EZ-PROMO-01', send: 'T-7: 7 days before webinar',     subject: PROMO_EMAIL_1.subject },
    { id: 'EZ-PROMO-02', send: 'T-6: 6 days before webinar',     subject: PROMO_EMAIL_2.subject },
    { id: 'EZ-PROMO-03', send: 'T-5: 5 days before webinar',     subject: PROMO_EMAIL_3.subject },
    { id: 'EZ-PROMO-04', send: 'T-4: 4 days before webinar',     subject: PROMO_EMAIL_4.subject },
    { id: 'EZ-PROMO-05', send: 'T-3: 3 days before webinar',     subject: PROMO_EMAIL_5.subject },
    { id: 'EZ-PROMO-06', send: 'T-2: 2 days before webinar',     subject: PROMO_EMAIL_6.subject },
    { id: 'EZ-PROMO-07', send: 'T-1: 1 day before webinar',      subject: PROMO_EMAIL_7.subject },
    { id: 'EZ-PROMO-08', send: 'T-0: Morning of webinar',        subject: PROMO_EMAIL_8.subject },
    { id: 'EZ-PROMO-09', send: 'T-0: 1 hour before webinar',     subject: PROMO_EMAIL_9.subject },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-000] Webinar Promo Email Campaign                       ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  METHOD: GHL Email Campaigns (Marketing → Emails)            ║');
  log('║  TARGET: Contacts tagged ez_promo-list                       ║');
  log('║                                                              ║');
  log('║  EZ-PROMO-01  T-7  College readiness mistake (curiosity)    ║');
  log('║  EZ-PROMO-02  T-6  Why 4.0 GPA doesn\'t mean ready (story)  ║');
  log('║  EZ-PROMO-03  T-5  What parents don\'t realize (pattern)    ║');
  log('║  EZ-PROMO-04  T-4  Why I started this work (authority)      ║');
  log('║  EZ-PROMO-05  T-3  Exactly what we\'re covering (preview)   ║');
  log('║  EZ-PROMO-06  T-2  48 hours (urgency)                       ║');
  log('║  EZ-PROMO-07  T-1  Tomorrow night (commitment)              ║');
  log('║  EZ-PROMO-08  T-0  Tonight\'s the night (day-of)            ║');
  log('║  EZ-PROMO-09  T-0  Live in 1 hour (final countdown)         ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
