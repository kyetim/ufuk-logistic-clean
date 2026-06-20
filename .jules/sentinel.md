
## 2024-05-18 - Missing Sanitization in dangerouslySetInnerHTML
**Vulnerability:** XSS (Cross-Site Scripting) vulnerabilities where `dangerouslySetInnerHTML` was used directly with dynamic translation strings or mocked data strings without any sanitization in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`.
**Learning:** In React, `dangerouslySetInnerHTML` will bypass standard XSS protections. Dynamic content like translations (that may be edited by non-technical staff or fetched from APIs) and mock data imitating API responses must always be sanitized before injection.
**Prevention:** Always use `DOMPurify.sanitize()` when passing dynamic strings into `dangerouslySetInnerHTML`.
