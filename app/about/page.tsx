import Image from "next/image";
import { GoPlus } from "react-icons/go";

const AboutPage = () => {
  return (
    <div className="w-full min-h-[600px] sm:min-h-[800px] lg:min-h-[1024px] flex justify-center pt-[72px] md:pt-28">
      <main className="w-[90%] sm:w-[80%] lg:w-[70%] py-10 sm:py-20 flex flex-col gap-16 sm:gap-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center italic">
          About US
        </h1>

        {/* Section 1 */}
        <section className="flex flex-col lg:flex-row gap-10 px-4 sm:px-10 lg:px-20">
          <div className="w-full lg:w-[50%] flex flex-col gap-6">
            <Image
              src={"/About1.png"}
              alt="about image"
              height={298}
              width={335}
              className="rounded-2xl self-start"
            />
            <Image
              src={"/About2.png"}
              alt="about image"
              height={298}
              width={350}
              className="rounded-2xl self-center"
            />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col gap-8 sm:gap-10">
            <p className="text-base sm:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id. Praesent lorem orci,
              mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus
              vitae gravida viverra. Fusce vel tempor elit.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              <div className="size-14 bg-[url('/Pic1.jpg')] bg-cover bg-no-repeat rounded-full border-2 border-white"></div>
              <div className="size-14 bg-[url('/Pic2.jpg')] bg-cover bg-no-repeat -ml-4 sm:-ml-10 rounded-full border-2 border-white"></div>
              <div className="size-14 bg-[url('/Pic3.jpg')] bg-cover bg-no-repeat -ml-4 sm:-ml-10 rounded-full border-2 border-white"></div>
              <div className="size-14 bg-primary rounded-full border-2 border-white -ml-4 sm:-ml-10 flex items-center justify-center">
                <GoPlus className="size-10 text-[#374957]" />
              </div>
              <div className="flex flex-col justify-center ml-2 text-center sm:text-left">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-black">
                  4.9 Ratings+
                </h3>
                <p className="text-xs text-[#585858]">
                  Trusted by 10k+ customers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="text-base sm:text-lg lg:text-xl px-4 sm:px-10 lg:px-20">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet
          </p>
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 mt-10 sm:mt-20">
            <div className="flex flex-col gap-6 sm:gap-10 max-w-xl">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. Quisque
                sagittis orci ut diam condimentum, vel euismod erat placerat. In
                iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
                orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat
                lacus vitae gravida viverra. Fusce vel tempor elit.
              </p>
              <button className="w-fit px-6 sm:px-10 py-3 sm:py-4 rounded-4xl bg-[#FFF3A2] cursor-pointer text-sm sm:text-base">
                Learn more...
              </button>
            </div>
            <Image
              src={"/About3.png"}
              alt="About image"
              height={612}
              width={495}
              className="w-full max-w-[400px] sm:max-w-[495px] h-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
