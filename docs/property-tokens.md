---
title: Property Tokens
---

# Property Tokens

Property (Asset) tokens are the core investment instrument on the United Properties TRU™ platform. They represent a **fractionalized interest in a diversified pool of income-producing and appreciating residential rental properties** — across property types and geographies.

## What a Property Token Is

Each property the platform acquires is held in its own bankruptcy-remote **Series under PropCo Master** (Delaware Series LLC). Those Series are aggregated into a **diversified master pool**, and property tokens represent fractional units of that pool.

Owning property tokens means:
- ✅ A pro-rata interest in a **diversified portfolio** of rental properties — not a single building
- ✅ A right to receive pro-rata rental income distributions from across the pool
- ✅ Exposure to the **appreciation of the whole portfolio** (realized over time / on asset exits)
- ✅ A legal claim backed by the pool's operating agreements

## What a Property Token Is NOT

- ❌ Equity in PlatformCo (the operating company)
- ❌ The $TRU utility token
- ❌ Ownership of one specific, hand-picked property
- ❌ A guarantee of income or appreciation

:::tip[Diversified by design]
You don't pick a building — and you're not exposed to just one. A property token is a slice of the **entire pool**, so income and appreciation come from many properties in many markets, and single-property vacancy or market risk is diversified away.
:::

## Where the Properties Come From

Properties enter the pool through the platform's **acquisition engine**, which pays sellers in:

- **Tokens** — the seller becomes a partner, exchanging an illiquid single property for a liquid, diversified token position and continuing to earn income and appreciation; or
- **Cash** — for sellers who prefer a traditional exit; or
- **A blend** of both.

This token-for-property exchange is what lets United Properties roll up many individual rentals into one diversified, professionally managed pool. See [The Solution](./solution.md).

## Token Standard: ERC-3643

Property tokens use the **ERC-3643 standard** (also known as T-REX — Token for Regulated EXchanges). This is a permissioned token standard designed for compliant securities.

| Feature | Description |
|---|---|
| Whitelisted transfers | Tokens can only be sent to wallets verified in the on-chain Identity Registry |
| On-chain compliance | Transfer rules enforced at the contract level — cannot be bypassed |
| Identity registry | Maps verified investor identities to wallet addresses |
| Compliance engine | Configurable rules: accreditation status, jurisdiction, investor limits |
| Forced transfers | Regulatory override capability for court-ordered or compliance-required transfers |

## Token Quantity & Minimums

Pool tokens are denominated for **low minimums**, so a diversified portfolio is accessible at any ticket size:

```
Token Quantity = Pool Net Asset Value ÷ Token Denomination
```

**Example (illustrative):**

| Parameter | Value |
|---|---|
| Token denomination | $100 per token |
| Minimum investment | 1 token = $100 |
| Exposure per token | Pro-rata share of the **entire pool** |

As the pool grows (more properties acquired), token value tracks the pool's Net Asset Value and income — see [Business Valuation](./business-valuation.md).

## Property / Pool Lifecycle

<div style="margin:1.5rem 0;background:#07101e;border:1px solid #1e4080;border-radius:14px;padding:1.5rem;overflow-x:auto">
<div style="display:flex;align-items:center;gap:0;min-width:560px">
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#2E86FF;color:#fff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">1</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Acquire</div><div style="font-size:.68rem;color:#b8cfe8">Tokens / cash</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">2</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Series + Pool</div><div style="font-size:.68rem;color:#b8cfe8">Added to portfolio</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">3</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Offering Prep</div><div style="font-size:.68rem;color:#b8cfe8">Reg D 506(c)</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">4</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">KYC / Whitelist</div><div style="font-size:.68rem;color:#b8cfe8">Wallet verified</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">5</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Tokens Minted</div><div style="font-size:.68rem;color:#b8cfe8">ERC-3643</div></div>
<div style="flex:0 0 24px;height:1px;background:#0e5c38"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0e5c38;border:1.5px solid #00be78;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">6</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">USDC Yield</div><div style="font-size:.68rem;color:#b8cfe8">Pool-wide dist.</div></div>
<div style="flex:0 0 24px;height:1px;background:#4a1f8a"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#2d1060;border:1.5px solid #9d6fff;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">7</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">P2P Transfer</div><div style="font-size:.68rem;color:#b8cfe8">Phase 3+</div></div>
<div style="flex:0 0 24px;height:1px;background:#6e4a00"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#4a3000;border:1.5px solid #ffb932;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">8</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Appreciation</div><div style="font-size:.68rem;color:#b8cfe8">Pool-wide upside</div></div>
</div>
</div>

1. **Acquire** — a property is acquired via token exchange and/or cash; the seller can stay invested through tokens
2. **Series + Pool** — the property is placed in its own Series and added to the diversified pool
3. **Offering prepared** — Reg D 506(c) offering documents; token quantity tracks pool NAV
4. **Investor verification** — KYC/KYB, accreditation, wallet whitelisting
5. **Tokens minted** — ERC-3643 tokens issued to verified wallets
6. **Rental distributions** — monthly/quarterly USDC/fiat snapshots from across the pool
7. **Secondary transfers** — whitelisted transfers between verified wallets (Phase 3+)
8. **Appreciation** — portfolio-wide value growth accrues to all pool token holders

## Rental Income Distributions

- **Currency:** USDC (stablecoin) or fiat wire, per investor preference
- **Frequency:** Monthly or quarterly
- **Mechanism:** Pro-rata snapshot — the token balance at snapshot time determines your share of **pool-wide** net income
- **Deductions:** Operating expenses, property management fees, platform asset management fee (1–2%/yr)
- **Reinvestment:** Future option to auto-reinvest distributions into additional tokens

## Transfer Restrictions

In Phase 2, property token transfers are restricted. In Phase 3+, transfers are allowed between verified wallets. In Phase 4, a licensed secondary marketplace enables broader liquidity.

All transfers at all times are restricted to KYC-verified, accreditation-confirmed, jurisdictionally-eligible wallets — enforced on-chain by ERC-3643.
