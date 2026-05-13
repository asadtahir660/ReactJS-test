import merchHoodie from '../../../assets/landing/merch-hoodie.png';
import merchShirt from '../../../assets/landing/merch-shirt.png';
import merchTank from '../../../assets/landing/merch-tank.png';
import promoCanBg from '../../../assets/landing/promo-can-bg.jpeg';
import bundleBoxes from '../../../assets/landing/products/bundle-boxes.png';
import berryPunchCan from '../../../assets/landing/products/berry-punch-can.png';
import fanFuel from '../../../assets/landing/products/fan-fuel.png';
import gamerRaspberry from '../../../assets/landing/products/gamer-raspberry.png';
import regularOrange from '../../../assets/landing/products/regular-orange.png';
import watermelon from '../../../assets/landing/products/watermelon.png';
import { EnergyButtonLink } from './EnergyButton';
export function PromoGrid() {
    const productLine = [berryPunchCan, regularOrange, watermelon, gamerRaspberry, fanFuel, regularOrange];
    return (<section className="bg-[#f6f7fb] py-16 md:py-20" id="build-a-bundle">
      <div className="mx-auto grid max-w-[1700px] gap-7 px-4 lg:grid-cols-[1fr_1fr]">
        <article className="relative min-h-[420px] overflow-hidden rounded-[14px] bg-black p-7 text-white md:min-h-[580px] md:p-9" style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.06)), url(${promoCanBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <h2 className="energy-heading text-4xl font-black uppercase leading-none md:text-6xl">
              Build a <span className="text-[#ffe500]">Bundle</span>
            </h2>
          <div className="mt-6">
            <EnergyButtonLink className="min-h-10 px-6 py-2 text-sm" to="/signup">
              Build Now
            </EnergyButtonLink>
          </div>
          <img alt="5-hour ENERGY bundle packs" className="absolute bottom-6 left-1/2 w-[88%] max-w-[760px] -translate-x-1/2 object-contain md:bottom-8" src={bundleBoxes}/>
        </article>

        <div className="grid gap-7">
          <article className="relative min-h-[270px] overflow-hidden rounded-[14px] bg-[#a3abbc] p-7 md:min-h-[276px] md:p-9" id="merch">
            <h2 className="energy-heading max-w-[54%] text-4xl font-black uppercase leading-none text-white md:text-6xl">
              See our <span className="text-[#ffe500]">Merch</span>
            </h2>
            <div className="mt-6">
              <EnergyButtonLink className="min-h-10 px-6 py-2 text-sm" to="/signup">
                View All
              </EnergyButtonLink>
            </div>
            <div className="absolute bottom-0 right-0 flex h-[210px] w-[66%] items-end justify-end overflow-hidden md:h-[245px]">
              <img alt="5-hour ENERGY t-shirt" className="h-[83%] translate-x-8 object-contain md:h-[88%]" src={merchShirt}/>
              <img alt="5-hour ENERGY tank top" className="relative z-10 h-full object-contain" src={merchTank}/>
              <img alt="5-hour ENERGY hoodie" className="h-[98%] -translate-x-6 object-contain" src={merchHoodie}/>
            </div>
          </article>

          <article className="relative min-h-[280px] overflow-hidden rounded-[14px] bg-black p-7 text-white md:min-h-[276px] md:p-9">
            <h2 className="energy-heading relative z-10 max-w-[94%] text-4xl font-black uppercase leading-none md:text-[54px]">
              Revitalize your day, <span className="text-[#ffe500]">nourish</span> yourself
            </h2>
            <div className="absolute bottom-0 left-4 right-4 flex h-[150px] items-end justify-center gap-1 md:h-[168px] md:gap-2">
              {productLine.map((image, index) => (<img alt="" className="h-full w-auto object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,.4)]" key={`${image}-${index}`} src={image}/>))}
            </div>
            <div className="promo-energy-strip energy-heading" aria-hidden="true">
              <span>Speed</span>
              <span>Focus</span>
              <span>Energy</span>
            </div>
          </article>
        </div>
      </div>
    </section>);
}
