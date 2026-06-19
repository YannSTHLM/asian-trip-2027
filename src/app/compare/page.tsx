import { ROUTE_COMPARISONS, type RouteComparison, type LegScheduleEntry } from "../../../trip-config";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { formatSEK } from "@/lib/utils";

function StarRating({ n, max = 5 }: { n: number; max?: number }) {
  return (
    <span className="text-amber-500 font-mono tracking-wider">
      {"★".repeat(Math.min(n, max))}
      {"☆".repeat(Math.max(0, max - n))}
    </span>
  );
}

function WinnerCell({ children, isWinner }: { children: React.ReactNode; isWinner: boolean }) {
  return (
    <td className={`py-3 px-4 ${isWinner ? "bg-emerald-500/10" : ""}`}>
      {children}
    </td>
  );
}

function findWinner(values: (number | string)[]): number {
  const nums = values.map((v) => (typeof v === "number" ? v : parseInt(v as string)));
  const max = Math.max(...nums);
  return nums.indexOf(max);
}

function findMinWinner(values: (number | string)[]): number {
  const nums = values.map((v) => (typeof v === "number" ? v : parseInt(v as string)));
  const min = Math.min(...nums);
  return nums.indexOf(min);
}

export default function ComparePage() {
  const routes = ROUTE_COMPARISONS;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Deep Route Comparison</h1>
        <p className="text-muted text-sm mt-1">
          25+ dimensions compared across three trip options
        </p>
      </div>

      {/* Score Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        {routes.map((r) => (
          <Card key={r.id} className="text-center">
            <div className="text-2xl mb-1">{r.flagEmojis}</div>
            <h3 className="font-bold text-sm mb-2">{r.label}</h3>
            <div className="text-sm space-y-1">
              <p>
                <span className="text-muted">Budget:</span>{" "}
                <span className="font-semibold">{formatSEK(r.budgetSEK)}</span>
              </p>
              <p>
                <span className="text-muted">Days:</span>{" "}
                <span className="font-semibold">{r.totalDays}</span>
              </p>
              <p>
                <span className="text-muted">Best for:</span>{" "}
                <span className="font-semibold">{r.bestFor}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Best Timing Overview */}
      <BestTimingSection routes={routes} />

      {/* Full Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Comparison Matrix</CardTitle>
          <span className="text-xs text-muted">
            Cells highlighted in green indicate the best score
          </span>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-3 px-4 font-medium text-muted w-52">Dimension</th>
                {routes.map((r) => (
                  <th key={r.id} className="text-left py-3 px-4 font-medium min-w-48">
                    <span className="text-lg mr-1">{r.flagEmojis}</span>
                    {r.label.replace(/.*→ /, "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* === GEOGRAPHY === */}
              <SectionHeader label="🌍 Geography" colSpan={3} />
              <DataRow
                label="Countries"
                values={routes.map((r) => r.countries.join(" → "))}
              />
              <DataRow
                label="Total distance"
                values={routes.map((r) => `${(r.totalDistanceKm / 1000).toFixed(0)}k km`)}
                winnerIdx={findMinWinner(routes.map((r) => r.totalDistanceKm))}
              />
              <DataRow
                label="Flights needed"
                values={routes.map((r) => String(r.flightsNeeded))}
                winnerIdx={findMinWinner(routes.map((r) => r.flightsNeeded))}
              />
              <DataRow
                label="Longest journey"
                values={routes.map((r) => r.longestSingleJourney)}
              />

              {/* === WEATHER === */}
              <SectionHeader label="🌡️ Weather" colSpan={3} />
              <DataRow
                label="Avg temp February"
                values={routes.map((r) => `${r.avgTempFeb}°C`)}
                winnerIdx={findWinner(routes.map((r) => r.avgTempFeb))}
              />
              <DataRow
                label="Avg temp March"
                values={routes.map((r) => `${r.avgTempMar}°C`)}
                winnerIdx={findWinner(routes.map((r) => r.avgTempMar))}
              />
              <DataRow
                label="Avg temp April"
                values={routes.map((r) => `${r.avgTempApr}°C`)}
                winnerIdx={findWinner(routes.map((r) => r.avgTempApr))}
              />
              <DataRow
                label="Avg temp May"
                values={routes.map((r) => `${r.avgTempMay}°C`)}
              />
              <DataRow
                label="Rain days (trip period)"
                values={routes.map((r) => `~${r.rainDays} days`)}
                winnerIdx={findMinWinner(routes.map((r) => r.rainDays))}
              />
              <DataRow label="Best month" values={routes.map((r) => r.bestMonth)} />
              <DataRow label="Worst month" values={routes.map((r) => r.worstMonth)} />

              {/* === COST === */}
              <SectionHeader label="💰 Cost (2 travelers)" colSpan={3} />
              <DataRow
                label="Total budget"
                values={routes.map((r) => formatSEK(r.budgetSEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.budgetSEK))}
              />
              <DataRow
                label="Per day per person"
                values={routes.map((r) => formatSEK(r.perDayCostSEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.perDayCostSEK))}
              />
              <DataRow
                label="Domestic flights"
                values={routes.map((r) => formatSEK(r.flightCostSEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.flightCostSEK))}
              />
              <DataRow
                label="Accommodation (avg/night)"
                values={routes.map((r) => formatSEK(r.accomAvgSEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.accomAvgSEK))}
              />
              <DataRow
                label="Food (per day/person)"
                values={routes.map((r) => formatSEK(r.foodCostPerDaySEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.foodCostPerDaySEK))}
              />
              <DataRow
                label="Transport (total)"
                values={routes.map((r) => formatSEK(r.transportCostSEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.transportCostSEK))}
              />
              <DataRow
                label="Visa costs"
                values={routes.map((r) => formatSEK(r.visaCostSEK))}
                winnerIdx={findMinWinner(routes.map((r) => r.visaCostSEK))}
              />

              {/* === CULTURE === */}
              <SectionHeader label="🏛️ Culture & History" colSpan={3} />
              <DataRow
                label="UNESCO sites"
                values={routes.map((r) => String(r.unescoSites))}
                winnerIdx={findWinner(routes.map((r) => r.unescoSites))}
              />
              <DataRow
                label="Culture score"
                values={routes.map((r) => <StarRating n={r.cultureScore} />)}
              />
              <DataRow label="Historical eras" values={routes.map((r) => r.historicalPeriods)} />

              {/* === FOOD === */}
              <SectionHeader label="🍜 Food" colSpan={3} />
              <DataRow
                label="Food score"
                values={routes.map((r) => <StarRating n={r.foodScore} />)}
              />
              <DataRow
                label="Street food rating"
                values={routes.map((r) => <StarRating n={r.streetFoodRating} />)}
              />
              <DataRow
                label="Signature dishes"
                values={routes.map((r) => (
                  <ul className="space-y-0.5">
                    {r.signatureDishes.map((d, i) => (
                      <li key={i} className="text-xs">{d}</li>
                    ))}
                  </ul>
                ))}
              />

              {/* === NATURE === */}
              <SectionHeader label="🏔️ Nature & Outdoors" colSpan={3} />
              <DataRow
                label="Beaches"
                values={routes.map((r) => <StarRating n={r.beaches} />)}
              />
              <DataRow
                label="Mountains"
                values={routes.map((r) => <StarRating n={r.mountains} />)}
              />
              <DataRow
                label="National parks"
                values={routes.map((r) => String(r.nationalParks))}
                winnerIdx={findWinner(routes.map((r) => r.nationalParks))}
              />
              <DataRow
                label="Nature score"
                values={routes.map((r) => <StarRating n={r.natureScore} />)}
              />

              {/* === ACTIVITIES === */}
              <SectionHeader label="🎯 Activities" colSpan={3} />
              <DataRow
                label="Hiking"
                values={routes.map((r) => <StarRating n={r.hikingScore} />)}
              />
              <DataRow
                label="Snorkeling / Diving"
                values={routes.map((r) => <StarRating n={r.snorkelingScore} />)}
              />
              <DataRow
                label="Cooking classes"
                values={routes.map((r) => (r.cookingClasses ? "✅ Yes" : "❌ No"))}
              />
              <DataRow
                label="Temples & shrines"
                values={routes.map((r) => <StarRating n={r.templeScore} />)}
              />

              {/* === LOGISTICS === */}
              <SectionHeader label="📋 Logistics & Safety" colSpan={3} />
              <DataRow label="Visa requirements" values={routes.map((r) => r.visaHassle)} />
              <DataRow
                label="Safety rating"
                values={routes.map((r) => <StarRating n={r.safetyRating} />)}
              />
              <DataRow
                label="Language barrier (lower = easier)"
                values={routes.map((r) => <StarRating n={r.languageBarrier} />)}
                winnerIdx={findMinWinner(routes.map((r) => r.languageBarrier))}
              />

              {/* === VIBE === */}
              <SectionHeader label="🎭 Vibe" colSpan={3} />
              <DataRow label="Best for" values={routes.map((r) => r.bestFor)} />
              <DataRow label="Crowds" values={routes.map((r) => r.crowds)} />
              <DataRow
                label="Instagram-friendly"
                values={routes.map((r) => <StarRating n={r.instagramScore} />)}
              />
              <DataRow
                label="Relaxation factor"
                values={routes.map((r) => <StarRating n={r.relaxationScore} />)}
              />

              {/* === SEASONAL === */}
              <SectionHeader label="📅 Seasonal Notes" colSpan={3} />
              <DataRow
                label="Cherry blossom"
                values={routes.map((r) => (r.hasCherryBlossom ? "🌸 Yes" : "—"))}
              />
              <DataRow
                label="Golden Week"
                values={routes.map((r) => (r.hasGoldenWeek ? "⚠️ Yes (Apr 29–May 5)" : "✅ No"))}
              />
              <DataRow label="Monsoon months" values={routes.map((r) => r.monsoonMonths)} />
              <DataRow label="Peak season" values={routes.map((r) => r.peakSeason)} />

              {/* === HIGHLIGHTS === */}
              <SectionHeader label="⭐ Highlights" colSpan={3} />
              <DataRow
                label="Top experiences"
                values={routes.map((r) => (
                  <ul className="space-y-1">
                    {r.highlights.map((h, i) => (
                      <li key={i} className="text-xs flex items-start gap-1">
                        <span className="text-primary mt-0.5">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                ))}
              />
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// ─── Best Timing Section ────────────────────────────────────────────────

const ANCHOR = new Date("2027-02-25");
const FULL_RANGE_MS = new Date("2027-07-08").getTime() - ANCHOR.getTime();

function dateOffset(dateStr: string): number {
  return (new Date(dateStr + "T00:00:00").getTime() - ANCHOR.getTime()) / FULL_RANGE_MS;
}

const MONTH_MARKS = [
  { label: "Feb", date: "2027-02-25" },
  { label: "Mar", date: "2027-03-01" },
  { label: "Apr", date: "2027-04-01" },
  { label: "May", date: "2027-05-01" },
  { label: "Jun", date: "2027-06-01" },
  { label: "Jul", date: "2027-07-01" },
];

const BORDER_COLORS: Record<string, string> = {
  "China #1": "#3b82f6",
  Vietnam: "#22c55e",
  Japan: "#ef4444",
  "China #2": "#f97316",
  Taiwan: "#8b5cf6",
  "Taiwan + Philippines": "#8b5cf6",
  Philippines: "#ec4899",
  "Central Asia": "#14b8a6",
  Uzbekistan: "#14b8a6",
  Kazakhstan: "#f97316",
};

function BestTimingSection({ routes }: { routes: RouteComparison[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Timing Overview</CardTitle>
        <span className="text-xs text-muted">
          Each route optimized for its own best travel window
        </span>
      </CardHeader>
      <div className="space-y-6">
        {/* Timeline */}
        <div className="relative pt-6 pb-2">
          {/* Month axis */}
          <div className="relative h-6 mb-1" style={{ marginLeft: `${dateOffset("2027-02-25") * 100}%` }}>
            {MONTH_MARKS.map((m) => (
              <div
                key={m.label}
                className="absolute text-xs text-muted -translate-x-1/2"
                style={{ left: `${dateOffset(m.date) * 100}%` }}
              >
                {m.label}
              </div>
            ))}
          </div>
          {/* Grid lines */}
          <div className="absolute inset-0" style={{ top: "1.5rem", bottom: 0 }}>
            {MONTH_MARKS.map((m) => (
              <div
                key={m.label}
                className="absolute top-0 bottom-0 border-l border-foreground/10"
                style={{ left: `${dateOffset(m.date) * 100}%` }}
              />
            ))}
          </div>

          {/* Route bars */}
          <div className="space-y-3 relative">
            {routes.map((route) => (
              <div key={route.id} className="flex items-center gap-3">
                <span className="text-xs font-medium w-6 shrink-0">{route.flagEmojis}</span>
                <div className="flex-1 relative h-8 rounded-lg overflow-hidden bg-foreground/5">
                  {route.legSchedule.map((leg: LegScheduleEntry) => (
                    <div
                      key={leg.name}
                      className="absolute top-0 h-full rounded flex items-center justify-center text-[10px] font-medium text-white truncate px-1"
                      style={{
                        left: `${dateOffset(leg.startDate) * 100}%`,
                        width: `${(dateOffset(leg.endDate) - dateOffset(leg.startDate)) * 100}%`,
                        backgroundColor: BORDER_COLORS[leg.name] || "#6b7280",
                        minWidth: "4px",
                      }}
                      title={`${leg.name}: ${leg.startDate} → ${leg.endDate} (${leg.weatherNotes})`}
                    >
                      {(dateOffset(leg.endDate) - dateOffset(leg.startDate)) > 0.1 ? leg.name : ""}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timing Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 px-3 font-medium text-muted w-52">Timing</th>
                {routes.map((r) => (
                  <th key={r.id} className="text-left py-2 px-3 font-medium">
                    <span className="text-base mr-1">{r.flagEmojis}</span>
                    {r.label.replace(/.*→ /, "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-card-border">
                <td className="py-2 px-3 text-muted text-xs">Optimal start</td>
                {routes.map((r) => (
                  <td key={r.id} className={`py-2 px-3 font-medium ${r.optimalStartDate === "2027-02-25" ? "text-emerald-500" : ""}`}>
                    {new Date(r.optimalStartDate + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    {r.id === "original" && <span className="text-emerald-500 ml-1">✓</span>}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-card-border">
                <td className="py-2 px-3 text-muted text-xs">Optimal end</td>
                {routes.map((r) => (
                  <td key={r.id} className="py-2 px-3 font-medium">
                    {new Date(r.optimalEndDate + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-card-border">
                <td className="py-2 px-3 text-muted text-xs">Total days</td>
                {routes.map((r) => (
                  <td key={r.id} className="py-2 px-3 font-medium">{r.totalDays}</td>
                ))}
              </tr>
              <tr className="border-b border-card-border">
                <td className="py-2 px-3 text-muted text-xs">Weather sweet spot</td>
                {routes.map((r) => (
                  <td key={r.id} className="py-2 px-3 font-medium">
                    {r.legSchedule.map((l: LegScheduleEntry) => l.name === "Vietnam" || l.name === "Central Asia" || l.name === "Japan" ? l.weatherNotes : null).filter(Boolean).join("; ")}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-card-border">
                <td className="py-2 px-3 text-muted text-xs">Key advantages</td>
                {routes.map((r) => (
                  <td key={r.id} className="py-2 px-3">
                    <ul className="text-xs space-y-0.5">
                      {r.id === "taiwan-philippines" && (
                        <>
                          <li className="text-emerald-500">✓ Peak dry season in Vietnam + Philippines</li>
                          <li>Pre-monsoon = less rain</li>
                          <li>Warm throughout</li>
                        </>
                      )}
                      {r.id === "central-asia" && (
                        <>
                          <li className="text-emerald-500">✓ Spring in China = comfortable</li>
                          <li>Perfect sightseeing temps in Central Asia</li>
                          <li>Avoids all monsoon</li>
                        </>
                      )}
                      {r.id === "original" && (
                        <>
                          <li className="text-emerald-500">✓ Sakura peak in Japan (Apr 6-May 1)</li>
                          <li className="text-amber-500">⚠ Golden Week Apr 29-May 5</li>
                          <li>Vietnam at its best</li>
                        </>
                      )}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

function SectionHeader({ label, colSpan }: { label: string; colSpan: number }) {
  return (
    <tr className="border-t-2 border-card-border bg-foreground/5">
      <td
        colSpan={colSpan + 1}
        className="py-2.5 px-4 font-bold text-xs uppercase tracking-wider"
      >
        {label}
      </td>
    </tr>
  );
}

function DataRow({
  label,
  values,
  winnerIdx,
}: {
  label: string;
  values: React.ReactNode[];
  winnerIdx?: number;
}) {
  return (
    <tr className="border-b border-card-border hover:bg-foreground/5">
      <td className="py-3 px-4 font-medium text-muted text-xs">{label}</td>
      {values.map((v, i) => (
        <WinnerCell key={i} isWinner={winnerIdx === i}>
          {winnerIdx === i ? (
            <span className="flex items-center gap-1">
              {v}
              <span className="text-emerald-500 text-xs" title="Best score">✓</span>
            </span>
          ) : (
            v
          )}
        </WinnerCell>
      ))}
    </tr>
  );
}
