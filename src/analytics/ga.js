export function initGA(measurementId) {
  if (!measurementId || typeof window === "undefined") return;
  // Avoid double-inject
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  // Inject gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    measurementId,
  )}`;
  document.head.appendChild(script);

  // Init config
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", measurementId);
}
