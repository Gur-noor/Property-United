import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4l16 6v10c0 10-7 17-16 22-9-5-16-12-16-22V10z" />
    <path d="M17 24l5 5 9-11" />
  </svg>
);

const BlocksIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="15" height="15" rx="2.5" />
    <rect x="27" y="6" width="15" height="15" rx="2.5" />
    <rect x="6" y="27" width="15" height="15" rx="2.5" />
    <rect x="27" y="27" width="15" height="15" rx="2.5" />
  </svg>
);

const YieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="19" />
    <path d="M24 13v22M29 18c0-2.8-2.2-4-5-4s-5 1.5-5 4 2.2 3.5 5 4 5 1.5 5 4-2.2 4-5 4-5-1.2-5-4" />
  </svg>
);

const FeatureList = [
  {
    title: 'Compliant & Verified',
    Icon: ShieldIcon,
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
    description: (
      <>
        Rental income distributed to token holders in USDC, pro-rata by snapshot.
        Transparent, automated, no intermediaries.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.card}>
        <div className={styles.iconWrap}>
          <Icon />
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
