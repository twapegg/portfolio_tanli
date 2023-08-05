import CustomCarousel from "./Carousel";
import WorksData from "../data/works.js";

export default function Works() {
  return (
    <section
      className="mb-24 lg:mb-12 lg:min-h-screen flex flex-col items-center"
      id="works"
    >
      <h1 className="text-white text-6xl mb-12  ">My Works</h1>
      <div className="h-100 w-100 md:h-1/3 md:w-2/3">
        <CustomCarousel images={WorksData} />
      </div>
    </section>
  );
}
