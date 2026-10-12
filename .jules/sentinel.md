## 2026-10-12 - Missing XSS Protection in dangerouslySetInnerHTML
**Vulnerability:** Cross-Site Scripting (XSS) vulnerability found in the usage of `dangerouslySetInnerHTML` with translation keys and dynamic CMS data.
**Learning:** In this codebase, translation files (e.g., `t()`) and dynamic CMS data often contain raw HTML. Passing these directly to `dangerouslySetInnerHTML` creates a high-priority XSS vector.
**Prevention:** Always install and import `dompurify`, and wrap dynamic HTML content (such as translations and CMS data) with `DOMPurify.sanitize()` before rendering.
