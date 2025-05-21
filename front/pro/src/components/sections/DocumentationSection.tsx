import { useEffect, useState } from "react";

const links = [
    {
        title: "The National Archives – Royal Navy Dockyards Staff Records",
        url: "https://www.nationalarchives.gov.uk",
        description:
            "Records of staff from Royal Navy dockyards, victualling yards, and other naval sites around the 1920s and earlier.",
    },
    {
        title: "Portsmouth Historic Dockyard Information",
        url: "https://portsmouthhq.org",
        description:
            "Comprehensive info about the Historic Dockyard and links to other local heritage sites.",
    },
    {
        title: "Portsmouth City Museum and Art Gallery",
        url: "https://portsmouthmuseum.co.uk",
        description: "Portsmouth City Museum and Art Gallery.",
    },
    {
        title: "M.E.D. Factory History",
        url: "https://medfactory.webs.com",
        description:
            "History of the M.E.D. factory: apprentices, sports club, photos, and more.",
    },
    {
        title: "Portsmouth Dockyard History by Cranston Fine Arts",
        url: "https://www.battleships-cruisers.co.uk/portsmouth_dockyard.htm",
        description:
            "A comprehensive history of the Dockyard with photos by Cranston Fine Arts.",
    },
    {
        title: "National Museum of the Royal Navy",
        url: "https://www.nmrn.org.uk/",
        description:
            "The official Royal Navy museum with real experiences across six UK sites.",
    },
    {
        title: "The Portsmouth Dockyard Story: From 1212 to the Present Day",
        url: "https://www.ingentaconnect.com/content/routledg/rmir20/2019/00000105/00000001/art00012",
        description: "In-depth article about Portsmouth Dockyard from 1212 to today.",
    },
    {
        title: "Chatham Dockyard Historical Society",
        url: "https://www.cdhs.org.uk/community/chatham-dockyard-historical-society",
        description: "Chatham Dockyard Historical Society website.",
    },
    {
        title: "RN Museum of Radar & Communications, HMS Collingwood",
        url: "https://www.commsmuseum.co.uk",
        description: "Museum dedicated to radar and communications of the RN.",
    },
    {
        title: "The Naval Dockyards Society",
        url: "https://navaldockyards.org/",
        description: "Society focused on research into naval dockyards worldwide.",
    },
    {
        title: "Naval Historical Society of Australia",
        url: "https://www.navyhistory.org.au",
        description: "Australia’s main society for naval history.",
    },
    {
        title: "Local History Online",
        url: "https://www.local-history.co.uk",
        description:
            "News, events, and 1000+ links on local history. Also features books and resources.",
    },
    {
        title: "Naval-History.net",
        url: "https://www.naval-history.net/index.htm",
        description:
            "Vast archive on WWI, WWII, Falklands War. Partnered with British Library and Oxford.",
    },
    {
        title: "Memorials in Portsmouth",
        url: "https://memorialsinportsmouth.co.uk",
        description:
            "Explore Portsmouth's Civilian and Military memorials across the city.",
    },
    {
        title: "Dockyard School Staff & History",
        url: "http://www.djbryant.co.uk/dockyard/sitemap.html",
        description:
            "History of Dockyard schools, teachers, and educational excellence.",
    },
    {
        title: "A Timeline of Ships, Boats and Yachts",
        url: "https://www.hmy.com/a-timeline-of-ships-boats-and-yachts",
        description:
            "Naval timeline shared by young Adam — covering maritime shipbuilding history.",
    },
    {
        title: "Trainline – Plan Rail Journeys",
        url: "https://www.thetrainline.com",
        description:
            "Plan your rail trip to Portsmouth Historic Dockyard. Nearest station: 'Portsmouth Harbour'.",
    },
];

const BACKGROUND_IMAGE_URL = "/Background.jpg";

export default function DocumentationSection() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <section className="relative py-16 min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="fixed inset-0 z-0 bg-black/80"
                style={{
                    backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 1,
                }}
                aria-hidden="true"
            />

            <div
                className={`relative z-10 w-full max-w-3xl mx-auto bg-black/70 rounded-2xl shadow-2xl px-6 md:px-12 py-10 md:py-14 backdrop-blur-lg border border-white/10 transition-opacity duration-1000 ${
                    fadeIn ? "opacity-100" : "opacity-0"
                }`}
            >
                <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6 drop-shadow-xl tracking-tight">
                    Documentation & Useful Links
                </h1>
                <p className="text-base md:text-lg text-blue-100 text-center mb-10">
                    Explore historical resources, archives, and partner organizations.
                </p>

                <ul className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                    {links.map((link) => (
                        <li
                            key={link.url}
                            className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition duration-300 border border-white/10"
                        >
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-200 text-lg font-semibold hover:text-blue-400"
                            >
                                {link.title}
                            </a>
                            <div className="mt-1 text-sm text-blue-300 break-all">
                                {link.url}
                            </div>
                            <p className="mt-2 text-gray-200 text-base">
                                {link.description}
                            </p>
                        </li>
                    ))}
                </ul>

                <footer className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                    <a
                        href="https://www.facebook.com/PRDHT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-300 hover:text-blue-500 font-medium"
                    >
                        Like us on Facebook
                    </a>
                    <div className="mt-2 text-xs text-gray-500">
                        © 2024 PRDHT-JM
                    </div>
                </footer>
            </div>
        </section>
    );
}
