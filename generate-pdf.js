/**
 * EZ GHL Setup Plan – PDF Generator
 * Run: node generate-pdf.js
 * Output: EZ-GHL-Setup-Plan.pdf
 */

import PDFDocument from 'pdfkit';
import fs from 'fs';

const OUT = 'EZ-GHL-Setup-Plan.pdf';
const doc = new PDFDocument({ margin: 50, size: 'A4' });
doc.pipe(fs.createWriteStream(OUT));

// ── Colours & helpers ──────────────────────────────────────────────────────
const C = {
  black:  '#1a1a2e',
  accent: '#4a90d9',
  green:  '#27ae60',
  orange: '#e67e22',
  grey:   '#555555',
  light:  '#f0f4f8',
  white:  '#ffffff',
};

function h1(text) {
  doc.moveDown(0.5)
     .fontSize(20).fillColor(C.accent).font('Helvetica-Bold')
     .text(text)
     .moveDown(0.3);
}

function h2(text) {
  doc.moveDown(0.6)
     .fontSize(14).fillColor(C.black).font('Helvetica-Bold')
     .text(text)
     .moveDown(0.2);
}

function h3(text) {
  doc.moveDown(0.4)
     .fontSize(11).fillColor(C.accent).font('Helvetica-Bold')
     .text(text)
     .moveDown(0.1);
}

function body(text) {
  doc.fontSize(10).fillColor(C.black).font('Helvetica').text(text, { lineGap: 2 });
}

function bullet(text, indent = 20) {
  doc.fontSize(10).fillColor(C.black).font('Helvetica')
     .text(`• ${text}`, { indent, lineGap: 2 });
}

function step(num, label, detail = '') {
  doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold')
     .text(`Step ${num}`, { continued: true })
     .fillColor(C.black).font('Helvetica')
     .text(`  →  ${label}`, { lineGap: 2 });
  if (detail) {
    doc.fontSize(9).fillColor(C.grey).font('Helvetica-Oblique')
       .text(detail, { indent: 40, lineGap: 2 });
  }
}

function divider() {
  doc.moveDown(0.4)
     .moveTo(50, doc.y).lineTo(545, doc.y)
     .strokeColor('#cccccc').lineWidth(0.5).stroke()
     .moveDown(0.4);
}

function tag(text) {
  doc.fontSize(9).fillColor(C.green).font('Helvetica-Bold').text(text, { continued: true })
     .fillColor(C.black).font('Helvetica').text('  ');
}

function sectionBox(title, color = C.accent) {
  const y = doc.y;
  doc.rect(50, y, 495, 20).fill(color);
  doc.fontSize(11).fillColor(C.white).font('Helvetica-Bold')
     .text(title, 56, y + 5);
  doc.moveDown(1.2);
}

// ═══════════════════════════════════════════════════════════════════════════
// COVER PAGE
// ═══════════════════════════════════════════════════════════════════════════
doc.rect(0, 0, 595, 842).fill(C.black);

doc.fontSize(28).fillColor(C.accent).font('Helvetica-Bold')
   .text('EZ GHL Webinar &', 50, 220, { align: 'center' })
   .text('Course Automation', { align: 'center' })
   .moveDown(0.5);

doc.fontSize(14).fillColor(C.white).font('Helvetica')
   .text('Complete Setup Plan', { align: 'center' })
   .moveDown(0.3);

doc.fontSize(10).fillColor('#aaaaaa').font('Helvetica')
   .text('Built with Claude · Prefix: [EZ-XXX] / ez_', { align: 'center' })
   .moveDown(3);

const summaryItems = [
  '5 Automated Workflows',
  '18 Email Templates',
  '9 SMS Templates',
  '1 Pipeline · 2 Custom Fields · 6 Tags',
];
summaryItems.forEach(item => {
  doc.fontSize(11).fillColor(C.white).font('Helvetica')
     .text(`✓  ${item}`, { align: 'center', lineGap: 6 });
});

doc.fontSize(9).fillColor('#888888').font('Helvetica')
   .text(`Generated: ${new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}`, 50, 780, { align: 'center' });

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 2 – TABLE OF CONTENTS
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();

h1('Table of Contents');
divider();

const toc = [
  ['1.', 'Phase 1 – API-Created Resources', '3'],
  ['',   '1.1  Pipeline: [EZ-006] Webinar Pipeline', '3'],
  ['',   '1.2  Custom Fields', '3'],
  ['',   '1.3  Tags', '3'],
  ['2.', 'Phase 2 – Workflow Blueprints', '4'],
  ['',   '[EZ-001]  Webinar Registration', '4'],
  ['',   '[EZ-002]  Webinar Reminder Sequence', '4'],
  ['',   '[EZ-003]  Post-Webinar – Attended', '5'],
  ['',   '[EZ-004]  Post-Webinar – No-Show', '6'],
  ['',   '[EZ-005]  Purchase & Membership Access', '7'],
  ['3.', 'Phase 3 – Manual Setup Steps', '8'],
  ['4.', 'Email Templates (Full Copy)', '9'],
  ['5.', 'SMS Templates (Full Copy)', '14'],
  ['6.', 'Complete Asset Checklist', '15'],
];

toc.forEach(([num, title, pg]) => {
  const bold = num !== '';
  doc.fontSize(10)
     .fillColor(bold ? C.black : C.grey)
     .font(bold ? 'Helvetica-Bold' : 'Helvetica')
     .text(`${num}  ${title}`, 60, doc.y, { continued: true })
     .fillColor(C.grey).font('Helvetica')
     .text(` ........ ${pg}`, { align: 'right' });
  doc.moveDown(0.3);
});

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 3 – PHASE 1: API RESOURCES
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Phase 1 – API-Created Resources');
body('These resources are created automatically in your GHL account when you run the setup script.');
divider();

// Pipeline
h2('1.1  Pipeline: [EZ-006] Webinar Pipeline');
body('A 5-stage sales pipeline to track each contact through the webinar funnel.');
doc.moveDown(0.3);
const stages = ['Registered', 'Attended', 'No-Show', 'Offer Sent', 'Purchased'];
stages.forEach((s, i) => {
  doc.fontSize(10).fillColor(C.black).font('Helvetica')
     .text(`  ${i + 1}.  ${s}`, { lineGap: 3 });
});

divider();

// Custom Fields
h2('1.2  Custom Fields');
[
  ['[EZ-007]', 'Zoom Join Link', 'TEXT', 'Stores the unique Zoom webinar join URL per registrant'],
  ['[EZ-008]', 'Webinar Date',   'DATE', 'Date/time of the webinar — used by reminder sequences'],
].forEach(([id, name, type, desc]) => {
  doc.fontSize(10).fillColor(C.accent).font('Helvetica-Bold').text(id, { continued: true })
     .fillColor(C.black).font('Helvetica').text(`  ${name}  `, { continued: true })
     .fillColor(C.grey).font('Helvetica-Oblique').text(`[${type}]`, { lineGap: 2 });
  doc.fontSize(9).fillColor(C.grey).font('Helvetica').text(`   ${desc}`, { lineGap: 4 });
});

divider();

// Tags
h2('1.3  Tags');
const tags = [
  ['ez_webinar-registered', 'Applied at registration (EZ-001)'],
  ['ez_webinar-attended',   'Applied after webinar if contact attended'],
  ['ez_webinar-no-show',    'Applied after webinar if contact did not attend'],
  ['ez_webinar-offer-sent', 'Applied when offer sequence begins'],
  ['ez_customer',           'Applied on purchase'],
  ['ez_course-member',      'Applied on purchase – grants course access'],
];
tags.forEach(([t, desc]) => {
  doc.fontSize(10).fillColor(C.green).font('Helvetica-Bold').text(t, { continued: true })
     .fillColor(C.grey).font('Helvetica').text(`  – ${desc}`, { lineGap: 3 });
});

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 4 – WORKFLOWS
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Phase 2 – Workflow Blueprints');
body('GHL does not support creating workflows via API. Build each workflow in:\nGHL → Automations → Workflows → + New Workflow');
divider();

// WF-001
sectionBox('[EZ-001]  Webinar Registration');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('TRIGGER: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('Form Submitted → Webinar Opt-In Form (your landing page form)');
doc.moveDown(0.3);
step(1, 'Add Tag: ez_webinar-registered');
step(2, 'Create Opportunity', 'Pipeline: [EZ-006] Webinar Pipeline  |  Stage: Registered\n        Name: {{contact.firstName}} {{contact.lastName}} – Webinar');
step(3, 'Zoom – Add Registrant', 'Use Zoom integration (GHL Marketplace) or Zapier/Make.\nStore unique join URL → Custom Field: [EZ-007] Zoom Join Link');
step(4, 'Send Email: [EZ-EMAIL-01] Webinar Confirmation');
step(5, 'Send SMS:   [EZ-SMS-01] Webinar Confirmation');

divider();

// WF-002
sectionBox('[EZ-002]  Webinar Reminder Sequence');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('TRIGGER: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('Tag Added → ez_webinar-registered');
doc.moveDown(0.3);
step(1,  'Wait until 3 days before [EZ-008] Webinar Date at 10:00 AM (contact time zone)', 'Use "Wait until date" and reference [EZ-008], subtract 3 days');
step(2,  'Send Email: [EZ-EMAIL-02] 3 Days Before Reminder');
step(3,  'Wait until 1 day before [EZ-008] Webinar Date at 9:00 AM');
step(4,  'Send Email: [EZ-EMAIL-03] 1 Day Before Reminder');
step(5,  'Send SMS:   [EZ-SMS-02]  1 Day Before Reminder');
step(6,  'Wait until 1 hour before [EZ-008] Webinar Date');
step(7,  'Send Email: [EZ-EMAIL-04] 1 Hour Before Reminder');
step(8,  'Send SMS:   [EZ-SMS-03]  1 Hour Before Reminder');
step(9,  'Wait 45 minutes (= 15 min before webinar)');
step(10, 'Send SMS:   [EZ-SMS-04]  15 Minutes Before');

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 5 – WF-003
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();

sectionBox('[EZ-003]  Post-Webinar – Attended');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('TRIGGER: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('Tag Added → ez_webinar-attended');
doc.moveDown(0.3);

doc.fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  Immediate');
step(1, 'Move Opportunity Stage → Attended');
step(2, 'Remove Tag: ez_webinar-registered');
step(3, 'Send Email: [EZ-EMAIL-05] Replay + Thank You (Attended)');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 1 Offer');
step(4, 'Wait 24 hours');
step(5, 'Add Tag: ez_webinar-offer-sent');
step(6, 'Move Opportunity Stage → Offer Sent');
step(7, 'Send Email: [EZ-EMAIL-06] Offer Day 1');
step(8, 'Send SMS:   [EZ-SMS-05]  Offer Day 1');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +48h – Day 3 Value');
step(9,  'Wait 48 hours');
step(10, 'Send Email: [EZ-EMAIL-07] Offer Day 3');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +48h – Day 5 Social Proof');
step(11, 'Wait 48 hours');
step(12, 'Send Email: [EZ-EMAIL-08] Offer Day 5');
step(13, 'Send SMS:   [EZ-SMS-06]  Offer Day 5');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 6 Urgency');
step(14, 'Wait 24 hours');
step(15, 'Send Email: [EZ-EMAIL-09] Urgency – Offer Closes Tomorrow');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 7 Last Chance');
step(16, 'Wait 24 hours');
step(17, 'Send Email: [EZ-EMAIL-10] Last Chance (Attended)');
step(18, 'Send SMS:   [EZ-SMS-07]  Last Chance (Attended)');

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 6 – WF-004
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();

sectionBox('[EZ-004]  Post-Webinar – No-Show');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('TRIGGER: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('Tag Added → ez_webinar-no-show');
doc.moveDown(0.3);

doc.fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  Immediate');
step(1, 'Move Opportunity Stage → No-Show');
step(2, 'Remove Tag: ez_webinar-registered');
step(3, 'Send Email: [EZ-EMAIL-11] Sorry We Missed You + Replay');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +48h – Day 2 Soft Offer');
step(4, 'Wait 48 hours');
step(5, 'Add Tag: ez_webinar-offer-sent');
step(6, 'Move Opportunity Stage → Offer Sent');
step(7, 'Send Email: [EZ-EMAIL-12] Soft Offer (No-Show)');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +48h – Day 4 Nudge');
step(8,  'Wait 48 hours');
step(9,  'Send Email: [EZ-EMAIL-13] Offer Reminder (No-Show)');
step(10, 'Send SMS:   [EZ-SMS-08]  Offer Nudge (No-Show)');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +48h – Day 6 Last Chance');
step(11, 'Wait 48 hours');
step(12, 'Send Email: [EZ-EMAIL-14] Last Chance (No-Show)');

divider();

// WF-005
sectionBox('[EZ-005]  Purchase & Membership Access');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('TRIGGER: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('Order Form Submitted (GHL + Stripe)');
doc.moveDown(0.3);

doc.fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  Immediate');
step(1, 'Remove from Workflow: [EZ-003] & [EZ-004]', 'Stops offer emails once they purchase');
step(2, 'Remove Tag: ez_webinar-offer-sent');
step(3, 'Add Tags: ez_customer, ez_course-member');
step(4, 'Move Opportunity Stage → Purchased');
step(5, 'Grant Membership Access: [EZ-009] Online Course', 'Action: "Grant offer access" → select the membership product');
step(6, 'Send Email: [EZ-EMAIL-15] Purchase Confirmation + Course Access');
step(7, 'Send SMS:   [EZ-SMS-09]  Purchase Confirmation');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  Onboarding Sequence');
step(8,  'Wait 1 day');
step(9,  'Send Email: [EZ-EMAIL-16] Onboarding Day 1 – Getting Started');
step(10, 'Wait 2 days');
step(11, 'Send Email: [EZ-EMAIL-17] Onboarding Day 3 – Your First Win');
step(12, 'Wait 4 days');
step(13, 'Send Email: [EZ-EMAIL-18] Onboarding Day 7 – Check-In');

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 7 – MANUAL STEPS
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Phase 3 – Manual Setup Steps');
body('Complete these steps in the GoHighLevel UI after running the setup script.');
divider();

const manualSteps = [
  {
    num: '1', title: 'ZOOM INTEGRATION',
    items: [
      'Install Zoom integration from GHL Marketplace',
      'OR use Zapier/Make: Zoom Webinar Ended → GHL',
      'Attended contacts → Add tag: ez_webinar-attended',
      'No-show contacts → Add tag: ez_webinar-no-show',
      'Store unique join link in [EZ-007] Zoom Join Link field',
    ]
  },
  {
    num: '2', title: 'STRIPE CONNECTION',
    items: [
      'GHL Settings → Integrations → Stripe',
      'Connect your Stripe account',
      'Create order form for the course',
    ]
  },
  {
    num: '3', title: 'MEMBERSHIP PRODUCT',
    items: [
      'GHL → Memberships → Products → Create Product',
      'Name it: [EZ-009] Online Course',
      'Add your course modules',
    ]
  },
  {
    num: '4', title: 'EMAIL TEMPLATES',
    items: [
      'GHL → Marketing → Email Templates',
      'Create each of the 18 email templates listed in the next section',
      'Use the full copy provided on the following pages',
    ]
  },
  {
    num: '5', title: 'SMS TEMPLATES',
    items: [
      'GHL → Marketing → SMS Templates',
      'Create each of the 9 SMS templates listed in the next section',
    ]
  },
  {
    num: '6', title: 'WEBINAR DATE FIELD',
    items: [
      'When scheduling a webinar, set [EZ-008] Webinar Date on each contact at registration',
      'Do this via a form hidden field or a workflow "Update Contact Field" action',
    ]
  },
];

manualSteps.forEach(({ num, title, items }) => {
  h3(`${num}.  ${title}`);
  items.forEach(i => bullet(i));
  doc.moveDown(0.3);
});

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 8+ – EMAIL TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Email Templates – Full Copy');
body('Create each template in GHL → Marketing → Email Templates.');
divider();

const emails = [
  {
    id: '[EZ-EMAIL-01]', name: 'Webinar Confirmation',
    subject: "You're registered! Here's your webinar info",
    body: `Hi {{contact.firstName}},

You're officially registered for the webinar!

Date: {{custom.ez_webinar_date}}
Your personal join link: {{custom.ez_zoom_join_link}}

Add it to your calendar so you don't miss it.

We're so excited to have you join us. In this webinar you'll learn:
• [Key learning point 1]
• [Key learning point 2]
• [Key learning point 3]

See you there!
[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-02]', name: '3 Days Before Reminder',
    subject: "Your webinar is in 3 days – here's what to expect",
    body: `Hi {{contact.firstName}},

Just a reminder — you're registered for the webinar in 3 days!

Date: {{custom.ez_webinar_date}}
Your join link: {{custom.ez_zoom_join_link}}

We recommend joining 5 minutes early to make sure your audio and video are working.

See you soon!
[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-03]', name: '1 Day Before Reminder',
    subject: 'Tomorrow! Your webinar link is inside',
    body: `Hi {{contact.firstName}},

Tomorrow is the big day! We're going live and we'd love to see you there.

Date: {{custom.ez_webinar_date}}
Your personal join link: {{custom.ez_zoom_join_link}}

Pro tip: Add this link to your calendar now so it's easy to find tomorrow.

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-04]', name: '1 Hour Before Reminder',
    subject: 'We go live in 1 hour – join link inside',
    body: `Hi {{contact.firstName}},

In just ONE HOUR we go live. Don't miss it!

Click here to join: {{custom.ez_zoom_join_link}}

We'll be starting right on time, so grab your seat early.

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-05]', name: 'Replay + Thank You (Attended)',
    subject: "Thank you for joining! Here's your replay",
    body: `Hi {{contact.firstName}},

Thank you so much for joining the webinar — it was amazing having you there!

Here's the replay: [REPLAY LINK HERE]
(Available for [X days])

During the webinar I mentioned something special for attendees — keep an eye on your inbox over the next 24 hours.

Thanks again,
[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-06]', name: 'Offer Day 1 (Attended)',
    subject: 'Special offer for webinar attendees (expires soon)',
    body: `Hi {{contact.firstName}},

As promised, here's your exclusive attendee offer for [COURSE NAME].

[COURSE NAME] gives you:
• [Benefit 1]
• [Benefit 2]
• [Benefit 3]

Get instant access: [OFFER LINK]

This offer expires in [X days].

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-07]', name: 'Offer Day 3 (Attended)',
    subject: "Still thinking about it? Read this.",
    body: `Hi {{contact.firstName}},

A few days ago I shared a special offer for [COURSE NAME] with you.

Here's what's inside:
[Module 1] / [Module 2] / [Module 3]

"[Testimonial 1]" – [Name]

Claim your spot: [OFFER LINK]  (Offer closes [DATE])

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-08]', name: 'Offer Day 5 (Attended)',
    subject: 'Real results from real students',
    body: `Hi {{contact.firstName}},

[Student Name] went from [before] to [after result] in just [timeframe].

You can get the same results: [OFFER LINK]

Offer ends [DATE].

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-09]', name: 'Urgency – Offer Closes Tomorrow',
    subject: 'Offer closes TOMORROW – don\'t miss it',
    body: `Hi {{contact.firstName}},

The special offer for [COURSE NAME] closes TOMORROW.

Get access before it's gone: [OFFER LINK]

This is your last real chance to get in at this price.

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-10]', name: 'Last Chance (Attended)',
    subject: 'LAST CHANCE – offer closes today',
    body: `Hi {{contact.firstName}},

Today is the LAST DAY to get [COURSE NAME] at this special price. At midnight, this offer disappears.

Join now: [OFFER LINK]

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-11]', name: 'Sorry We Missed You + Replay (No-Show)',
    subject: "We missed you – here's the replay",
    body: `Hi {{contact.firstName}},

Looks like life got in the way — totally okay! Here's the replay so you can catch up:
[REPLAY LINK HERE]  (Limited time)

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-12]', name: 'Soft Offer (No-Show)',
    subject: "Did you get a chance to watch the replay?",
    body: `Hi {{contact.firstName}},

If you watched the replay and are ready to take the next step, check out [COURSE NAME]:
[OFFER LINK]

No pressure. Just wanted to make sure you had the chance.

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-13]', name: 'Offer Reminder (No-Show)',
    subject: 'Still thinking about [COURSE NAME]?',
    body: `Hi {{contact.firstName}},

Here's what's inside [COURSE NAME]:
• [Module 1 – result]
• [Module 2 – result]
• [Module 3 – result]

Plus you get [BONUS] when you join this week.

Check it out: [OFFER LINK]  (Closes [DATE])

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-14]', name: 'Last Chance (No-Show)',
    subject: 'Last chance to join [COURSE NAME]',
    body: `Hi {{contact.firstName}},

This is the last email I'll send about this — promise!

The offer for [COURSE NAME] closes today.

Join here: [OFFER LINK]

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-15]', name: 'Purchase Confirmation + Course Access',
    subject: "You're in! Here's how to access your course",
    body: `Hi {{contact.firstName}},

Welcome to [COURSE NAME]! Your payment was successful.

Access your course: [MEMBERSHIP PORTAL LINK]

How to get started:
1. Click the link above
2. Log in (or create your account)
3. Start with [Module 1 / First Step]

Any questions? Just reply to this email.

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-16]', name: 'Onboarding Day 1',
    subject: 'Day 1: Start here – your success roadmap',
    body: `Hi {{contact.firstName}},

Today I want to give you a quick roadmap:

Step 1: [First action in the course]
Step 2: [Second action]
Step 3: [Third action]

Focus on Step 1 first.

Log in and get started: [MEMBERSHIP PORTAL LINK]

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-17]', name: 'Onboarding Day 3',
    subject: "Day 3: Here's how to get your first win",
    body: `Hi {{contact.firstName}},

By now you should have gone through [Module 1].

Today's challenge: [specific, actionable challenge]

When you complete it, you'll [benefit/result].

Jump in: [MEMBERSHIP PORTAL LINK]

[Your Name / Brand]`
  },
  {
    id: '[EZ-EMAIL-18]', name: 'Onboarding Day 7',
    subject: "One week in – how's it going?",
    body: `Hi {{contact.firstName}},

It's been about a week since you joined [COURSE NAME] — how are you doing?

If you haven't started yet, the best time to start is today:
[MEMBERSHIP PORTAL LINK]

Reply to this email any time you need help.

[Your Name / Brand]`
  },
];

emails.forEach((email, i) => {
  if (i > 0 && i % 3 === 0) doc.addPage();

  doc.fontSize(11).fillColor(C.accent).font('Helvetica-Bold')
     .text(`${email.id}  ${email.name}`);
  doc.fontSize(9).fillColor(C.grey).font('Helvetica-Bold').text('Subject: ', { continued: true })
     .font('Helvetica').fillColor(C.black).text(email.subject);
  doc.fontSize(9).fillColor(C.black).font('Helvetica')
     .text(email.body, { lineGap: 1.5 });
  doc.moveDown(0.5);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#e0e0e0').lineWidth(0.5).stroke();
  doc.moveDown(0.5);
});

// ═══════════════════════════════════════════════════════════════════════════
// SMS TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('SMS Templates – Full Copy');
body('Create each template in GHL → Marketing → SMS Templates.\nAll messages include "STOP to unsubscribe" opt-out language.');
divider();

const smsTemplates = [
  { id: '[EZ-SMS-01]', name: 'Webinar Confirmation',
    body: `Hey {{contact.firstName}}! You're registered! Webinar on {{custom.ez_webinar_date}}. Your join link: {{custom.ez_zoom_join_link}} – Reply STOP to unsubscribe.` },
  { id: '[EZ-SMS-02]', name: '1 Day Before Reminder',
    body: `Hey {{contact.firstName}}! Webinar tomorrow – {{custom.ez_webinar_date}}. Your link: {{custom.ez_zoom_join_link}} – STOP to unsubscribe.` },
  { id: '[EZ-SMS-03]', name: '1 Hour Before Reminder',
    body: `{{contact.firstName}}, we go LIVE in 1 hour! Join here: {{custom.ez_zoom_join_link}} – STOP to unsubscribe.` },
  { id: '[EZ-SMS-04]', name: '15 Minutes Before',
    body: `{{contact.firstName}}, we're LIVE in 15 minutes! Don't miss it: {{custom.ez_zoom_join_link}}` },
  { id: '[EZ-SMS-05]', name: 'Offer Day 1 (Attended)',
    body: `{{contact.firstName}}, special offer for webinar attendees! Check your email or grab it here: [OFFER LINK] – STOP to opt out.` },
  { id: '[EZ-SMS-06]', name: 'Offer Day 5 (Attended)',
    body: `{{contact.firstName}}, offer for [COURSE NAME] closes [DATE]. Don't miss it: [OFFER LINK] – STOP to opt out.` },
  { id: '[EZ-SMS-07]', name: 'Last Chance (Attended)',
    body: `LAST CHANCE {{contact.firstName}}! Offer closes TODAY: [OFFER LINK] – STOP to opt out.` },
  { id: '[EZ-SMS-08]', name: 'Offer Nudge (No-Show)',
    body: `{{contact.firstName}}, wanted to make sure you saw the replay and offer for [COURSE NAME]: [OFFER LINK] Closes [DATE]. STOP to opt out.` },
  { id: '[EZ-SMS-09]', name: 'Purchase Confirmation',
    body: `You're in {{contact.firstName}}! Access [COURSE NAME] here: [MEMBERSHIP PORTAL LINK] – Welcome! STOP to opt out.` },
];

smsTemplates.forEach((sms) => {
  doc.fontSize(11).fillColor(C.accent).font('Helvetica-Bold').text(`${sms.id}  ${sms.name}`);
  doc.fontSize(10).fillColor(C.black).font('Helvetica').text(sms.body, { lineGap: 2 });
  doc.moveDown(0.5);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#e0e0e0').lineWidth(0.5).stroke();
  doc.moveDown(0.5);
});

// ═══════════════════════════════════════════════════════════════════════════
// FINAL PAGE – CHECKLIST
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Complete Asset Checklist');
body('Use this checklist to track your setup progress.');
divider();

const checklistSections = [
  {
    title: 'API-Created (run: node src/index.js --all)',
    items: [
      '[EZ-006] Webinar Pipeline (5 stages)',
      '[EZ-007] Zoom Join Link (custom field)',
      '[EZ-008] Webinar Date (custom field)',
      'Tag: ez_webinar-registered',
      'Tag: ez_webinar-attended',
      'Tag: ez_webinar-no-show',
      'Tag: ez_webinar-offer-sent',
      'Tag: ez_customer',
      'Tag: ez_course-member',
    ]
  },
  {
    title: 'Workflows (build manually in GHL UI)',
    items: [
      '[EZ-001] Webinar Registration Workflow',
      '[EZ-002] Webinar Reminder Sequence',
      '[EZ-003] Post-Webinar – Attended',
      '[EZ-004] Post-Webinar – No-Show',
      '[EZ-005] Purchase & Membership Access',
    ]
  },
  {
    title: 'Email Templates (GHL → Marketing → Email Templates)',
    items: emails.map(e => `${e.id}  ${e.name}`),
  },
  {
    title: 'SMS Templates (GHL → Marketing → SMS Templates)',
    items: smsTemplates.map(s => `${s.id}  ${s.name}`),
  },
  {
    title: 'Manual Integrations',
    items: [
      'Zoom integration (GHL Marketplace or Zapier/Make)',
      'Stripe connected (GHL Settings → Integrations)',
      '[EZ-009] Online Course membership product created',
      'Order form created and linked to Stripe',
      'Webinar opt-in landing page form created',
    ]
  },
];

checklistSections.forEach(({ title, items }) => {
  h3(title);
  items.forEach(item => {
    doc.fontSize(10).fillColor(C.black).font('Helvetica')
       .text(`  [ ]  ${item}`, { lineGap: 4 });
  });
  doc.moveDown(0.3);
});

doc.end();
console.log(`\n  PDF generated: ${OUT}\n`);
