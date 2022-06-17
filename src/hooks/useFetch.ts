import useSWR from 'swr';

export default function useFetch(url: string, fetchOptions: object = {}) {
    const fetcher = (...args: [string, object]) => fetch(...args).then((res) => res.json());
    return useSWR([url, fetchOptions], fetcher);
}

/*
HOW TO USE:

import useFetch from "hooks/useFetch";

export default function Home() {
    const { data, error } = useFetch("https://url.test", {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return <div>{data}</div>;
}
*/
