import { useEffect, useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading';
const testimonials = [
    {
        name: 'Anna Perkins',
        source: 'Wellness Wonderland',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Jordan Miles',
        source: 'Early Shift Crew',
        text: 'Fast, simple, and easy to keep on hand. This is the little shot I reach for when the day needs a sharper start.'
    },
    {
        name: 'Sara Khan',
        source: 'Focus Club',
        text: 'The flavor lineup feels bold and the energy support is exactly what I want before long work sessions.'
    },
    {
        name: 'Noah Carter',
        source: 'Road Team',
        text: 'Compact bottle, quick routine, and no heavy drink format. It fits perfectly into busy mornings.'
    }
];
export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const visibleCards = useMemo(() => {
        const previous = (activeIndex - 1 + testimonials.length) % testimonials.length;
        const next = (activeIndex + 1) % testimonials.length;
        return [
            { ...testimonials[previous], position: 'side' },
            { ...testimonials[activeIndex], position: 'active' },
            { ...testimonials[next], position: 'side' }
        ];
    }, [activeIndex]);
    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 4500);
        return () => window.clearInterval(timer);
    }, []);
    function move(direction) {
        setActiveIndex((current) => (current + direction + testimonials.length) % testimonials.length);
    }
    return (<section className="overflow-hidden bg-white py-24 md:py-28">
      <div className="mx-auto max-w-[1660px] px-4">
        <SectionHeading description="Lorem ipsum dolor sit amet, consectetur ading elit. Lorem ipsum dolor sit amet, conetur ading elit." highlight="Testimonials" title="View Testimonials From Our Customers"/>

        <div className="relative mt-16">
          <div className="grid items-center gap-6 lg:grid-cols-[0.72fr_1.28fr_0.72fr]">
            {visibleCards.map((testimonial) => (<article className={`testimonial-card rounded-[10px] bg-white px-7 py-10 text-center shadow-[0_12px_38px_rgba(0,0,0,0.09)] md:px-12 ${testimonial.position === 'active' ? 'testimonial-card-active' : 'testimonial-card-side'}`} key={`${testimonial.name}-${testimonial.position}`}>
                <p className="energy-heading text-8xl font-black leading-none text-[#ffe500]">"</p>
                <p className="mx-auto mt-2 max-w-3xl text-base leading-8 text-[#777] md:text-lg">{testimonial.text}</p>
                <div className="mt-8 text-sm text-[#555]">
                  <p>{testimonial.source}</p>
                  <p className="font-black text-[#333]">{testimonial.name}</p>
                </div>
              </article>))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (<button aria-label={`Show testimonial from ${testimonial.name}`} className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-12 bg-[#ffe500]' : 'w-3 bg-[#dcdcdc] hover:bg-[#ffe500]'}`} key={testimonial.name} onClick={() => setActiveIndex(index)} type="button"/>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
