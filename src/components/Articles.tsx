import React, { useEffect, useState } from "react";
import { use } from "../utils/use";

const cache = new Map();

export const articlesUrl = "https://run.mocky.io/v3/ce895660-aaf5-4a62-a054-135f9c03087d";
const article1Url = "https://run.mocky.io/v3/f0fc7332-45c0-4be1-9910-66ad99b1c60f"
const article2Url = "https://run.mocky.io/v3/ea60522b-387c-4617-96be-a1254f6ecd40"
const article3Url = "https://run.mocky.io/v3/145d579a-ceb2-424a-af96-f0e081952a3b"

export function fetchData(url: string): Promise<any> {
  const promise = new Promise((resolve) => {
    const fetchRequest = fetch(url)
    fetchRequest.then((res) => {
      res.json().then((json) => {
        resolve(json.data);
      })
    })
  });

  if (!cache.has(url)) {
    cache.set(url, promise);
  }
  return cache.get(url);
}

export function Articles1() {
  use<Awaited<ReturnType<typeof fetchData>>>(fetchData(article1Url))
  return (
    <h1>Loaded 1</h1>
  )
}

export function Articles2() {
  use<Awaited<ReturnType<typeof fetchData>>>(fetchData(article2Url))
  return (
    <h1>Loaded 2</h1>
  )
}

export function Articles3({ loading }: { loading: boolean }) {
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <h1>Loaded 3</h1>
  )
}

export function Articles4() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetchData(article1Url);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <h1>Loaded 4</h1>
  )
}

export function Articles5() {
  const articlesData: any[] = use<Awaited<ReturnType<typeof fetchData>>>(fetchData(articlesUrl))
  const articles = articlesData.map((article) => {
    let url = article1Url;
    switch (article.id) {
      case "1":
        url = article1Url;
        break;
      case "2":
        url = article2Url;
        break;
      case "3":
        url = article3Url;
        break;
    }
    return (
      <Article url={url} />
    )
  })
  return (
    <>
      {articles}
    </>
  )
}

export function Articles6({
  data
}: {
  data: any[];
}) {
  if (!data) {
    return <h2>Loading...</h2>
  }
  const articles = data.map((article) => {
    let url = article1Url;
    switch (article.id) {
      case "1":
        url = article1Url;
        break;
      case "2":
        url = article2Url;
        break;
      case "3":
        url = article3Url;
        break;
    }
    return (
      <Article2 url={url} />
    )
  })
  return (
    <>
      {articles}
    </>
  )

}

function Article({ url }: { url: string }) {
  const data = use<Awaited<ReturnType<typeof fetchData>>>(fetchData(url))
  return (
    <div key={data.id}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  )
}

function Article2({ url }: { url: string}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    (async () => {
      const data = await fetchData(url);
      setLoading(false);
      setData(data);
    })();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div key={data.id}>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  )
}