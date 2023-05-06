import React, { Suspense, useEffect, useState } from "react";
import { Articles1, Articles2, Articles3, Articles4, Articles5, Articles6, articlesUrl, fetchData } from "./Articles";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <ul>
      <li>
        <Link to="/suspense">{"2つの<Suspense>を配置した例"}</Link>
      </li>
      <li>
        <Link to="/effect">{"useEffect()を使った例"}</Link>
      </li>
      <li>
        <Link to="/suspense2">{"<Articles>と<Artcile>と<Suspense>を使った例"}</Link>
      </li>
      <li>
        <Link to="/effect2">{"<Articles>と<Artcile>とuseEffect()を使った例"}</Link>
      </li>
    </ul>
  )
}
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
      await fetchData(articlesUrl);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <Articles3 loading={loading} />
      <Articles4 />
    </>
  )
}

export function HomeWithSuspense2() {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Articles5 />
      </Suspense>
    </>
  )
}

export function HomeWithEffect2() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const data = await fetchData(articlesUrl);
      setData(data);
    })();
  }, []);

  if (!data) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <Articles6 data={data} />
    </>
  )
}