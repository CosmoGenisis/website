import { LayersThree01, LayersTwo01, Zap } from "@untitledui/icons";
import { PricingTierCardIcon } from "@/components/marketing/pricing-sections/base-components/pricing-tier-card";

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Billed annually.",
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
        icon: Zap,
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Billed annually.",
        features: [
            "200+ integrations",
            "Advanced reporting and analytics",
            "Up to 20 individual users",
            "40 GB individual data",
            "Priority chat and email support",
        ],
        icon: LayersTwo01,
    },
    {
        title: "Enterprise plan",
        subtitle: "$40/mth",
        description: "Billed annually.",
        features: [
            "Advanced custom fields",
            "Audit log and data history",
            "Unlimited individual users",
            "Unlimited individual data",
            "Personalized + priority service",
        ],
        icon: LayersThree01,
    },
];


export const PricingSimpleIcon = () => {
    return (
        <section className="bg-white min-h-[100vh] py-[16vh] flex items-center justify-center">
            <div className="w-full max-w-[96vw] px-[2vw]">
                <div className="flex flex-col">
                    <p className="font-semibold text-purple-600" style={{ fontSize: "clamp(0.9rem,2vw,1.2rem)" }}>Pricing</p>
                    <h2
                        className="font-bold text-gray-900 mt-[1vh]"
                        style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
                    >
                        Simple, transparent pricing
                    </h2>
                    <p
                        className="mt-[2vh] text-gray-500 max-w-[90vw]"
                        style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
                    >
                        We believe Untitled should be accessible to all companies, no matter the size.
                    </p>
                </div>

                <div className="mt-[6vh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[3vw]">
                    {plans.map((plan) => (
                        <div
                            key={plan.title}
                            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center px-[5vw] py-[4vh] min-w-0"
                            style={{ minHeight: "48vh" }}
                        >
                            <div className="flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full bg-purple-50 mb-[2vh]">
                                <plan.icon className="w-[2.2rem] h-[2.2rem] text-purple-500" />
                            </div>
                            <h3
                                className="font-semibold text-purple-700 mb-[0.5vh]"
                                style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)" }}
                            >
                                {plan.title}
                            </h3>
                            <div
                                className="font-bold text-gray-900 mb-[0.5vh]"
                                style={{ fontSize: "clamp(2rem,3vw,2.5rem)" }}
                            >
                                {plan.subtitle}
                            </div>
                            <div
                                className="text-gray-500 mb-[2vh]"
                                style={{ fontSize: "clamp(1rem,1.5vw,1.1rem)" }}
                            >
                                {plan.description}
                            </div>
                            <ul className="flex flex-col gap-[1vh] mb-[3vh] w-full">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-gray-700" style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)" }}>
                                        <svg className="w-[1.2em] h-[1.2em] text-purple-500 mr-[0.5em] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="w-full rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
                                style={{
                                    padding: "1em 0",
                                    fontSize: "clamp(1rem,1.5vw,1.1rem)",
                                    marginTop: "auto"
                                }}
                            >
                                Get started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};