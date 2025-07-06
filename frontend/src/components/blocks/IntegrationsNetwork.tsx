import { Repeat, Clock, SlidersHorizontal } from "lucide-react";
import img1 from "@/images/agent1.png";
import img2 from "@/images/agent2.png";
import img3 from "@/images/agent3.png";
import img4 from "@/images/agent4.png";
import img5 from "@/images/agent5.png";
import img6 from "@/images/agent6.png";
import imgCenter from "@/images/agent-center.png";

const ICONS = [
  { icon: Repeat, label: "Seamless Automation" },
  { icon: Clock, label: "Real-Time Data Sync" },
  { icon: SlidersHorizontal, label: "Customizable Solutions" },
];

export function IntegrationsNetwork() {
  // Fixed positions for 3 left, 3 right, 1 center
  // ...existing code...
  // Make the network area wider and taller, and adjust positions
  const positions = [
    { img: img1, name: "Monica", left: 80, top: 80 },
    { img: img2, name: "Emma", left: 80, top: 340 },
    { img: img3, name: "Laxmi", left: 80, top: 600 },
    { img: img4, name: "Onix", left: 1180, top: 80 },
    { img: img5, name: "Prime HR", left: 1180, top: 340 },
    { img: img6, name: "Nova", left: 1180, top: 600 },
  ];
  const center = { left: 700, top: 350 };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 w-full">
      {/* Badge */}
      <div className="mb-4 mt-16">
        <span className="px-6 py-2 rounded-full bg-blue-50 text-blue-900 font-bold text-lg shadow flex items-center gap-3">
          <span>
            <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="11" stroke="#64748b" strokeWidth="2"/><path d="M7 12h10M12 7v10" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/></svg>
          </span>
          Integrations
        </span>
      </div>
      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-white mb-4 text-center w-full">Integrates with</h1>
      <p className="text-white text-2xl mb-14 text-center w-full">Seamlessly integrate with all of your favorite agents</p>
      {/* Network */}
      <div className="relative w-[1400px] h-[800px] mx-auto">
        {/* SVG dashed elbow lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" width={1400} height={800}>
          {/* Left Top */}
          <path
            d="M220 160 H600 Q700 160 700 400"
            stroke="#35737a"
            strokeWidth="5"
            strokeDasharray="16 12"
            opacity="0.7"
            fill="none"
          />
          {/* Left Middle */}
          <path
            d="M220 420 H700"
            stroke="#35737a"
            strokeWidth="5"
            strokeDasharray="16 12"
            opacity="0.7"
            fill="none"
          />
          {/* Left Bottom */}
          <path
            d="M220 680 H600 Q700 680 700 400"
            stroke="#35737a"
            strokeWidth="5"
            strokeDasharray="16 12"
            opacity="0.7"
            fill="none"
          />
          {/* Right Top */}
          <path
            d="M1180 160 H800 Q700 160 700 400"
            stroke="#35737a"
            strokeWidth="5"
            strokeDasharray="16 12"
            opacity="0.7"
            fill="none"
          />
          {/* Right Middle */}
          <path
            d="M1180 420 H700"
            stroke="#35737a"
            strokeWidth="5"
            strokeDasharray="16 12"
            opacity="0.7"
            fill="none"
          />
          {/* Right Bottom */}
          <path
            d="M1180 680 H800 Q700 680 700 400"
            stroke="#35737a"
            strokeWidth="5"
            strokeDasharray="16 12"
            opacity="0.7"
            fill="none"
          />
        </svg>
        {/* Left images */}
        {positions.slice(0, 3).map((pos, i) => (
          <div
            key={i}
            className="absolute w-44 h-44 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center"
            style={{
              left: pos.left,
              top: pos.top,
              boxShadow: "0 12px 36px 0 rgba(31, 38, 135, 0.14)",
            }}
          >
            <img src={pos.img} alt={`Agent ${i + 1}`} className="w-32 h-32 object-contain" />
            <span className="mt-4 text-2xl font-bold text-gray-800">{pos.name}</span>
          </div>
        ))}
        {/* Right images */}
        {positions.slice(3).map((pos, i) => (
          <div
            key={i + 3}
            className="absolute w-44 h-44 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center"
            style={{
              left: pos.left,
              top: pos.top,
              boxShadow: "0 12px 36px 0 rgba(31, 38, 135, 0.14)",
            }}
          >
            <img src={pos.img} alt={`Agent ${i + 4}`} className="w-32 h-32 object-contain" />
            <span className="mt-4 text-2xl font-bold text-gray-800">{pos.name}</span>
          </div>
        ))}
        {/* Center image */}
        <div
          className="absolute w-56 h-56 rounded-3xl bg-white shadow-2xl flex items-center justify-center"
          style={{
            left: center.left,
            top: center.top,
            transform: "translate(-50%, -25%)",
            boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.22)",
            zIndex: 10,
          }}
        >
          <img src={imgCenter} alt="Center Agent" className="w-40 h-40 object-contain" />
        </div>
      </div>
      {/* Features row */}
      <div className="flex flex-wrap items-center justify-center gap-20 mt-24 w-full">
        {ICONS.map(({ icon: Icon, label }, i) => (
          <div key={i} className="flex items-center gap-4 text-white text-2xl font-semibold">
            <Icon className="w-12 h-12 mr-2 text-gray-900" />
            <span>{label}</span>
            {i < ICONS.length - 1 && (
              <span className="mx-10 h-12 border-l-2 border-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}