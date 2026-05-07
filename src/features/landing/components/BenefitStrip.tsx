import { energyWords } from '../landingData';

const marqueeItems = [...energyWords, ...energyWords, ...energyWords];

export function BenefitStrip() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-20" aria-label="Energy benefits marquee">
      <div className="benefit-marquee">
        <div className="benefit-marquee-track">
          {marqueeItems.map((word, index) => (
            <div className="benefit-marquee-item" key={`${word.label}-${index}`}>
              <span className="energy-heading text-[58px] font-black uppercase leading-none text-[#444] sm:text-[78px] md:text-[92px]">
                {word.label}
              </span>
              <img alt="" className="h-16 w-16 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24" src={word.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
