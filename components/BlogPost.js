import formatDate from '@/lib/utils/formatDate';
import Link from 'next/link';

export default function BlogPost({ title, summary, date, slug }) {
  return (
    <li key={slug} className="py-4">
      <Link href={`/writing/${slug}`}>
        <a
          className="block rounded transition-all hover:bg-[rgba(14,165,233,0.2)] group px-3 py-2 -mx-3 -my-2"
          style={{ textDecoration: 'none', borderBottom: 'none' }}
        >
          <article className="xl:items-baseline">
            <div className="flex flex-col sm:flex-row items-left sm:items-center justify-between">
              <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-[#fed7aa]">
                {title}
              </h3>
              <div className="hidden sm:block sm:text-base text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 group-hover:text-[#fed7aa]">
                <time dateTime={date}>{formatDate(date)}</time>
              </div>
            </div>
            <div className="prose text-gray-500 max-w-none dark:text-gray-400">{summary}</div>
          </article>
        </a>
      </Link>
    </li>
  );
}
