export function SectionHeading({ title, highlight, description, align = 'center', light = false }) {
    const titleParts = highlight ? title.split(highlight) : [title];
    return (<div className={align === 'center' ? 'mx-auto max-w-5xl text-center' : 'max-w-2xl'}>
      <h2 className={`energy-heading break-words text-4xl font-black uppercase leading-[0.98] [overflow-wrap:anywhere] sm:text-5xl md:text-7xl lg:text-[82px] ${light ? 'text-white' : 'text-[#444]'}`}>
        {highlight && titleParts.length > 1 ? (<>
            {titleParts[0]}
            <span className="text-[#e8dc00]">{highlight}</span>
            {titleParts.slice(1).join(highlight)}
          </>) : (title)}
      </h2>
      {description ? (<p className={`mx-auto mt-5 max-w-4xl text-base leading-7 md:text-lg ${light ? 'text-white/62' : 'text-[#777]'}`}>{description}</p>) : null}
    </div>);
}
