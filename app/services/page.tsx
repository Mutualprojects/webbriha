"use client";

import { useParams } from "next/navigation";
import InstallationDetail from "@/components/InstallationDetail";

export default function Page() {
  const { slug } = useParams();

  return <InstallationDetail slug={String(slug)} />;
}
