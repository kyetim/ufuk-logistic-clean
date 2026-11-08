## 2026-11-08 - XSS Vulnerability in dynamically injected React content
**Vulnerability:** Raw HTML from translations and mock CMS data was directly injected using `dangerouslySetInnerHTML`.
**Learning:** Translation strings and any dynamic content sources can be vectors for XSS if they contain unsanitized HTML.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`, e.g., `dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}`.
