## 2024-05-20 - Unsanitized dangerouslySetInnerHTML Usage
**Vulnerability:** Raw HTML injection (XSS) via dangerouslySetInnerHTML without sanitization on dynamic CMS/translation content in event, news, and kvk pages.
**Learning:** Using dangerouslySetInnerHTML directly with translation strings or dynamic JSON content exposes the application to XSS attacks, as this data may contain malicious scripts.
**Prevention:** Always wrap any dynamic HTML content with DOMPurify.sanitize() before passing it to dangerouslySetInnerHTML.
