## 2024-05-18 - [XSS] Unsanitized Dynamic HTML
**Vulnerability:** Unsanitized variables being passed into `dangerouslySetInnerHTML` from translations (`t('kvk...')`) and hardcoded/CMS string structures (`news.content`, `event.content`). This could allow attackers to execute malicious scripts (XSS).
**Learning:** Translation strings and mocked API/CMS payloads containing HTML must not be implicitly trusted, particularly because localization files might be edited by non-developers or via external platforms.
**Prevention:** Use DOMPurify as the standard library to sanitize all dynamically injected HTML before rendering via `dangerouslySetInnerHTML`. Make sure any inline react comments are outside of DOM elements attributes to prevent JSX syntax errors.
