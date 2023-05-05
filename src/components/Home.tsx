import React, { Suspense, useEffect, useState } from "react";
import { Articles1, Articles2, Articles3, Articles4, fetchData } from "./Articles";
export function HomeWithSuspense() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Articles1 />
      </Suspense>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Articles2 />
      </Suspense>
    </>
  )
}

export function HomeWithEffect() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchData('https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51');
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Articles3 loading={loading} />
      <Articles4 />
    </>
  )
}