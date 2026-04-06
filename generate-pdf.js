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
  '6 Workflows / Campaigns',
  '28 Email Templates (9 Promo + 19 Automation)',
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
  ['2.', 'Phase 2 – Promo Email Campaign (Pre-Registration)', '4'],
  ['',   '[EZ-000]  Webinar Promo Campaign (9 Broadcast Emails)', '4'],
  ['3.', 'Phase 3 – Workflow Blueprints (Post-Registration)', '5'],
  ['',   '[EZ-001]  Webinar Registration', '5'],
  ['',   '[EZ-002]  Webinar Reminder Sequence', '5'],
  ['',   '[EZ-003]  Post-Webinar – Attended', '6'],
  ['',   '[EZ-004]  Post-Webinar – No-Show', '7'],
  ['',   '[EZ-005]  Purchase & Membership Access', '8'],
  ['4.', 'Phase 4 – Manual Setup Steps', '9'],
  ['5.', 'Promo Email Templates (Full Copy)', '10'],
  ['6.', 'Automation Email Templates (Full Copy)', '13'],
  ['7.', 'SMS Templates (Full Copy)', '18'],
  ['8.', 'Complete Asset Checklist', '19'],
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
// PAGE 4 – PROMO EMAIL CAMPAIGN
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Phase 2 – Promo Email Campaign (Pre-Registration)');
body('These 9 emails are sent to your existing list BEFORE the webinar to drive sign-ups.\nThey are NOT part of the post-registration automation — they are broadcast/campaign emails.');
divider();

sectionBox('[EZ-000]  Webinar Promo Campaign');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('METHOD: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('GHL Email Campaigns  (Marketing → Emails → New Campaign)');
doc.fontSize(10).fillColor(C.grey).font('Helvetica-Bold').text('TARGET: ', { continued: true })
   .fillColor(C.black).font('Helvetica').text('Contacts tagged with  ez_promo-list');
doc.moveDown(0.4);

doc.fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('How to set up in GHL:');
doc.fontSize(10).fillColor(C.black).font('Helvetica')
   .text('1. Go to Marketing → Emails → New Campaign', { lineGap: 3 })
   .text('2. Create one campaign per email below, scheduled on the specified date', { lineGap: 3 })
   .text('3. Set the recipient filter to: Tag = ez_promo-list', { lineGap: 3 })
   .text('4. Exclude contacts who already have tag: ez_webinar-registered', { lineGap: 3 });
doc.moveDown(0.4);

const promoSchedule = [
  ['EZ-PROMO-01', 'T-7 days before webinar', 'T-7', "The college readiness mistake most parents don't catch until it's too late"],
  ['EZ-PROMO-02', 'T-6 days before webinar', 'T-6', "Why a 4.0 GPA doesn't mean your child is ready for college"],
  ['EZ-PROMO-03', 'T-5 days before webinar', 'T-5', "What parents don't realize until it's too late"],
  ['EZ-PROMO-04', 'T-4 days before webinar', 'T-4', "Why I started doing this work (and what it means for your family)"],
  ['EZ-PROMO-05', 'T-3 days before webinar', 'T-3', "Here's exactly what we're covering on [WEBINAR DATE]"],
  ['EZ-PROMO-06', 'T-2 days before webinar', 'T-2', "48 hours from now, you'll either have this — or you won't"],
  ['EZ-PROMO-07', 'T-1 day before webinar',  'T-1', "Tomorrow night — this is what's waiting for you"],
  ['EZ-PROMO-08', 'T-0 morning of webinar',  'T-0', "Tonight's the night — here's everything you need"],
  ['EZ-PROMO-09', 'T-0 one hour before',     'T-0', "We're live in 1 hour — join here"],
];

promoSchedule.forEach(([id, date, countdown, subject]) => {
  doc.fontSize(10).fillColor(C.accent).font('Helvetica-Bold').text(`[${id}]`, { continued: true })
     .fillColor(C.green).font('Helvetica-Bold').text(`  ${countdown}  `, { continued: true })
     .fillColor(C.grey).font('Helvetica').text(`${date}`, { continued: true })
     .fillColor(C.black).font('Helvetica').text(`  –  ${subject}`, { lineGap: 4 });
});

doc.moveDown(0.4);
doc.fontSize(9).fillColor(C.grey).font('Helvetica-Oblique')
   .text('Note: Full email copy for all 9 promo emails is in the "Promo Email Templates" section of this document.', { lineGap: 2 });

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 5 – WORKFLOWS
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Phase 3 – Workflow Blueprints (Post-Registration)');
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
step(3,  'Wait until 2 days before [EZ-008] Webinar Date at 9:00 AM');
step(4,  'Send Email: [EZ-EMAIL-02B] 2 Days Before Reminder');
step(5,  'Wait until 1 day before [EZ-008] Webinar Date at 9:00 AM');
step(6,  'Send Email: [EZ-EMAIL-03] 1 Day Before Reminder');
step(7,  'Send SMS:   [EZ-SMS-02]  1 Day Before Reminder');
step(8,  'Wait until 1 hour before [EZ-008] Webinar Date');
step(9,  'Send Email: [EZ-EMAIL-04] 1 Hour Before Reminder');
step(10, 'Send SMS:   [EZ-SMS-03]  1 Hour Before Reminder');
step(11, 'Wait 45 minutes (= 15 min before webinar)');
step(12, 'Send SMS:   [EZ-SMS-04]  15 Minutes Before');

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

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 2 FAQ / Unlock Potential');
step(9,  'Wait 24 hours');
step(10, 'Send Email: [EZ-EMAIL-07] Offer Day 2');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 3 Urgency / Offer Closing Soon');
step(11, 'Wait 24 hours');
step(12, 'Send Email: [EZ-EMAIL-08] Offer Day 3');
step(13, 'Send SMS:   [EZ-SMS-06]  Offer Day 3');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 4 Morning: Last Call');
step(14, 'Wait 24 hours');
step(15, 'Send Email: [EZ-EMAIL-09] Last Call – Morning');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +8h – Day 4 Evening: Final Chance (same day)');
step(16, 'Wait 8 hours');
step(17, 'Send Email: [EZ-EMAIL-10] Last Chance – Evening');
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

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 3 Social Proof Nudge');
step(8,  'Wait 24 hours');
step(9,  'Send Email: [EZ-EMAIL-13] Offer Reminder (No-Show)');
step(10, 'Send SMS:   [EZ-SMS-08]  Offer Nudge (No-Show)');

doc.moveDown(0.3).fontSize(10).fillColor(C.orange).font('Helvetica-Bold').text('▶  +24h – Day 4 Last Chance ([CART CLOSE DATE] – closes midnight ET)');
step(11, 'Wait 24 hours');
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
// PROMO EMAIL TEMPLATES – FULL COPY
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Promo Email Templates – Full Copy');
body('9 pre-registration broadcast emails. Use in GHL → Marketing → Emails → New Campaign.\nSend to contacts tagged ez_promo-list, excluding those already tagged ez_webinar-registered.');
divider();

const promoEmails = [
  {
    id: '[EZ-PROMO-01]', name: 'Webinar Promo – T-7', send: 'T-7: 7 days before webinar',
    subject: "The college readiness mistake most parents don't catch until it's too late",
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

P.S. This is a live session — no replay sold afterward. If you want the information, you need to be there.`
  },
  {
    id: '[EZ-PROMO-02]', name: 'Webinar Promo – T-6', send: 'T-6: 6 days before webinar',
    subject: "Why a 4.0 GPA doesn't mean your child is ready for college",
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

P.S. The parents who get the best results are the ones who start early. If your child is in high school right now, this webinar is worth your time.`
  },
  {
    id: '[EZ-PROMO-03]', name: 'Webinar Promo – T-5', send: 'T-5: 5 days before webinar',
    subject: "What parents don't realize until it's too late",
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

P.S. Spots are limited for the live session. Register now to guarantee your place.`
  },
  {
    id: '[EZ-PROMO-04]', name: 'Webinar Promo – T-4', send: 'T-4: 4 days before webinar',
    subject: "Why I started doing this work (and what it means for your family)",
    body: `Hi {{contact.firstName}},

I get asked a lot: "Why do you focus specifically on college readiness?"

The honest answer: because I've seen what happens when families don't have the right information.

I've spent years working with students and families as an internationally recognized innovator, best-selling author, and college preparation consultant. I've helped families navigate everything from selecting the right schools to ensuring their children actually succeed once they get there.

What I discovered is that most college preparation focuses on getting in — the application, the essays, the test scores.

Almost nothing prepares families for what happens after.

And the "after" is where everything either works out — or doesn't.

The students who thrive in college aren't the ones with the highest GPAs. They're the ones whose families understood what college actually demands, and prepared for it intentionally.

My free webinar, "5 Biggest Fears Parents Face Sending Their Child to College," is my way of giving every family access to what I've learned — the readiness gaps, the preparation strategies, and the framework for setting your child up for genuine success.

Join me live on [WEBINAR DATE] at [WEBINAR TIME].

👉 Register for free: [REGISTRATION LINK]

Debbie Elder

P.S. I'll be there live to answer your questions in real time. Bring your biggest concern about your child's college readiness — I'll address it directly.`
  },
  {
    id: '[EZ-PROMO-05]', name: 'Webinar Promo – T-3', send: 'T-3: 3 days before webinar',
    subject: "Here's exactly what we're covering on [WEBINAR DATE]",
    body: `Hi {{contact.firstName}},

The webinar is in 3 days. I want to give you a specific preview of what we'll cover — so you know exactly what you're showing up for.

In "5 Biggest Fears Parents Face Sending Their Child to College," here's what we'll walk through:

FEAR #1: "Is my child actually ready?"
Most parents don't know what college readiness looks like beyond grades. We'll clarify exactly what it means and how to assess where your child truly stands.

FEAR #2: "What if they struggle academically?"
College-level academics are a different challenge than high school. I'll share the specific skills students need that high school rarely builds.

FEAR #3: "What about their social and emotional adjustment?"
The transition to college is one of the biggest identity shifts of a young person's life. We'll cover what parents can do to support it — and what tends to backfire.

FEAR #4: "Is college worth the cost?"
The investment in college is real. I'll give you a framework for making sure your child maximizes it and graduates positioned for the career they actually want.

FEAR #5: "Will they know what to do with their degree?"
Career readiness starts before graduation — and earlier than most families think. We'll cover what that preparation looks like and when to start.

By the end of the session, you'll have a clear picture of where your child is, what they need, and exactly what to do next.

Join me live: [WEBINAR DATE] at [WEBINAR TIME]

👉 Register here if you haven't yet: [REGISTRATION LINK]

Debbie Elder

P.S. This is a live webinar — your questions get answered in real time. Come ready with your biggest one.`
  },
  {
    id: '[EZ-PROMO-06]', name: 'Webinar Promo – T-2', send: 'T-2: 2 days before webinar',
    subject: "48 hours from now, you'll either have this — or you won't",
    body: `Hi {{contact.firstName}},

48 hours from now, this webinar will be over.

Some parents will walk away with a clear picture of where their child stands, what gaps need to be addressed, and a concrete plan for what to do next.

Others will still be wondering.

I want you to be in the first group.

"5 Biggest Fears Parents Face Sending Their Child to College" is a live, interactive session where I'll be breaking down the exact concerns I hear from parents every day — and giving you the strategies that actually work.

What makes this different from generic advice online:

✔ It's specific to the college transition — not vague encouragement, but exactly what preparation looks like at each stage
✔ It covers all 5 dimensions of readiness — academic, social, emotional, financial, and career
✔ It's live — you can ask your specific question and get a real, tailored answer
✔ I'll be sharing something at the end for parents who want to take the next step — only for those who show up live

Join us on [WEBINAR DATE] at [WEBINAR TIME].

👉 Save your spot: [REGISTRATION LINK]

Debbie Elder

P.S. If you've been putting off registering, now is the time. Spots are limited and this is not being recorded for sale.`
  },
  {
    id: '[EZ-PROMO-07]', name: 'Webinar Promo – T-1', send: 'T-1: 1 day before webinar',
    subject: "Tomorrow night — this is what's waiting for you",
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

P.S. At the end of the session, I'll be sharing something special for parents who want to take this work further with me. You'll want to be there for that.`
  },
  {
    id: '[EZ-PROMO-08]', name: "Webinar Promo – Day Of (Morning)", send: 'T-0: Morning of webinar',
    subject: "Tonight's the night — here's everything you need",
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

✔ The real meaning of "college readiness" — how to assess where your child truly stands
✔ The academic, social, and emotional gaps that lead to students struggling in their first year
✔ Career-readiness strategies your child needs now, not after they graduate
✔ How to navigate the financial reality of college without sacrificing the right opportunities

And at the end — something special for parents who want to take the next step with me.

[WEBINAR DATE] | [WEBINAR TIME]
👉 [REGISTRATION LINK]

See you tonight,
Debbie Elder

P.S. This is live — your questions get answered in real time. I'll see you in a few hours.`
  },
  {
    id: '[EZ-PROMO-09]', name: "Webinar Promo – Day Of (1 Hr Before)", send: 'T-0: 1 hour before webinar',
    subject: "We're live in 1 hour — join here",
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

P.S. There's something special at the end of tonight's session that I only share with live attendees. Stay until the very end.`
  },
];

promoEmails.forEach((email, i) => {
  if (i > 0 && i % 3 === 0) doc.addPage();

  doc.fontSize(11).fillColor(C.accent).font('Helvetica-Bold')
     .text(`${email.id}  ${email.name}`);
  doc.fontSize(9).fillColor(C.green).font('Helvetica-Bold').text('Send: ', { continued: true })
     .fillColor(C.grey).font('Helvetica').text(email.send);
  doc.fontSize(9).fillColor(C.grey).font('Helvetica-Bold').text('Subject: ', { continued: true })
     .font('Helvetica').fillColor(C.black).text(email.subject);
  doc.fontSize(9).fillColor(C.black).font('Helvetica')
     .text(email.body, { lineGap: 1.5 });
  doc.moveDown(0.5);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#e0e0e0').lineWidth(0.5).stroke();
  doc.moveDown(0.5);
});

// ═══════════════════════════════════════════════════════════════════════════
// AUTOMATION EMAIL TEMPLATES – FULL COPY
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Automation Email Templates – Full Copy');
body('Create each template in GHL → Marketing → Email Templates.');
divider();

const emails = [
  {
    id: '[EZ-EMAIL-01]', name: 'Webinar Confirmation',
    subject: "Confirm Your Registration for Our Upcoming Webinar!",
    body: `Hi [First Name],

You're in! Your spot for "5 Biggest Fears Parents Face Sending Their Child to College" is confirmed.

Date: [WEBINAR DATE]  |  Time: [WEBINAR TIME]
Your join link: [WEBINAR LINK]

Save this email — you'll want it on [WEBINAR DATE].

Here's a preview of what you're going to discover:
→ The #1 mindset mistake parents make about college readiness (and how to fix it before it's too late)
→ Why academic grades alone won't guarantee your child's success in college — and what actually does
→ The social and emotional blind spots most parents miss that lead to students struggling or dropping out
→ How to navigate the real cost of college without your child sacrificing the right opportunities
→ Career-readiness strategies your child needs NOW — not after they graduate

This is a live session — your questions get answered in real time.

One more thing: attendees get access to something special I'll only share with people in the room. Show up live — you won't want to miss it.

See you on [WEBINAR DATE] at [WEBINAR TIME]!
Debbie Elder

P.S. Add the webinar to your calendar now so it doesn't slip through the cracks. [Add to Google Calendar] [Add to Outlook]`
  },
  {
    id: '[EZ-EMAIL-02]', name: '3 Days Before Reminder',
    subject: "You Signed Up for 5 Biggest Fears... – Here's Why You Don't Want to Miss It!",
    body: `Hi [First Name],

3 days until the webinar — and I want to make sure you show up.

Not just because of the information we're covering (though that alone is worth the hour).
But because of what happens AFTER the webinar.

Parents who attend live get access to something I only share with people in the room — the step-by-step system that turns everything you learn into real results for your child.

Here's a preview of what we're covering [WEBINAR DATE] at [WEBINAR TIME]:
✔ Why most parents believe their child is college-ready — and why that belief is costing them
✔ The hidden gaps between high school preparation and what college actually demands
✔ Social and emotional preparation strategies that top-performing students use
✔ How to position your child for career success before they ever set foot on campus
✔ The one conversation you need to have with your child right now

This is a live event. No recordings sold afterward. No second chance for real-time Q&A.

Your webinar link: [WEBINAR LINK]
[WEBINAR DATE] at [WEBINAR TIME]

See you there,
Debbie Elder

P.S. Block off the hour on your calendar and treat this like an appointment you cannot miss. Your child's college experience may depend on it.`
  },
  {
    id: '[EZ-EMAIL-02B]', name: '2 Days Before Reminder',
    subject: "Unlock Your Child's College Success!",
    body: `Hi [First Name],

2 days from now, something shifts.

Either you'll have the clarity and strategies you need to genuinely prepare your child for college — or you'll still be wondering if you're doing enough.

The webinar on [WEBINAR DATE] at [WEBINAR TIME] is that turning point.

Here's what's different about showing up LIVE vs. catching a replay later:
1. You get your specific questions answered in real time — tailored to your situation
2. You'll hear what other parents are struggling with, and realize you're not alone
3. There's an exclusive opportunity I'm only sharing with live attendees — one that can change the entire trajectory of your child's college experience

The parents who feel most confident aren't the ones who did the most research. They're the ones who got the RIGHT strategy — early enough to actually use it.

That's what [WEBINAR DATE] is about.

Your join link: [WEBINAR LINK]
[WEBINAR DATE] | [WEBINAR TIME]

See you there,
Debbie Elder

P.S. Two days goes faster than you think. Put the link somewhere you won't lose it.`
  },
  {
    id: '[EZ-EMAIL-03]', name: '1 Day Before Reminder',
    subject: "Tomorrow's the Big Day! Here's Why You Need to Show Up",
    body: `Hi [First Name],

Tomorrow at [WEBINAR TIME], I'm going live — and I want you there.

Your webinar link: [WEBINAR LINK]
[WEBINAR DATE] | [WEBINAR TIME]

The parents who get the best results for their college-bound students aren't the ones who do the most research or spend the most money. They're the ones who get the RIGHT information at the RIGHT time — and act on it.

Tomorrow's session is designed to give you exactly that.

You'll leave with:
→ Clarity on where your child actually stands (vs. where you think they stand)
→ A framework for college readiness that goes far beyond GPA
→ Specific strategies you can start implementing this week
→ Confidence in the path forward — for both you and your student

And for those who show up live: I'm sharing something at the end that I don't advertise — the system I use with families I work with privately. Tomorrow night, you'll get access to it.

Show up live. Come with your biggest question. I'll answer it in real time.

See you tomorrow evening,
Debbie Elder

P.S. Can't be at your computer at 6 PM? Join from your phone. The important thing is that you're there.`
  },
  {
    id: '[EZ-EMAIL-04]', name: '1 Hour Before Reminder',
    subject: "1 Hour to Go! Drop Everything and Show Up!",
    body: `Hi [First Name],

We go live in ONE HOUR.

Click here to join: [WEBINAR LINK]
[WEBINAR TIME] — Tonight

Before we start, three things:
1. Find a quiet spot where you can focus for 60 minutes
2. Have a notepad ready — you'll want to write things down
3. Come with your biggest question about your child's college readiness

Here's why showing up LIVE matters more than watching the replay later:
The replay won't have the live Q&A. It won't have the energy of a room full of parents who are in the same position you are. And it won't have the special opportunity I'm sharing with tonight's attendees only.

This is your moment to get the clarity you've been looking for.

Join here: [WEBINAR LINK]

See you in an hour,
Debbie Elder

P.S. Doors open 10 minutes early. Join early to make sure your audio and video are working before we start.`
  },
  {
    id: '[EZ-EMAIL-05]', name: 'Replay + Thank You (Attended)',
    subject: "Here's the Replay!",
    body: `Hi [First Name],

Thank you for showing up last night. It meant a lot to have you in the room.

Here's your replay link: [REPLAY LINK]
⚠️ Available until [CART CLOSE DATE] at midnight only.

You know we covered a lot of ground — the readiness gaps most parents overlook, the social and emotional factors that determine whether students thrive or struggle, and the career blind spots that catch families off guard.

But here's what I didn't get to fully share during the webinar:

The exact 6-week system I use with the families I work with privately — the one that takes everything we talked about and turns it into a real, personalized plan for your child.

It's called the 6-Week Virtual College Success Course. Here's what it includes:
→ The College Prep Masterclass Series ($2,997 value) — builds self-leadership skills your student needs to succeed in college and beyond
→ 6 weeks of structured guidance — clear focus each week, no overwhelm
→ A complete collegiate roadmap built around your child's specific goals
→ Total value: $3,497

I'll share the full details — including the special attendee pricing — in tomorrow's email.

For now, watch the replay while it's still fresh: [REPLAY LINK]

Talk soon,
Debbie Elder

P.S. Have questions before tomorrow? Just reply to this email. I read every one.`
  },
  {
    id: '[EZ-EMAIL-06]', name: 'Offer Day 1 (Attended) – Full Offer',
    subject: "Replay + How 6-Week Course Empowers Your Student",
    body: `Hi [First Name],

Yesterday I mentioned something I've been building for parents exactly like you.

Today I want to tell you everything about it.

It's called the 6-Week Virtual College Success Course — and if your child is heading to college in the next 1-4 years, this might be the most important investment you make in their future.

THE COLLEGE PREP MASTERCLASS SERIES (valued at $2,997)
A step-by-step curriculum that gives your student the self-leadership skills, study strategies, and emotional resilience they need to not just survive college — but excel.

THE 6-WEEK PARENT SUCCESS FRAMEWORK
Each week has a clear focus: what to work on, what conversations to have with your child, and how to track progress. No guessing. No overwhelm. Just a proven path forward.

WHAT YOU'LL HAVE AFTER 6 WEEKS:
✔ A complete collegiate roadmap tailored to your child's specific goals
✔ A student who knows how to manage themselves academically, socially, and emotionally
✔ Peace of mind that you've done everything possible to set them up for success
Total value: $3,497

As a webinar attendee, you have access to this at a special enrollment price — but only until [CART CLOSE DATE] at midnight. After that, this offer closes.

👉 [Click here to learn more and enroll] — [targeturl]

Replay still available (until [CART CLOSE DATE]): [REPLAY LINK]

Debbie Elder

P.S. Enrollment is limited to make sure every family gets the support they need. Once spots are filled, they're gone.`
  },
  {
    id: '[EZ-EMAIL-07]', name: 'Offer Day 2 (Attended) – FAQ / Objections',
    subject: "Don't Miss Out: Unlock Your Student's True Potential",
    body: `Hi [First Name],

Since yesterday's email about the 6-Week Virtual College Success Course, I've gotten a handful of questions. Let me answer the most common ones.

"Is this right for my child even if they're only a sophomore?"
Yes — the earlier you start, the better. A student who builds these habits in 10th grade has a massive advantage over one who tries to figure it out freshman year of college.

"What if my child isn't motivated?"
That's exactly what this course addresses. One of the core components is developing intrinsic motivation and self-leadership — so the drive to succeed comes from them. Many parents say this is the biggest shift they see.

"Is it worth the investment?"
The average cost of a student dropping out in their first year is tens of thousands of dollars. This course exists to prevent that. The ROI isn't just financial — it's your child's confidence, their career trajectory, and your peace of mind.

"Do I need to be tech-savvy?"
Not at all. If you can watch a video, you can do this.

Still have a question? Reply to this email — I'm happy to help you figure out if this is the right fit.

The special offer is open until [CART CLOSE DATE] at midnight.

👉 [Click here to enroll in the 6-Week Virtual College Success Course] — [targeturl]

Replay still available (until [CART CLOSE DATE]): [REPLAY LINK]

Debbie Elder

P.S. The families who hesitate are the ones who wish they hadn't. Don't let the deadline sneak up on you.`
  },
  {
    id: '[EZ-EMAIL-08]', name: 'Offer Day 3 (Attended) – Social Proof + Urgency',
    subject: "Time Is Running Out – Replay & Offer Closing Soon!",
    body: `Hi [First Name],

Quick update: the replay and the enrollment offer both close tomorrow — [CART CLOSE DATE] at midnight.

One of the parents who went through the 6-Week Virtual College Success Course sent me this:

"Before this course, I didn't know where to start. My daughter was a junior and I was panicking. After going through the material with her, she has a real plan. She knows what she wants, she knows how to study, and she's actually excited about college now. I wish I had found this sooner."

That's what's possible on the other side of this decision.

Here's what you get when you enroll:
→ The College Prep Masterclass Series ($2,997 value)
→ The 6-Week Parent Success Framework — one clear focus per week
→ A complete collegiate roadmap for your child
→ Total value: $3,497 — at a special attendee price until tomorrow midnight

👉 [Click here to enroll before the offer closes] — [targeturl]

Replay link (expires tomorrow midnight): [REPLAY LINK]

Debbie Elder

P.S. Ask yourself: what is it worth to know — really know — that your child is ready for college? That answer is worth more than any price tag on this course.`
  },
  {
    id: '[EZ-EMAIL-09]', name: 'Last Call – Morning (Day 4)',
    subject: "Last Call - Replay and Offer Closing Today!",
    body: `Hi [First Name],

Today is the last day.

The replay comes down tonight at midnight. The enrollment offer for the 6-Week Virtual College Success Course closes with it. After tonight, this is gone.

I don't say that to pressure you. I say it because I've seen what happens when parents wait.

They tell themselves they'll deal with it later. And later becomes: their child struggling through freshman year. Calling home overwhelmed. Losing scholarship eligibility. Changing majors because no one helped them figure out who they are and where they're going.

This course prevents that.

Here's what closes tonight at midnight:
✔ Enrollment in the 6-Week Virtual College Success Course
✔ The College Prep Masterclass Series ($2,997 value) — included at no extra charge
✔ The special attendee pricing — not available after tonight
✔ Access to the webinar replay
Total value: $3,497. Tonight only.

👉 [Click here to enroll — offer closes at midnight] — [targeturl]

Debbie Elder

P.S. If you have any last questions before you decide, reply to this email right now. I'll get back to you as fast as I can.`
  },
  {
    id: '[EZ-EMAIL-10]', name: 'Last Chance – Evening (Day 4)',
    subject: "Last Chance: Course Offer Ends Tonight!",
    body: `Hi [First Name],

A few hours left.

The 6-Week Virtual College Success Course enrollment closes at midnight tonight. No extensions, no exceptions.

I know you've been thinking about this. Every investment feels significant when you're in the moment of deciding.

But here's what I want you to consider:

You showed up to the webinar because something about your child's college readiness was worrying you. That worry didn't come from nowhere. It came from the part of you that knows the stakes are real — and that wants to get this right.

This course is the answer to that worry.

6 weeks. A proven system. A roadmap built around your child. And the College Prep Masterclass Series ($2,997 value) included as part of enrollment.

✔ Total value: $3,497
✔ Tonight only — midnight deadline — hard close
✔ Includes everything you need to go from worried to confident

👉 [Click here to enroll now] — [targeturl]

The parents who've done this don't regret it.

Debbie Elder

P.S. After midnight, the offer is closed and I cannot make exceptions. If you want in, now is the time. [Enroll here — targeturl]`
  },
  {
    id: '[EZ-EMAIL-11]', name: 'Sorry We Missed You + Replay (No-Show)',
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

P.S. If this is a bad time, save the link and come back to it. But don't wait too long — the replay comes down shortly.`
  },
  {
    id: '[EZ-EMAIL-12]', name: 'Soft Offer (No-Show)',
    subject: "What the webinar revealed (and what to do next)",
    body: `Hi {{contact.firstName}},

Whether you've had a chance to watch the replay or not, I want to share the single most important thing parents took away from the webinar:

Helping your child succeed in college isn't about working harder. It's about having the right information at the right time.

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

P.S. Still haven't watched the replay? Here it is again: {{custom.ez_replay_link}} — watch through to the end to hear about everything that's included.`
  },
  {
    id: '[EZ-EMAIL-13]', name: 'Offer Reminder / Social Proof (No-Show)',
    subject: "A parent just sent me this message...",
    body: `Hi {{contact.firstName}},

I got a message this week from a parent in our last cohort. I asked if I could share it:

"Before working with Debbie, I thought my son was ready for college. He had the grades, he had the scores. What I didn't realize was how unprepared he was for everything else — the independence, the social pressure, the self-management. We went through the program together and it completely changed how we talked about college. He's now thriving in his second semester and I feel like I actually prepared him — not just helped him get in."

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

P.S. If you still haven't watched the replay, it's worth 60 minutes of your time: {{custom.ez_replay_link}}`
  },
  {
    id: '[EZ-EMAIL-14]', name: 'Last Chance (No-Show)',
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

P.S. If you have a quick question before enrolling, reply right now and I'll respond personally. The cart closes at midnight — don't wait.`
  },
  {
    id: '[EZ-EMAIL-15]', name: 'Purchase Confirmation + Course Access',
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

P.S. Save this email — it has your course access link. You'll want it handy.`
  },
  {
    id: '[EZ-EMAIL-16]', name: 'Onboarding Day 1',
    subject: 'Day 1: Start here — your roadmap for Week 1',
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

P.S. The most important thing you can do today is start — even if it's just the first video. Momentum matters.`
  },
  {
    id: '[EZ-EMAIL-17]', name: 'Onboarding Day 3',
    subject: 'Day 3 — the shift that changes everything',
    body: `Hi {{contact.firstName}},

By Day 3, most families who are on track have completed the Week 1 content and had at least one conversation with their child based on the Action Plan.

If that's you — great work. Keep going. The shift that happens when a student starts seeing their college future as something they're actively building (rather than something that's just happening to them) is one of the most powerful moments in this program.

If you haven't started yet — that's okay. No guilt, no judgment. Just log in today.

👉 [COURSE PORTAL LINK]

Even 20 minutes today puts you ahead of where you'd be otherwise.

Here's your challenge for Day 3: have one conversation with your child about college readiness that isn't about grades or applications. Ask them: "What are you most excited about? What are you most nervous about?" Just listen. That conversation alone will tell you more about where they are than any transcript.

Reply and tell me how it goes. I read every response.

Debbie Elder

P.S. Week 2 unlocks on Day 7 — so the best time to finish Week 1 is now.`
  },
  {
    id: '[EZ-EMAIL-18]', name: 'Onboarding Day 7',
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

P.S. Coming up in Week 2: the academic skills deep dive — where we get specific about what college-level study actually requires and how to build those skills now. Don't miss it.`
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
    body: `{{contact.firstName}}, offer for the 6-Week College Success Course closes [CART CLOSE DATE]. Don't miss it: [OFFER LINK] – STOP to opt out.` },
  { id: '[EZ-SMS-07]', name: 'Last Chance (Attended)',
    body: `LAST CHANCE {{contact.firstName}}! Offer closes TODAY: [OFFER LINK] – STOP to opt out.` },
  { id: '[EZ-SMS-08]', name: 'Offer Nudge (No-Show)',
    body: `{{contact.firstName}}, the 6-Week College Success Course offer closes [CART CLOSE DATE] at midnight. Don't miss it 👉 [OFFER LINK] – STOP to opt out.` },
  { id: '[EZ-SMS-09]', name: 'Purchase Confirmation',
    body: `You're in {{contact.firstName}}! Access your 6-Week College Success Course here: [COURSE PORTAL LINK] – Welcome! STOP to opt out.` },
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
    title: 'Promo Email Campaign (GHL → Marketing → Emails → New Campaign)',
    items: promoEmails.map(e => `${e.id}  ${e.name}  |  Send: ${e.send}`),
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
    title: 'Automation Email Templates (GHL → Marketing → Email Templates)  [19 total]',
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
