import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

/**
 * API client for Tender.AI backend
 * All endpoints are Supabase Edge Functions
 */

// Contact/Demo form submission
export async function submitContactRequest(data: {
  name: string;
  organisationName: string;
  organisationType: string;
  city: string;
  email: string;
  phone: string;
  needType?: string;
  message?: string;
}) {
  const { data: result, error } = await supabase.functions.invoke('contact', {
    body: data,
  });
  
  if (error) throw new Error(error.message);
  return result;
}

// RFQ submission
export async function submitRFQ(data: {
  organisationName: string;
  organisationType?: string;
  city?: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  category?: string;
  title: string;
  description?: string;
  budgetRange?: string;
}) {
  const { data: result, error } = await supabase.functions.invoke('rfq', {
    body: data,
  });
  
  if (error) throw new Error(error.message);
  return result;
}

// List RFQs (admin/debug)
export async function listRFQs(page = 1, limit = 20) {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/rfq?page=${page}&limit=${limit}`);
  return response.json();
}

// Vendor application submission
export async function submitVendorApplication(data: {
  organisationName: string;
  contactName: string;
  email: string;
  phone?: string;
  categoryFocus?: string;
  city?: string;
  message?: string;
}) {
  const { data: result, error } = await supabase.functions.invoke('vendor-apply', {
    body: data,
  });
  
  if (error) throw new Error(error.message);
  return result;
}

// List vendor applications (admin/debug)
export async function listVendorApplications(page = 1, limit = 20) {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/vendor-apply?page=${page}&limit=${limit}`);
  return response.json();
}

// Get subscription plans
export async function getSubscriptionPlans(type?: 'institution' | 'vendor') {
  const url = type 
    ? `${SUPABASE_URL}/functions/v1/plans?type=${type}`
    : `${SUPABASE_URL}/functions/v1/plans`;
  const response = await fetch(url);
  return response.json();
}

/**
 * Mock Razorpay Payment Integration
 * 
 * These functions simulate Razorpay payment flow for testing.
 * In production, replace with real Razorpay integration.
 */

// Create payment intent
export async function createPaymentIntent(data: {
  organisationName?: string;
  organisationType?: string;
  city?: string;
  email?: string;
  planId: string;
}) {
  const { data: result, error } = await supabase.functions.invoke('payments', {
    body: data,
  });
  
  if (error) throw new Error(error.message);
  return result;
}

// Simulate successful payment (test only)
export async function mockPaymentSuccess(paymentIntentId: string) {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/payments/mock-success`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentIntentId }),
  });
  return response.json();
}

// Simulate failed payment (test only)
export async function mockPaymentFail(paymentIntentId: string) {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/payments/mock-fail`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentIntentId }),
  });
  return response.json();
}
