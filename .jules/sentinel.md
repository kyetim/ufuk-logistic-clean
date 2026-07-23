## 2024-05-15 - Unsanitized User/Dynamic Content in dangerouslySetInnerHTML
**Vulnerability:** Found multiple instances where dynamic content (CMS data, translations) was passed directly to dangerouslySetInnerHTML without sanitization, leading to potential Cross-Site Scripting (XSS).
**Learning:** Using dangerouslySetInnerHTML with unsanitized data is a high security risk. Even if data originates from internal sources like translations, it should be treated as untrusted to prevent XSS.
**Prevention:** Always wrap dynamic HTML content with DOMPurify.sanitize() before rendering it with dangerouslySetInnerHTML.
