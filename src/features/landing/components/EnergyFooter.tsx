import { Link } from 'react-router-dom';
import brandLogo from '../../../assets/landing/brand-logo.png';
import waterSplashCans from '../../../assets/landing/water-splash-cans.jpeg';

export function EnergyFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="relative overflow-hidden border-b border-white/12">
        <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" src={waterSplashCans} />
        <div className="relative mx-auto max-w-[1660px] px-4 py-14 sm:py-16 md:py-20">
          <Link className="mx-auto flex w-fit items-center justify-center" to="/">
            <img alt="5-hour ENERGY" className="h-16 w-auto sm:h-20" src={brandLogo} />
          </Link>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.45fr] lg:gap-12">
            <FooterColumn
              title="Contact"
              items={['Elutions, LLC', '38905 Six Tech Dr.', 'Farmington Hills, MI 48331', '888-960-3499', 'Fill out this form']}
            />
            <FooterColumn title="Social" items={['Facebook', 'Instagram', 'Youtube', 'Twitter', 'TikTok']} />
            <FooterColumn title="Company" items={['Search', 'Return Policy', 'Shipping Policy', 'Subscription Terms', 'Parents', 'Accessibility']} />

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="energy-heading text-2xl font-black uppercase">Stay Informed</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/64 md:text-base">
                Get the latest updates, new product information, emails, and targeted marketing from the makers of 5-hour ENERGY.
              </p>
              <form className="mt-6 flex max-w-xl overflow-hidden rounded-full bg-white p-1">
                <input
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-5 text-sm text-black outline-none"
                  placeholder="Your Email"
                  type="email"
                />
                <button className="grid h-12 w-16 place-items-center rounded-full bg-[#ffe500] font-black text-black transition hover:bg-black hover:text-white sm:w-20" type="submit">
                  &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1660px] flex-col gap-4 px-4 py-6 text-center text-xs text-white/55 md:flex-row md:items-center md:justify-between md:text-left">
        <p>Copyright 2024 Living Essentials Marketing, LLC. All rights reserved.</p>
        <p>Terms and Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="energy-heading text-2xl font-black uppercase text-white">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm text-white/64 md:text-base">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
