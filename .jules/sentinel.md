## 2024-06-24 - [DOMPurify for Translation Strings & Dynamic CMS Content]
**Vulnerability:** Found `dangerouslySetInnerHTML` being used directly with translation keys (e.g., `t('kvk.contact.address.content')`) and dynamic content objects (e.g., `news.content`, `event.content`) without any sanitization, leaving the application open to Cross-Site Scripting (XSS).
**Learning:** Translation strings and dynamic text injected into React using `dangerouslySetInnerHTML` are potent XSS vectors, particularly if translations or dynamic fields originate from an external CMS or potentially compromised source.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` in `DOMPurify.sanitize()` (i.e. `__html: DOMPurify.sanitize(variable)`).
