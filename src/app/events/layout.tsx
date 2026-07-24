import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming UBC Pilates Club events, collabs, and special sessions happening on campus in Vancouver.",
  alternates: {
    canonical: "https://ubcpilatesclub.vercel.app/events",
  },
  openGraph: {
    title: "Events | UBC Pilates Club",
    description:
      "Upcoming UBC Pilates Club events, collabs, and special sessions happening on campus in Vancouver.",
    url: "https://ubcpilatesclub.vercel.app/events",
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
