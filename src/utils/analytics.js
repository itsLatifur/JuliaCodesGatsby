export function track(event, params = {}) {
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, params);
    }
  } catch (_) {
    // noop
  }
}
