import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPostCard from '@/components/BlogPostCard';
import { FeaturedPosts as posts } from '@/data/featuredPosts';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div>
            <h3 className="font-bold text-2xl mt-4 md:text-3xl tracking-tight text-black dark:text-white">
              Hey! I'm Chris Yin
            </h3>
            <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                I'm a founder & investor. I'm a big fan of startups, investing, books, films, and
                food. You can check out some of my <Link href={`/writing/`}>writing</Link>
                &nbsp;here. The best way to reach me is through a warm intro but you can always try
                to reach me at&nbsp;
                <Link href="http://www.twitter.com/chriseyin">@chriseyin</Link> as well!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
