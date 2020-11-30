import styles from "./demo-reel.module.css";

export default function DemoReel({ title }) {
  return (
    <div className={styles.demo}>
      <div className="text-2xl phosphate-pro-solid text-crimson-c font-bold">{title} reel</div>
    </div>
  );
}
