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
  ['EZ-PROMO-01', 'Thu 01/29/2026', 'T-7', 'Unlock the 5 Biggest Fears Parents Face About College 🌟'],
  ['EZ-PROMO-02', 'Fri 01/30/2026', 'T-6', 'Why Most Parents Struggle with College'],
  ['EZ-PROMO-03', 'Sat 01/31/2026', 'T-5', 'What If You Could Provide the Best Preparation...'],
  ['EZ-PROMO-04', 'Sun 02/01/2026', 'T-4', 'Can You Really Empower Your Student for Success?'],
  ['EZ-PROMO-05', 'Mon 02/02/2026', 'T-3', "You Won't Believe What I'm Sharing LIVE…"],
  ['EZ-PROMO-06', 'Tue 02/03/2026', 'T-2', '48 Hours Left: This Could Change Everything for You'],
  ['EZ-PROMO-07', 'Wed 02/04/2026', 'T-1', "It's Tomorrow! Don't Miss Your Chance!"],
  ['EZ-PROMO-08', 'Thu 02/05/2026 AM', 'T-0', "It's Happening Today! Get Ready to Empower Your Student"],
  ['EZ-PROMO-09', 'Thu 02/05/2026 -1hr', 'T-0', "Final Call: We're Live in 1 Hour!"],
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
// PROMO EMAIL TEMPLATES – FULL COPY
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Promo Email Templates – Full Copy');
body('9 pre-registration broadcast emails. Use in GHL → Marketing → Emails → New Campaign.\nSend to contacts tagged ez_promo-list, excluding those already tagged ez_webinar-registered.');
divider();

const promoEmails = [
  {
    id: '[EZ-PROMO-01]', name: 'Webinar Promo – T-7 Day', send: 'Thursday, January 29, 2026',
    subject: 'Unlock the 5 Biggest Fears Parents Face About College 🌟',
    body: `Dear Parent,

Are you feeling overwhelmed as your high school student prepares for college? You're not alone. Parents face many fears about their child's transition to college. But what if you could unlock the answers to those fears and empower your student for both academic and future career success?

Join me for an essential webinar titled "5 Biggest Fears Parents Face Sending Their Child to College" on February 5, 2026, at 6:00 PM ET.

In this webinar, you will discover:
• Parent perceptions of college readiness: Understand what assumptions might be clouding your view.
• Academic readiness: Learn how to assess and enhance your child's academic skills.
• Preparation beyond academics: Discover why life skills are equally important and how to cultivate them.
• Addressing completion concerns: Gain insights into the metrics behind successful college graduation.
• Social and emotional transition challenges: Learn how to support your child's mental well-being during this significant life change.

My name is Debbie Elder, an internationally recognized innovator and best-selling author dedicated to motivating students to peak performance.

Are you ready to tackle those fears head-on? Click [here to register now] and secure your spot. Don't wait—spaces are limited, and your child's future success is too important to delay.

Best,
Debbie Elder

P.S. Remember, empowering your student starts with understanding their needs. Register now to ensure they get the best preparation for college!`
  },
  {
    id: '[EZ-PROMO-02]', name: 'Webinar Promo – T-6 Day', send: 'Friday, January 30, 2026',
    subject: 'Why Most Parents Struggle with College',
    body: `Hi there,

As a parent of a college-bound high school student, you might be grappling with these challenging questions: What do I need to do to get my student into an ideal college? The costs of a college education continue to rise, leaving many parents feeling overwhelmed by the perceived value versus the financial burden.

But here's the good news: You don't have to navigate this journey alone.

Join us for our upcoming webinar, "5 Biggest Fears Parents Face Sending Their Child to College," on February 5, 2026, at 6:00 PM ET.

Here's what you can expect to learn during the webinar:
• Understanding Parent Perceptions: Navigate what "readiness" for college truly means for your child.
• Academic Readiness: Discover how to assess your child's academic preparedness for college-level work.
• Beyond Academics: Learn about vital college preparation aspects that often get overlooked.
• Value and Completion Concerns: Address common concerns about academic value and graduation rates.
• Social and Emotional Support: Understand how to help your child transition successfully into college life.

👉 Don't miss this opportunity! [Register now for the webinar!]

Looking forward to seeing you there,
Debbie Elder

P.S. If you're still wondering whether your student is truly prepared for college, this webinar is your chance to find out! Sign up today.`
  },
  {
    id: '[EZ-PROMO-03]', name: 'Webinar Promo – T-5 Day', send: 'Saturday, January 31, 2026',
    subject: 'What If You Could Provide the Best Preparation for Your College-Bound Student?',
    body: `Dear Parent,

Imagine watching your child seamlessly transition to college, equipped with the skills not just to survive, but to thrive. Join us for our upcoming webinar, "5 Biggest Fears Parents Face Sending Their Child to College," where we'll outline the roadmap to empower your student for academic success and beyond.

Why Attend? This webinar will help you:
• Bridge the Gap: Address critical perceptions of academic and career readiness.
• Empower Success: Learn effective skills to enhance your child's academic performance.
• Prepare Holistically: Gain insights into social/emotional transitions and external pressures.
• Navigate Concerns: Discuss academic value and completion strategies.

About the Presenter: Debbie Elder — a trailblazer in student motivation and college preparation, best-selling author and highly sought-after speaker.

What You Will Gain:
1. Key perceptions of student readiness for college and careers.
2. Strategies for addressing academic concerns and preparing your child holistically.
3. Insights on social/emotional challenges and their impact on transition.
4. How to effectively address career-related fears before your child steps onto campus.
5. Concrete action plans for making college more affordable and accessible.

Join us on February 5, 2026, at 6:00 PM ET. [Click here to register now!]

Best,
Debbie Elder

P.S. Empower your child with the education they deserve. Secure your spot today!`
  },
  {
    id: '[EZ-PROMO-04]', name: 'Webinar Promo – T-4 Day', send: 'Sunday, February 1, 2026',
    subject: 'Can You Really Empower Your Student for Success?',
    body: `Dear Parent,

Many believe their child is already prepared for the rigors of college, but what if I told you that this assumption might be holding them back? The truth is, without the right guidance, even the brightest students can struggle during their transition to college.

Join me on February 5, 2026, at 6:00 PM ET for an eye-opening webinar titled "5 Biggest Fears Parents Face Sending Their Child to College."

Here's why you don't want to miss this:
• Parent Perceptions: Understand common misconceptions about student readiness.
• Academic Readiness: Learn what academic skills truly matter.
• Beyond Academics: Explore essential preparations outside of standard coursework.
• Address Completion Concerns: Discover how to ensure your child stays on track.
• Social/Emotional Support: Gain insights into managing the emotional aspects of this transition.

Don't let uncertainty hold your family back! Register now to secure your spot.

👉 [Register Here for the Webinar]

Best,
Debbie Elder

P.S. Remember, it's not just about getting into college—it's about ensuring your child thrives once they get there! Secure your spot today!`
  },
  {
    id: '[EZ-PROMO-05]', name: 'Webinar Promo – T-3 Day', send: 'Monday, February 2, 2026',
    subject: "You Won't Believe What I'm Sharing LIVE…",
    body: `Hi there,

With a new college season around the corner, the 5 Biggest Fears Parents Face Sending Their Child to College is an absolute must-attend event.

Join Me LIVE on February 5, 2026 at 6:00 PM ET — [Register Here]

You'll gain valuable insights into:
• Parent perceptions of readiness: Are your expectations aligned with reality?
• Academic readiness for college: The essential skills your child needs to thrive academically.
• College preparation beyond academics: Factors like emotional intelligence that significantly influence college success.
• Academic and value completion concerns: How to ensure your child maximizes their college investment.
• Social/emotional transition concerns: Key strategies for helping your student adjust and thrive.
• Career-related insights: How to guide your child in their career exploration.

Don't let your fears hold your child back! Click [here] to secure your spot.

Looking forward to seeing you there,
Debbie Elder

PS: The insights I'll share are exclusive to this webinar. Webinar Date & Time: February 5, 2026, 6:00 PM ET. [Register Now!]`
  },
  {
    id: '[EZ-PROMO-06]', name: 'Webinar Promo – T-2 Day', send: 'Tuesday, February 3, 2026',
    subject: '48 Hours Left: This Could Change Everything for You',
    body: `Dear Parents,

Only 48 hours left until our groundbreaking webinar, 5 Biggest Fears Parents Face Sending Their Child to College! Here's what we'll cover:

• Parent perceptions of readiness for college and careers
• Academic readiness and what your child truly needs
• College preparation beyond academics – developing a well-rounded student
• Concerns around academic value and completion – how to avoid pitfalls
• Social/emotional transition challenges that need attention
• Career-related worries parents often face, and how to tackle them

I'm Debbie Elder, an internationally recognized innovator and best-selling author dedicated to motivating students toward peak performance.

Secure your spot now and join us on February 5, 2026, at 6:00 PM ET. Register here: [Register Now]

Time is running out – empower yourself and your child now!

Best,
Debbie Elder

PS: Remember, this could change everything for you and your child. Reserve your place today!`
  },
  {
    id: '[EZ-PROMO-07]', name: 'Webinar Promo – T-1 Day', send: 'Wednesday, February 4, 2026',
    subject: "It's Tomorrow! Don't Miss Your Chance!",
    body: `Dear Parent,

Time is running out! The webinar you've been waiting for, "5 Biggest Fears Parents Face Sending Their Child to College," is just one day away!

When: February 5, 2026  |  Time: 6:00 PM ET  |  Register now: [Join the Webinar]

In our time together, you'll learn:
• Parent perceptions of readiness: What you might be overlooking when assessing your child's preparedness.
• Academic willingness: Critical academic readiness strategies that go beyond traditional academics.
• Comprehensive preparation: Vital elements of college preparation, including social/emotional aspects and career readiness.
• Concerns addressed: Transition issues and completion worries tackled head-on.

Now, it's your turn to gain clarity and take action! Don't let uncertainty hold you back.

Secure your spot today: [Register Here]

Warm regards,
Debbie Elder

P.S. This is the last chance to attend this critical session—don't let it slip away! Click here to register now! [Join the Webinar]`
  },
  {
    id: '[EZ-PROMO-08]', name: 'Webinar Promo – Day Of (Morning)', send: 'Thursday, February 5, 2026 – Morning',
    subject: "It's Happening Today! Get Ready to Empower Your Student",
    body: `Dear Parents,

Today is the day! At 6:00 PM ET, I'll be diving into the 5 Biggest Fears Parents Face Sending Their Child to College in our live webinar.

Why Attend Live? You'll have the opportunity to ask pressing questions in real-time and receive immediate guidance. You'll learn:
• Parent Perceptions: Align your expectations with reality regarding your child's college readiness.
• Academic Preparedness: Discover essential academic skills that influence college success.
• Holistic College Preparation: Understand the non-academic aspects of preparing your child for college.
• Combatting Common Concerns: Tackle worries about academic value, completion rates, and career prospects.
• Unlocking Potential: Gain insight into ways you can support your child in maximizing their college journey.

Join me today at 6:00 PM ET. [Click here to register and secure your spot now!]

Best,
Debbie Elder

P.S. Don't miss this chance to learn how you can make a difference in their future!`
  },
  {
    id: '[EZ-PROMO-09]', name: 'Webinar Promo – Day Of (1 Hr Before)', send: 'Thursday, February 5, 2026 – 1 Hour Before Webinar',
    subject: "Final Call: We're Live in 1 Hour!",
    body: `Dear Parent,

In just 1 hour, we'll be going live with our transformative webinar, "5 Biggest Fears Parents Face Sending Their Child to College."

Here's what we'll cover:
• Parent perceptions of readiness for college & careers: What it really means for your child to be prepared.
• Academic readiness for college: How to evaluate your child's skills and what gaps may need to be addressed.
• College preparation beyond academics: Life skills and social competencies that matter just as much as grades.
• Completion concerns: How to support your child's journey through their college experience.
• Career-related concerns: How to align your child's education with their future career possibilities.

By joining us today at 6:00 PM ET, you'll arm yourself with the knowledge and tools to transform those fears into confidence.

👉 [Join the Webinar Now]

Looking forward to seeing you shortly!

Best,
Debbie Elder

P.S. This is your last opportunity to participate! Click [here] to join us now!`
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

Date: February 5, 2026  |  Time: 6:00 PM ET
Your join link: [WEBINAR LINK]

Save this email — you'll want it on February 5th.

Here's a preview of what you're going to discover:
→ The #1 mindset mistake parents make about college readiness (and how to fix it before it's too late)
→ Why academic grades alone won't guarantee your child's success in college — and what actually does
→ The social and emotional blind spots most parents miss that lead to students struggling or dropping out
→ How to navigate the real cost of college without your child sacrificing the right opportunities
→ Career-readiness strategies your child needs NOW — not after they graduate

This is a live session — your questions get answered in real time.

One more thing: attendees get access to something special I'll only share with people in the room. Show up live — you won't want to miss it.

See you February 5th at 6:00 PM ET!
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

Here's a preview of what we're covering February 5th at 6:00 PM ET:
✔ Why most parents believe their child is college-ready — and why that belief is costing them
✔ The hidden gaps between high school preparation and what college actually demands
✔ Social and emotional preparation strategies that top-performing students use
✔ How to position your child for career success before they ever set foot on campus
✔ The one conversation you need to have with your child right now

This is a live event. No recordings sold afterward. No second chance for real-time Q&A.

Your webinar link: [WEBINAR LINK]
February 5, 2026 at 6:00 PM ET

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

The webinar on February 5th at 6:00 PM ET is that turning point.

Here's what's different about showing up LIVE vs. catching a replay later:
1. You get your specific questions answered in real time — tailored to your situation
2. You'll hear what other parents are struggling with, and realize you're not alone
3. There's an exclusive opportunity I'm only sharing with live attendees — one that can change the entire trajectory of your child's college experience

The parents who feel most confident aren't the ones who did the most research. They're the ones who got the RIGHT strategy — early enough to actually use it.

That's what February 5th is about.

Your join link: [WEBINAR LINK]
February 5, 2026 | 6:00 PM ET

See you there,
Debbie Elder

P.S. Two days goes faster than you think. Put the link somewhere you won't lose it.`
  },
  {
    id: '[EZ-EMAIL-03]', name: '1 Day Before Reminder',
    subject: "Tomorrow's the Big Day! Here's Why You Need to Show Up",
    body: `Hi [First Name],

Tomorrow at 6:00 PM ET, I'm going live — and I want you there.

Your webinar link: [WEBINAR LINK]
February 5, 2026 | 6:00 PM ET

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
6:00 PM ET — Tonight

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
⚠️ Available until Monday, February 9th at midnight only.

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

As a webinar attendee, you have access to this at a special enrollment price — but only until Monday, February 9th at midnight. After that, this offer closes.

👉 [Click here to learn more and enroll] — [targeturl]

Replay still available (until Feb 9th): [REPLAY LINK]

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

The special offer is open until Monday, February 9th at midnight.

👉 [Click here to enroll in the 6-Week Virtual College Success Course] — [targeturl]

Replay still available (until Feb 9th): [REPLAY LINK]

Debbie Elder

P.S. The families who hesitate are the ones who wish they hadn't. Don't let the deadline sneak up on you.`
  },
  {
    id: '[EZ-EMAIL-08]', name: 'Offer Day 3 (Attended) – Social Proof + Urgency',
    subject: "Time Is Running Out – Replay & Offer Closing Soon!",
    body: `Hi [First Name],

Quick update: the replay and the enrollment offer both close tomorrow — Monday, February 9th at midnight.

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
