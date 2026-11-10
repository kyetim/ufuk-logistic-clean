
## 2026-11-10 - XSS vulnerability in dangerouslySetInnerHTML
**Vulnerability:** The app passes dynamic and translated HTML content (like news, events, and kvk) directly to dangerouslySetInnerHTML without prior sanitization, creating a high risk of Cross-Site Scripting (XSS).
**Learning:** React's dangerouslySetInnerHTML is insecure by default. Any untrusted HTML, even from a CMS or translations, can contain malicious scripts.
**Prevention:** Always use a well-maintained sanitizer like DOMPurify before injecting HTML via dangerouslySetInnerHTML.
