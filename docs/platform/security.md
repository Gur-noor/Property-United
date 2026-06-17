---
title: Security & Compliance
---

# Security & Compliance

Security is foundational to United Properties TRU™ — both at the platform and smart-contract level.


<div style="margin:1.8rem 0;background:#07101e;border:1px solid #1e4080;border-radius:14px;padding:1.5rem">
<div style="font-size:.72rem;font-weight:700;color:#60a5fa;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1rem">Layered Security Model</div>
<div style="display:flex;flex-direction:column;gap:7px">
<div style="background:#1a3a7a;border:1px solid #2d5fa8;border-radius:8px;padding:.7rem 1rem;display:flex;justify-content:space-between;align-items:center"><span style="font-size:.82rem;font-weight:700;color:#fff">Identity & Compliance Layer</span><span style="font-size:.75rem;color:#60a5fa;font-weight:700">KYC · AML · Accredited Verification</span></div>
<div style="background:#162e6a;border:1px solid #264d8a;border-radius:8px;padding:.7rem 1rem;display:flex;justify-content:space-between;align-items:center"><span style="font-size:.82rem;font-weight:700;color:#fff">Smart Contract Layer</span><span style="font-size:.75rem;color:#60a5fa;font-weight:700">ERC-3643 · Audited · Upgradeable</span></div>
<div style="background:#12255a;border:1px solid #1e4080;border-radius:8px;padding:.7rem 1rem;display:flex;justify-content:space-between;align-items:center"><span style="font-size:.82rem;font-weight:700;color:#fff">Data & Access Layer</span><span style="font-size:.75rem;color:#60a5fa;font-weight:700">MFA · Encryption · RBAC</span></div>
<div style="background:#0f1e4e;border:1px solid #1a3670;border-radius:8px;padding:.7rem 1rem;display:flex;justify-content:space-between;align-items:center"><span style="font-size:.82rem;font-weight:700;color:#fff">Infrastructure Layer</span><span style="font-size:.75rem;color:#60a5fa;font-weight:700">SOC 2 · ISO 27001 · Uptime SLA</span></div>
<div style="background:#0c1840;border:1px solid #162d5e;border-radius:8px;padding:.7rem 1rem;display:flex;justify-content:space-between;align-items:center"><span style="font-size:.82rem;font-weight:700;color:#fff">Legal & Regulatory Layer</span><span style="font-size:.75rem;color:#60a5fa;font-weight:700">Reg D · Delaware LLC · SEC Filings</span></div>
</div>
</div>

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
3. Cleared for the specific property series (accreditation, jurisdictional check)

This whitelisting happens both off-chain (in the admin system) and on-chain (in the identity registry). Both must pass for a transfer to succeed.

## Data Privacy

- Investor PII is collected only as required by KYC/AML regulation
- Data retention follows applicable legal requirements
- Investors may request access to or deletion of their data subject to legal hold obligations
