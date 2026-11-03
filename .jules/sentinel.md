## 2026-11-03 - Prevent XSS in dynamically injected HTML content
**Vulnerability:** Cross-Site Scripting (XSS) risk when rendering dynamic string contents containing raw HTML directly using dangerouslySetInnerHTML across multiple page components.
**Learning:** Translation strings (e.g. t()) and dynamic CMS data often contain raw HTML. Passing them unvalidated into dangerouslySetInnerHTML can execute malicious scripts if the source strings are compromised.
**Prevention:** Always wrap raw HTML strings with DOMPurify.sanitize() before passing them to dangerouslySetInnerHTML.
