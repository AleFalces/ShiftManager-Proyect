import Turn from "../../components/Turn/Turn";
import React, { useEffect, useState } from "react";
import styles from "./MyTurns.module.css";
import axios from "axios";
import { Suspense } from "react";

const LazyDataLoader = React.lazy(() =>
  import("../../components/LazyDataLoader/LazyDataLoader")
);

let MyTurns = () => {
  return (
    <div className={styles.container}>
      <div className={styles.turnsContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyDataLoader />
        </Suspense>
      </div>
    </div>
  );
};

export default MyTurns;
