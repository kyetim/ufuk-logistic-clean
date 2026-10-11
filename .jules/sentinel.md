## 2024-05-15 - Unsanitized HTML rendering in translations and dynamic content
**Vulnerability:** Found multiple instances of Cross-Site Scripting (XSS) via `dangerouslySetInnerHTML` rendering unsanitized mock API data and translation blocks (`news.content`, `event.content`).
**Learning:** Translations and mock payloads often masquerade as "safe" static content but can be modified externally or carry malicious payloads when real APIs are wired up. The architecture inherently trusted these outputs.
**Prevention:** Always wrap `dangerouslySetInnerHTML` inputs with `DOMPurify.sanitize()` uniformly, even for translation files or content explicitly managed by internal systems.
