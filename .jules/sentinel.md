## 2024-05-24 - Cross-Site Scripting (XSS) via dangerouslySetInnerHTML
**Vulnerability:** The application was passing un-sanitized dynamic content (e.g., news content, event content, and translation strings containing HTML) directly into `dangerouslySetInnerHTML`.
**Learning:** React's built-in XSS protection does not apply when using `dangerouslySetInnerHTML`. Any data passed into this prop must be explicitly sanitized, especially when it comes from external sources, databases, or even translation files that might contain raw HTML.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with a reliable HTML sanitizer like `DOMPurify.sanitize()`. Ensure the sanitizer allows expected tags (like `<iframe>` if needed) but strips malicious scripts.
