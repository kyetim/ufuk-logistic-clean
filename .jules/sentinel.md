## 2026-09-18 - [CRITICAL] Cross-Site Scripting (XSS) in dynamically rendered content
**Vulnerability:** Unsanitized dynamic HTML content (translations and CMS-like data) was passed directly to React's dangerouslySetInnerHTML, opening the door for Cross-Site Scripting (XSS) attacks.
**Learning:** Translation files (t()) and simulated dynamic CMS data were incorrectly assumed to be safe. Any data rendered with dangerouslySetInnerHTML must be explicitly sanitized, as the source might be compromised or include unexpected malicious payloads.
**Prevention:** Always use DOMPurify.sanitize() when utilizing dangerouslySetInnerHTML in React, regardless of whether the source is a translation dictionary or CMS data.
