export default function SunStatus({ data }) {
  if (data) {
    const astro = data.astro;
    return (
      <div
        id="sun-status"
        className="bg-[url('./assets/sunset.jpg')] bg-cover bg-center h-50 md:bg-bottom md:h-30 flex justify-between items-end text-white text-xl md:text-lg p-5"
      >
        <span>{astro.sunrise}</span>
        <span>{astro.sunset}</span>
      </div>
    );
  }
}
