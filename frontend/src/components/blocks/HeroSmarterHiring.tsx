import dashboardImg from "@/images/Home.png";
import personImg from "@/images/People_8.png";

export default function HeroSmarterHiring() {
  return (
    <section className="w-full min-h-[700px] flex items-center justify-center relative overflow-hidden rounded-[40px]">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 rounded-[40px]"
        style={{
          background: "linear-gradient(180deg, #F8F6F2 0%, #F8E3F2 40%, #E9C7F7 70%, #F8D2E3 100%)",
        }}
      />
      {/* Subtle vertical stripes */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-[40px]"
        style={{
          background: `repeating-linear-gradient(
            to right,
            rgba(255,255,255,0.08) 0px,
            rgba(255,255,255,0.08) 2px,
            transparent 2px,
            transparent 120px
          )`
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex w-full max-w-8xl mx-auto items-center justify-between px-12 py-20">
        {/* Left side */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-2">
            Smarter Hiring Starts Here
          </h1>
          <p className="text-2xl font-medium text-gray-800 mb-8">
            All-in-one AI platform to find, assess, and onboard top talent faster.
          </p>
          <button className="px-8 py-4 rounded-full bg-black text-white text-xl font-medium shadow hover:bg-gray-900 transition w-fit border-2 border-white">
            Get Started
          </button>
        </div>
        {/* Right side */}
        <div className="relative flex items-end justify-end w-[600px] h-[520px]">
          {/* Dashboard image */}
          <img
            src={dashboardImg}
            alt="Dashboard"
            className="absolute left-0 bottom-0  object-contain rounded-2xl shadow-2xl"
            style={{
              transform: "rotate(-8deg)",
              boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)",
              background: "white",
            }}
          />
          {/* Person image */}
          <img
            src={personImg}
            alt="Person"
            className="relative z-10 w-[540px] h-[720px] object-contain"
            style={{
              marginLeft: "180px",
              marginBottom: "-100px",
            }}
          />
        </div>
      </div>
    </section>
  );
}