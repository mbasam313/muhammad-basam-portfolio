import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Seo } from '@/components/Seo';
import { Container, Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-paper font-sans antialiased">
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found."
        path="/404"
        type="website"
        robots="noindex, follow"
      />
      <Header />
      <main id="main" className="flex flex-1 items-center">
        <Section tone="paper" className="w-full">
          <Container>
            <div className="flex flex-col items-start gap-5">
              <span className="font-heading text-[13px] font-medium uppercase tracking-[0.14em] text-electric-blue">
                404
              </span>
              <h1 className="max-w-[18ch] font-display text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[48px]">
                This page could not be found.
              </h1>
              <p className="max-w-[52ch] font-sans text-[16px] leading-[1.6] text-mid-gray">
                The link may be out of date or the address may be incorrect.
              </p>
              <ButtonLink to="/">Back to home</ButtonLink>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
