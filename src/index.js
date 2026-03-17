/**
 * EZ GHL Webinar Automation – Main Runner
 *
 * Usage:
 *   node src/index.js           → Run everything
 *   node src/index.js --pipeline → Pipeline only
 *   node src/index.js --fields   → Custom fields only
 *   node src/index.js --tags     → Tags only
 *   node src/index.js --workflows → Print workflow blueprints only
 */

import 'dotenv/config';
import { setupPipeline } from './setupPipeline.js';
import { setupCustomFields } from './setupCustomFields.js';
import { setupTags } from './setupTags.js';
import { printBlueprint as printWF001 } from './workflows/wf001_registration.js';
import { printBlueprint as printWF002 } from './workflows/wf002_reminders.js';
import { printBlueprint as printWF003 } from './workflows/wf003_postWebinarAttended.js';
import { printBlueprint as printWF004 } from './workflows/wf004_postWebinarNoShow.js';
import { printBlueprint as printWF005 } from './workflows/wf005_purchase.js';

const args = process.argv.slice(2);
const runAll = args.length === 0 || args.includes('--all');

function log(msg) {
  console.log(msg);
}

function header() {
  log('');
  log('╔════════════════════════════════════════════════════════════════╗');
  log('║         EZ GHL Webinar & Course Automation Setup               ║');
  log('║         Built by Claude · Prefix: [EZ-XXX] / ez_              ║');
  log('╚════════════════════════════════════════════════════════════════╝');
  log(`  Location ID : ${process.env.GHL_LOCATION_ID}`);
  log(`  API Base    : ${process.env.GHL_API_BASE}`);
  log('');
}

async function runApiSetup() {
  header();

  log('═══ PHASE 1: API-Created Resources ════════════════════════════');
  log('  These will be created directly in your GHL account via API.\n');

  try {
    if (runAll || args.includes('--pipeline')) {
      await setupPipeline(log);
    }

    if (runAll || args.includes('--fields')) {
      await setupCustomFields(log);
    }

    if (runAll || args.includes('--tags')) {
      await setupTags(log);
    }
  } catch (err) {
    log(`\n  ✗ API Error: ${err.message}`);
    log('  Check your GHL_API_KEY and GHL_LOCATION_ID in .env\n');
    process.exit(1);
  }

  log('\n  ✓ API setup complete.\n');
}

function runWorkflowBlueprints() {
  log('\n═══ PHASE 2: Workflow Blueprints ══════════════════════════════');
  log('  GHL does not support creating workflows via API.');
  log('  Use these blueprints to build each workflow in the UI.');
  log('  Go to: GHL → Automations → Workflows → + New Workflow\n');

  printWF001(log);
  printWF002(log);
  printWF003(log);
  printWF004(log);
  printWF005(log);

  log('\n═══ PHASE 3: Manual Steps Required ═══════════════════════════');
  log('');
  log('  1. ZOOM INTEGRATION');
  log('     ─ Install Zoom integration from GHL Marketplace');
  log('     ─ OR use Zapier/Make: Zoom Webinar Ended → GHL');
  log('       · Attended contacts → Add tag: ez_webinar-attended');
  log('       · No-show contacts  → Add tag: ez_webinar-no-show');
  log('       · Store unique join link in [EZ-007] Zoom Join Link field');
  log('');
  log('  2. STRIPE CONNECTION');
  log('     ─ GHL Settings → Integrations → Stripe');
  log('     ─ Connect your Stripe account');
  log('     ─ Create order form for the course');
  log('');
  log('  3. MEMBERSHIP PRODUCT');
  log('     ─ GHL → Memberships → Products → Create Product');
  log('     ─ Name it: [EZ-009] Online Course');
  log('     ─ Add your course modules');
  log('');
  log('  4. EMAIL TEMPLATES');
  log('     ─ GHL → Marketing → Email Templates');
  log('     ─ Create each email listed in the workflow blueprints above');
  log('     ─ All copy is in: src/workflows/wf00X_*.js (EMAIL_* exports)');
  log('');
  log('  5. SMS TEMPLATES');
  log('     ─ GHL → Marketing → SMS Templates');
  log('     ─ Create each SMS listed in the workflow blueprints above');
  log('     ─ All copy is in: src/workflows/wf00X_*.js (SMS_* exports)');
  log('');
  log('  6. WEBINAR DATE FIELD');
  log('     ─ When you schedule a webinar, set [EZ-008] Webinar Date');
  log('     ─ on each contact at registration time (via form hidden field');
  log('       or workflow action "Update Contact Field")');
  log('');
  log('═══════════════════════════════════════════════════════════════');
  log('');
  log('  ✓ All done! Full build summary:');
  log('');
  log('    API-created (automated):');
  log('      [EZ-006] Webinar Pipeline (5 stages)');
  log('      [EZ-007] Zoom Join Link (custom field)');
  log('      [EZ-008] Webinar Date (custom field)');
  log('      Tags: ez_webinar-registered, ez_webinar-attended,');
  log('            ez_webinar-no-show, ez_webinar-offer-sent,');
  log('            ez_customer, ez_course-member');
  log('');
  log('    Blueprints ready for manual build in GHL UI:');
  log('      [EZ-001] Webinar Registration Workflow');
  log('      [EZ-002] Webinar Reminder Sequence');
  log('      [EZ-003] Post-Webinar – Attended');
  log('      [EZ-004] Post-Webinar – No-Show');
  log('      [EZ-005] Purchase & Membership Access');
  log('      [EZ-009] Online Course (Membership Product)');
  log('');
  log('    Email templates to create (14 total):');
  log('      [EZ-EMAIL-01]  Webinar Confirmation');
  log('      [EZ-EMAIL-02]  3 Days Before Reminder');
  log('      [EZ-EMAIL-03]  1 Day Before Reminder');
  log('      [EZ-EMAIL-04]  1 Hour Before Reminder');
  log('      [EZ-EMAIL-05]  Replay + Thank You (Attended)');
  log('      [EZ-EMAIL-06]  Offer Day 1 (Attended)');
  log('      [EZ-EMAIL-07]  Offer Day 3 (Attended)');
  log('      [EZ-EMAIL-08]  Offer Day 5 (Attended)');
  log('      [EZ-EMAIL-09]  Urgency – Offer Closes Tomorrow');
  log('      [EZ-EMAIL-10]  Last Chance (Attended)');
  log('      [EZ-EMAIL-11]  Sorry We Missed You + Replay (No-Show)');
  log('      [EZ-EMAIL-12]  Soft Offer (No-Show)');
  log('      [EZ-EMAIL-13]  Offer Reminder (No-Show)');
  log('      [EZ-EMAIL-14]  Last Chance (No-Show)');
  log('      [EZ-EMAIL-15]  Purchase Confirmation + Course Access');
  log('      [EZ-EMAIL-16]  Onboarding Day 1');
  log('      [EZ-EMAIL-17]  Onboarding Day 3');
  log('      [EZ-EMAIL-18]  Onboarding Day 7');
  log('');
  log('    SMS templates to create (9 total):');
  log('      [EZ-SMS-01]  Webinar Confirmation');
  log('      [EZ-SMS-02]  1 Day Before Reminder');
  log('      [EZ-SMS-03]  1 Hour Before Reminder');
  log('      [EZ-SMS-04]  15 Minutes Before');
  log('      [EZ-SMS-05]  Offer Day 1 (Attended)');
  log('      [EZ-SMS-06]  Offer Day 5 (Attended)');
  log('      [EZ-SMS-07]  Last Chance (Attended)');
  log('      [EZ-SMS-08]  Offer Nudge (No-Show)');
  log('      [EZ-SMS-09]  Purchase Confirmation');
  log('');
}

// ── Main ───────────────────────────────────────────────────────────────────

if (runAll || args.some((a) => ['--pipeline', '--fields', '--tags'].includes(a))) {
  await runApiSetup();
}

if (runAll || args.includes('--workflows')) {
  runWorkflowBlueprints();
}
