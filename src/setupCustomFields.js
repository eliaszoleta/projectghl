/**
 * Custom Fields Setup
 * [EZ-007] Zoom Join Link
 * [EZ-008] Webinar Date
 */

import { ghl } from './ghlClient.js';

const FIELDS_TO_CREATE = [
  {
    label: '[EZ-007] Zoom Join Link',
    key: 'ez_zoom_join_link',
    dataType: 'TEXT',
    position: 0,
  },
  {
    label: '[EZ-008] Webinar Date',
    key: 'ez_webinar_date',
    dataType: 'DATE',
    position: 1,
  },
];

export async function setupCustomFields(log) {
  log('\n── Custom Fields ─────────────────────────────────────────────');

  const existing = await ghl.getCustomFields();
  const existingFields = existing?.customFields || existing || [];
  const existingKeys = existingFields.map((f) => f.fieldKey || f.key);

  const createdIds = {};

  for (const field of FIELDS_TO_CREATE) {
    const alreadyExists = existingFields.find(
      (f) => f.name === field.label || f.fieldKey === field.key
    );

    if (alreadyExists) {
      log(`  ✓ Field already exists: ${field.label} → ${alreadyExists.id}`);
      createdIds[field.key] = alreadyExists.id;
      continue;
    }

    const result = await ghl.createCustomField({
      name: field.label,
      fieldKey: field.key,
      dataType: field.dataType,
      position: field.position,
    });

    const fieldId = result?.customField?.id || result?.id;
    log(`  ✓ Created field: ${field.label} → ${fieldId}`);
    createdIds[field.key] = fieldId;
  }

  return createdIds;
}
