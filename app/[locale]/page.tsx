import { HomeImpactCard } from "@/components/cards";
import constants from "@/utils/constants";
export default async function Page() {
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];
  return (
    <div className="h-full w-full max-w-7xl flex-1 bg-red-200">
      {/* <p>Hello: {t("hello.world2")}</p> */}
      <div className="flex w-full flex-wrap justify-center gap-4 bg-gray-900 px-1 py-6 sm:gap-6 sm:py-6 lg:flex-nowrap lg:gap-8">
        {constants.domainDetails.map((detail) => (
          <HomeImpactCard key={detail.domain} {...detail} />
        ))}
      </div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
