---
title: Property Tokens
---

# Property Tokens

Property tokens are the core investment instrument on the United Properties TRU™ platform. They represent **fractional ownership of a specific, legally-structured property entity** — and nothing else.

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

<div style="margin:1.5rem 0;background:#07101e;border:1px solid #1e4080;border-radius:14px;padding:1.5rem;overflow-x:auto">
<div style="display:flex;align-items:center;gap:0;min-width:560px">
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#2E86FF;color:#fff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">1</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Source</div><div style="font-size:.68rem;color:#b8cfe8">Due diligence</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">2</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">SPV Created</div><div style="font-size:.68rem;color:#b8cfe8">Series LLC</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">3</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Offering Prep</div><div style="font-size:.68rem;color:#b8cfe8">Reg D 506(c)</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">4</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">KYC / Whitelist</div><div style="font-size:.68rem;color:#b8cfe8">Wallet verified</div></div>
<div style="flex:0 0 24px;height:1px;background:#1e3d6e"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0d1b3e;border:1.5px solid #3b82f6;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">5</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Tokens Minted</div><div style="font-size:.68rem;color:#b8cfe8">ERC-3643</div></div>
<div style="flex:0 0 24px;height:1px;background:#0e5c38"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#0e5c38;border:1.5px solid #00be78;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">6</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">USDC Yield</div><div style="font-size:.68rem;color:#b8cfe8">Monthly dist.</div></div>
<div style="flex:0 0 24px;height:1px;background:#4a1f8a"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#2d1060;border:1.5px solid #9d6fff;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">7</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">P2P Transfer</div><div style="font-size:.68rem;color:#b8cfe8">Phase 3+</div></div>
<div style="flex:0 0 24px;height:1px;background:#6e4a00"></div>
<div style="text-align:center;flex:1"><div style="width:32px;height:32px;border-radius:50%;background:#4a3000;border:1.5px solid #ffb932;color:#ffffff;font-size:.8rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;margin-bottom:6px">8</div><div style="font-size:.75rem;font-weight:700;color:#d4dff0">Exit / Sale</div><div style="font-size:.68rem;color:#b8cfe8">Pro-rata payout</div></div>
</div>
</div>

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
