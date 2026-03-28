/**
 * [EZ-002] Webinar Reminder Sequence Workflow Blueprint
 *
 * TRIGGER: Tag Added → ez_webinar-registered
 * (Runs immediately after EZ-001 tags the contact)
 *
 * Build in GHL → Automations → Workflows → + New Workflow
 */

// ── Email Copy ─────────────────────────────────────────────────────────────

export const EMAIL_3_DAYS = {
  subject: "You Signed Up for 5 Biggest Fears Parents Face Sending Their Child to College – Here's Why You Don't Want to Miss It!",
  body: `Hi {{contact.firstName}},

3 days until the webinar — and I want to make sure you show up.

Not just because of the information we're covering (though that alone is worth the hour).

But because of what happens AFTER the webinar.

Parents who attend live get access to something I only share with people in the room. It's the step-by-step system that takes everything you learn in the session and turns it into real, lasting results for your child.

But more on that later.

For now — here's a preview of what we're covering on February 5th at 6:00 PM ET:

✔ Why most parents believe their child is college-ready — and why that belief is costing them
✔ The hidden gaps between high school preparation and what college actually demands
✔ Social and emotional preparation strategies that top-performing students use
✔ How to position your child for career success before they ever set foot on campus
✔ The one conversation you need to have with your child right now

This is a live event. No recordings sold afterward. No second chance to ask questions in real time.

Your webinar link: {{custom.ez_zoom_join_link}}
📅 February 5, 2026 at 6:00 PM ET

See you there,
Debbie Elder

P.S. Block off the hour on your calendar and treat this like an appointment you cannot miss. Your child's college experience may depend on it.`,
};

export const EMAIL_2_DAYS = {
  subject: "Unlock Your Child's College Success!",
  body: `Hi {{contact.firstName}},

2 days from now, something shifts.

Either you'll have the clarity and strategies you need to genuinely prepare your child for college — or you'll still be wondering if you're doing enough.

The webinar on February 5th at 6:00 PM ET is that turning point.

Here's what's different about showing up LIVE vs. just catching a replay later:

1. You get your specific questions answered in real time — not generic advice, but guidance tailored to your situation
2. You'll hear what other parents are struggling with, and realize you're not alone in this
3. There's an exclusive opportunity I'm sharing only with live attendees — something that can change the entire trajectory of your child's college experience

I've been helping families navigate college preparation for years. What I see over and over is this:

The parents who feel most confident aren't the ones who did the most research. They're the ones who got the RIGHT strategy — early enough to actually use it.

That's what February 5th is about.

Your join link: {{custom.ez_zoom_join_link}}
📅 February 5, 2026 | 6:00 PM ET

I'll see you there.

Debbie Elder

P.S. Two days goes faster than you think. Put the link somewhere you won't lose it.`,
};

export const EMAIL_1_DAY = {
  subject: "Tomorrow's the Big Day! Here's Why You Need to Show Up",
  body: `Hi {{contact.firstName}},

Tomorrow at 6:00 PM ET, I'm going live — and I want you there.

Here's your webinar link: {{custom.ez_zoom_join_link}}
📅 February 5, 2026 | 6:00 PM ET

I want to be straight with you about something.

The parents who get the best results for their college-bound students aren't the ones who do the most research. They're not the ones who spend the most money or stress the most.

They're the ones who get the RIGHT information at the RIGHT time — and act on it.

Tomorrow's session is designed to give you exactly that.

You'll leave with:
→ Clarity on where your child actually stands (vs. where you think they stand)
→ A framework for college readiness that goes far beyond GPA
→ Specific strategies you can start implementing this week
→ Confidence in the path forward — for both you and your student

And for those who show up live: I'm sharing something at the end of the session that I don't advertise. It's the system I use with the families I work with privately — and tomorrow night, you'll get access to it.

Show up live. Come with your biggest question. I'll answer it in real time.

See you tomorrow evening,
Debbie Elder

P.S. Can't be at your computer at 6 PM? Join from your phone. The important thing is that you're there.`,
};

export const EMAIL_1_HOUR = {
  subject: "1 Hour to Go! Drop Everything and Show Up!",
  body: `Hi {{contact.firstName}},

We go live in ONE HOUR.

Click here to join: {{custom.ez_zoom_join_link}}
🕕 6:00 PM ET — Tonight

Before we start, three things:

1. Find a quiet spot where you can focus for 60 minutes
2. Have a notepad ready — you'll want to write things down
3. Come with your biggest question about your child's college readiness

Here's why showing up LIVE matters more than watching the replay later:

The replay won't have the live Q&A. It won't have the energy of a room full of parents who are in the same position you are. And it won't have the special opportunity I'm sharing with tonight's attendees only — the one that gives you the complete system, not just the strategy overview.

This is your moment to get the clarity you've been looking for.

🔗 Join here: {{custom.ez_zoom_join_link}}

See you in an hour,
Debbie Elder

P.S. Doors open 10 minutes early. Join early to make sure your audio and video are working before we start.`,
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

    // ── 2 Days Before ───────────────────────────────────────────────────────
    {
      step: 3,
      action: 'Wait',
      waitUntil: '2 days before [EZ-008] Webinar Date at 9:00 AM',
    },
    {
      step: 4,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-02B] 2 Days Before Reminder',
      body: EMAIL_2_DAYS,
    },

    // ── 1 Day Before ────────────────────────────────────────────────────────
    {
      step: 5,
      action: 'Wait',
      waitUntil: '1 day before [EZ-008] Webinar Date at 9:00 AM',
    },
    {
      step: 6,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-03] 1 Day Before Reminder',
      body: EMAIL_1_DAY,
    },
    {
      step: 7,
      action: 'Send SMS',
      templateName: '[EZ-SMS-02] 1 Day Before Reminder',
      body: SMS_1_DAY,
    },

    // ── 1 Hour Before ───────────────────────────────────────────────────────
    {
      step: 8,
      action: 'Wait',
      waitUntil: '1 hour before [EZ-008] Webinar Date',
    },
    {
      step: 9,
      action: 'Send Email',
      templateName: '[EZ-EMAIL-04] 1 Hour Before Reminder',
      body: EMAIL_1_HOUR,
    },
    {
      step: 10,
      action: 'Send SMS',
      templateName: '[EZ-SMS-03] 1 Hour Before Reminder',
      body: SMS_1_HOUR,
    },

    // ── 15 Minutes Before ───────────────────────────────────────────────────
    {
      step: 11,
      action: 'Wait',
      waitUntil: '45 minutes after previous wait (15 min before webinar)',
    },
    {
      step: 12,
      action: 'Send SMS',
      templateName: '[EZ-SMS-04] 15 Minutes Before',
      body: SMS_15_MIN,
    },
  ],
};

export function printBlueprint(log) {
  log('\n╔══════════════════════════════════════════════════════════════╗');
  log('║  [EZ-002] Webinar Reminder Sequence                          ║');
  log('╠══════════════════════════════════════════════════════════════╣');
  log('║  TRIGGER: Tag Added → ez_webinar-registered                  ║');
  log('║                                                              ║');
  log('║  Step 1  → Wait until 3 days before [EZ-008] Webinar Date   ║');
  log('║  Step 2  → Email: [EZ-EMAIL-02] 3 Days Before               ║');
  log('║  Step 3  → Wait until 2 days before Webinar Date            ║');
  log('║  Step 4  → Email: [EZ-EMAIL-02B] 2 Days Before              ║');
  log('║  Step 5  → Wait until 1 day before Webinar Date             ║');
  log('║  Step 6  → Email: [EZ-EMAIL-03] 1 Day Before                ║');
  log('║  Step 7  → SMS:   [EZ-SMS-02]   1 Day Before                ║');
  log('║  Step 8  → Wait until 1 hour before Webinar Date            ║');
  log('║  Step 9  → Email: [EZ-EMAIL-04] 1 Hour Before               ║');
  log('║  Step 10 → SMS:   [EZ-SMS-03]   1 Hour Before               ║');
  log('║  Step 11 → Wait 45 minutes (= 15 min before webinar)        ║');
  log('║  Step 12 → SMS:   [EZ-SMS-04]   15 Minutes Before           ║');
  log('╚══════════════════════════════════════════════════════════════╝');
}
