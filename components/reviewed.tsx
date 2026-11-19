import { site } from "@/lib/site";
import { lastmod } from "@/lib/lastmod";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function fmt(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function ReviewedBy({
  url,
  medical = true,
}: {
  url: string;
  medical?: boolean;
}) {
  return (
    <p className="rev-line">{`${medical ? "Medically reviewed" : "Reviewed"} by ${site.doctor.name}, ${site.doctor.role}, ${site.brand}, ${site.address.city}. Last reviewed ${fmt(lastmod(url))}.`}</p>
  );
}
