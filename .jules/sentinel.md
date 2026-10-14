## 2026-10-14 - 🛡️ Sentinel: XSS Vulnerability in dangerouslySetInnerHTML
**Vulnerability:** Raw HTML from localization/CMS data passed to `dangerouslySetInnerHTML` without sanitization.
**Learning:** Using `dangerouslySetInnerHTML` directly with unsanitized dynamic content can lead to XSS attacks if malicious scripts are embedded in the source strings.
**Prevention:** Always use `DOMPurify.sanitize()` before passing any dynamic HTML content to `dangerouslySetInnerHTML`.
