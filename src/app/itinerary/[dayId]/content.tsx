"use client";

import { Clock, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

interface DayDetailContentProps {
  day: any;
}

export default function DayDetailContent({ day }: DayDetailContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/itinerary"
          className="p-2 rounded-lg hover:bg-foreground/5"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{day.title}</h1>
            <Badge variant="info">{day.tripLeg.name}</Badge>
          </div>
          <p className="text-sm text-muted mt-1">{formatDate(day.date)}</p>
        </div>
      </div>

      {day.notes && (
        <Card>
          <p className="text-sm whitespace-pre-wrap">{day.notes}</p>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="font-semibold text-sm text-muted">
            Activities ({day.activities.length})
          </h2>
          {day.activities.length === 0 && (
            <p className="text-sm text-muted">No activities planned</p>
          )}
          {day.activities.map((activity: any) => (
            <Card key={activity.id} variant="compact">
              <div className="flex items-start gap-3">
                <div className="w-12 text-center shrink-0">
                  {activity.time ? (
                    <span className="text-xs font-mono font-medium text-muted">
                      {activity.time}
                    </span>
                  ) : (
                    <Clock className="h-4 w-4 text-muted mx-auto" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium">{activity.title}</h3>
                  {activity.description && (
                    <p className="text-xs text-muted mt-0.5">
                      {activity.description}
                    </p>
                  )}
                  {activity.location && (
                    <p className="text-xs text-muted mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {activity.location}
                    </p>
                  )}
                </div>
                {activity.category && (
                  <Badge variant="default">{activity.category}</Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

      </div>

    </div>
  );
}
