## 2024-05-24 - React DangerouslySetInnerHTML XSS
**Vulnerability:** XSS (Cross-Site Scripting) vulnerabilities due to usage of `dangerouslySetInnerHTML` with raw translation strings or dynamic news/event content.
**Learning:** Translation strings and mocked data from the application (that will later come from APIs) often contain HTML elements. Injecting these strings directly into the DOM using `dangerouslySetInnerHTML` without prior sanitization exposes the application to XSS attacks if these sources are ever compromised or manipulated.
**Prevention:** Always wrap variables passed to `dangerouslySetInnerHTML` with `DOMPurify.sanitize()` to ensure any malicious scripts are stripped out before the HTML is rendered.
