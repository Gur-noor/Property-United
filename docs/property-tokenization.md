---
id: property-tokenization
title: Property Tokenization Framework
sidebar_label: Property Tokenization
sidebar_position: 7
---

# Property Tokenization Framework

:::note Phase 2+ Technology
The tokenization framework described in this section is the on-chain technical layer planned for Phase 2 and beyond. In Phase 1, investors participate as Limited Partners with LP interests in the diversified portfolio. Tokenization is the future mechanism by which those interests will be represented and transferred on a blockchain.
:::

## Overview

The property tokenization framework translates portfolio ownership interests into digital tokens (**UPTRU**, the property/security token) that can be held, transferred, and managed on a blockchain — while remaining fully compliant with applicable securities law. This section describes how property title is held, how tokens are structured, and what fractional pool ownership means in the on-chain context of the United Properties TRU™ platform.

---

## Property Ownership — Isolated Structures Feeding One Portfolio

Every property on the platform is held within its own dedicated, isolated legal structure. That structure is the legal title holder of the property, while the economic interest in every property flows into a single diversified portfolio held through United Properties TRU™ Limited Partnership (the Partnership). Investors own a share of the whole portfolio through the Partnership — not any individual property structure.

**How it works:**

1. A property is identified and approved for the platform
2. The property is placed in its own isolated, bankruptcy-remote legal structure
3. Legal title to the property is transferred to that structure
4. ERC-3643 tokens representing a diversified interest in the whole portfolio are minted into the shared pool as the property is added

Each property structure is a discrete legal compartment. Its assets (the property), liabilities, and title are legally separated from every other property and from the Partnership itself. This ring-fencing is the mechanism that delivers bankruptcy-remote isolation for investors — while their economic interest remains diversified across the entire portfolio.

---

## ERC-3643 Tokens

Property tokens are issued under the **ERC-3643** standard — a permissioned token specification developed specifically for the issuance of regulated digital securities.

### What ERC-3643 Provides

| Feature | Description |
|---|---|
| Permissioned transfers | Transfers can only occur between KYC-whitelisted wallets |
| On-chain compliance | Transfer restrictions are enforced at the smart contract level, not merely in legal documentation |
| Identity registry | A registry of approved wallet addresses is maintained on-chain and updated as investors are verified or removed |
| Regulatory alignment | The standard is designed to support Regulation D 506(c) and enforce accredited-investor eligibility through programmable compliance logic |

### Token Mechanics

- Property tokens (UPTRU) are minted into a single, shared pool that represents the whole portfolio
- As each property is added, additional tokens corresponding to that property's equity value are minted into the pool
- Token holders own a diversified interest in the entire portfolio in proportion to their token holdings, not a claim on any single property
- Token transfers between whitelisted investors are permitted and incur a secondary transfer fee payable to the platform operating/management layer

---

## Fractional Ownership

Token holdings represent a proportional, diversified interest in the whole portfolio held through the Partnership. The economic rights attached to these tokens include:

- **Rental income** — Pro-rata share of rental income collected across the entire portfolio, distributed monthly or quarterly in USDC or fiat based on an on-chain token snapshot
- **Appreciation exposure** — Economic participation in any increase in the portfolio's value over the holding period
- **Exit proceeds** — Pro-rata share of net proceeds when properties are sold and the proceeds flow into the portfolio

Ownership is fractional in the sense that investors hold a defined percentage of the whole portfolio, determined by the number of tokens held divided by the total token supply of the pool.

### Illustrative Example

Suppose the portfolio pool has 3,000 ERC-3643 tokens outstanding at $100 per token, and a new $300,000 property adds a further 3,000 tokens into the pool (6,000 total). An investor who holds 300 tokens owns 5% of the whole portfolio (300 ÷ 6,000). If the portfolio generates a 6% blended yield, that investor receives roughly 5% of net distributable income — not the income of any one building.

:::note
This is a simplified illustrative example only. Actual distributions depend on portfolio-level income, expenses, management fees, and other factors, and each holding is a diversified interest in the whole pool rather than a claim on a single property.
:::

---

## Transfer Restrictions

All property token transfers are subject to the following restrictions, enforced on-chain by the ERC-3643 contract:

- **Both parties must be whitelisted** — The sending wallet and the receiving wallet must both be registered in the on-chain identity registry as having completed KYC/AML verification and accredited investor confirmation
- **No transfers to unverified wallets** — The smart contract will reject any transfer attempt involving a wallet that is not on the active whitelist
- **Compliance is continuous** — If an investor's verification lapses or is revoked, their wallet can be removed from the whitelist, preventing future transfers until re-verified

This structure ensures that the Regulation D 506(c) investor eligibility requirements are maintained not only at initial subscription but throughout the life of the tokens.
