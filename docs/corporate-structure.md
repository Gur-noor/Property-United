---
title: Corporate Structure
---

# Corporate Structure

United Properties TRU™ uses a purpose-built legal architecture designed to isolate risk per property, aggregate many properties into a **diversified pool**, and support a regulated securities offering.

## Entity Overview

```mermaid
flowchart TD
    P["<b>PlatformCo</b><br/>Delaware C-Corp<br/><i>Tech · IP · Brand · Fees · GP</i><br/>Founders · ESOP · SAFE"]
    M["<b>PropCo Master</b><br/>Delaware Series LLC<br/><i>One Series per property</i>"]
    POOL["<b>Diversified Pool</b><br/><i>Holds all Series · issues pool tokens</i>"]
    S1["<b>Series 1</b><br/>Property 1"]
    S2["<b>Series 2</b><br/>Property 2"]
    S3["<b>Series 3…</b><br/>Property N"]
    F["<b>$TRU Foundation</b><br/>Phase 5 · Offshore<br/><i>Utility token issuer</i>"]

    P -- "controls as manager" --> M
    M --> S1
    M --> S2
    M --> S3
    S1 -. "held in" .-> POOL
    S2 -. "held in" .-> POOL
    S3 -. "held in" .-> POOL
    POOL -- "ERC-3643 pool tokens" --> H["<b>Token Holders</b><br/><i>Investors + sellers-turned-partners</i>"]
    P -. "licenses IP (Phase 5)" .-> F

    classDef platform fill:#2E86FF,stroke:#1a6fdd,color:#fff,font-weight:bold;
    classDef series fill:#0d1b3e,stroke:#2E86FF,color:#ffffff,font-weight:600;
    classDef pool fill:#0e5c38,stroke:#00be78,color:#ffffff,font-weight:bold;
    classDef foundation fill:#07101f,stroke:#5ba4ff,color:#9cc4ff,font-weight:600;
    class P,M platform;
    class S1,S2,S3 series;
    class POOL,H pool;
    class F foundation;
```

## Entity Details

### PlatformCo — Delaware C-Corp

| Attribute | Detail |
|---|---|
| Type | Delaware C-Corp |
| Purpose | Holds all technology, IP, brand, contracts, and fee revenue; acts as platform GP |
| Owned by | Founders, team (ESOP), SAFE investors (LP interests) |
| Revenue | All platform fees (origination, tokenization, asset management, disposition, secondary transfer) |
| Role | Sole manager of PropCo Master, the pool, and every property series |

PlatformCo is the operating entity and **general partner**. It earns all platform fees and owns the platform's intellectual property and trade secrets. Investors in PlatformCo (via SAFE / LP interests) own equity in the fee-generating business — not in any specific property.

### PropCo Master — Delaware Series LLC

| Attribute | Detail |
|---|---|
| Type | Delaware Series LLC |
| Purpose | Master legal shell that spawns one Series per acquired property |
| Managed by | PlatformCo |
| Cost per new Series | Near-zero (no separate incorporation needed) |

### Property-Specific Series (Series 1, 2, 3 …)

| Attribute | Detail |
|---|---|
| Type | Series under PropCo Master |
| Purpose | Holds title to exactly one property |
| Bankruptcy remoteness | Yes — each Series' assets and liabilities are legally isolated |
| Role | Contributes its income and value into the diversified pool |

Each property series is **bankruptcy-remote**: if one property fails, it cannot expose other series, the pool, or PlatformCo to liability.

### Diversified Pool

| Attribute | Detail |
|---|---|
| Purpose | Aggregates all property Series into one diversified portfolio |
| Token issuance | Issues ERC-3643 pool tokens to investors and sellers-turned-partners |
| What holders own | A pro-rata interest in the **whole portfolio**, not a single Series |
| Why it exists | Delivers diversification, low minimums, and a single liquid instrument |

The pool is the layer that makes a token a **diversified** position. Per-property risk stays ring-fenced in each Series underneath; investors hold an interest in the aggregated pool above.

### $TRU Foundation (Phase 5 — Offshore)

Established in Phase 5 as the issuer of the $TRU utility token. Licenses the TRU™ brand and platform IP from PlatformCo. Structure and jurisdiction to be determined with legal counsel at token launch.

<div style="margin:1.8rem 0;display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
<div style="background:#07101e;border:1px solid #1e4080;border-radius:12px;padding:1.1rem;text-align:center"><div style="font-size:.78rem;font-weight:900;color:#5ba4ff;letter-spacing:.04em;margin-bottom:6px;text-transform:uppercase">PlatformCo</div><div style="font-size:.72rem;color:#a0b4cc;margin-bottom:4px">Delaware C-Corp · GP</div><div style="font-size:.72rem;color:#e8f0ff">Holds IP & trade secrets · earns all fees</div></div>
<div style="background:#07101e;border:1px solid #1e4080;border-radius:12px;padding:1.1rem;text-align:center"><div style="font-size:.78rem;font-weight:900;color:#5ba4ff;letter-spacing:.04em;margin-bottom:6px;text-transform:uppercase">Series (1…N)</div><div style="font-size:.72rem;color:#a0b4cc;margin-bottom:4px">Delaware Series LLC</div><div style="font-size:.72rem;color:#e8f0ff">One property each · bankruptcy-remote</div></div>
<div style="background:#07101e;border:2px solid #00be78;border-radius:12px;padding:1.1rem;text-align:center"><div style="font-size:.78rem;font-weight:900;color:#5be8a4;letter-spacing:.04em;margin-bottom:6px;text-transform:uppercase">Diversified Pool</div><div style="font-size:.72rem;color:#a0b4cc;margin-bottom:4px">Holds all Series</div><div style="font-size:.72rem;color:#e8f0ff">Issues ERC-3643 pool tokens</div></div>
</div>
<div style="margin:.5rem 0 1.5rem;background:#112245;border:1px solid rgba(46,134,255,.3);border-radius:8px;padding:.8rem 1rem;font-size:.78rem;color:#b8cfe8"><strong style="color:#5ba4ff">Risk Isolation + Diversification:</strong> Each property is ring-fenced in its own Series, so one default can't harm the others — while the pool above gives every token holder diversified exposure to all of them.</div>

## How Sellers Enter the Structure

When a property owner sells into the platform, their property is placed into a new Series under PropCo Master and added to the pool. In exchange they receive **pool tokens** (and/or cash). A seller who takes tokens becomes a **partner** in the diversified portfolio — continuing to participate in income and appreciation across every property in the pool, not just the one they contributed.

## Risk Isolation

The design means:

- **Property risk stays in each Series.** A bad property cannot harm other properties, the pool, or PlatformCo.
- **Platform risk stays in PlatformCo.** Platform difficulties cannot access property-held assets.
- **Cross-contamination is structurally prevented** by the Series LLC ring-fencing — even though investors hold a single, diversified pool token.

## The $200k SAFE Financing

Phase 0 capital is raised into PlatformCo via:

- **Post-money SAFE** — standard YC template, $2–3M valuation cap (to be set), no discount. These are the platform's **LP interests** (equity in the fee-earning operating company that owns the business model, IP and trade secrets).
- **Token warrant side letter** — each SAFE investor receives pro-rata rights to future $TRU supply at TGE (no tokens issued today)
- **Identical terms** for all Phase 0/1 investors — no per-investor negotiation
- **Non-dilutive investor perks:**
  - 0% origination fee on their own property investments
  - First-allocation rights on new property listings
  - Pro-rata rights in the next equity round
