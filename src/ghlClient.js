/**
 * GoHighLevel API Client
 * Handles all HTTP communication with the GHL REST API v2
 */

import axios from 'axios';
import 'dotenv/config';

const API_BASE = process.env.GHL_API_BASE || 'https://services.leadconnectorhq.com';
const API_KEY = process.env.GHL_API_KEY;
const LOCATION_ID = process.env.GHL_LOCATION_ID;
const API_VERSION = process.env.GHL_API_VERSION || '2021-07-28';

if (!API_KEY || !LOCATION_ID) {
  console.error('Missing GHL_API_KEY or GHL_LOCATION_ID in .env file');
  process.exit(1);
}

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Version: API_VERSION,
    'Content-Type': 'application/json',
  },
});

// Response interceptor for consistent error handling
client.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const msg = err.response?.data?.message || err.message;
    const status = err.response?.status;
    throw new Error(`GHL API Error [${status}]: ${msg}`);
  }
);

export const ghl = {
  locationId: LOCATION_ID,

  // ── Pipelines ──────────────────────────────────────────────────────────────
  async getPipelines() {
    return client.get(`/opportunities/pipelines?locationId=${LOCATION_ID}`);
  },

  async createPipeline(payload) {
    return client.post('/opportunities/pipelines', { ...payload, locationId: LOCATION_ID });
  },

  // ── Custom Fields ──────────────────────────────────────────────────────────
  async getCustomFields() {
    return client.get(`/locations/${LOCATION_ID}/customFields`);
  },

  async createCustomField(payload) {
    return client.post(`/locations/${LOCATION_ID}/customFields`, payload);
  },

  // ── Tags ───────────────────────────────────────────────────────────────────
  async getTags() {
    return client.get(`/locations/${LOCATION_ID}/tags`);
  },

  async createTag(name) {
    return client.post(`/locations/${LOCATION_ID}/tags`, { name });
  },

  // ── Workflows ──────────────────────────────────────────────────────────────
  async getWorkflows() {
    return client.get(`/workflows/?locationId=${LOCATION_ID}`);
  },

  // Note: GHL API v2 does not support programmatic workflow creation via REST.
  // Workflows must be created through the UI. This script will output
  // structured blueprints for each workflow to guide manual creation.

  // ── Email Templates ────────────────────────────────────────────────────────
  async getEmailTemplates() {
    return client.get(`/locations/${LOCATION_ID}/templates?type=email&limit=100`);
  },

  async createEmailTemplate(payload) {
    return client.post(`/locations/${LOCATION_ID}/templates`, { ...payload, type: 'email' });
  },

  // ── SMS Templates ──────────────────────────────────────────────────────────
  async createSmsTemplate(payload) {
    return client.post(`/locations/${LOCATION_ID}/templates`, { ...payload, type: 'sms' });
  },

  // ── Calendars ─────────────────────────────────────────────────────────────
  async getCalendars() {
    return client.get(`/calendars/?locationId=${LOCATION_ID}`);
  },

  // ── Generic GET ───────────────────────────────────────────────────────────
  async get(path) {
    return client.get(path);
  },

  async post(path, body) {
    return client.post(path, body);
  },
};
