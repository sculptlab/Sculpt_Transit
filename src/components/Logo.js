import Link from "next/link";
import React from "react";
import styles from "src/css/page.module.css";

function Logo({ url }) {
  return (
    <div>
      <Link href="/">
        <div className={styles.logo}>
          <img src={url} alt="SCULPT logo" />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
