export type HomeImpactCardProps = {
  icon: string;
  domain: string;
  detailNumber: number;
};
export type HomeProjectCardProps = {
  year: number;
  icon: string;
  translationKey: string;
  skills: string[];
  achievmentsCount?: number;
};

// Create a union 0 | 1 | 2 | ... | N
type Range<N extends number, Result extends number[] = []> = Result["length"] extends N
  ? [...Result, N][number]
  : Range<N, [...Result, Result["length"]]>;

export type NumRange<N extends number> = Range<N>;
