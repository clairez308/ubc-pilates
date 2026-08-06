"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Button from "@/components/ui/Button";
import { events } from "@/data/events";

function formatDate(isoDate: string, time?: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const formatted = new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return time ? `${formatted}, ${time}` : formatted;
}

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All");

  // Anything dated today or later counts as upcoming; everything else is past.
  // No manual flag to maintain — an event moves itself once its date passes.
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const upcomingEvents = useMemo(
    () =>
      events
        .filter((event) => event.date >= todayISO)
        .sort((a, b) => a.date.localeCompare(b.date)),
    [todayISO]
  );

  const pastEvents = useMemo(
    () =>
      events
        .filter((event) => event.date < todayISO)
        .sort((a, b) => b.date.localeCompare(a.date)),
    [todayISO]
  );

  const years = useMemo(
    () =>
      Array.from(new Set(pastEvents.map((event) => event.date.slice(0, 4)))).sort(
        (a, b) => b.localeCompare(a)
      ),
    [pastEvents]
  );

  const filteredPastEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return pastEvents.filter((event) => {
      const matchesYear =
        selectedYear === "All" || event.date.slice(0, 4) === selectedYear;
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query);
      return matchesYear && matchesSearch;
    });
  }, [pastEvents, search, selectedYear]);

  const eventsByYear = useMemo(() => {
    const grouped = new Map<string, typeof filteredPastEvents>();
    for (const event of filteredPastEvents) {
      const year = event.date.slice(0, 4);
      if (!grouped.has(year)) grouped.set(year, []);
      grouped.get(year)!.push(event);
    }
    return Array.from(grouped.entries()).sort((a, b) => b[0].localeCompare(a[0]));
  }, [filteredPastEvents]);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 bg-cream">
      <motion.h1
        className="font-heading text-4xl text-center text-ink mb-10 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Events
      </motion.h1>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl mb-6 text-ink">Upcoming Events</h2>
        {upcomingEvents.length === 0 ? (
          <div className="bg-white rounded-xl border-2 border-ink p-8 text-center shadow-[4px_4px_0_0_#004669]">
            <p className="text-ink/70 mb-4">
              No upcoming events on the calendar right now — follow us on
              Instagram to be the first to know when we announce the next one!
            </p>
            <div className="flex justify-center">
              <Button
                href="https://www.instagram.com/ubcpilatesclub"
                variant="primary"
              >
                Follow on Instagram
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title + event.date}
                className="bg-white rounded-xl border-2 border-ink overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -4, boxShadow: "6px 6px 0 0 #004669" }}
                style={{ boxShadow: "4px 4px 0 0 #004669" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                <div className="w-full h-64 overflow-hidden bg-cream border-b-2 border-ink">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ink">{event.title}</h3>
                  <p className="text-denim font-bold mb-4">
                    {formatDate(event.date, event.time)}
                  </p>
                  <p className="mb-6 text-ink/70">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Past Events archive */}
      <div>
        <h2 className="font-heading text-2xl mb-6 text-ink">Past Events</h2>

        {/* Search + year filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/50"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search past events..."
              aria-label="Search past events"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border-2 border-ink bg-white text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-denim focus-visible:outline-offset-2"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear("All")}
              aria-pressed={selectedYear === "All"}
              className={`px-4 py-2 rounded-lg font-bold text-sm border-2 transition-colors duration-150 ${
                selectedYear === "All"
                  ? "bg-lightyellow text-ink border-ink"
                  : "bg-white text-ink/70 border-ink/20 hover:border-ink"
              }`}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                aria-pressed={selectedYear === year}
                className={`px-4 py-2 rounded-lg font-bold text-sm border-2 transition-colors duration-150 ${
                  selectedYear === year
                    ? "bg-lightyellow text-ink border-ink"
                    : "bg-white text-ink/70 border-ink/20 hover:border-ink"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {eventsByYear.length === 0 ? (
          <div className="bg-white rounded-xl border-2 border-ink p-8 text-center shadow-[4px_4px_0_0_#004669]">
            <p className="text-ink/70">
              No past events match “{search}”{selectedYear !== "All" ? ` in ${selectedYear}` : ""}.
            </p>
          </div>
        ) : (
          eventsByYear.map(([year, yearEvents]) => (
            <div key={year} className="mb-12">
              <h3 className="font-heading text-xl text-ink mb-4 border-b-2 border-ink/15 pb-2">
                {year}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {yearEvents.map((event, index) => (
                  <motion.div
                    key={event.title + event.date}
                    className="bg-white rounded-xl border-2 border-ink overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ y: -4, boxShadow: "6px 6px 0 0 #004669" }}
                    style={{ boxShadow: "3px 3px 0 0 #004669" }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  >
                    <div className="w-full h-48 overflow-hidden bg-cream border-b-2 border-ink">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1 text-ink">{event.title}</h3>
                      <p className="text-denim font-bold mb-2">
                        {formatDate(event.date, event.time)}
                      </p>
                      <p className="text-sm mb-4 line-clamp-3 text-ink/70">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
