---
title: Property Tokens
---

# Property Tokens

:::note Phase 2+
Property tokens are the on-chain representation of portfolio interests, planned for Phase 2 and beyond. In the current Phase 1, investors participate as **Limited Partners** owning a share of the entire diversified portfolio — not as per-property token holders. The token infrastructure described here is the technical layer that will represent those portfolio interests on-chain.
:::

Property tokens are the on-chain instrument through which interests in the United Properties TRU™ portfolio are represented on the blockchain. They are permissioned digital securities — not speculative cryptocurrency — issued under Regulation D with full KYC/AML compliance enforced at the token contract level.

## What a Property Token Is

Each property on the platform is held in a dedicated Series under PropCo Master (Delaware Series LLC). Property tokens represent fractional ownership units of that Series.

Owning property tokens means:
- ✅ A pro-rata ownership interest in the property-holding entity
- ✅ A right to receive pro-rata rental income distributions
- ✅ Exposure to property value appreciation (realized on exit/sale)
- ✅ A legal claim backed by the Series operating agreement

## What a Property Token Is NOT

- ❌ Equity in PlatformCo (the operating company)
- ❌ The $TRU utility token
- ❌ Ownership of any other property on the platform
- ❌ A guarantee of income or appreciation

:::warning One token ≠ all properties
Each property has its own token. Buying tokens for Property A gives you no rights in Property B.
:::

## Token Standard: ERC-3643

Property tokens use the **ERC-3643 standard** (also known as T-REX — Token for Regulated EXchanges). This is a permissioned token standard designed for compliant securities.

Key ERC-3643 features:

| Feature | Description |
|---|---|
| Whitelisted transfers | Tokens can only be sent to wallets verified in the on-chain Identity Registry |
| On-chain compliance | Transfer rules enforced at the contract level — cannot be bypassed |
| Identity registry | Maps verified investor identities to wallet addresses |
| Compliance engine | Configurable rules: accreditation status, jurisdiction, investor limits |
| Forced transfers | Regulatory override capability for court-ordered or compliance-required transfers |

## Token Quantity Model

The number of tokens issued for a property is determined by:

```
Token Quantity = Tokenized Property Value ÷ Token Denomination
```

**Example:**

| Parameter | Value |
|---|---|
| Property value | $300,000 |
| Token denomination | $100 per token |
| Tokens issued | 3,000 tokens |
| Minimum investment | 1 token = $100 |

The token denomination is set per-offering. Higher-value properties may use a larger denomination to manage token counts.

## Property Token Lifecycle

1. **Property sourced & vetted** — due diligence, legal review, income analysis
2. **Series created** — new Series under PropCo Master, property title transferred
3. **Offering prepared** — Reg D 506(c) offering documents, token quantity determined
4. **Investor verification** — KYC/KYB, accreditation, wallet whitelisting
5. **Tokens minted** — ERC-3643 contract deployed, tokens issued to verified wallets
6. **Rental distributions** — monthly/quarterly USDC snapshots to token holders
7. **Secondary transfers** — whitelisted transfers between verified wallets (Phase 3+)
8. **Exit** — property sold, proceeds distributed pro-rata to token holders (after expenses)

## Rental Income Distributions

- **Currency:** USDC (stablecoin) or fiat wire, per investor preference
- **Frequency:** Monthly or quarterly
- **Mechanism:** Pro-rata snapshot — the token balance at snapshot time determines your share
- **Deductions:** Operating expenses, property management fees, platform asset management fee (1–2%/yr)
- **Reinvestment:** Future option to auto-reinvest distributions into additional tokens

## Transfer Restrictions

In Phase 2, property token transfers are restricted. In Phase 3+, transfers are allowed between verified wallets. In Phase 4, a licensed secondary marketplace enables broader liquidity.

All transfers at all times are restricted to KYC-verified, accreditation-confirmed, jurisdictionally-eligible wallets — enforced on-chain by ERC-3643.
