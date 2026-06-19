"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, MapPin, Clock, Plus } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate, formatDateShort } from "@/lib/utils";

interface ItineraryContentProps {
  legs: any[];
}

export default function ItineraryContent({ legs }: ItineraryContentProps) {
  const [expandedLegs, setExpandedLegs] = useState<Set<string>>(
    new Set(legs.length > 0 ? [legs[0].id] : [])
  );

  const toggleLeg = (id: string) => {
    const next = new Set(expandedLegs);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedLegs(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Itinerary</h1>
          <p className="text-muted text-sm mt-1">
            92 days across {legs.length} trip legs
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {legs.map((leg: any) => {
          const isExpanded = expandedLegs.has(leg.id);
          return (
            <Card key={leg.id} className="overflow-hidden">
              <button
                onClick={() => toggleLeg(leg.id)}
                className="w-full flex items-center gap-3 p-4 hover:bg-foreground/5 transition-colors"
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: leg.color }}
                />
                <div className="flex-1 text-left">
                  <h3 className="font-semibold">{leg.name}</h3>
                  <p className="text-xs text-muted">
                    {formatDate(leg.startDate)} &ndash;{" "}
                    {formatDate(leg.endDate)} &middot; {leg.days.length} days
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-card-border">
                  {leg.days.map((day: any) => (
                    <Link
                      key={day.id}
                      href={`/itinerary/${day.id}`}
                      className="flex items-center gap-4 px-4 py-3 hover:bg-foreground/5 transition-colors border-b border-card-border last:border-b-0"
                    >
                      <div className="text-center w-10 shrink-0">
                        <p className="text-xs text-muted">
                          {new Date(day.date).toLocaleDateString("en-GB", {
                            month: "short",
                          })}
                        </p>
                        <p className="text-lg font-bold leading-tight">
                          {new Date(day.date).getDate()}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {day.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <MapPin className="h-3 w-3 text-muted" />
                          <span className="text-xs text-muted truncate">
                            {day.activities[0]?.location ||
                              "No activities yet"}{" "}
                            &middot; {day.activities.length} activities
                          </span>
                        </div>
                      </div>
                      {day.notes && (
                        <Badge variant="default" className="shrink-0">
                          Notes
                        </Badge>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
