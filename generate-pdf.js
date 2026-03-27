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
  '19 Email Templates',
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
// PAGE 8+ – EMAIL TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage();
h1('Email Templates – Full Copy');
body('Create each template in GHL → Marketing → Email Templates.');
divider();

const emails = [
  {
    id: '[EZ-EMAIL-01]', name: 'Webinar Confirmation (Double Opt-in)',
    subject: "Confirm Your Registration for Our Upcoming Webinar!",
    body: `Dear [Parent's Name],

Thank you for signing up for our webinar titled "5 Biggest Fears Parents Face Sending Their Child to College." We are excited to have you join us on February 5, 2026, at 6:00 PM ET.

Before we can confirm your registration, we need you to verify your email address. This helps us ensure that you receive all the important details and updates regarding the webinar.

[Click here to verify your email!]

In this exclusive webinar, you will discover how to eliminate your biggest fears and set your child up for success as they transition to college. Here's a sneak peek of what you can expect:
• Understand the Full Picture: Gain clarity on parent perceptions of college readiness.
• Effective Academic Strategies: Discover powerful techniques that boost your student's learning.
• Beyond Academics: Prepare your child socially and emotionally for college life.
• Navigating Transition Concerns: Tackle fears regarding academics and emotional stability.
• Career Readiness: Equip your child with essential skills for their future career.

Don't miss out on this opportunity to empower both you and your child!
We look forward to having you with us on this journey to transform anxiety into action.

Sincerely,
Debbie Elder

P.S. Don't forget to verify your email to secure your spot for the webinar!`
  },
  {
    id: '[EZ-EMAIL-02]', name: '3 Days Before Reminder',
    subject: "You Signed Up for 5 Biggest Fears Parents Face Sending Their Child to College – Here's Why You Don't Want to Miss It!",
    body: `Dear [Recipient's Name],

Time flies, and as the date approaches, it's essential to remember why you signed up for the upcoming webinar: "5 Biggest Fears Parents Face Sending Their Child to College." This isn't just another online event; it's a game-changer for parents like you who are navigating the complexities of preparing their teens for college.

Here's what you can look forward to on February 5, 2026, at 6:00 PM ET:
• Identify key gaps: Learn about the critical gaps in addressing your child's transition to college.
• Empower your student: Discover powerful learning skills that set the stage for academic success now and in the future.
• Unlock potential: Equip yourself with strategies to ensure your child gets the most out of their college experience.

As a parent of a college-bound high school student, you may be feeling these pressing concerns:
• Is my child ready for college and a career?
• What steps should I take beyond academics to prepare them?
• How can I alleviate my worries about costs, social-emotional readiness, and their future careers?

All of these questions will be answered during the webinar, tailored specifically for parents seeking to empower their children.

Key takeaways include:
• Understanding the parent perceptions of readiness for college and careers.
• Addressing academic readiness and college preparation beyond just academics.
• Navigating concerns related to social/emotional transitions and career readiness.

Join us live! [Register Here]

Best,
Debbie Elder

P.S. Take action now! Secure your spot so you don't miss out on essential insights that could shape your child's academic future.`
  },
  {
    id: '[EZ-EMAIL-02B]', name: '2 Days Before Reminder',
    subject: "Unlock Your Child's College Success!",
    body: `Dear [Registrant's Name],

Are you worried about your child's transition to college? You're not alone. Many parents share the same concerns, but attending our upcoming webinar, "5 Biggest Fears Parents Face Sending Their Child to College," can provide you with game-changing insights.

Join us live on February 5, 2026, at 6:00 PM ET. Here's why showing up live is crucial:

1. Direct Access to Expert Advice: Real-time guidance from years of experience as an internationally recognized coach and consultant in college readiness.
2. Actionable Strategies: Practical steps you can implement immediately to prepare your student for academic success.
3. Understanding Readiness: Essential insights into how to assess your child's academic and emotional readiness for college.
4. Communication Skills: How to discuss college expectations with your child to foster open communication.
5. Networking with Other Parents: Hear from other parents navigating the same journey.

Don't let this opportunity slip away! [Join the Webinar]

Best,
Debbie Elder

P.S. If you truly want to empower your student and give them the best chance at college success, you cannot afford to miss this live session. Register now!`
  },
  {
    id: '[EZ-EMAIL-03]', name: '1 Day Before Reminder',
    subject: "Tomorrow's the Big Day! Here's Why You Need to Show Up",
    body: `Hi there,

Tomorrow is the day you've been waiting for! If you want to empower your child for both academic and college success, you need to be present for our webinar: "5 Biggest Fears Parents Face Sending Their Child to College."

Date: February 5, 2026  |  Time: 6:00 PM ET

Why attend live? Direct access to actionable insights — get answers to your pressing questions and hear exclusive content only discussed in the moment.

What you'll gain:
1. Understand Readiness: Explore parent perceptions around college readiness.
2. Academic Excellence: Discover essential learning skills that empower students to excel.
3. Holistic Preparation: Learn how social, emotional, and career-related concerns play a role.
4. Addressing Concerns: Dive deep into academic values and completion rate worries.
5. Expert Guidance: Proven strategies from a seasoned consultant, author, and speaker.

Join us live: [Join Webinar]

Best,
Debbie Elder

P.S. Being live means not just gaining wisdom but connecting with a community of parents who share your concerns.`
  },
  {
    id: '[EZ-EMAIL-04]', name: '1 Hour Before Reminder',
    subject: "1 Hour to Go! Drop Everything and Show Up!",
    body: `Dear Parent,

This is your final reminder! In just one hour, we'll dive into the 5 Biggest Fears Parents Face Sending Their Child to College. Don't miss out on vital insights that can shape your child's college experience!

Here's what you'll discover with me, Debbie Elder:
1. Current Parent Concerns: Understand common perceptions of readiness for college and careers.
2. Academic Preparedness: Learn what truly prepares your student for college-level work.
3. Holistic College Prep: Discover strategies that go beyond academics.
4. Value and Completion: Tackle questions around the true cost versus the value of college education.
5. Social/Emotional Readiness: Equip yourself with tools to support your child's emotional journey.

Join us TONIGHT at 6:00 PM ET: [Join Webinar Now!]

Best,
Debbie Elder

P.S. Remember, it's just an hour away. Prepare to take notes!`
  },
  {
    id: '[EZ-EMAIL-05]', name: 'Replay + Thank You (Attended)',
    subject: "Here's the Replay!",
    body: `Dear Parents,

Thank you for joining me for the "5 Biggest Fears Parents Face Sending Their Child to College" webinar last night. I appreciate your commitment to ensuring your child's success during this critical transition.

[Watch the Replay Here!] — This session is packed with vital insights. Remember, this valuable replay won't be available forever.

Why Did This Webinar Matter? Our discussion covered crucial topics like:
• Understanding your child's perceived readiness for college and careers.
• Assessing academic readiness and the essential preparation that goes beyond just grades.
• Addressing concerns related to social and emotional transitions.
• Tackling career-related anxieties that both you and your student may experience.

Your Journey to Empowerment Begins Here — I urge you to consider participating in my 6-week Virtual College Success Course (total value: $3,497, includes College Prep Masterclass Series valued at $2,997).

[click here to find out more about the course and secure your spot today!]

Best regards,
Debbie Elder

P.S. Watching the replay today could make all the difference! Don't let this opportunity slip away.`
  },
  {
    id: '[EZ-EMAIL-06]', name: 'Offer Day 1 (Attended) – Replay + Course',
    subject: "Replay + How 6-Week Course Empowers Your Student",
    body: `Dear Parents,

Did you know that nearly 70% of students entering college feel unprepared for the transition? If you missed our webinar, the replay is now available — watch it while you still can.

Key takeaways from the session:
1. Understanding Readiness: Gauge your child's readiness for college and careers.
2. Academic Preparation: Vital skills and practices that enhance your student's academic outcomes.
3. Navigating Beyond Academics: Social and emotional elements crucial for a smooth transition.
4. Career-Related Insights: What's needed to prepare your child for their future career path.
5. Peace of Mind: How proper preparation leads to confidence for both you and your student.

Enroll in my 6-week Virtual College Success Course (total value: $3,497, includes College Prep Masterclass Series — a $2,997 value). Check out the course details and grab your spot now: [targeturl]

Best,
Debbie Elder

P.S. The replay will only be available for a limited time — watch it now and explore how our course can make a real difference. [replay link]`
  },
  {
    id: '[EZ-EMAIL-07]', name: 'Offer Day 2 (Attended) – FAQ / Unlock Potential',
    subject: "Don't Miss Out: Unlock Your Student's True Potential",
    body: `Hi there,

Did you know that over 60% of students feel unprepared for the challenges of college? That statistic is alarming, and it underscores the urgent need for effective college preparation strategies.

Key insights from the webinar:
1. Understanding Readiness: Gauge whether your child is truly prepared for college responsibilities.
2. Beyond Academics: Essential non-academic skills that are just as crucial to college success.
3. Addressing Concerns: Tackle fears related to value, completion, and emotional readiness.
4. Empowering Your Child: Tools they'll need to excel academically and socially on campus.
5. Strategizing for Success: Create a strategic plan tailored to your child's collegiate goals.

Watch the replay and explore the 6-week Virtual College Success Course at [targeturl].

Why should you enroll?
• Unlock your child's potential without adding stress.
• Get peace of mind knowing they're fully prepared for academic success.
• Avoid the long learning curves: Learn 100% faster with great retention.
• Define clear collegiate goals and implement plans without the struggle.

[Click here to learn more and secure your spot today!]

Best,
Debbie Elder

P.S. Don't wait to give your child the tools they need to succeed. Enroll in the 6-week Virtual College Success Course now!`
  },
  {
    id: '[EZ-EMAIL-08]', name: 'Offer Day 3 (Attended) – Urgency',
    subject: "Time Is Running Out – Replay & Offer Closing Soon!",
    body: `Dear Parents,

Last week, we held an insightful webinar titled, "5 Biggest Fears Parents Face Sending Their Child to College." The purpose was to expose critical gaps in preparing for your child's transition to college.

Key takeaways:
1. Understanding Readiness: Insight into common parent perceptions and how to address them.
2. Academic Preparation Beyond Just Grades: Prepare your child academically, socially, and emotionally.
3. Navigating Costs and Value: Tackle critical concerns surrounding college expenses and graduation value.
4. Career Preparedness: Essential career skills that need to be developed prior to college enrollment.
5. Successful Transitions: Practical advice on easing the high school to college transition.

The replay is available, but only for a limited time, and so is my exclusive offer for the 6-week Virtual College Success Course. This offer is set to expire tomorrow, Monday, 02/09/2026.

The value of this offer is substantial:
• The College Prep Masterclass Series valued at $2,997.00.
• All included in the 6-week Virtual College Success Course.

Click [here] to watch the webinar replay and secure your spot in the course.

Warm regards,
Debbie Elder

P.S. Time is running out! Make sure to take advantage of this unique opportunity before it's too late!`
  },
  {
    id: '[EZ-EMAIL-09]', name: 'Last Call – Morning (Day 4)',
    subject: "Last Call - Replay and Offer Closing Today!",
    body: `Dear [Recipient's Name],

This is your last chance to watch the replay of my webinar, 5 Biggest Fears Parents Face Sending Their Child to College, held on February 5, 2026, at 6:00 PM ET.

Key takeaways from the webinar:
1. Parent perceptions of readiness: How parents view their child's preparedness, and what that means for success.
2. Social/emotional transition concerns: Challenges students face adapting to a college environment.
3. Career-related concerns: Aligning your child's education with career aspirations.

Don't miss the opportunity to unlock your child's potential with the 6-week Virtual College Success Course. It includes:
• The College Prep Masterclass Series valued at $2,997.00 — to equip your student with self-leadership skills.
• Strategies to make the transition to college smoother and create clear collegiate goals.

Total value: $3,497.00. This offer closes tonight at midnight, Monday, February 9, 2026.

[Watch the Replay and Learn More About the Course]

To your child's success,
Debbie Elder

P.S. This is your final call! Secure your place today. 🌟`
  },
  {
    id: '[EZ-EMAIL-10]', name: 'Last Chance – Evening (Day 4)',
    subject: "Last Chance: Course Offer Ends Tonight!",
    body: `Dear [Recipient's Name],

This is it! Tonight is your last opportunity to join the 6-week Virtual College Success Course.

Here's what we covered in the webinar:
1. Academic Readiness: Understanding what college expects from your child academically.
2. Social and Emotional Preparation: Tips to support your child's emotional transition.
3. Career-Related Concerns: How to help your student choose the right path.
4. Navigating Financial Considerations: Strategies to afford college without overwhelming debt.
5. Unlocking Your Child's Potential: Practical tools to inspire motivation and self-leadership.

Special Offer: Sign up before midnight tonight! This exclusive program includes the College Prep Masterclass Series—a $2,997.00 value—totaling $3,497.00 in invaluable benefits.

By enrolling, you will:
• Gain the knowledge to help your child succeed academically and socially.
• Conquer the fears and uncertainties surrounding the college journey.
• Develop actionable goals and a step-by-step strategy tailored for your student's needs.

The hard deadline is tonight at midnight, February 9, 2026.

Best,
Debbie Elder

P.S. This is your final reminder—don't wait! Take the next step towards a successful college journey for your child.`
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
    title: 'Email Templates (GHL → Marketing → Email Templates)  [19 total]',
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
