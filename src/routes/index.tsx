import { unstable_clientOnly } from "solid-start";
const ThemeSwitcher = unstable_clientOnly(
  () => import("@/components/ThemeSwitcher")
);

export default function Home() {
  return (
    <main class="p-4">
      <ThemeSwitcher fallback={<div>Loading...</div>} />
    </main>
  );
}
