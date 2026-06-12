---
title: Compliance Framework
---

# Compliance Framework

Compliance is not a checkbox for United Properties TRU™ — it is the foundation of every product decision. Operating in regulated securities means getting compliance right from day one, not retrofitting it later.

## Regulatory Framework

### Regulation D, Rule 506(c)

All property token offerings are conducted under **Reg D 506(c)** of the Securities Act of 1933. This exemption:

- Allows general solicitation and advertising (unlike 506(b))
- Restricts participation to **verified accredited investors only**
- Requires the issuer to take reasonable steps to verify accredited investor status
- Provides exemption from SEC registration for the offering

Each property series constitutes a separate Reg D offering. Offering documents are prepared with securities counsel and filed appropriately.

### Accredited Investor Verification

Under Reg D 506(c), "reasonable steps" to verify accredited status are required. United Properties TRU™ uses document-based verification:

**Individual accreditation paths:**

| Path | Documentation Required |
|---|---|
| Income | Tax returns (2 years), W-2s, or pay stubs — $200k individual / $300k joint |
| Net worth | Bank/brokerage statements, CPA letter — $1M+ excluding primary residence |
| Professional cert. | Proof of active Series 7, 65, or 82 license; IA registration |

**Entity accreditation paths:**

| Path | Documentation Required |
|---|---|
| $5M+ assets | Financial statements, bank statements |
| All accredited owners | Evidence of each owner's individual accreditation |
| Registered adviser/fund | Regulatory registration proof |

### KYC — Know Your Customer

Individual investor identity verification is required for all participants. Our KYC process uses a third-party provider (Sumsub or Persona) and collects:

- Government-issued photo ID (passport or driver's license)
- Liveness check / selfie verification (anti-spoofing)
- Address verification
- Date of birth

### KYB — Know Your Business

Entity investors (LLCs, trusts, corporations, family offices) undergo KYB verification:

- Entity formation documents (certificate of incorporation/formation)
- Operating agreement or trust deed
- Beneficial ownership declarations (UBO disclosure)
- Authorized signatory verification
- EIN / tax ID

### AML — Anti-Money Laundering

Every investor is screened against:

- Global sanctions lists (OFAC, EU, UN, FATF)
- Politically Exposed Persons (PEP) databases
- Adverse media databases
- Watchlists maintained by our KYC/KYB provider

Hits generate a review flag in the admin system. High-risk flags result in enhanced due diligence or rejection. Suspicious activity is reported as required by applicable FinCEN regulations.

## Jurisdictional Controls

United Properties TRU™ currently targets **US accredited investors** in the initial phases. Investors from OFAC-sanctioned countries are automatically rejected at the KYC stage.

International expansion will be evaluated on a jurisdiction-by-jurisdiction basis with local securities counsel in each target market.

## On-Chain Compliance (Phase 2+)

When property tokens are minted, compliance extends on-chain via ERC-3643:

- **Identity Registry:** All verified wallets registered on-chain
- **Transfer compliance:** Every token transfer checked against registry before execution
- **Jurisdictional rules:** Configurable per-series — can enforce US-only, accredited-only, etc.
- **Forced transfer:** Regulatory override for court orders or compliance-required actions
- **Token freeze:** Ability to freeze specific tokens pending legal review

## Recordkeeping

All compliance records are retained as required by applicable law:

| Record Type | Retention |
|---|---|
| KYC/KYB documents | As required by AML regulations |
| Investor accreditation | Duration of investment + required hold period |
| SAFT/SAFE agreements | Indefinitely |
| Transaction records | Per securities law requirements |
| Audit logs | Indefinitely |

All records are encrypted at rest and backed up daily.
