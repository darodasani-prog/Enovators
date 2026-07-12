export interface ConsultationBooking {
  id: string;
  type: "booking";
  date: string;
  time: string;
  plan: string;
  name: string;
  email: string;
  website?: string;
  notes?: string;
  submittedAt: string;
}

export interface FormInquiry {
  id: string;
  type: "inquiry";
  name: string;
  email: string;
  company?: string;
  message: string;
  needs: string[];
  submittedAt: string;
}

export type Submission = ConsultationBooking | FormInquiry;

export interface IntegrationConfig {
  provider: "none" | "formspree" | "web3forms";
  formspreeId: string;
  web3formsKey: string;
}

const SUBMISSIONS_KEY = "enovatos-studio-submissions";
const CONFIG_KEY = "enovatos-studio-integration-config";

// Default configuration pre-configured with the user's Formspree Form ID
const DEFAULT_CONFIG: IntegrationConfig = {
  provider: "formspree",
  formspreeId: "mwvgkegr",
  web3formsKey: "",
};

// Helper to get configuration
export function getIntegrationConfig(): IntegrationConfig {
  try {
    const data = localStorage.getItem(CONFIG_KEY);
    return data ? { ...DEFAULT_CONFIG, ...JSON.parse(data) } : DEFAULT_CONFIG;
  } catch (e) {
    console.error("Error loading integration config", e);
    return DEFAULT_CONFIG;
  }
}

// Helper to save configuration
export function saveIntegrationConfig(config: IntegrationConfig): void {
  try {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Error saving integration config", e);
  }
}

// Transmit submission to external active provider (Formspree or Web3Forms)
export async function submitToExternalProvider(payload: any): Promise<{ success: boolean; error?: string }> {
  const config = getIntegrationConfig();
  
  if (config.provider === "none") {
    return { success: true }; // No external dispatch active
  }

  try {
    if (config.provider === "formspree") {
      if (!config.formspreeId) {
        return { success: false, error: "Formspree Form ID is missing from console settings." };
      }
      
      const response = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const errData = await response.json();
        return { success: false, error: errData?.error || "Formspree rejected the dispatch." };
      }
    }

    if (config.provider === "web3forms") {
      if (!config.web3formsKey) {
        return { success: false, error: "Web3Forms Access Key is missing from console settings." };
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject: `Enovatos Studio Lead: ${payload.name || "New Submission"}`,
          from_name: "Enovatos Creative Studio Portfolio",
          ...payload
        }),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const errData = await response.json();
        return { success: false, error: errData?.message || "Web3Forms rejected the dispatch." };
      }
    }

    return { success: true };
  } catch (err: any) {
    console.error("External submission error", err);
    return { success: false, error: err?.message || "Network failure during external transmission." };
  }
}

// Helper to get all submissions
export function getSubmissions(): Submission[] {
  try {
    const data = localStorage.getItem(SUBMISSIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error loading submissions", e);
    return [];
  }
}

// Helper to save submissions
export function saveSubmissions(submissions: Submission[]): void {
  try {
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));
  } catch (e) {
    console.error("Error saving submissions", e);
  }
}

// Save a new consultation booking
export function addBooking(booking: Omit<ConsultationBooking, "id" | "type" | "submittedAt">): ConsultationBooking {
  const newBooking: ConsultationBooking = {
    ...booking,
    id: `bk-${Math.random().toString(36).substring(2, 9)}`,
    type: "booking",
    submittedAt: new Date().toISOString(),
  };

  const list = getSubmissions();
  list.unshift(newBooking);
  saveSubmissions(list);
  return newBooking;
}

// Save a new general inquiry
export function addInquiry(inquiry: Omit<FormInquiry, "id" | "type" | "submittedAt">): FormInquiry {
  const newInquiry: FormInquiry = {
    ...inquiry,
    id: `iq-${Math.random().toString(36).substring(2, 9)}`,
    type: "inquiry",
    submittedAt: new Date().toISOString(),
  };

  const list = getSubmissions();
  list.unshift(newInquiry);
  saveSubmissions(list);
  return newInquiry;
}

// Delete a submission
export function deleteSubmission(id: string): void {
  const list = getSubmissions();
  const updated = list.filter((s) => s.id !== id);
  saveSubmissions(updated);
}

// Clear all submissions
export function clearAllSubmissions(): void {
  localStorage.removeItem(SUBMISSIONS_KEY);
}
