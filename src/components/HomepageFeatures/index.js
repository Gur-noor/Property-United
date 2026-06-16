import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="shieldGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2E86FF"/>
        <stop offset="100%" stopColor="#5ba4ff"/>
      </linearGradient>
    </defs>
    <path d="M24 4l16 6v10c0 10-7 17-16 22-9-5-16-12-16-22V10z"
      fill="rgba(46,134,255,0.12)" stroke="url(#shieldGrad)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M17 24l5 5 9-11" stroke="url(#shieldGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BlocksIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="blocksGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2E86FF"/>
        <stop offset="100%" stopColor="#5ba4ff"/>
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="15" height="15" rx="2.5" fill="rgba(46,134,255,0.12)" stroke="url(#blocksGrad)" strokeWidth="2"/>
    <rect x="27" y="6" width="15" height="15" rx="2.5" fill="rgba(46,134,255,0.18)" stroke="url(#blocksGrad)" strokeWidth="2"/>
    <rect x="6" y="27" width="15" height="15" rx="2.5" fill="rgba(46,134,255,0.18)" stroke="url(#blocksGrad)" strokeWidth="2"/>
    <rect x="27" y="27" width="15" height="15" rx="2.5" fill="rgba(46,134,255,0.10)" stroke="url(#blocksGrad)" strokeWidth="2"/>
    <circle cx="13.5" cy="13.5" r="3" fill="#2E86FF" opacity="0.6"/>
    <circle cx="34.5" cy="34.5" r="3" fill="#5ba4ff" opacity="0.6"/>
  </svg>
);

const YieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <defs>
      <linearGradient id="yieldGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00d264"/>
        <stop offset="100%" stopColor="#2E86FF"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="19" fill="rgba(0,210,100,0.08)" stroke="url(#yieldGrad)" strokeWidth="2"/>
    <path d="M24 13v22" stroke="url(#yieldGrad)" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M29 18c0-2.8-2.2-4-5-4s-5 1.5-5 4 2.2 3.5 5 4 5 1.5 5 4-2.2 4-5 4-5-1.2-5-4"
      stroke="url(#yieldGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeatureList = [
  {
    title: 'Compliant & Verified',
    Icon: ShieldIcon,
    accent: 'blue',
    stat: 'Reg D 506(c)',
    description: (
      <>
        Every investor passes KYC/KYB, AML screening, and accreditation verification.
        Built on Reg D 506(c) — fully compliant from day one.
      </>
    ),
  },
  {
    title: 'Fractional Property Ownership',
    Icon: BlocksIcon,
    accent: 'blue',
    stat: 'From $500',
    description: (
      <>
        Own a fraction of real income-producing property via ERC-3643 permissioned
        tokens. Any denomination, bankruptcy-remote, legally backed.
      </>
    ),
  },
  {
    title: 'Real Yield, Real Assets',
    Icon: YieldIcon,
    accent: 'green',
    stat: 'USDC Payouts',
    description: (
      <>
        Rental income distributed to token holders in USDC, pro-rata by snapshot.
        Transparent, automated, no intermediaries.
      </>
    ),
  },
];

function Feature({Icon, title, description, accent, stat}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.card, accent === 'green' && styles.cardGreen)}>
        <div className={styles.cardTop}>
          <div className={clsx(styles.iconWrap, accent === 'green' && styles.iconWrapGreen)}>
            <Icon />
          </div>
          <span className={clsx(styles.cardStat, accent === 'green' && styles.cardStatGreen)}>{stat}</span>
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHead}>
          <div className={styles.kicker}>Why United Properties TRU™</div>
          <h2 className={styles.featuresTitle}>Real estate investing, rebuilt</h2>
          <p className={styles.featuresLede}>
            Three pillars that set TRU™ apart from every traditional vehicle.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
