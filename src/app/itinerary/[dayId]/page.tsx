import { getDayById, getAllDayIds } from "@/lib/static-data";
import DayDetailContent from "./content";

export function generateStaticParams() {
  return getAllDayIds().map((id) => ({ dayId: id }));
}

export default async function DayDetailPage({
  params,
}: {
  params: Promise<{ dayId: string }>;
}) {
  const { dayId } = await params;
  const day = getDayById(dayId);

  if (!day) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted">Day not found</p>
      </div>
    );
  }

  return <DayDetailContent day={day} />;
}
