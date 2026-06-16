import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

/* ── SVG Icons ─────────────────────────────────────────────────────────── */

const ShieldCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5.5v7.5c0 4.8 3.4 9.3 8 10.5 4.6-1.2 8-5.7 8-10.5V5.5z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const GridBlocks = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8" rx="1.5"/>
    <rect x="13" y="3" width="8" height="8" rx="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="1.5"/>
  </svg>
);

const CoinYield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 6v12"/>
    <path d="M14.7 9A2.7 2.7 0 009.3 9c0 4.7 5.4 5.3 5.4 9a2.7 2.7 0 01-5.4 0"/>
  </svg>
);

const LockKey = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="11" rx="2"/>
    <path d="M8 11V7a4 4 0 018 0v4"/>
    <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

const OrgTree = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="5" rx="1.5"/>
    <path d="M12 7v3M6 10h12M6 10v2a2 2 0 002 2h8a2 2 0 002-2v-2"/>
    <rect x="2" y="14" width="7" height="5" rx="1.5"/>
    <rect x="15" y="14" width="7" height="5" rx="1.5"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4L6 11l-3-3"/>
  </svg>
);

/* ── Hero Property Card ────────────────────────────────────────────────── */

function HeroPropertyCard() {
  return (
    <div className={styles.heroVisualWrap}>
      <div className={styles.heroVisualGlow}/>

      <div className={styles.propCard}>
        {/* Card header */}
        <div className={styles.propCardHeader}>
          <div className={styles.propCardBrand}>
            <span className={styles.propCardBrandDot}/>
            <span>UP SERIES 1</span>
          </div>
          <div className={styles.propCardStatus}>
            <span className={styles.propCardStatusDot}/>
            LIVE
          </div>
        </div>

        {/* Building illustration */}
        <div className={styles.propCardBuilding}>
          <svg viewBox="0 0 340 148" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
            <defs>
              <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#03060f"/>
                <stop offset="100%" stopColor="#080e20"/>
              </linearGradient>
              <linearGradient id="mainBld" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#091230"/>
                <stop offset="100%" stopColor="#0d1c48"/>
              </linearGradient>
              <radialGradient id="topGlow" cx="50%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#2E86FF" stopOpacity="0.18"/>
                <stop offset="100%" stopColor="#2E86FF" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="340" height="148" fill="url(#skyG)"/>
            <rect width="340" height="148" fill="url(#topGlow)"/>
            {/* Stars */}
            <circle cx="28" cy="14" r="1" fill="#90b8f0" opacity="0.6"/>
            <circle cx="78" cy="8" r="1.2" fill="#90b8f0" opacity="0.45"/>
            <circle cx="252" cy="11" r="1" fill="#90b8f0" opacity="0.6"/>
            <circle cx="308" cy="22" r="1.3" fill="#90b8f0" opacity="0.45"/>
            <circle cx="148" cy="6" r="0.8" fill="#90b8f0" opacity="0.55"/>
            <circle cx="190" cy="17" r="0.7" fill="#90b8f0" opacity="0.4"/>
            {/* Left far building */}
            <rect x="6" y="82" width="32" height="66" fill="#070c1c"/>
            <rect x="12" y="88" width="8" height="6" rx="1" fill="#1a3060" opacity="0.7"/>
            <rect x="22" y="88" width="8" height="6" rx="1" fill="#2E86FF" opacity="0.35"/>
            <rect x="12" y="98" width="8" height="6" rx="1" fill="#1a3060" opacity="0.6"/>
            <rect x="22" y="98" width="8" height="6" rx="1" fill="#1a3060" opacity="0.7"/>
            <rect x="12" y="108" width="8" height="6" rx="1" fill="#2E86FF" opacity="0.3"/>
            <rect x="22" y="108" width="8" height="6" rx="1" fill="#1a3060" opacity="0.6"/>
            {/* Left mid building */}
            <rect x="44" y="98" width="24" height="50" fill="#070d1c"/>
            <rect x="49" y="105" width="6" height="5" rx="1" fill="#1a3060" opacity="0.6"/>
            <rect x="57" y="105" width="6" height="5" rx="1" fill="#2E86FF" opacity="0.4"/>
            <rect x="49" y="114" width="6" height="5" rx="1" fill="#1a3060" opacity="0.7"/>
            <rect x="57" y="114" width="6" height="5" rx="1" fill="#1a3060" opacity="0.5"/>
            {/* Right far building */}
            <rect x="298" y="76" width="36" height="72" fill="#070c1c"/>
            <rect x="303" y="83" width="9" height="7" rx="1" fill="#2E86FF" opacity="0.38"/>
            <rect x="316" y="83" width="9" height="7" rx="1" fill="#1a3060" opacity="0.65"/>
            <rect x="303" y="94" width="9" height="7" rx="1" fill="#1a3060" opacity="0.6"/>
            <rect x="316" y="94" width="9" height="7" rx="1" fill="#2E86FF" opacity="0.32"/>
            <rect x="303" y="105" width="9" height="7" rx="1" fill="#1a3060" opacity="0.7"/>
            <rect x="316" y="105" width="9" height="7" rx="1" fill="#1a3060" opacity="0.5"/>
            {/* Right mid building */}
            <rect x="272" y="92" width="22" height="56" fill="#070d1c"/>
            <rect x="277" y="99" width="6" height="5" rx="1" fill="#1a3060" opacity="0.6"/>
            <rect x="285" y="99" width="6" height="5" rx="1" fill="#2E86FF" opacity="0.4"/>
            <rect x="277" y="108" width="6" height="5" rx="1" fill="#1a3060" opacity="0.7"/>
            {/* Main center building */}
            <rect x="110" y="14" width="120" height="134" rx="3" fill="url(#mainBld)" stroke="#2E86FF" strokeWidth="1.2" strokeOpacity="0.65"/>
            {/* Building spine */}
            <rect x="167" y="14" width="6" height="134" fill="#2E86FF" opacity="0.06"/>
            {/* Horizontal floor lines */}
            <line x1="110" y1="44" x2="230" y2="44" stroke="#2E86FF" strokeWidth="0.4" strokeOpacity="0.18"/>
            <line x1="110" y1="64" x2="230" y2="64" stroke="#2E86FF" strokeWidth="0.4" strokeOpacity="0.18"/>
            <line x1="110" y1="84" x2="230" y2="84" stroke="#2E86FF" strokeWidth="0.4" strokeOpacity="0.18"/>
            <line x1="110" y1="104" x2="230" y2="104" stroke="#2E86FF" strokeWidth="0.4" strokeOpacity="0.18"/>
            <line x1="110" y1="124" x2="230" y2="124" stroke="#2E86FF" strokeWidth="0.4" strokeOpacity="0.18"/>
            {/* Left windows */}
            <rect x="118" y="22" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.85"/>
            <rect x="140" y="22" width="18" height="13" rx="1.5" fill="#2E86FF" opacity="0.55"/>
            <rect x="118" y="48" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.7"/>
            <rect x="140" y="48" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.85"/>
            <rect x="118" y="68" width="18" height="13" rx="1.5" fill="#2E86FF" opacity="0.48"/>
            <rect x="140" y="68" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.8"/>
            <rect x="118" y="88" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.7"/>
            <rect x="140" y="88" width="18" height="13" rx="1.5" fill="#2E86FF" opacity="0.4"/>
            <rect x="118" y="108" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.8"/>
            <rect x="140" y="108" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.65"/>
            {/* Right windows */}
            <rect x="174" y="22" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.8"/>
            <rect x="196" y="22" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.85"/>
            <rect x="174" y="48" width="18" height="13" rx="1.5" fill="#2E86FF" opacity="0.5"/>
            <rect x="196" y="48" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.7"/>
            <rect x="174" y="68" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.82"/>
            <rect x="196" y="68" width="18" height="13" rx="1.5" fill="#2E86FF" opacity="0.42"/>
            <rect x="174" y="88" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.72"/>
            <rect x="196" y="88" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.82"/>
            <rect x="174" y="108" width="18" height="13" rx="1.5" fill="#2E86FF" opacity="0.36"/>
            <rect x="196" y="108" width="18" height="13" rx="1.5" fill="#1e4080" opacity="0.7"/>
            {/* Building top cap */}
            <rect x="124" y="10" width="92" height="7" rx="2" fill="#2E86FF" opacity="0.7"/>
            <rect x="155" y="5" width="30" height="8" rx="2" fill="#2E86FF" opacity="0.45"/>
            {/* Ground */}
            <rect x="0" y="140" width="340" height="8" fill="#030710" opacity="0.9"/>
            {/* Ambient glow overlay */}
            <rect x="110" y="14" width="120" height="134" rx="3" fill="none" stroke="#2E86FF" strokeWidth="0.7" strokeOpacity="0.35"/>
          </svg>
        </div>

        {/* Property info */}
        <div className={styles.propCardInfo}>
          <div className={styles.propCardName}>1200 Market Street</div>
          <div className={styles.propCardLocation}>Commercial Property · New York, NY</div>
        </div>

        {/* Metrics */}
        <div className={styles.propCardMetrics}>
          <div className={styles.propCardMetric}>
            <div className={styles.propCardMetricValue}>7.2%</div>
            <div className={styles.propCardMetricLabel}>Est. Yield</div>
          </div>
          <div className={styles.propCardMetricDivider}/>
          <div className={styles.propCardMetric}>
            <div className={styles.propCardMetricValue}>$1.2M</div>
            <div className={styles.propCardMetricLabel}>Property Value</div>
          </div>
          <div className={styles.propCardMetricDivider}/>
          <div className={styles.propCardMetric}>
            <div className={styles.propCardMetricValue}>3,000</div>
            <div className={styles.propCardMetricLabel}>Tokens @ $400</div>
          </div>
        </div>

        {/* Progress */}
        <div className={styles.propCardProgress}>
          <div className={styles.propCardProgressRow}>
            <span>Funding Progress</span>
            <span className={styles.propCardProgressPct}>78% funded</span>
          </div>
          <div className={styles.propCardProgressTrack}>
            <div className={styles.propCardProgressFill}/>
          </div>
        </div>

        {/* Chips */}
        <div className={styles.propCardChips}>
          <span className={styles.propCardChip}>ERC-3643</span>
          <span className={styles.propCardChip}>Reg D 506(c)</span>
          <span className={styles.propCardChip}>USDC Yield</span>
        </div>
      </div>

      {/* Floating: yield notification */}
      <div className={clsx(styles.floatBadge, styles.floatTop)}>
        <div className={styles.floatBadgeIcon}>
          <CoinYield/>
        </div>
        <div>
          <div className={styles.floatBadgeTitle}>+$184 USDC</div>
          <div className={styles.floatBadgeDesc}>Yield distributed</div>
        </div>
      </div>

      {/* Floating: KYC verified */}
      <div className={clsx(styles.floatBadge, styles.floatBottom)}>
        <div className={clsx(styles.floatBadgeIcon, styles.floatBadgeIconGreen)}>
          <ShieldCheck/>
        </div>
        <div>
          <div className={styles.floatBadgeTitle}>KYC Verified</div>
          <div className={styles.floatBadgeDesc}>Accredited investor</div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid}/>
      <div className={styles.heroBgGlow}/>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            <span className={styles.badgeDot}/>
            Whitepaper v1.0 · June 2026
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            Own real estate,{' '}
            <span className="grad">fractional and on-chain</span>
          </Heading>
          <p className={styles.heroSubtitle}>
            United Properties TRU™ is a compliant tokenized real estate platform.
            Verified investors own fractions of income-producing property through
            regulated securities and ERC-3643 tokens — with rental yield distributed on-chain.
          </p>
          <div className={styles.heroButtons}>
            <Link className={clsx('button button--lg', styles.btnPrimary)} to="/whitepaper/abstract">
              Read the Whitepaper
            </Link>
            <Link className={clsx('button button--lg', styles.btnGhost)} to="/whitepaper/tokenomics">
              View Tokenomics
            </Link>
          </div>
          <div className={styles.heroTrust}>
            {['Reg D 506(c)', 'ERC-3643 Token', 'KYC / AML', 'Delaware LLC'].map((t, i) => (
              <span className={styles.heroTrustItem} key={i}>
                <span className={styles.heroTrustCheck}><CheckIcon/></span>
                {t}
              </span>
            ))}
          </div>
        </div>
        <HeroPropertyCard/>
      </div>
    </header>
  );
}

/* ── Trust Bar ─────────────────────────────────────────────────────────── */

function TrustBar() {
  const items = [
    {label: 'Regulation D 506(c)', sub: 'SEC-Exempt Offering'},
    {label: 'ERC-3643 Standard', sub: 'Permissioned Token'},
    {label: 'KYC / AML Screening', sub: 'Sumsub · Persona'},
    {label: 'USDC Distributions', sub: 'On-Chain Yield'},
    {label: 'Delaware Series LLC', sub: 'Bankruptcy Remote'},
  ];
  return (
    <div className={styles.trustBar}>
      <div className={styles.trustBarInner}>
        {items.map((item, i) => (
          <div className={styles.trustBarItem} key={i}>
            <div className={styles.trustBarDot}/>
            <div>
              <div className={styles.trustBarLabel}>{item.label}</div>
              <div className={styles.trustBarSub}>{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Stats ─────────────────────────────────────────────────────────────── */

function Stats() {
  const items = [
    {value: '$300T', label: 'Global real estate market'},
    {value: '1B $TRU', label: 'Fixed token supply'},
    {value: 'ERC-3643', label: 'Permissioned token standard'},
    {value: '506(c)', label: 'Reg D exempt offering'},
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

/* ── Core Pillars ──────────────────────────────────────────────────────── */

function CorePillars() {
  const pillars = [
    {
      Icon: ShieldCheck,
      tag: 'SEC Reg D 506(c)',
      title: 'Compliant by Design',
      body: 'Every investor passes KYC/KYB, AML screening, and accreditation verification. Built on Reg D 506(c) — fully compliant from day one, not retrofitted.',
    },
    {
      Icon: GridBlocks,
      tag: 'ERC-3643',
      title: 'Fractional Property Ownership',
      body: 'Own a fraction of real income-producing property via ERC-3643 permissioned tokens. Any denomination, bankruptcy-remote Delaware Series LLC, legally backed.',
    },
    {
      Icon: CoinYield,
      tag: 'USDC On-Chain',
      title: 'Real Yield, Real Assets',
      body: 'Rental income distributed to token holders in USDC, pro-rata by on-chain snapshot. Transparent, automated, no intermediaries, auditable on-chain.',
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Why United Properties TRU™</div>
        <h2 className={styles.sectionTitle}>Real estate investing, rebuilt</h2>
        <p className={styles.sectionLede}>
          Institutional-grade infrastructure for the next generation of property investors.
        </p>
      </div>
      <div className={styles.pillarsGrid}>
        {pillars.map((p, i) => (
          <div className={styles.pillarCard} key={i}>
            <div className={styles.pillarTop}>
              <div className={styles.pillarIconWrap}><p.Icon/></div>
              <span className={styles.pillarTag}>{p.tag}</span>
            </div>
            <h3 className={styles.pillarTitle}>{p.title}</h3>
            <p className={styles.pillarBody}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Comparison Table ──────────────────────────────────────────────────── */

const GreenCheck = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="rgba(0,210,100,0.13)"/>
    <path d="M5 9.5l2.8 2.8 5-5.8" stroke="#00d264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const RedCross = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="rgba(255,60,60,0.10)"/>
    <path d="M6 6l6 6M12 6l-6 6" stroke="#ff4d4d" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

function Comparison() {
  const rows = [
    {feature:'Specific property exposure',   tru:true,       reit:false,   crowd:true,      direct:true},
    {feature:'On-chain ownership record',    tru:true,       reit:false,   crowd:false,     direct:false},
    {feature:'Accredited investors only',    tru:true,       reit:false,   crowd:'Varies',  direct:'—'},
    {feature:'Fractional from $500',         tru:true,       reit:true,    crowd:true,      direct:false},
    {feature:'USDC distributions',           tru:true,       reit:false,   crowd:false,     direct:false},
    {feature:'Bankruptcy-remote series',     tru:true,       reit:false,   crowd:false,     direct:'—'},
    {feature:'Whitelisted secondary trading',tru:'partial',  reit:true,    crowd:false,     direct:false},
    {feature:'Reg D 506(c) compliant',       tru:true,       reit:'N/A',   crowd:'Varies',  direct:'N/A'},
  ];
  const Cell = ({v, featured}) => {
    if (v === true)    return <span className={styles.cellCheck}><GreenCheck/></span>;
    if (v === false)   return <span className={styles.cellCross}><RedCross/></span>;
    if (v === 'partial') return <span className={styles.cellPartial}><GreenCheck/><span className={styles.cellStar}>*</span></span>;
    return <span className={styles.cellText}>{v}</span>;
  };
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Competitive Landscape</div>
        <h2 className={styles.sectionTitle}>How tokenized fractional ownership compares</h2>
        <p className={styles.sectionLede}>
          TRU™ combines institutional legal protection with fractional access — features no single traditional vehicle delivers together.
        </p>
      </div>
      <div className={styles.compWrap}>
        <div className={styles.compTable}>
          <div className={clsx(styles.compRow, styles.compHead)}>
            <div className={styles.compFeature}>Feature</div>
            <div className={clsx(styles.compCol, styles.compColFeatured)}>TRU™</div>
            <div className={styles.compCol}>REIT</div>
            <div className={styles.compCol}>Crowdfunding</div>
            <div className={styles.compCol}>Direct</div>
          </div>
          {rows.map((r,i) => (
            <div className={clsx(styles.compRow, i%2===1 && styles.compRowAlt)} key={i}>
              <div className={styles.compFeature}>{r.feature}</div>
              <div className={clsx(styles.compCol, styles.compColFeatured)}><Cell v={r.tru} featured/></div>
              <div className={styles.compCol}><Cell v={r.reit}/></div>
              <div className={styles.compCol}><Cell v={r.crowd}/></div>
              <div className={styles.compCol}><Cell v={r.direct}/></div>
            </div>
          ))}
        </div>
        <p className={styles.compNote}>* Whitelisted secondary trading available; open-market liquidity subject to regulatory approval.</p>
      </div>
    </section>
  );
}

/* ── Two-Token Model ───────────────────────────────────────────────────── */

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
        {/* Property Token */}
        <div className={clsx(styles.tokenCard, styles.tokenCardFeatured)}>
          <div className={styles.tokenCardAccentLine}/>
          <div className={styles.tokenCardTop}>
            <span className={styles.tokenTag}>Property Token · ERC-3643</span>
            <span className={styles.tokenBadgePrimary}>Primary</span>
          </div>
          <div className={styles.tokenName}>Fractional Property Ownership</div>
          <p className={styles.tokenDesc}>
            Represents a direct legal stake in one specific, legally-structured property held in a
            bankruptcy-remote Delaware Series LLC — with full on-chain income rights.
          </p>
          <div className={styles.tokenDivider}/>
          <ul className={styles.tokenList}>
            <li>Pro-rata ownership of a property Series (Delaware LLC)</li>
            <li>Monthly / quarterly rental income in USDC</li>
            <li>Exposure to property value appreciation</li>
            <li>Whitelisted, KYC-gated transfers only</li>
          </ul>
          <div className={styles.tokenFooter}>
            <div className={styles.tokenStat}>
              <div className={styles.tokenStatValue}>$100</div>
              <div className={styles.tokenStatLabel}>Min. token price</div>
            </div>
            <div className={styles.tokenStatDivider}/>
            <div className={styles.tokenStat}>
              <div className={styles.tokenStatValue}>USDC</div>
              <div className={styles.tokenStatLabel}>Yield currency</div>
            </div>
            <div className={styles.tokenStatDivider}/>
            <div className={styles.tokenStat}>
              <div className={styles.tokenStatValue}>Per-property</div>
              <div className={styles.tokenStatLabel}>Issuance scope</div>
            </div>
          </div>
        </div>

        {/* $TRU Token */}
        <div className={styles.tokenCard}>
          <div className={styles.tokenCardTop}>
            <span className={clsx(styles.tokenTag, styles.tokenTagAlt)}>Utility Token · $TRU</span>
            <span className={styles.tokenBadgePhase}>Phase 5</span>
          </div>
          <div className={styles.tokenName}>Platform Access &amp; Governance</div>
          <p className={styles.tokenDesc}>
            Platform-level utility token for fee discounts, priority access, loyalty rewards, and
            DAO governance — launching in Phase 5 of the roadmap.
          </p>
          <div className={styles.tokenDivider}/>
          <ul className={styles.tokenList}>
            <li>Fee discounts across the platform</li>
            <li>Priority allocation on new property listings</li>
            <li>Loyalty rewards &amp; access tiers</li>
            <li>DAO governance participation</li>
          </ul>
          <div className={styles.tokenFooter}>
            <div className={styles.tokenStat}>
              <div className={styles.tokenStatValue}>1B</div>
              <div className={styles.tokenStatLabel}>Fixed supply</div>
            </div>
            <div className={styles.tokenStatDivider}/>
            <div className={styles.tokenStat}>
              <div className={styles.tokenStatValue}>ERC-20</div>
              <div className={styles.tokenStatLabel}>Token standard</div>
            </div>
            <div className={styles.tokenStatDivider}/>
            <div className={styles.tokenStat}>
              <div className={styles.tokenStatValue}>Phase 5</div>
              <div className={styles.tokenStatLabel}>Launch target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ──────────────────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    {n: 1, t: 'Source & Structure', d: 'A vetted income-producing property is placed into a bankruptcy-remote Delaware Series LLC, establishing clear legal ownership.'},
    {n: 2, t: 'Tokenize', d: 'Ownership is split into ERC-3643 tokens — e.g. $300k property ÷ $100/token = 3,000 property tokens, each representing a fractional share.'},
    {n: 3, t: 'Verify Investors', d: 'KYC/KYB, AML screening and accredited-investor verification under Reg D 506(c). Only qualified, verified investors may participate.'},
    {n: 4, t: 'Raise Capital', d: 'Verified investors purchase property tokens in a compliant Reg D offering via the United Properties investor portal.'},
    {n: 5, t: 'Distribute Yield', d: 'Net rental income flows directly to token holders in USDC, pro-rata by on-chain snapshot, with full transparency and no intermediaries.'},
    {n: 6, t: 'Trade & Exit', d: 'Whitelisted secondary transfers between verified investors. On property sale, all proceeds are distributed pro-rata to token holders.'},
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>How It Works</div>
        <h2 className={styles.sectionTitle}>From property to portfolio in six steps</h2>
        <p className={styles.sectionLede}>
          A transparent, fully-compliant process from property acquisition through yield distribution.
        </p>
      </div>
      <div className={styles.steps}>
        {steps.map((s) => (
          <div className={styles.step} key={s.n}>
            <div className={styles.stepNum}>{s.n}</div>
            <div className={styles.stepBody}>
              <div className={styles.stepTitle}>{s.t}</div>
              <div className={styles.stepDesc}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Platform Fees ─────────────────────────────────────────────────────── */

function PlatformFees() {
  const fees = [
    {type:'Origination',       rate:'2%',      desc:'On capital raised per property offering'},
    {type:'Tokenization',      rate:'0.5%',     desc:'One-time fee on token issuance'},
    {type:'Asset Management',  rate:'1% p.a.',  desc:'Annual fee on AUM per series'},
    {type:'Disposition',       rate:'1%',       desc:'On gross sale proceeds at exit'},
    {type:'Secondary Transfer',rate:'0.5%',     desc:'Per compliant secondary trade'},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Revenue Model</div>
        <h2 className={styles.sectionTitle}>Platform fees</h2>
        <p className={styles.sectionLede}>
          Five transparent fee streams. Revenue scales with AUM, not headcount.
        </p>
      </div>
      <div className={styles.feesWrap}>
        <div className={styles.feesTable}>
          <div className={clsx(styles.feesRow, styles.feesHead)}>
            <div className={styles.feesColType}>Fee Type</div>
            <div className={styles.feesColRate}>Rate</div>
            <div className={styles.feesColDesc}>Description</div>
          </div>
          {fees.map((f,i) => (
            <div className={styles.feesRow} key={i}>
              <div className={styles.feesColType}>{f.type}</div>
              <div className={styles.feesColRate}><span className={styles.feeRate}>{f.rate}</span></div>
              <div className={styles.feesColDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
        <p className={styles.feesFootnote}>
          Illustrative AUM: $3M AUM → ~$80k/yr · $30M AUM → ~$800k/yr platform revenue
        </p>
      </div>
    </section>
  );
}

/* ── Legal Structure ───────────────────────────────────────────────────── */

function LegalStructure() {
  const nodes = [
    {
      Icon: OrgTree,
      label: 'PlatformCo',
      sub: 'Delaware C-Corp',
      desc: 'Technology, operations & compliance. The entity in which SAFE investors hold equity.',
      tag: 'Investor Entity',
      featured: false,
    },
    {
      Icon: GridBlocks,
      label: 'PropCo Master',
      sub: 'Delaware Series LLC',
      desc: 'Master entity for all property series. Assets are legally isolated per series — no cross-liability.',
      tag: 'Property Master',
      featured: false,
    },
    {
      Icon: LockKey,
      label: 'Property Series',
      sub: 'Series LLC (per property)',
      desc: 'Each property is its own bankruptcy-remote series. Token holders own a proportional share.',
      tag: 'Token Holders',
      featured: true,
    },
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Legal Framework</div>
        <h2 className={styles.sectionTitle}>Institutional-grade corporate structure</h2>
        <p className={styles.sectionLede}>
          A two-entity Delaware structure that cleanly separates the platform from individual property assets,
          providing maximum legal protection for investors.
        </p>
      </div>
      <div className={styles.legalDiagram}>
        {nodes.map((node, i) => (
          <div className={styles.legalBlock} key={i}>
            <div className={clsx(styles.legalNode, node.featured && styles.legalNodeFeatured)}>
              <div className={styles.legalNodeIcon}><node.Icon/></div>
              <div className={styles.legalNodeTitle}>{node.label}</div>
              <div className={styles.legalNodeSub}>{node.sub}</div>
              <p className={styles.legalNodeDesc}>{node.desc}</p>
              <span className={clsx(styles.legalTag, node.featured && styles.legalTagFeatured)}>{node.tag}</span>
            </div>
            {i < nodes.length - 1 && (
              <div className={styles.legalConnector}>
                <div className={styles.legalConnectorLine}/>
                <div className={styles.legalConnectorArrow}>›</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Roadmap ───────────────────────────────────────────────────────────── */

function Roadmap() {
  const phases = [
    {n: 'Phase 0', name: 'Foundation', tag: 'Off-chain', active: true,
      items: ['Delaware C-Corp & Series LLC', 'SAFE investor agreements', 'Whitepaper & legal review']},
    {n: 'Phase 1', name: 'Onboarding', tag: 'Off-chain', active: true,
      items: ['Investor portal & KYC/AML', 'SAFT agreements', 'Admin dashboard']},
    {n: 'Phase 2', name: 'First Property', tag: 'On-chain', active: false,
      items: ['ERC-3643 smart contracts', 'First property tokenization', 'USDC yield distribution']},
    {n: 'Phase 3', name: 'Multi-Property', tag: 'On-chain', active: false,
      items: ['Multiple property series', 'Automated yield engine', 'P2P whitelisted transfers']},
    {n: 'Phase 4', name: 'Liquidity', tag: 'Conditional', active: false,
      items: ['Compliant secondary market', 'Licensed trading partner', 'Transfer compliance engine']},
    {n: 'Phase 5', name: '$TRU Token', tag: 'On-chain', active: false,
      items: ['$TRU utility token launch', 'SAFT → $TRU conversion', 'DAO governance module']},
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Roadmap</div>
        <h2 className={styles.sectionTitle}>Compliance first, on-chain when ready</h2>
        <p className={styles.sectionLede}>
          Six phases, de-risked: legal and compliance infrastructure before any token is minted.
        </p>
      </div>
      <div className={styles.roadmapGrid}>
        {phases.map((p, i) => (
          <div className={clsx(styles.roadmapCard, p.active && styles.roadmapCardActive)} key={i}>
            {p.active && <div className={styles.roadmapActiveBar}/>}
            <div className={styles.roadmapHeader}>
              <div className={styles.roadmapPhase}>{p.n}</div>
              <span className={clsx(
                styles.roadmapTag,
                p.tag === 'Off-chain' && styles.roadmapTagOff,
                p.tag === 'On-chain' && styles.roadmapTagOn,
                p.tag === 'Conditional' && styles.roadmapTagCond,
              )}>{p.tag}</span>
            </div>
            <div className={styles.roadmapName}>{p.name}</div>
            <ul className={styles.roadmapItems}>
              {p.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
            {p.active && <div className={styles.roadmapStatusChip}>In Progress</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Investor Requirements ─────────────────────────────────────────────── */

function InvestorRequirements() {
  const reqs = [
    {num: '01', title: 'Accredited Investor Status',
      desc: 'Net worth $1M+ excluding primary residence, or $200k+ annual income ($300k with spouse) — per SEC Rule 501 of Reg D.'},
    {num: '02', title: 'KYC / AML Cleared',
      desc: 'Identity verification and anti-money-laundering screening completed through our compliance partner. Typically under 24 hours.'},
    {num: '03', title: 'SAFT Agreement Executed',
      desc: 'Phase 1 investors execute a SAFE + token warrant side letter. All documents are standardized — no per-investor negotiation.'},
    {num: '04', title: 'US & International',
      desc: 'Open to accredited US investors and qualified foreign investors. Country-specific restrictions may apply per applicable law.'},
  ];
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <div className={styles.kicker}>Who Can Invest</div>
        <h2 className={styles.sectionTitle}>Built for accredited investors</h2>
        <p className={styles.sectionLede}>
          This offering is limited to verified accredited investors under Reg D 506(c).
        </p>
      </div>
      <div className={styles.reqsGrid}>
        {reqs.map((r, i) => (
          <div className={styles.reqCard} key={i}>
            <div className={styles.reqNum}>{r.num}</div>
            <div className={styles.reqTitle}>{r.title}</div>
            <div className={styles.reqDesc}>{r.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.reqsNote}>
        <div className={styles.reqsNoteIcon}><LockKey/></div>
        <p>All investor relationships are subject to applicable securities laws, anti-money-laundering regulations, and platform terms. This offering is not available to retail investors.</p>
      </div>
    </section>
  );
}

/* ── Call to Action ────────────────────────────────────────────────────── */

function CallToAction() {
  return (
    <div className={styles.ctaWrap}>
      <div className={styles.cta}>
        <div className={styles.ctaGlow}/>
        <div className={styles.ctaBadge}>Complete Documentation</div>
        <div className={styles.ctaTitle}>Read the full whitepaper</div>
        <p className={styles.ctaText}>
          Corporate structure, tokenomics, compliance framework, revenue model and the complete
          roadmap — all in one comprehensive document.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/whitepaper/abstract">
            Start with the Abstract
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} to="/whitepaper/tokenomics">
            View Tokenomics
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="United Properties TRU™ — a compliant, fractional tokenized real estate ownership platform.">
      <Hero/>
      <main>
        <TrustBar/>
        <Stats/>
        <CorePillars/>
        <Comparison/>
        <TwoToken/>
        <HowItWorks/>
        <PlatformFees/>
        <LegalStructure/>
        <Roadmap/>
        <InvestorRequirements/>
        <CallToAction/>
        <p className={styles.disclaimer}>
          This whitepaper is for informational purposes only and is not an offer to sell or a
          solicitation to buy any security or token. Offerings are limited to verified accredited
          investors under Reg D 506(c). See the{' '}
          <Link to="/whitepaper/legal-disclaimer">Legal Disclaimer</Link>.
        </p>
      </main>
    </Layout>
  );
}
