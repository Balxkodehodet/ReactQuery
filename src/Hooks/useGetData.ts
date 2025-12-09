import { useQuery } from "@tanstack/react-query";

export function getData(url: string) {
  return useQuery({
    queryKey: ["bible", url],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
