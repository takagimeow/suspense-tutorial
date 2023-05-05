import React from "react";
import { use } from "../utils/use";

const cache = new Map();

function fetchData(url: string): Promise<any> {
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
  use<Awaited<ReturnType<typeof fetchData>>>(fetchData('https://run.mocky.io/v3/d6ac91ac-6dab-4ff0-a08e-9348d7deed51'))
  return (
    <h1>Loaded 1</h1>
  )
}

export function Articles2() {
  use<Awaited<ReturnType<typeof fetchData>>>(fetchData('https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead'))
  return (
    <h1>Loaded 2</h1>
  )
}