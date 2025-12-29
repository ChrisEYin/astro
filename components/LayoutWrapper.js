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
            <div className="flex flex-auto items-center justify-between">
              <nav className="flex flex-1 items-center justify-center text-base leading-5">
                {headerNavLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? router.pathname === '/'
                      : router.pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={`p-2 mr-4 font-medium text-gray-900 sm:p-2 dark:text-gray-100 hover:underline hover:rounded ${
                        isActive ? 'underline' : ''
                      }`}
                      style={
                        isActive
                          ? {
                              textDecorationThickness: '2px',
                              textUnderlineOffset: '6px',
                            }
                          : {}
                      }
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
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
