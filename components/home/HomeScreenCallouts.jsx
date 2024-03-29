import Image from "next/image";

const callouts = [
  {
    name: "Women's Fashion",
    description: "Shop this season's hottest looks for women.",
    image:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5d78f41fe7897489583dd0c7bf21b9c2.jpg?imageView2/2/w/800/q/70",
    alt: "callout",
  },
  {
    name: "Men's Fashion",
    description: "Shop all of the latest looks for men.",
    image: "https://m.media-amazon.com/images/I/713oUBcWw2L._AC_SX679_.jpg",
    alt: "callout",
  },
  {
    name: "Jewelry",
    description: "Find your next heirloom piece here.",
    image: "https://m.media-amazon.com/images/I/51pOQKxSSFL._AC_SX679_.jpg",
    alt: "callout",
  },
  {
    name: "Shoes",
    description: "Treat your feet.",
    image:
      "https://assets.hermes.com/is/image/hermesproduct/paris-loafer--182182Z%2004-front-wm-1-0-0-800-800_g.jpg",
    alt: "callout",
  },
  {
    name: "Handbags",
    description: "Shop for your luxury leather and vegan leather pieces.",
    image:
      "https://media.gucci.com/style/White_Center_0_0_500x340/1515492904/443497_DTDIT_1000_001_063_0000_Light-GG-Marmont-small-matelass-shoulder-bag.jpg",
    alt: "callout",
  },
  {
    name: "Makeup",
    description: "Because you are worth it.",
    image:
      "https://www.spacenk.com/dw/image/v2/ABCE_PRD/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw36e79458/products/CHARLOTTE/UK200027369_CHARLOTTE.jpg?sw=582&sh=582",
    alt: "callout",
  },
];

function HomeScreenCallouts() {
  return (
    <div className=" bg-gray-100 font-themeFont">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>

          <div className="mt-6 space-y-12 md:grid md:grid-cols-2 items-center lg:grid-cols-3 md:gap-x-6 gap-y-14 md:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={callout.image}
                    alt={callout.alt}
                    width={500}
                    height={500}
                    className="h-full w-full object-fill object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreenCallouts;
