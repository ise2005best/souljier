"use client";

const ProductSkeleton = () => {
  return (
    <div className="bg-white animate-pulse">
      {/* MOBILE */}
      <div className="md:hidden flex flex-col">
        {/* Image */}
        <div
          className="w-full bg-gray-200"
          style={{ aspectRatio: "4/5" }}
        />

        <div className="px-5 py-8 space-y-6">
          {/* Title */}
          <div className="h-6 bg-gray-200 rounded w-2/3" />

          {/* Price */}
          <div className="h-5 bg-gray-200 rounded w-1/4" />

          {/* Variant selector */}
          <div className="flex gap-3 mt-4">
            {[1,2,3].map((i) => (
              <div
                key={i}
                className="w-12 h-10 bg-gray-200 rounded"
              />
            ))}
          </div>

          {/* Add to cart */}
          <div className="h-12 bg-gray-200 rounded w-full mt-6" />

          {/* Accordion sections */}
          {[1,2,3].map((i) => (
            <div key={i} className="space-y-3 mt-4">
              <div className="h-4 bg-gray-200 rounded w-1/3" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex">
        {/* Image column */}
        <div className="flex-1 space-y-4 p-4">
          {[1,2,3].map((i) => (
            <div
              key={i}
              className="w-full bg-gray-200"
              style={{ aspectRatio: "5/4" }}
            />
          ))}
        </div>

        <div className="w-[2px] bg-secondary" />

        {/* Product info */}
        <div className="w-[40%] p-10 space-y-6">
          <div className="h-8 bg-gray-200 rounded w-2/3" />

          <div className="h-6 bg-gray-200 rounded w-1/4" />

          <div className="flex gap-3">
            {[1,2,3].map((i) => (
              <div key={i} className="w-14 h-10 bg-gray-200 rounded" />
            ))}
          </div>

          <div className="h-12 bg-gray-200 rounded w-full" />

          {[1,2,3].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;