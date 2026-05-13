import { faqItems } from '../landingData';
import { EnergyButtonLink } from './EnergyButton';
export function FaqSection() {
    return (<section className="bg-[#f6f7fb] py-24" id="faqs">
      <div className="mx-auto grid max-w-[1660px] gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="energy-heading text-5xl font-black uppercase leading-tight text-[#444]">Frequently Asked Questions</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#777]">
            Boost your energy and focus with 5-hour ENERGY® shots, crafted for fast results. Choose from a variety of strengths and flavors to fuel your day without the crash.
          </p>
          <div className="mt-8">
            <EnergyButtonLink to="/signup">View All</EnergyButtonLink>
          </div>
        </div>

        <div className="divide-y divide-[#e1e1e1]">
          {faqItems.map((item, index) => (<details className="group py-7" key={item} open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black uppercase text-[#333]">
                {item}
                <span className="text-xl text-[#777] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#777]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Clear answers help visitors move through the page quickly.
              </p>
            </details>))}
        </div>
      </div>
    </section>);
}
