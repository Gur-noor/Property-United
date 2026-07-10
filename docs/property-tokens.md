---
title: Property Tokens
---

# Property Tokens

:::note Phase 2+
Property tokens are the on-chain representation of portfolio interests, planned for Phase 2 and beyond. In the current Phase 1, investors participate as **Limited Partners** owning a share of the entire diversified portfolio — not as per-property token holders. The token infrastructure described here is the technical layer that will represent those portfolio interests on-chain.
:::

Property tokens — issued under the symbol **UPTRU** — are the on-chain instrument through which interests in the United Properties TRU™ portfolio are represented on the blockchain. They are permissioned digital securities — not speculative cryptocurrency — issued under Regulation D with full KYC/AML compliance enforced at the token contract level. UPTRU is the property/security token that represents the investment — the platform's single token.

## What a Property Token Is

A property token (**UPTRU**) represents a fractional, diversified interest in the **whole United Properties TRU™ portfolio** held through United Properties TRU™ Limited Partnership (the Partnership). Individual properties are each held in their own isolated, bankruptcy-remote legal structure for risk protection, but an investor's economic interest is spread across all properties in the pool — like owning a slice of a fund, not a single building.

Owning property tokens means:
- ✅ A pro-rata, diversified ownership interest in the entire portfolio through the Partnership
- ✅ A right to receive pro-rata rental income distributions from across the portfolio
- ✅ Exposure to portfolio-wide property value appreciation (realized on exit/sale)
- ✅ A legal claim backed by the Partnership's governing documents

## What a Property Token Is NOT

- ❌ Equity in the platform operating/management layer
- ❌ A right to any single specific building (the interest is diversified across the whole portfolio)
- ❌ A guarantee of income or appreciation

:::note One holding = the whole portfolio
A property token holder owns a diversified stake across the **entire portfolio**, not a single building. Individual properties are held in separate, isolated legal structures purely for bankruptcy-remote risk protection — but every holder's economic interest spans all properties in the pool.
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

As each property is added to the portfolio, additional tokens are minted into the single, shared pool. The number of tokens attributable to any one property is determined by:

```
Token Quantity = Tokenized Property Value ÷ Token Denomination
```

**Example:**

| Parameter | Value |
|---|---|
| Property value added to pool | $300,000 |
| Token denomination | $100 per token |
| Tokens minted into the pool | 3,000 tokens |
| Minimum investment | 1 token = $100 |

Each property added to the portfolio mints tokens into the single pool. Your holding is not tied to that property — it represents your pro-rata share of the **whole portfolio**. The token denomination is set per-offering; higher-value properties may use a larger denomination to manage token counts.

## Property Token Lifecycle

1. **Property sourced & vetted** — due diligence, legal review, income analysis
2. **Property added to the portfolio** — the property is placed in its own isolated, bankruptcy-remote legal structure and its title transferred; the Partnership holds the economic interest for the pool
3. **Offering prepared** — Reg D 506(c) offering documents, token quantity determined
4. **Investor verification** — KYC/KYB, accreditation, wallet whitelisting
5. **Tokens minted** — ERC-3643 contract deployed, tokens minted into the pool and allocated to verified wallets
6. **Rental distributions** — monthly/quarterly USDC snapshots to token holders, pro-rata across the portfolio
7. **Secondary transfers** — whitelisted transfers between verified wallets (Phase 3+)
8. **Exit** — when a property is sold, net proceeds flow into the portfolio and are distributed pro-rata to token holders (after expenses)

## Rental Income Distributions

- **Currency:** USDC (stablecoin) or fiat wire, per investor preference
- **Frequency:** Monthly or quarterly
- **Mechanism:** Pro-rata snapshot — the token balance at snapshot time determines your share
- **Deductions:** Operating expenses, property management fees, platform asset management fee (1–2%/yr)
- **Reinvestment:** Future option to auto-reinvest distributions into additional tokens

## Transfer Restrictions

In Phase 2, property token transfers are restricted. In Phase 3+, transfers are allowed between verified wallets. In Phase 4, a licensed secondary marketplace enables broader liquidity.

All transfers at all times are restricted to KYC-verified, accreditation-confirmed, jurisdictionally-eligible wallets — enforced on-chain by ERC-3643.
