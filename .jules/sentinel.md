## 2024-03-24 - Missing XSS Protection on Dynamic Content
**Vulnerability:** Raw HTML injection points (XSS) were found in KVK contact info, News details, and Event details via dangerouslySetInnerHTML.
**Learning:** Using translation files or CMS structures often containing raw HTML that needs rendering requires strict sanitization. Without it, arbitrary JS can be executed.
**Prevention:** Always wrap dynamically injected raw HTML using DOMPurify.sanitize() before setting dangerouslySetInnerHTML.
