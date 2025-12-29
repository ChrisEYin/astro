import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <HeaderGradient />
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center py-10">
            <div className="flex flex-auto items-center justify-between">
              <nav className="flex flex-1 items-center justify-center sm:justify-start text-base leading-5">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-2 mr-4 font-medium text-gray-900 sm:p-2 dark:text-gray-100 hover:underline hover:rounded"
                  >
                    {link.title}
                  </Link>
                ))}
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
