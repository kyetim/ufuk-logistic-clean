## 2024-05-18 - Sanitize dynamic HTML using DOMPurify
**Vulnerability:** XSS risk due to unfiltered usage of `dangerouslySetInnerHTML`.
**Learning:** Translation strings and mocked API response data were being injected directly into the DOM, which allows XSS execution if the source text contains unescaped HTML scripts.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()`, and ensure `@types/dompurify` is installed for TS compatibility.
