export interface ServiceItem {
  title?: string;
  description: string;
}

export interface CategoryCardProps {
  category: string;
  image: string;
  services: ServiceItem[];
}

export const serviceCategories: CategoryCardProps[] = [
  // Category with titled services
  {
    category: "BRANDING SERVICES",
    image: "/images/brandStrategy.webp",
    services: [
      {
        title: "Brand Identity Design",
        description:
          "Creating logos, typography, color schemes, and visual elements that reflect the brand’s personality",
      },
      {
        title: "Brand Guidelines",
        description:
          "Establishing a cohesive set of rules for maintaining consistency in all brand materials, ensuring uniformity across all platforms.",
      },
      {
        title: "Rebranding",
        description:
          "Refreshing or completely overhauling a brand's identity and strategy to adapt to evolving market trends or business shifts.",
      },
    ],
  },
  {
    category: "ADVERTISING SERVICES",
    image: "/images/campaignDevelopment.webp",
    services: [
      {
        title: "Creative Campaign Development",
        description:
          "Conceptualizing and creating ad campaigns across multiple platforms (print, TV, digital) with a focus on storytelling and audience engagement.",
      },
      {
        title: "Media Buying & Planning",
        description:
          "Strategically purchasing ad space in the right channels to reach the target audience efficiently and effectively.",
      },
      {
        title: "Print and TV Advertising",
        description:
          "Developing ad content for traditional media such as magazines, newspapers, and television.",
      },
      {
        title: "Outdoor Advertising",
        description:
          "Designing billboard ads, transit ads, and other out-of-home advertising methods to boost brand awareness.",
      },
    ],
  },
  {
    category: "MARKETING SERVICES",
    image: "/images/marketResearch.webp",
    services: [
      {
        title: "Market Research",
        description:
          "Conducting in-depth research on consumer behavior, competition, and market trends to inform marketing strategies.",
      },
      {
        title: "Marketing Strategy Development",
        description:
          "Creating a roadmap for reaching business goals, including defining target markets, channels, and key performance indicators (KPIs).",
      },
      {
        title: "Content Marketing",
        description:
          "Developing valuable, relevant content (blogs, articles, whitepapers, videos) to attract and engage a clearly defined audience.",
      },
      {
        title: "Email Marketing",
        description:
          "Designing email campaigns for promotions, newsletters, or product updates to nurture leads and retain customers.",
      },
    ],
  },
  {
    category: "DIGITAL MARKETING",
    image: "/images/influenceMarketing.webp",
    services: [
      {
        title: "Influencer Marketing",
        description:
          "Collaborating with influencers to promote products or services, leveraging their reach and credibility.",
      },
      {
        title: "Affiliate Marketing",
        description:
          "Managing partnerships with affiliates to drive traffic and sales through referral links.",
      },
      {
        title: "Online Reputation Management",
        description:
          "Monitoring and managing online reviews, social mentions, and public perception of a brand.",
      },
    ],
  },
  {
    category: "CREATIVE SERVICES",
    image: "/images/graphicDesign.webp",
    services: [
      {
        title: "Graphic Design",
        description:
          "Crafting visually appealing designs for online and offline use, such as banners, brochures, business cards, and infographics.",
      },
      {
        title: "Video Production",
        description:
          "Producing promotional videos, corporate videos, and animations to showcase products, services, or brand stories.",
      },
      {
        title: "Web Design and Development",
        description:
          "Designing and developing responsive, user-friendly websites that align with brand identity and provide an optimal user experience.",
      },
    ],
  },
  {
    category: "PUBLIC RELATIONS (PR)",
    image: "/images/mediaRelations.webp",
    services: [
      {
        title: "Media Relations",
        description:
          "Building relationships with journalists and media outlets to secure press coverage and positive publicity.",
      },
      {
        title: "Press Releases and Events",
        description:
          "Writing press releases and organizing events to announce new products, services, or milestones.",
      },
      {
        title: "Crisis Management",
        description:
          "Managing communication during crises to protect a brand’s reputation and mitigate negative effects. ",
      },
    ],
  },
  {
    category: "ANALYTICS AND REPORTING",
    image: "/images/performanceTracking.webp",
    services: [
      {
        title: "Performance Tracking",
        description:
          "Monitoring the performance of marketing campaigns and advertising efforts through analytics platforms like Google Analytics and social media insights. ",
      },
      {
        title: "Reporting and Data Analysis",
        description:
          "Providing detailed reports and insights into key metrics, enabling businesses to make informed decisions and optimize campaigns.",
      },
    ],
  },
  {
    category: "EVENT MARKETING",
    image: "/images/eventMarketing.webp",
    services: [
      {
        title: "Event Planning and Management",
        description:
          "Organizing and promoting events, product launches, trade shows, or conferences to create brand experiences and direct engagement with customers.",
      },
      {
        title: "Experiential Marketing",
        description:
          "Creating immersive brand experiences that allow consumers to interact with the brand in a real-world setting. ",
      },
    ],
  },
  {
    category: "SOCIAL MEDIA MANAGEMENT",
    image: "/images/socialMedia.webp",
    services: [
      {
        description:
          "Developing and managing content and advertising on social platforms like Facebook, Instagram, LinkedIn, and Twitter to grow brand presence and engagement. Managing social media profiles, posting regular updates, and interacting with followers to enhance brand loyalty and engagement.",
      },
    ],
  },
  {
    category: "SEARCH ENGINE OPTIMIZATION",
    image: "/images/searchEngine.webp",
    services: [
      {
        description:
          "We use industry-leading techniques to optimize your website for search engines, boosting your rankings and driving more traffic to your site. Our team stays up-to-date with the latest SEO trends to ensure your website is always ahead of the curve.",
      },
    ],
  },
  {
    category: "PAY-PER-CLICK ADVERTISING",
    image: "/images/payPerClick.webp",
    services: [
      {
        description:
          "Our PPC experts will create and manage your ad campaigns, targeting the right audience and maximizing your ROI. We'll help you drive more leads and sales, while keeping your advertising budget in check.",
      },
    ],
  },
  {
    category: "EMAIL MARKETING",
    image: "/images/emailMarketing.webp",
    services: [
      {
        description:
          "We'll help you create and execute effective email campaigns that drive engagement and conversions. From newsletters to promotional emails, we'll ensure your messages are always on brand and tailored to your audience.",
      },
    ],
  },
];
