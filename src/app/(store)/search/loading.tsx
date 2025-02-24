"use client";

import { Skeleton } from "@/components/skeleton";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchLoadingBase() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">{query}</span>
      </p>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
        <Skeleton className="h-[380px]" />
      </div>
    </div>
  );
}

export default function SearchLoading() {
  return (
    <Suspense>
      <SearchLoadingBase />
    </Suspense>
  );
}
