import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "@/lib/data";

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
