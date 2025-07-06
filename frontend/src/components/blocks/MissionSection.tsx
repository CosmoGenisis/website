import React from "react";

export function MissionSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Our mission & vision.
        </h1>
        <h2 className="text-4xl font-semibold text-gray-400 mb-12">
          Driving growth through data intelligence.
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Mission"
              className="w-full h-72 object-cover"
            />
            <div className="p-8 w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-gray-600 text-lg">
                Empowering businesses with innovative tools for smarter decision-making.
              </p>
            </div>
          </div>
          {/* Vision Card */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
              alt="Vision"
              className="w-full h-72 object-cover"
            />
            <div className="p-8 w-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600 text-lg">
                Transforming industries through advanced analytics and automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}