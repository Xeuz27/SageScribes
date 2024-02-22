interface SiteConfig {
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    shareMessage: string;
    paginationSize: number;
}

export const siteConfig: SiteConfig = {
    author: 'yidev27', // Site author
    title: 'SageScribe', // Site title.
    description: 'Count on our handy pros to nail those home fixes with expertise and a guarantee – we get it right the first time, every time!', // Description to display in the meta tags
    lang: 'en-GB',
    ogLocale: 'en_GB',
    shareMessage: 'Share this post', // Message to share a post on social media
    paginationSize: 6, // Number of posts per page
};
