import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "@/images/Dashboard1.png";

export  function TeamsPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Teams Section */}
      <div className="w-full h-full">
        <div className="">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-4xl font-bold mb-6">Built for Real Teams</h3>
              <p className="text-blue-100 mb-8 text-2xl">
                Whether you're a solo founder, HR leader, finance admin, or recruiter — Zordie agents empower you to work smarter, faster, and more confidently.
              </p>
              <div className="text-4xl font-bold mb-2">One platform.</div>
              <div className="text-4xl font-bold mb-2">Infinite intelligence.</div>
              <div className="text-4xl font-bold">Fully autonomous.</div>
              
              <div className="mt-10">
                <button className="px-8 py-4 bg-white text-blue-600 font-medium rounded-2xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-xl" onClick={() => navigate("/pre-access")}>
                  Get Started Today
                  
                </button>
              </div>
            </div>
            
            <div className=" flex items-center justify-center">
                <img 
                    src={img1}
                    alt="Prime Agent Dashboard" 
                    className="w-full h-auto object-contain rounded-3xl shadow-lg"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}