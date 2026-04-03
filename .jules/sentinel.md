## 2024-04-03 - [Fix XSS Vulnerability in dynamically injected HTML content]
**Vulnerability:** Found multiple instances of `dangerouslySetInnerHTML` injecting raw strings without sanitization in `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx`. This makes the application susceptible to Cross-Site Scripting (XSS) if the data source is compromised or contains malicious user input.
**Learning:** `dangerouslySetInnerHTML` is extremely risky and can lead to XSS attacks if the content is not sanitized before rendering.
**Prevention:** Always sanitize dynamically injected HTML content using a library like `DOMPurify` before rendering it with `dangerouslySetInnerHTML`.
