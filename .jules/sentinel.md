## 2025-02-14 - XSS Prevention with DOMPurify
**Vulnerability:** XSS vulnerability through unsanitized dynamic HTML content rendering with `dangerouslySetInnerHTML`.
**Learning:** React `dangerouslySetInnerHTML` does not sanitize input natively, making it a critical XSS vector if data sources like translations or external mock data contain malicious scripts.
**Prevention:** Always wrap dynamic HTML content passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` to ensure standard XSS mitigation.
