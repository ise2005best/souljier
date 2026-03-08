"use client"
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
const Carousel = () =>{
    const images = [
        "https://cdn.shopify.com/s/files/1/0700/5074/2539/files/GX8A5096.png?v=1772985334",
        "https://cdn.shopify.com/s/files/1/0700/5074/2539/files/GX8A4812.png?v=1772985336",
        "https://cdn.shopify.com/s/files/1/0700/5074/2539/files/GX8A4891.png?v=1772985335",
        "https://cdn.shopify.com/s/files/1/0700/5074/2539/files/GX8A4878.png?v=1772985335",
        "https://cdn.shopify.com/s/files/1/0700/5074/2539/files/GX8A5293.png?v=1772985336",
        "https://cdn.shopify.com/s/files/1/0700/5074/2539/files/GX8A5119.png?v=1772985336"
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    useEffect(() => {
        if (!emblaApi) return;
        let autoplayInterval: NodeJS.Timeout;
    
        const startAutoplay = setTimeout(() => {
          autoplayInterval = setInterval(() => emblaApi.scrollNext(), 5000);
        }, 3000);
    
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
    
        return () => {
          clearTimeout(startAutoplay);
          if (autoplayInterval) clearInterval(autoplayInterval);
        };
      }, [emblaApi]);
    return(
        <div className="flex flex-col">
        <div
          className="relative overflow-hidden w-full md:h-[75vh] h-[50vh]"
        >
          <div className="embla h-full w-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {images.map((image, index) => (
                <div
                  className="embla__slide flex-[0_0_100%] relative h-full"
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-secondary w-8"
                    : "bg-white/75 w-2"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    )
}

export default Carousel;