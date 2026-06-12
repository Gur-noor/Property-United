import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Whitepaper v1.0 · June 2026
        </span>
        <Heading as="h1" className={styles.heroTitle}>
          Own real estate, <span className="grad">fractional and on-chain</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          United Properties TRU™ is a compliant tokenized real estate platform. Verified
          investors own fractions of income-producing property through regulated securities
          and ERC-3643 tokens — with rental yield distributed on-chain.
        </p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/whitepaper/abstract">
            Read the Whitepaper
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} to="/whitepaper/tokenomics">
            View Tokenomics
          </Link>
        </div>
      </div>
    </header>
  );
}

function Stats() {
  const items = [
    {value: <>$300<span className="accent">T</span></>, label: 'Global RE market'},
    {value: <>1<span className="accent">B</span></>, label: '$TRU fixed supply'},
    {value: <>ERC-<span className="accent">3643</span></>, label: 'Permissioned tokens'},
    {value: <>506<span className="accent">(c)</span></>, label: 'Reg D compliant'},
  ];
  return (
    <section className={styles.stats}>
      <div className={styles.statsRow}>
        {items.map((s, i) => (
          <div className={styles.stat} key={i}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TwoToken() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>The Two-Token Model</div>
        <h2 className={styles.sectionTitle}>Two tokens, two distinct purposes</h2>
        <p className={styles.sectionLede}>
          Ownership and platform utility are kept cleanly separate — so each token does one job well.
        </p>
      </div>
      <div className={styles.tokenGrid}>
        <div className={clsx(styles.tokenCard, styles.tokenCardFeatured)}>
          <span className={styles.tokenTag}>Property Token · ERC-3643</span>
          <div className={styles.tokenName}>Fractional Ownership</div>
          <p className={styles.tokenDesc}>Represents a stake in one specific, legally-structured property.</p>
          <ul className={styles.tokenList}>
            <li>Pro-rata ownership of a property Series (Delaware LLC)</li>
            <li>Monthly / quarterly rental income in USDC</li>
            <li>Exposure to property value appreciation</li>
            <li>Whitelisted, KYC-gated transfers only</li>
          </ul>
        </div>
        <div className={styles.tokenCard}>
          <span className={styles.tokenTag}>Utility Token · $TRU</span>
          <div className={styles.tokenName}>Platform Access</div>
          <p className={styles.tokenDesc}>Platform-level token for benefits, access, and governance (Phase 5).</p>
          <ul className={styles.tokenList}>
            <li>Fee discounts across the platform</li>
            <li>Priority allocation on new property listings</li>
            <li>Loyalty rewards & access tiers</li>
            <li>DAO governance participation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {n: 1, t: 'Source & structure', d: 'A vetted property is placed into a bankruptcy-remote Delaware Series LLC.'},
    {n: 2, t: 'Tokenize', d: 'Ownership is split into ERC-3643 tokens (e.g. $300k ÷ $100 = 3,000 tokens).'},
    {n: 3, t: 'Verify investors', d: 'KYC/KYB, AML screening and accredited-investor verification under Reg D 506(c).'},
    {n: 4, t: 'Raise capital', d: 'Verified investors buy property tokens in a compliant Reg D offering.'},
    {n: 5, t: 'Distribute yield', d: 'Rental income flows to holders in USDC, pro-rata by on-chain snapshot.'},
    {n: 6, t: 'Trade & exit', d: 'Whitelisted secondary transfers; proceeds distributed pro-rata on sale.'},
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>How It Works</div>
        <h2 className={styles.sectionTitle}>From property to portfolio in six steps</h2>
      </div>
      <div className={styles.steps}>
        {steps.map((s) => (
          <div className={styles.step} key={s.n}>
            <div className={styles.stepNum}>{s.n}</div>
            <div className={styles.stepTitle}>{s.t}</div>
            <div className={styles.stepDesc}>{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    {n: 'Phase 0', name: 'Foundation', tag: 'Off-chain'},
    {n: 'Phase 1', name: 'Onboarding', tag: 'Off-chain'},
    {n: 'Phase 2', name: 'First Property', tag: 'On-chain'},
    {n: 'Phase 3', name: 'Multi-Property', tag: 'On-chain'},
    {n: 'Phase 4', name: 'Liquidity', tag: 'Conditional'},
    {n: 'Phase 5', name: '$TRU Token', tag: 'On-chain'},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Roadmap</div>
        <h2 className={styles.sectionTitle}>Compliance first, on-chain when ready</h2>
        <p className={styles.sectionLede}>
          Six phases, de-risked: legal and compliance infrastructure before any token is minted.
        </p>
      </div>
      <div className={styles.phases}>
        {phases.map((p) => (
          <div className={styles.phase} key={p.n}>
            <div className={styles.phaseNum}>{p.n}</div>
            <div className={styles.phaseName}>{p.name}</div>
            <div className={styles.phaseTag}>{p.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaTitle}>Read the full whitepaper</div>
      <p className={styles.ctaText}>
        Corporate structure, tokenomics, compliance framework, revenue model and the complete roadmap.
      </p>
      <Link className={clsx('button button--lg', styles.btnPrimary)} to="/whitepaper/abstract">
        Start with the Abstract →
      </Link>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="United Properties TRU™ — a compliant, fractional tokenized real estate ownership platform.">
      <Hero />
      <main>
        <Stats />
        <HomepageFeatures />
        <TwoToken />
        <HowItWorks />
        <Roadmap />
        <CallToAction />
        <p className={styles.disclaimer}>
          This whitepaper is for informational purposes only and is not an offer to sell or a
          solicitation to buy any security or token. Offerings are limited to verified accredited
          investors under Reg D 506(c). See the Legal Disclaimer.
        </p>
      </main>
    </Layout>
  );
}
