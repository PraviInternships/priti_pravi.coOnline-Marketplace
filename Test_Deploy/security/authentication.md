# Authentication Security Review

## Passwords
- [x] Use bcrypt for hashing passwords
  - Implemented bcrypt with a salt rounds value of 10 for hashing passwords.
- [x] Enforce strong password policies
  - Passwords must be at least 8 characters long and contain a mix of letters, numbers, and special characters.

## Tokens
- [x] Use JWT for authentication tokens
  - Implemented JWT for issuing and verifying authentication tokens.
- [x] Securely store tokens in HTTP-only cookies
  - Tokens are stored in HTTP-only cookies to prevent XSS attacks.

## Multi-Factor Authentication
- [x] Implement MFA for sensitive actions
  - Implemented MFA using TOTP for actions such as changing passwords and accessing sensitive data.
- [x] Use TOTP or SMS-based verification
  - Implemented TOTP-based verification for MFA.