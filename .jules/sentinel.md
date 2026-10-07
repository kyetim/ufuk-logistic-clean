## 2024-05-24 - XSS Vulnerability in React dynamically injected HTML
**Vulnerability:** Raw HTML strings (from translations and CMS-like mock data) were passed directly to dangerouslySetInnerHTML without sanitization.
**Learning:** Using dangerouslySetInnerHTML without an external sanitizer like DOMPurify opens up the possibility for Cross-Site Scripting (XSS) if the data source contains malicious scripts. The framework does not auto-sanitize strings passed to dangerouslySetInnerHTML.
**Prevention:** Always wrap dynamically generated or external HTML content with DOMPurify.sanitize() before setting it via dangerouslySetInnerHTML.
