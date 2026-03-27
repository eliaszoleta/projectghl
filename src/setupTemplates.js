/**
 * Email & SMS Templates Setup
 * Creates all EZ templates in GHL via API
 */

import { ghl } from './ghlClient.js';
import { EMAIL_CONFIRMATION, SMS_CONFIRMATION } from './workflows/wf001_registration.js';
import { EMAIL_3_DAYS, EMAIL_2_DAYS, EMAIL_1_DAY, EMAIL_1_HOUR, SMS_1_DAY, SMS_1_HOUR, SMS_15_MIN } from './workflows/wf002_reminders.js';
import { EMAIL_REPLAY_ATTENDED, EMAIL_OFFER_D1, EMAIL_OFFER_D3, EMAIL_OFFER_D5, EMAIL_URGENCY, EMAIL_LAST_CHANCE as EMAIL_LAST_CHANCE_ATTENDED, SMS_OFFER_D1, SMS_OFFER_D5, SMS_LAST_CHANCE } from './workflows/wf003_postWebinarAttended.js';
import { EMAIL_MISSED, EMAIL_SOFT_OFFER, EMAIL_NUDGE, EMAIL_LAST_CHANCE as EMAIL_LAST_CHANCE_NOSHOW, SMS_NUDGE } from './workflows/wf004_postWebinarNoShow.js';
import { EMAIL_PURCHASE_CONFIRM, EMAIL_ONBOARDING_D1, EMAIL_ONBOARDING_D3, EMAIL_ONBOARDING_D7, SMS_PURCHASE_CONFIRM } from './workflows/wf005_purchase.js';

const EMAIL_TEMPLATES = [
  { name: '[EZ-EMAIL-01] Webinar Confirmation',                  ...EMAIL_CONFIRMATION },
  { name: '[EZ-EMAIL-02] 3 Days Before Reminder',                ...EMAIL_3_DAYS },
  { name: '[EZ-EMAIL-02B] 2 Days Before Reminder',               ...EMAIL_2_DAYS },
  { name: '[EZ-EMAIL-03] 1 Day Before Reminder',                 ...EMAIL_1_DAY },
  { name: '[EZ-EMAIL-04] 1 Hour Before Reminder',                ...EMAIL_1_HOUR },
  { name: '[EZ-EMAIL-05] Replay + Thank You (Attended)',         ...EMAIL_REPLAY_ATTENDED },
  { name: '[EZ-EMAIL-06] Offer Day 1 (Attended)',                ...EMAIL_OFFER_D1 },
  { name: '[EZ-EMAIL-07] Offer Day 3 (Attended)',                ...EMAIL_OFFER_D3 },
  { name: '[EZ-EMAIL-08] Offer Day 5 (Attended)',                ...EMAIL_OFFER_D5 },
  { name: '[EZ-EMAIL-09] Urgency – Offer Closes Tomorrow',       ...EMAIL_URGENCY },
  { name: '[EZ-EMAIL-10] Last Chance (Attended)',                ...EMAIL_LAST_CHANCE_ATTENDED },
  { name: '[EZ-EMAIL-11] Sorry We Missed You + Replay',         ...EMAIL_MISSED },
  { name: '[EZ-EMAIL-12] Soft Offer (No-Show)',                  ...EMAIL_SOFT_OFFER },
  { name: '[EZ-EMAIL-13] Offer Reminder (No-Show)',              ...EMAIL_NUDGE },
  { name: '[EZ-EMAIL-14] Last Chance (No-Show)',                 ...EMAIL_LAST_CHANCE_NOSHOW },
  { name: '[EZ-EMAIL-15] Purchase Confirmation + Course Access', ...EMAIL_PURCHASE_CONFIRM },
  { name: '[EZ-EMAIL-16] Onboarding Day 1 – Getting Started',   ...EMAIL_ONBOARDING_D1 },
  { name: '[EZ-EMAIL-17] Onboarding Day 3 – Your First Win',    ...EMAIL_ONBOARDING_D3 },
  { name: '[EZ-EMAIL-18] Onboarding Day 7 – Check-In',          ...EMAIL_ONBOARDING_D7 },
];

const SMS_TEMPLATES = [
  { name: '[EZ-SMS-01] Webinar Confirmation',       ...SMS_CONFIRMATION },
  { name: '[EZ-SMS-02] 1 Day Before Reminder',      ...SMS_1_DAY },
  { name: '[EZ-SMS-03] 1 Hour Before Reminder',     ...SMS_1_HOUR },
  { name: '[EZ-SMS-04] 15 Minutes Before',          ...SMS_15_MIN },
  { name: '[EZ-SMS-05] Offer Day 1 (Attended)',     ...SMS_OFFER_D1 },
  { name: '[EZ-SMS-06] Offer Day 5 (Attended)',     ...SMS_OFFER_D5 },
  { name: '[EZ-SMS-07] Last Chance (Attended)',     ...SMS_LAST_CHANCE },
  { name: '[EZ-SMS-08] Offer Nudge (No-Show)',      ...SMS_NUDGE },
  { name: '[EZ-SMS-09] Purchase Confirmation',      ...SMS_PURCHASE_CONFIRM },
];

export async function setupTemplates(log) {
  log('\n── Email Templates ───────────────────────────────────────────');

  const existing = await ghl.getEmailTemplates();
  const existingNames = (existing?.templates || existing || []).map((t) => t.name);

  for (const tpl of EMAIL_TEMPLATES) {
    if (existingNames.includes(tpl.name)) {
      log(`  ✓ Already exists: ${tpl.name}`);
      continue;
    }
    try {
      await ghl.createEmailTemplate({
        name: tpl.name,
        subject: tpl.subject,
        body: tpl.body,
      });
      log(`  ✓ Created: ${tpl.name}`);
    } catch (err) {
      log(`  ✗ Failed: ${tpl.name} – ${err.message}`);
    }
  }

  log('\n── SMS Templates ─────────────────────────────────────────────');

  for (const tpl of SMS_TEMPLATES) {
    try {
      await ghl.createSmsTemplate({
        name: tpl.name,
        body: tpl.body,
      });
      log(`  ✓ Created: ${tpl.name}`);
    } catch (err) {
      log(`  ✗ Failed: ${tpl.name} – ${err.message}`);
    }
  }
}
