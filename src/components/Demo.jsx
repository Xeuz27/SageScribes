import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';
const Demo = () => {
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState('');
    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromLocalStorage = JSON.parse(
            localStorage.getItem('articles')
        );

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem(
                'articles',
                JSON.stringify(updatedAllArticles)
            );
        }
    };
    const handlecopy = (copyUrl) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(''), 5000);
    };

    return (
        <section class="mt-16 w-full max-w-xl">
            {/* search */}
            <div class="flex w-full flex-col gap-2">
                {/* browsed url history */}
                <div class="flex max-h-60 flex-col gap-1 overflow-y-auto">
                    {allArticles.map((item, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            class="link_card"
                        >
                            <div
                                class="copy_btn"
                                onClick={() => handlecopy(item.url)}
                            >
                                <img
                                    alt="copy_icon"
                                    src={copied === item.url ? tick : copy}
                                    class="h-2/5 w-2/5 object-contain"
                                />
                            </div>
                            <p class="font-satoshi flex-1 truncate text-sm font-medium text-blue-700">
                                {item.url}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* display Results */}
            <div class="my-10 flex max-w-full items-center justify-center">
                {isFetching ? (
                    <img
                        src={loader}
                        alt="loader"
                        class="h-10 w-20 object-contain"
                    />
                ) : error ? (
                    <p class="font-inter text-center font-bold text-black">
                        Well, that wasn't supposed to happen...
                        <br />
                        <span class="font-satoshi font-normal text-gray-700">
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div class="flex flex-col gap-3">
                            <h2 class="font-satoshi text-xl font-bold text-gray-600">
                                Article{' '}
                                <span class="blue_gradient">summary</span>
                            </h2>
                            <div class="summary_box">
                                <p class="font-inter text-base font-medium text-gray-700">
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Demo;
