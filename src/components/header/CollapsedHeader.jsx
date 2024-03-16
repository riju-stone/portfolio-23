import React from "react";
import { Menu } from "lucide-react";

import styles from "./Header.module.scss";

const CollapsedHeader = () => {
  return (
    <div className={styles.collapsedHeaderWrapper}>
      <Menu />
    </div>
  );
};

export default CollapsedHeader;
