import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link last:relative last:before:pointer-events-none last:before:absolute last:before:left-full last:before:top-[calc(50%-1px)] last:before:mr-6 last:before:h-0.5 last:before:w-[140px] last:before:bg-s5 last:before:content-[''] last:before:max-xl:w-[105px] last:before:max-lg:w-[80px] last:before:max-md:hidden last:after:pointer-events-none last:after:absolute last:after:left-[223px] last:after:top-[calc(50%-5px)] last:after:z-2 last:after:size-2.5 last:after:rounded-half last:after:border-2 last:after:border-s5 last:after:bg-s1 last:after:content-[''] last:after:max-xl:left-[187px] last:after:max-lg:left-[163px] last:after:max-md:hidden"
                  >
                    <a
                      href={url}
                      className="size-22 before:absolute before:inset-1.5 before:rounded-half before:bg-s2 before:content-[''] hover:border-s4 relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="relative z-2 flex size-full items-center justify-center transition-all duration-500 fill-p1">
                        {icon}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="before:g8 before:absolute before:-top-0.5 before:right-6 before:h-0.5 before:w-[63.2%] before:opacity-40 before:content-[''] after:g8 after:absolute after:-bottom-0.5 after:left-6 after:h-0.5 after:w-[42.2%] after:opacity-40 after:content-[''] rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="absolute top-6 size-2.5 rounded-half left-6 bg-p2" />
                  <span className="absolute top-6 size-2.5 rounded-half left-11 bg-s3" />
                  <span className="absolute top-6 size-2.5 rounded-half left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
export default Download;
