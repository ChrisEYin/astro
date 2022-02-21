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
      <PageSEO
        title={siteMetadata.title + ' - Developer, Writer'}
        description={siteMetadata.description}
      />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div>
            <h3 className="font-bold text-2xl mt-4 md:text-3xl tracking-tight text-black dark:text-white">
              Hey! I'm Chris Yin
            </h3>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              I'm an investor, entrepreneur, and degen. I love startups, investing, books, films,
              and food. You can check out some of my writing here. Reach me anytime at @chriseyin or
              by email.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
