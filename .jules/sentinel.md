## 2025-01-22 - Prevent XSS via dangerouslySetInnerHTML
**Vulnerability:** Several pages (`press-news-detail.tsx`, `event-detail.tsx`, `kvk.tsx`) used React's `dangerouslySetInnerHTML` directly with unsanitized data (e.g. from translations or dummy text), making the application potentially vulnerable to Cross-Site Scripting (XSS) if this content becomes dynamically controlled by a user.
**Learning:** React escapes content injected via simple text bindings but not content set through `dangerouslySetInnerHTML`. Relying on translations or API dummy data for raw HTML risks XSS.
**Prevention:** Always wrap content in a sanitizer like `DOMPurify.sanitize()` when utilizing `dangerouslySetInnerHTML`.
