/**
 * [EZ-006] Webinar Pipeline Setup
 * Creates the CRM pipeline with all stages for tracking webinar contacts
 */

import { ghl } from './ghlClient.js';

export const PIPELINE_NAME = '[EZ-006] Webinar Pipeline';

export const PIPELINE_STAGES = [
  { name: 'Registered', position: 0 },
  { name: 'Attended', position: 1 },
  { name: 'No-Show', position: 2 },
  { name: 'Offer Sent', position: 3 },
  { name: 'Purchased', position: 4 },
];

export async function setupPipeline(log) {
  log('\n── [EZ-006] Webinar Pipeline ─────────────────────────────────');

  // Check if already exists
  const existing = await ghl.getPipelines();
  const pipelines = existing?.pipelines || existing || [];
  const found = pipelines.find((p) => p.name === PIPELINE_NAME);

  if (found) {
    log(`  ✓ Pipeline already exists: ${found.id}`);
    return found.id;
  }

  const result = await ghl.createPipeline({
    name: PIPELINE_NAME,
    stages: PIPELINE_STAGES,
  });

  const pipelineId = result?.pipeline?.id || result?.id;
  log(`  ✓ Created pipeline: ${pipelineId}`);
  log(`    Stages: ${PIPELINE_STAGES.map((s) => s.name).join(' → ')}`);
  return pipelineId;
}
