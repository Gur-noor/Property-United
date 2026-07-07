---
title: Security & Compliance
---

# Security & Compliance

Security is foundational to United Properties TRU™ — both at the platform and smart-contract level.

## Platform Security (Phase 1)

| Control | Implementation |
|---|---|
| Authentication | MFA-enforced login for all investor and admin accounts |
| Encrypted storage | All documents and PII encrypted at rest and in transit |
| Role-based access control (RBAC) | Least-privilege roles: investor, reviewer, admin, super-admin |
| Audit logs | Immutable record of every admin action and investor event |
| Secure admin access | Separate admin portal, IP-restricted, MFA required |
| Data backup | Automated daily backups with point-in-time recovery |
| Incident response | Documented IR plan, breach notification procedures |

## KYC/KYB Provider Security

Investor identity verification is handled by an enterprise-grade third-party provider (Sumsub or Persona). These systems are:

- SOC 2 Type II certified
- GDPR and CCPA compliant
- Integrated with global watchlist databases for AML screening

United Properties TRU™ does not store raw identity documents on its own servers — they are held by the KYC provider under their security policies.

## Smart Contract Security (Phase 2+)

- **Audits.** All smart contracts are audited by independent security firms before mainnet deployment. Audit reports will be published publicly.
- **Comprehensive testing.** Unit, integration, and fuzz testing suites.
- **ERC-3643 compliance engine.** Transfer restrictions are enforced at the contract level — an unwhitelisted wallet cannot receive tokens, regardless of what a user attempts.
- **Timelocks.** Critical governance actions are subject to a timelock before execution.
- **Bug bounty.** An active bug bounty program rewards responsible disclosure.
- **Upgradeability.** A proxy-based upgrade pattern with governance-controlled upgrade authority and timelock.

## Wallet Verification

Before a wallet can hold property tokens, it must be:

1. Linked to a verified investor identity (KYC complete)
2. Added to the on-chain ERC-3643 Identity Registry
3. Cleared for the portfolio offering (accreditation, jurisdictional check)

This whitelisting happens both off-chain (in the admin system) and on-chain (in the identity registry). Both must pass for a transfer to succeed.

## Data Privacy

- Investor PII is collected only as required by KYC/AML regulation
- Data retention follows applicable legal requirements
- Investors may request access to or deletion of their data subject to legal hold obligations
