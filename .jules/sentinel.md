## 2026-10-06 - Mitigating XSS in dangerouslySetInnerHTML
**Vulnerability:** HIGH priority Cross-Site Scripting (XSS) risk across `src/pages/kvk.tsx`, `src/pages/press-news-detail.tsx`, and `src/pages/event-detail.tsx` where unsanitized dynamic CMS text and translations were passed directly to `dangerouslySetInnerHTML`.
**Learning:** The project's dynamic content relies on raw HTML for formatting. When using React's `dangerouslySetInnerHTML`, the framework's native escaping is bypassed, leaving the app vulnerable to XSS if the data source is compromised or mishandled.
**Prevention:** Always install and apply `DOMPurify` (or an equivalent HTML sanitizer) to clean dynamic string properties before injecting them into the DOM via `dangerouslySetInnerHTML`.
