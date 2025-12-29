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
      <PageSEO title={`Home - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hey! I'm{' '}
              <span
                style={{
                  color: '#fed7aa',
                  textDecoration: 'underline',
                  textDecorationThickness: '4px',
                  textUnderlineOffset: '12px',
                }}
              >
                Chris Yin
              </span>
            </h1>
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
