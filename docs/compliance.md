---
id: compliance
title: Compliance Framework
sidebar_label: Compliance Framework
sidebar_position: 11
---

# Compliance Framework

## Overview

Compliance is a foundational design principle of United Properties TRU™, not an afterthought. The platform's legal structure, token standard, and investor onboarding process are each selected to meet specific regulatory requirements. This section describes the compliance framework that governs property token offerings, token transfers, and income distributions.

---

## Regulation D, Rule 506(c) — Portfolio Offering

The Partnership's offering is conducted as a private securities offering under Regulation D, Rule 506(c) of the Securities Act of 1933, restricted to US accredited investors.

### What This Means

- **General solicitation permitted** — The platform may advertise and publicly market each property offering. This is a key distinction between Rule 506(c) and Rule 506(b), and it enables the platform to reach a broad pool of qualified investors through its website, marketing materials, and other channels.
- **Accredited investors only** — All investors must be verified accredited investors prior to any investment being accepted. An accredited investor is an individual with annual income exceeding $200,000 (or $300,000 jointly with a spouse) in each of the two most recent years, or with a net worth exceeding $1,000,000 excluding primary residence, or a qualifying entity.
- **Verification required** — Under Rule 506(c), the issuer must take reasonable steps to verify accredited investor status. Reliance on self-certification alone is not sufficient. The platform uses third-party verification services to satisfy this requirement.
- **No SEC registration required** — The offering is exempt from SEC registration under the Securities Act.

### Application

Compliance under Reg D is applied at the Partnership level. The Partnership conducts its Rule 506(c) offering with the corresponding Form D filing, admitting verified accredited investors into the diversified portfolio.

---

## ERC-3643 — On-Chain Compliance Controls

Property tokens are issued under the ERC-3643 standard, a permissioned token specification designed for regulated securities.

### How ERC-3643 Works

ERC-3643 implements transfer restrictions at the smart contract level. Each token contract maintains a registry of approved (whitelisted) wallets. A transfer can only be executed if:

- The sending wallet is whitelisted
- The receiving wallet is whitelisted
- Both wallets are associated with investors who have completed KYC/AML verification and have been confirmed as accredited investors

This means that compliance with the offering's investor eligibility requirements is enforced on-chain, programmatically, on every transfer — whether it is the initial purchase from the issuer or a subsequent secondary transfer between investors.

### Why This Matters

Without on-chain transfer controls, a token holder could transfer securities to an unverified counterparty, breaking the legal chain of compliance for the offering. ERC-3643 eliminates this risk by making non-compliant transfers technically impossible rather than merely prohibited.

---

## KYC/KYB Verification

The platform conducts identity verification (KYC — Know Your Customer) and business verification (KYB — Know Your Business) for all prospective investors during Phase 1 of the rollout, using third-party verification services including Sumsub and Persona.

The verification process confirms:

- Identity of individual investors
- Accredited investor status under Reg D requirements
- AML/sanctions screening
- Business entity credentials for entity investors

Upon successful verification, the investor's wallet address is added to the on-chain whitelist maintained by the ERC-3643 token contract for the portfolio offering.

---

## Rental Distributions

Rental income distributions to property token holders are made on the following basis:

- **Pro-rata** — distributions are calculated in proportion to each holder's token balance at the time of the distribution snapshot
- **Frequency** — monthly or quarterly, per the Partnership's operating terms
- **Currency** — USDC or fiat, as specified in the Partnership agreement
