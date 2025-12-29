import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import { useRouter } from 'next/router';

const LayoutWrapper = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <HeaderGradient />
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center py-10">
            {/* Navigation - left aligned, always visible */}
            <nav className="flex gap-4 sm:gap-6">
              {headerNavLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? router.pathname === '/'
                    : router.pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100 hover:underline ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  );
};

function HeaderGradient() {
  return (
    <div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-2]">
      <div className="absolute inset-x-0 bg-gradient-to-r from-indigo-300 to-purple-400 opacity-30 blur-3xl top-[-64px] h-[200px]" />
    </div>
  );
}

export default LayoutWrapper;
