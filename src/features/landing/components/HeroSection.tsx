import heroBottleGroup from '../../../assets/landing/hero-bottle-group.png';
import { EnergyButtonLink } from './EnergyButton';

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-black pb-24 pt-28 text-white sm:pb-28 md:pb-32 md:pt-[200px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,229,0,0.1),transparent_45%)]" />
      <div className="mx-auto grid min-h-[680px] max-w-[1760px] place-items-center px-4 sm:min-h-[740px] md:min-h-[800px]">
        <div className="relative flex w-full flex-col items-center text-center">
          <div className="inline-block leading-none">

           <h1 className="relative select-none text-[86px] font-black uppercase leading-[0.82] text-[#e7db00] sm:text-[150px] md:text-[230px] lg:text-[330px] xl:text-[370px]"
            data-text="Energy">
              <span className="perspective-text block">
                ENERGY
              </span>
              <span className="perspective-shadow block">
                ENERGY
              </span>
            </h1>
          </div>

          <img
            alt="Rocket Raspberry and Berry 5-hour ENERGY bottles"
            className="hero-bottle-group relative z-10 -mt-10 w-[min(750px,92vw)] object-contain sm:-mt-20 md:-mt-36 lg:-mt-[20%]"
            src={heroBottleGroup}
          />

          <p className="hero-copy mx-auto -mt-6 max-w-4xl text-base leading-7 text-white/62 sm:-mt-10 md:text-lg">
            Lorem ipsum dolor sit amet, conetur ading elit. Lorem ipsum dolor sit amet, conetur ading elit.
          </p>
          <div className="mt-7">
            <EnergyButtonLink to="/signup">Shop Now</EnergyButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
