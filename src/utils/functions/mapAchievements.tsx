/* eslint-disable */
export const mapAchievements = (
  translationCallback: (code: any, index?: number) => string,
  achievmentsCount: number,
  translationKey: string,
) =>
  achievmentsCount <= 0
    ? []
    : Array.from({ length: achievmentsCount }).map((_, index: number) => (
        <li className="flex items-center gap-x-2">
          <span className="h-1 w-1 rounded-full bg-green-500 sm:h-1.5 sm:w-1.5"></span>
          <span key={index} className="text-xs text-black sm:text-sm">
            {translationCallback(`${translationKey}.achievements`, index)}
          </span>
        </li>
      ));
