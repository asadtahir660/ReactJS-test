import { useState } from 'react';
import { featuredProducts } from '../landingData';
import { EnergyButtonLink } from './EnergyButton';
import { FactIcon } from './FactIcons.tsx'; // ← new SVG icons

export function FeaturedProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const product = featuredProducts[activeIndex];

  function move(direction: 1 | -1) {
    setActiveIndex(
      (current) => (current + direction + featuredProducts.length) % featuredProducts.length,
    );
  }

  return (
    <section className="overflow-hidden bg-white py-24 md:py-32" id="featured-products">
      <div className="mx-auto max-w-[1740px] px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="energy-heading text-5xl font-black uppercase leading-[0.95] text-[#444] md:text-7xl lg:text-[86px]">
            Explore our{' '}
            <span className="text-[#e7db00]">Featured Products</span> to power through your day
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#777] md:text-xl">
            Discover our premium selection of 5-hour ENERGY shots, crafted to deliver long-lasting
            energy and mental clarity.
          </p>
        </div>

        <div className="mt-[72px] grid items-center gap-12 lg:grid-cols-[1fr_minmax(420px,600px)_1fr]">
          {/* ── Fact list (left column) ── */}
          <div className="grid gap-9">
            {product.facts.map((fact) => (
              <div
                className="grid grid-cols-[78px_1fr] items-center gap-5 md:grid-cols-[96px_1fr]"
                key={fact.title}
              >
                {/*
                  FactIcon renders the new inline SVG when a matching replacement exists
                  (runner → HoursIcon, bolt → CaffeineIcon, flame → FlavorIcon).
                  For any other icon (e.g. targetIcon) it falls back to a regular <img>.
                */}
                <div className="flex h-[72px] w-[72px] items-center justify-center md:h-20 md:w-20">
                  <FactIcon
                    className="h-[72px] w-[72px] object-contain md:h-20 md:w-20"
                    src={fact.icon}
                  />
                </div>

                <div>
                  <h3 className="energy-heading text-3xl font-black uppercase text-[#444] md:text-4xl">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#777] md:text-lg">{fact.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Product image (centre column) ── */}
          <div className="relative mx-auto grid min-h-[660px] w-full max-w-[630px] place-items-end md:min-h-[710px]">
            <div className="absolute top-8 h-[590px] w-[590px] max-w-[92vw] rounded-full border-4 border-[#efe400]" />
            <img
              alt={product.title}
              className="featured-product-image relative z-10 mx-auto max-h-[720px] w-auto max-w-[84%] object-contain"
              src={product.image}
            />
          </div>

          {/* ── Product info + navigation (right column) ── */}
          <div className="max-w-xl lg:pl-8">
            <p className="text-sm font-black uppercase text-[#e7db00]">{product.eyebrow}</p>
            <h3 className="energy-heading mt-3 text-5xl font-black uppercase text-[#444] md:text-6xl">
              {product.title}
            </h3>
            <p className="mt-6 text-xl leading-9 text-[#777]">{product.body}</p>
            <div className="mt-8">
              <EnergyButtonLink to="/signup">Shop Now</EnergyButtonLink>
            </div>
            <div className="mt-16 flex gap-4 md:mt-20">
              <button
                aria-label="Previous product"
                className="grid h-16 w-16 place-items-center rounded-full border border-[#ddd] text-3xl text-[#777] transition hover:border-black hover:bg-black hover:text-white"
                onClick={() => move(-1)}
                type="button"
              >
                &larr;
              </button>
              <button
                aria-label="Next product"
                className="grid h-16 w-16 place-items-center rounded-full bg-[#ffe500] text-3xl text-black transition hover:bg-black hover:text-white"
                onClick={() => move(1)}
                type="button"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}