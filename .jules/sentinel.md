## 2024-05-15 - Prevent XSS in dynamically injected HTML via dangerouslySetInnerHTML
**Vulnerability:** Unsanitized dynamic content (translations and CMS-like data) is passed directly to `dangerouslySetInnerHTML`.
**Learning:** Always sanitize HTML when using `dangerouslySetInnerHTML`, even if the source is internal translations, to protect against malicious injections.
**Prevention:** Use DOMPurify.sanitize() to strip out unwanted scripts from HTML strings before they are injected into the DOM.
