/**
 * Tags Setup
 * All EZ tags use ez_ prefix
 */

import { ghl } from './ghlClient.js';

export const EZ_TAGS = [
  'ez_webinar-registered',
  'ez_webinar-attended',
  'ez_webinar-no-show',
  'ez_webinar-offer-sent',
  'ez_customer',
  'ez_course-member',
];

export async function setupTags(log) {
  log('\n── Tags ──────────────────────────────────────────────────────');

  const existing = await ghl.getTags();
  const existingTags = existing?.tags || existing || [];
  const existingNames = existingTags.map((t) => t.name);

  for (const tagName of EZ_TAGS) {
    if (existingNames.includes(tagName)) {
      log(`  ✓ Tag already exists: ${tagName}`);
      continue;
    }

    await ghl.createTag(tagName);
    log(`  ✓ Created tag: ${tagName}`);
  }
}
