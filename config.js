/**
 * ========================================
 * MORTGAGE PORTFOLIO CONFIGURATION
 * Waseem Elhamad — Sr Mortgage Broker
 * ========================================
 * Edit this file to update all personal content.
 * The website will automatically reflect changes.
 *
 * LEGAL NOTE: Content in this file has been reviewed
 * to comply with TILA, RESPA, CFPB advertising rules,
 * and state-level mortgage advertising regulations.
 * No rate guarantees, no misleading claims.
 */

export const CONFIG = {
    // ── Personal Info ──
    name: "Waseem Elhamad",
    title: "Sr Mortgage Broker",
    company: "Lumin Lending Inc.",
    companyDRE: "02291443",
    companyNMLS: "2716106",
    personalNMLS: "1955280",
    headline: "Sr Mortgage Broker · NMLS# 1955280",
    subheadline: "Helping families and individuals navigate the path to homeownership with transparency, integrity, and personalized guidance.",
    bio: `My name is Waseem Elhamad with Lumin Lending, and my job is to assist those purchasing a new home or refinancing a current home through the mortgage process. I value authenticity and transparency, and I am here to ensure you have a smooth and seamless experience from start to finish.\nWhile not assisting my clients, I enjoy spending time with my family and friends and have a passion for Mixed Martial Arts. I love working for Lumin Lending and look forward to leveraging our many resources when helping you soon!`,

    // ── Profile Photo ──
    profilePhoto: "/headshot.jpg",
    profilePhotoAlt: "Waseem Elhamad — Sr Mortgage Broker",

    // ── About Section Background Photos ──
    aboutPhotos: [
        "/headshot.jpg",
    ],

    // ── Licensed States ──
    licensedStates: [
        { state: "California", abbr: "CA", license: "02416331" },
        { state: "Florida", abbr: "FL", license: null },
        { state: "Washington", abbr: "WA", license: "MLO-1955280" },
        { state: "Texas", abbr: "TX", license: null },
        { state: "Utah", abbr: "UT", license: "12654352" },
        { state: "Tennessee", abbr: "TN", license: "1955280" },
        { state: "Oregon", abbr: "OR", license: null },
    ],

    // ── Services ──
    services: [
        {
            title: "Home Purchase",
            icon: "🏠",
            description: "Whether you're a first-time buyer or looking to move up, I guide you through every step of financing your new home.",
        },
        {
            title: "Refinancing",
            icon: "🔄",
            description: "Explore options to adjust your current mortgage terms. I'll help you understand what may be available based on your unique situation.",
        },
        {
            title: "VA Loans",
            icon: "🎖️",
            description: "Specialized support for veterans and active-duty service members navigating VA loan programs.",
        },
        {
            title: "FHA Loans",
            icon: "📋",
            description: "FHA loan options that may offer more flexible qualification criteria for eligible borrowers.",
        },
        {
            title: "Conventional Loans",
            icon: "🏦",
            description: "Traditional financing solutions tailored to your financial profile and homeownership goals.",
        },
        {
            title: "Construction Loans",
            icon: "🏗️",
            description: "Financing options for building your dream home from the ground up.",
        },
    ],

    // ── Stats ──
    stats: [
        { value: "5.0", label: "Rating", suffix: "★" },
        { value: "47", label: "Client Reviews" },
        { value: "7", label: "States Licensed" },
        { value: "NMLS# 1955280", label: "Nationwide ID", isNMLS: true },
    ],

    // ── Client Reviews / Testimonials ──
    // Note: These are real reviews from public platforms. Only first name
    // and last initial are used for client privacy.
    testimonials: [
        {
            name: "Ryan",
            location: "San Diego, CA",
            date: "2025",
            rating: 5,
            type: "Refinance",
            text: "He delivered the best offer and made the entire process quick and easy.",
        },
        {
            name: "Paul W.",
            location: "Rockledge, FL",
            date: "2025",
            rating: 5,
            type: "VA Purchase",
            text: "Waseem beat their quotes every time! He worked so hard to get me the best deal. Definitely the guy you want in your corner when buying a home.",
        },
        {
            name: "Fred Z.",
            location: "Tracy, CA",
            date: "2024",
            rating: 5,
            type: "Purchase",
            text: "Exceptional communicator, honest, and genuinely a wonderful person to work with.",
        },
        {
            name: "Sarah M.",
            location: "San Diego, CA",
            date: "2024",
            rating: 5,
            type: "Refinance",
            text: "Communication was clear and consistent. Interest rates were highly competitive and the overall process was smooth.",
        },
        {
            name: "Jennifer C.",
            location: "Spanish Fork, UT",
            date: "2024",
            rating: 5,
            type: "Purchase",
            text: "Remarkably quick to respond with extensive knowledge and an honest approach. Waseem made the home buying process stress-free.",
        },
        {
            name: "Ahmad E.",
            location: "San Marcos, CA",
            date: "2024",
            rating: 5,
            type: "First-Time Buyer",
            text: "Educated me on all available options and laid out all the numbers so I could make an informed decision. Highly recommend!",
        },
        {
            name: "Emily W.",
            location: "Lynnwood, WA",
            date: "2022",
            rating: 5,
            type: "Refinance",
            text: "The most responsive professional I've worked with. Managed a smooth refinancing process from start to finish.",
        },
        {
            name: "Sel",
            location: "Miami, FL",
            date: "2021",
            rating: 5,
            type: "Purchase",
            text: "Professional, honest, and well organized. It felt like we worked together to get the best rates.",
        },
    ],

    // ── Languages ──
    languages: [
        { name: "English", level: "Fluent" },
        { name: "Arabic", level: "Fluent" },
    ],

    // ── Contact / Social Links ──
    email: "waseem.elhamad@luminlending.com",
    phone: "(858) 203-0193",
    cell: "(858) 360-2225",
    website: "https://www.dreamwithwaseemmortgage.com",
    officeAddress: "18301 Von Karman Ave, Suite 820, Irvine, CA 92612",
    social: {
        linkedin: "https://www.linkedin.com/in/waseem-el-hamad-37236b199/",
        zillow: "https://www.zillow.com/lender-profile/WaseemElhamadZHL/",
    },

    // ── Navigation labels ──
    navLinks: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Reviews", href: "#reviews" },
        { label: "Licensed States", href: "#states" },
        { label: "Contact", href: "#contact" },
    ],

    // ── Legal Disclaimers ──
    // Required by TILA, RESPA, CFPB, and state regulations
    disclaimers: {
        equalHousing: true,
        nmlsDisclosure: "Waseem Elhamad, NMLS# 1955280. Lumin Lending Inc., NMLS# 2716106, DRE# 02291443. Licensed Mortgage Broker. Equal Housing Opportunity.",
        generalDisclaimer: "This is not a commitment to lend. All loans are subject to credit approval, underwriting, and property appraisal. Programs, rates, terms, and conditions are subject to change without notice. Not all products are available in all states. This is not an offer to enter into an interest rate lock agreement. Other restrictions and limitations may apply. Equal Housing Opportunity.",
    },
};
