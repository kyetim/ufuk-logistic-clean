## 2026-10-27 - Prevent XSS in dynamically injected HTML content
**Vulnerability:** Raw HTML from translations and pseudo-API variables was directly injected using `dangerouslySetInnerHTML`. This created a critical Cross-Site Scripting (XSS) vulnerability.
**Learning:** Translation strings and dynamically populated strings containing HTML tags must be explicitly sanitized before injection. Assuming they are safe just because they are static-looking or come from 'known' formats is a common failure point in React applications.
**Prevention:** Always use a standard sanitization library like DOMPurify when `dangerouslySetInnerHTML` is used. Do not assume data is clean unless explicitly sanitized on the client right before rendering.
