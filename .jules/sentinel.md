## 2026-11-04 - Prevent XSS in dangerouslySetInnerHTML
**Vulnerability:** Raw HTML from translation files and CMS data (like news and events) was directly passed to `dangerouslySetInnerHTML` without sanitization, creating High-priority XSS vulnerabilities.
**Learning:** In React applications, even internal translations or CMS content can be injection vectors if they support HTML.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with a reliable sanitizer like `DOMPurify.sanitize()`, unless you are 100% sure the HTML is statically generated and safe.
