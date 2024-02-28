interface SiteConfig {
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    shareMessage: string;
}

export const siteConfig: SiteConfig = {
    author: 'yidev27', // Site author
    title: 'SageScribe', // Site title.
    description: 'Experience effortless article creation with SageScriber! Transform your ideas into polished pieces effortlessly, making writing simple and effective for everyone.', // Description to display in the meta tags
    lang: 'en-GB',
    ogLocale: 'en_GB',
    shareMessage: 'effortless article creation with SageScriber!', // Message to share a post on social media
};
