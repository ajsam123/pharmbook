import toast from "react-hot-toast";

import axios from "axios";

type apiErrorData = {
  message?: unknown;
  detail?: unknown;
  success?: unknown;
  code?: unknown;
  [key: string]: unknown;
};

function extractMessage(data: unknown): string | null {
  if (!data) return null;

  // Plain string
  if (typeof data === "string") {
    return data;
  }

  // Array
  if (Array.isArray(data)) {
    if (data.length) {
      return extractMessage(data[0]);
    }
    return null;
  }

  // Prioritize common message fields
  //Obj
  if (typeof data === "object" && data !== null) {
    // Type assertion
    const obj = data as apiErrorData;

    if (typeof obj.message === "string") {
      return obj.message;
    }

    if (Array.isArray(obj.message) && obj.message.length) {
      return extractMessage(obj.message[0]);
    }

    if (typeof obj.detail === "string") {
      return obj.detail;
    }

    if (Array.isArray(obj.detail) && obj.detail.length) {
      return extractMessage(obj.detail[0]);
    }
    // Validation errors

    const ignoredKeys = ["success", "code"];

    for (const key in obj) {
      if (ignoredKeys.includes(key)) continue;

      const value = obj[key];

      if (Array.isArray(value) && value.length) {
        return extractMessage(value[0]);
      }

      if (typeof value === "string") {
        return value;
      }

      if (typeof value === "object") {
        const nested = extractMessage(value);
        if (nested) return nested;
      }
    }
  }

  return null;
}

export function handleApiError(error: unknown, showToast = true): string {
  let message = "Something went wrong";

  // No response = network error
  if (!axios.isAxiosError(error)) {
    message =
      error instanceof Error
        ? error.message
        : "Network error. Please check your connection";
  } else {
    const { status, data } = error.response ?? {};

    if (status && status >= 500) {
      message = "Server error. Please try again later.";
    } else {
      const extracted = extractMessage(data);
      if (extracted) {
        message = extracted;
      }
    }
  }

  if (showToast) {
    toast.error(message);
  }

  return message;
}
