---
title: The Solution
---

# The Solution

United Properties TRU™ addresses every pain point in the traditional real estate model by combining **compliant legal structures**, **regulated securities offerings**, and **permissioned blockchain tokens** into a single, end-to-end platform.

## How It Works

```mermaid
flowchart LR
    A["🏢 Property<br/>sourced & vetted"] --> B["⚖️ Legal SPV<br/>Delaware Series"]
    B --> C["🪙 ERC-3643 tokens<br/>fractional ownership"]
    C --> D["✅ Reg D 506(c) raise<br/>verified investors"]
    D --> E["💵 USDC yield<br/>distributed to holders"]
    E --> F["🔄 Secondary transfers<br/><i>future</i>"]

    classDef step fill:#e8f1ff,stroke:#2E86FF,color:#05070e;
    class A,B,C,D,E,F step;
```

### Step-by-Step

1. **Property sourcing & due diligence.** A property is identified, underwritten, and vetted — location, income potential, legal status.
2. **Legal structuring.** The property is placed into a dedicated Series under PropCo Master (Delaware Series LLC). This series is bankruptcy-remote: its risk cannot contaminate other properties or PlatformCo.
3. **Tokenization.** Ownership of the series is represented as ERC-3643 permissioned tokens. Token quantity = Tokenized Property Value ÷ Token Denomination (e.g., $300,000 ÷ $100 = 3,000 tokens).
4. **Regulated capital raise.** Tokens are offered to verified accredited investors under Reg D 506(c). KYC/KYB and accreditation verification are required before anyone can participate.
5. **Yield distribution.** Rental income is collected and distributed pro-rata to token holders in USDC, monthly or quarterly, via a snapshot mechanism.
6. **Managed secondary transfers.** In later phases, token holders can transfer positions to other verified wallets, with full compliance controls enforced on-chain by ERC-3643.

## The Two-Token Model

United Properties TRU™ operates two distinct token types:

| | Property Token | Utility Token ($TRU) |
|---|---|---|
| **What it is** | Fractional ownership of one specific property | Platform-level access, benefits, governance |
| **Scope** | Per-property (one token per Series) | Platform-wide |
| **Yield** | Pro-rata rental income | No rental or profit share |
| **Standard** | ERC-3643 (permissioned) | ERC-20 |
| **Launch** | Phase 2 (first property) | Phase 5 |
| **Transferability** | Whitelisted wallets only | Standard (post-launch) |

:::important Important distinction
Property tokens are NOT equity in PlatformCo. They are NOT the $TRU utility token. Each property token is specific to exactly one property entity.
:::

## Phase 1: Off-Chain First

The platform deliberately starts without any blockchain components. Phase 1 delivers:

- Public landing page and investor education
- Investor registration with full KYC/KYB, AML, and accreditation verification
- SAFT agreement flow (token warrant rights for early investors)
- Admin dashboard and off-chain record management

This approach lets us validate compliance infrastructure, build the investor pipeline, and source Property #1 — before incurring the cost and complexity of on-chain deployment.

See the [roadmap](./roadmap.md) for the full phase-by-phase breakdown.
