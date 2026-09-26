import { asset, BASE_PATH } from "@/lib/site";
import { SPONSORS, sponsorGoPath } from "@/lib/sponsors";
import styles from "./Sponsors.module.css";

export default function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>Sponsors</span>
        <h2 className={styles.title}>Thank you</h2>
        <p className={styles.body}>
          wigolo is free for everyone and stays that way. The sponsors below
          help keep it maintained, and their support goes straight into the
          work.
        </p>

        <ul className={styles.list}>
          {SPONSORS.map((s) => (
            <li key={s.slug} className={styles.card}>
              <a
                className={styles.logoLink}
                href={asset(sponsorGoPath(s.slug, "site-home"))}
                rel="sponsored noopener"
                aria-label={s.name}
              >
                <img
                  className={styles.logo}
                  src={asset(s.logo.light)}
                  alt={s.name}
                  width={513}
                  height={80}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <p className={styles.blurb}>{s.description}</p>
              <a
                className={styles.cta}
                href={asset(sponsorGoPath(s.slug, "site-home"))}
                rel="sponsored noopener"
              >
                Visit {s.name} →
              </a>
            </li>
          ))}
          <li className={`${styles.card} ${styles.open}`}>
            <a className={styles.openLink} href={`${BASE_PATH}/sponsors/`} data-track="sponsor_pitch_click" data-track-location="home">
              <span className={styles.openMark} aria-hidden="true">+</span>
              <span className={styles.openTitle}>Your logo here</span>
              <span className={styles.blurb}>
                On the README, this page, the docs and every release — with the reach measured and shared.
              </span>
              <span className={styles.cta}>Sponsor wigolo →</span>
            </a>
          </li>
        </ul>

        <p className={styles.pitch}>
          <strong>Want to support wigolo?</strong> Sponsorship keeps a free-forever project maintained.{" "}
          <a href={`${BASE_PATH}/sponsors/`}>See what it includes</a> or write to{" "}
          <a href="mailto:ktowhid20@gmail.com">ktowhid20@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}
