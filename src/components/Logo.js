import Link from "next/link";
import React from "react";
import styles from "src/css/page.module.css";

function Logo() {
  return (
    <div>
      <Link href="/">
        <div className={styles.logo}>
          <img src={"/assets/SCULPT_logo.png"} alt="SCULPT logo" />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
