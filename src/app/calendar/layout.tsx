import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule",
  description:
    "Weekly POP Pilates class schedule at UBC — times, instructors, and locations for every session.",
  alternates: {
    canonical: "https://ubcpilatesclub.vercel.app/calendar",
  },
  openGraph: {
    title: "Class Schedule | UBC Pilates Club",
    description:
      "Weekly POP Pilates class schedule at UBC — times, instructors, and locations for every session.",
    url: "https://ubcpilatesclub.vercel.app/calendar",
  },
};

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
