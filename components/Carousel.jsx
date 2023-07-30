"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { FaGithub } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CustomCarousel({ images }) {
  return (
    <Carousel
      showArrows={true}
      showIndicators={true}
      infiniteLoop={true}
      dynamicHeight={false}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
    >
      {images.map((image) => (
        <div key={image.id}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={500}
            className="brightness-[0.6]"
          />
          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white p-2 text-sm">
            <h4 className="text-lg md:text-2xl font-bold">{image.title}</h4>
            <p className="text-xs md:text-sm pt-1">{image.description}</p>
            {image.technologies && (
              <div className="flex flex-row justify-center gap-2 pt-2">
                {image.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500 text-white px-2 py-1 text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-row justify-center gap-2 pt-3">
              <Link href={image.github} target="_blank">
                <FaGithub className="text-md sm:text-xl" />
              </Link>
              <Link href={image.url} target="_blank">
                <FiMonitor className="text-md sm:text-xl" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
