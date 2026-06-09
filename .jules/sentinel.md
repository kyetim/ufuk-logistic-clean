## 2024-05-15 - [Critical] Preventing XSS in dynamically injected HTML content
**Vulnerability:** Translation files (`t()`) and dynamic CMS data were being passed directly to `dangerouslySetInnerHTML` without any sanitization, exposing the application to Cross-Site Scripting (XSS) attacks.
**Learning:** In React, `dangerouslySetInnerHTML` is explicitly named to remind developers of the security risks. When rendering any HTML that originates from outside the immediate hardcoded component (including translation strings and CMS content), it must be treated as untrusted and sanitized.
**Prevention:** Always use a standard library like `DOMPurify` to sanitize HTML content before injecting it. For instance, `dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(untrustedContent) }}`.
