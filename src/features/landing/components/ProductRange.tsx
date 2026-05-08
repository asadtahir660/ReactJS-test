import { productCards } from '../landingData';
import { EnergyButtonLink } from './EnergyButton';

function getBadgeClass(category: string) {
  if (category.includes('Regular')) {
    return 'bg-[#ffe8e3] text-[#f04a1c]';
  }

  if (category.includes('Gamer')) {
    return 'bg-[#f1e7f2] text-[#8f4a88]';
  }

  if (category.includes('Drinks')) {
    return 'bg-[#ffe7ea] text-[#e91f37]';
  }

  return 'bg-[#dff5e9] text-[#148341]';
}

export function ProductRange() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-20 text-white" id="shop">
      <div className="absolute inset-x-0 top-0 h-[1060px] bg-black sm:h-[820px] xl:h-[760px]" />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="energy-heading product-range-heading mx-auto text-[38px] font-black uppercase leading-[0.95] text-white sm:text-5xl md:hidden">
            <span className="block">Explore Our</span>
            <span className="block">Range Of</span>
            <span className="block text-[#e8dc00]">Energy-Boosting Shots</span>
            <span className="block">For Every Need</span>
          </h2>
          <h2 className="energy-heading mx-auto hidden max-w-[calc(100vw-32px)] font-black uppercase leading-[0.95] text-white md:block md:text-7xl lg:text-[82px]">
            <span className="block md:inline">Explore Our Range Of </span>
            <span className="block text-[#e8dc00] md:inline">Energy-Boosting Shots </span>
            <span className="block md:inline">For Every Need</span>
          </h2>
          <p className="product-range-copy mx-auto mt-6 max-w-4xl text-base leading-7 text-white/64 md:text-lg">
            Boost your energy and focus with 5-hour ENERGY shots, crafted for fast results. Choose from a variety of strengths and
            flavors to fuel your day without the crash.
          </p>
        </div>

        <div className="mt-8 text-center">
          <EnergyButtonLink to="/signup">View All Products</EnergyButtonLink>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {productCards.map((product) => (
            <article
              className="product-card group mx-auto min-w-0 overflow-hidden rounded-[22px] bg-white text-black shadow-[0_20px_45px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_58px_rgba(0,0,0,0.22)]"
              key={product.name}
            >
              <div className="rounded-[22px] border-[14px] border-white bg-black">
                <div className={`relative grid aspect-square place-items-center overflow-hidden rounded-[12px] bg-radial-gradient ${product.glow} to-black`}>
                  <img
                    alt={product.name}
                    className="h-[88%] w-auto object-contain drop-shadow-[0_26px_44px_rgba(0,0,0,0.6)] transition duration-500 group-hover:scale-105"
                    src={product.image}
                  />
                  <button
                    aria-label={`Add ${product.name} to bag`}
                    className="absolute bottom-3 right-3 grid h-11 w-11 place-items-center rounded-[8px] bg-white text-black shadow-[0_10px_18px_rgba(0,0,0,0.25)] transition hover:bg-black hover:text-white"
                    type="button"
                  >
                    <span className="product-bag-icon" />
                  </button>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 md:px-7 md:pb-7">
                <p className={`inline-flex rounded-full px-4 py-2 text-sm font-black ${getBadgeClass(product.category)}`}>{product.category}</p>
                <h3 className="energy-heading mt-6 text-3xl font-black uppercase leading-none text-[#4b4b4b] md:text-[34px]">{product.name}</h3>
                <p className="mt-3 min-h-[56px] text-base leading-7 text-[#747474]">{product.description}</p>
                <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="energy-heading text-2xl font-black text-[#4b4b4b]">{product.price}</span>
                  <EnergyButtonLink className="min-h-10 w-full rounded-[18px_0_18px_0] px-6 py-2 text-sm sm:w-auto" to="/signup">
                    Shop Now
                  </EnergyButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
