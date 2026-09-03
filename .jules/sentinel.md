## 2024-05-14 - XSS via dangerouslySetInnerHTML
**Vulnerability:** Use of unsanitized input in dangerouslySetInnerHTML across multiple components (KVK Page, Press News Detail, Event Detail).
**Learning:** Dynamic content such as translations and CMS data can be potential vectors for XSS if not properly sanitized before rendering with dangerouslySetInnerHTML.
**Prevention:** Always sanitize any dynamic HTML input using DOMPurify before passing it to dangerouslySetInnerHTML.
