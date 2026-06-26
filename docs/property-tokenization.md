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

The property tokenization framework translates portfolio ownership interests into digital tokens that can be held, transferred, and managed on a blockchain — while remaining fully compliant with applicable securities law. This section describes how property title is held, how tokens are structured, and what fractional pool ownership means in the on-chain context of the United Properties TRU™ platform.

---

## Property Ownership — The Series LLC Model

Every property on the platform is held within a dedicated series of PropCo Master (the Delaware Series LLC managed by PlatformCo). The series is the legal title holder of the property.

**How it works:**

1. A property is identified and approved for the platform
2. A new series is created within PropCo Master — for example, *PropCo Master — Series 1*
3. Legal title to the property is transferred to that series
4. The series then issues ERC-3643 tokens to represent membership interests in the series

The series is a discrete legal compartment under Delaware law. Its assets (the property), liabilities, and members are legally separated from all other series within PropCo Master and from PropCo Master itself. This ring-fencing is the mechanism that delivers bankruptcy-remote isolation for investors.

---

## ERC-3643 Tokens

Property tokens are issued under the **ERC-3643** standard — a permissioned token specification developed specifically for the issuance of regulated digital securities.

### What ERC-3643 Provides

| Feature | Description |
|---|---|
| Permissioned transfers | Transfers can only occur between KYC-whitelisted wallets |
| On-chain compliance | Transfer restrictions are enforced at the smart contract level, not merely in legal documentation |
| Identity registry | A registry of approved wallet addresses is maintained on-chain and updated as investors are verified or removed |
| Regulatory alignment | The standard is designed to support Regulation D, Regulation S, and other securities exemptions through programmable compliance logic |

### Token Mechanics

- Each property series has its own distinct ERC-3643 token contract
- The total token supply for a series corresponds to the total equity value of the property, divided into purchasable units
- Token holders in a series are members of that series in proportion to their token holdings
- Token transfers between whitelisted investors are permitted and incur a secondary transfer fee payable to PlatformCo

---

## Fractional Ownership

Token holdings represent proportional membership interests in a property series. The economic rights attached to these tokens include:

- **Rental income** — Pro-rata share of rental income collected by the series, distributed monthly or quarterly in USDC or fiat based on an on-chain token snapshot
- **Appreciation exposure** — Economic participation in any increase in the property's value over the holding period
- **Exit proceeds** — Pro-rata share of proceeds from the sale of the property at the time the series is wound down

Ownership is fractional in the sense that investors hold a defined percentage of the series membership interests, with that percentage determined by the number of tokens held divided by the total token supply of the series.

### Illustrative Example

A property valued at $300,000 is placed into Series 1. The series issues 3,000 ERC-3643 tokens at $100 per token. An investor who purchases 300 tokens holds 10% of the series. If the property generates $18,000 in annual rental income (a 6% yield), that investor receives $1,800 per year in distributions — approximately $150 per month.

:::note
This is a simplified illustrative example only. Actual distributions depend on property-level income, expenses, management fees, and other series-level factors.
:::

---

## Transfer Restrictions

All property token transfers are subject to the following restrictions, enforced on-chain by the ERC-3643 contract:

- **Both parties must be whitelisted** — The sending wallet and the receiving wallet must both be registered in the on-chain identity registry as having completed KYC/AML verification and accredited investor confirmation
- **No transfers to unverified wallets** — The smart contract will reject any transfer attempt involving a wallet that is not on the active whitelist
- **Compliance is continuous** — If an investor's verification lapses or is revoked, their wallet can be removed from the whitelist, preventing future transfers until re-verified

This structure ensures that the Regulation D 506(c) investor eligibility requirements are maintained not only at initial subscription but throughout the life of the tokens.
