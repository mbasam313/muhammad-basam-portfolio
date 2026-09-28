import { Container } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { ProtectedImage, ProtectedBgImage } from '@/components/ui/ProtectedImage';
import heroBg from '@/assets/uploads/hero-bg-final.jpg';
import portrait from '@/assets/uploads/muhammad-basam-portrait.png';
import wordpress from '@/assets/uploads/wordpress.png';
import elementor from '@/assets/uploads/elementor.png';
import woocommerce from '@/assets/uploads/woocommerce.png';
import photoshop from '@/assets/uploads/photoshop.png';
import illustrator from '@/assets/uploads/illustrator.png';
import meta from '@/assets/uploads/meta.png';
import facebook from '@/assets/uploads/facebook.png';
import instagram from '@/assets/uploads/instagram.png';
import messenger from '@/assets/uploads/messenger.png';
import whatsapp from '@/assets/uploads/whatsapp.png';

interface FloatingIcon {
  src: string;
  alt: string;
  delay: string;
}

// Left side icons (beside portrait)
const LEFT_ICONS: FloatingIcon[] = [
{ src: wordpress, alt: 'WordPress', delay: '0s' },
{ src: elementor, alt: 'Elementor', delay: '0.4s' },
{ src: woocommerce, alt: 'WooCommerce', delay: '0.8s' },
{ src: photoshop, alt: 'Adobe Photoshop', delay: '1.2s' },
{ src: illustrator, alt: 'Adobe Illustrator', delay: '1.6s' }];


// Right side icons (beside portrait)
const RIGHT_ICONS: FloatingIcon[] = [
{ src: meta, alt: 'Meta', delay: '0.2s' },
{ src: facebook, alt: 'Facebook', delay: '0.6s' },
{ src: instagram, alt: 'Instagram', delay: '1.0s' },
{ src: messenger, alt: 'Messenger', delay: '1.4s' },
{ src: whatsapp, alt: 'WhatsApp', delay: '1.8s' }];


function IconColumn({ icons, side }: {icons: FloatingIcon[];side: 'left' | 'right';}) {
  return (
    <div data-ev-id="ev_7e6e01cc4d" className={`hidden flex-col items-center justify-center gap-4 sm:flex ${side === 'left' ? 'pr-4 lg:pr-8' : 'pl-4 lg:pl-8'}`}>
			{icons.map((icon) =>
      <span data-ev-id="ev_6d8babf289"
      key={icon.alt}
      className="drift"
      style={{ animationDelay: icon.delay }}>

					<ProtectedImage
          src={icon.src}
          alt={`${icon.alt} logo`}
          width={48}
          height={48}
          className="h-10 w-10 rounded-[8px] bg-white/95 p-1.5 object-contain shadow-md ring-1 ring-black/[0.04] sm:h-11 sm:w-11 lg:h-12 lg:w-12" />

				</span>
      )}
		</div>);

}

export function Hero() {
  return (
    <ProtectedBgImage
      src={heroBg}
      alt="Hero background"
      className="relative min-h-screen overflow-hidden">

			<section data-ev-id="ev_a48f8ada95" aria-labelledby="hero-heading" className="relative flex min-h-screen flex-col">
				{/* Main Content - Top Section */}
				<Container className="relative z-20 flex-1">
					<div data-ev-id="ev_00eb8b463d" className="flex flex-col items-center pt-20 text-center sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
						{/* Label Badge - Top */}
						<div data-ev-id="ev_bed5f7575e" className="reveal reveal-in">
							<span data-ev-id="ev_c62ed20320" className="inline-block rounded-[8px] bg-[#0c78e4] px-3 py-1.5 font-heading text-[10px] font-semibold uppercase text-white sm:px-4 sm:py-2 sm:text-[11px] lg:px-5 lg:py-2.5 lg:text-[12px]">
								Website Designer • Graphic Designer • Digital Marketing Expert
							</span>
						</div>

						{/* Main Title - 36px */}
						<h1 data-ev-id="ev_fd444943bf"
            id="hero-heading"
            className="reveal reveal-in mt-5 max-w-[22ch] font-display text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:mt-6 sm:text-[28px] md:text-[32px] lg:text-[36px]">

							I Build Modern Websites, Create Stunning Designs and Run Meta Ads that Drive Results
						</h1>

						{/* CTAs */}
						<div data-ev-id="ev_60424b90dd" className="reveal reveal-in mt-5 flex flex-row flex-wrap items-center justify-center gap-2 sm:mt-6 sm:gap-3 lg:mt-8">
							<ButtonLink to="/portfolio">View My Work</ButtonLink>
							<ButtonLink to="/contact" variant="outline">
								Let's Work Together
							</ButtonLink>
						</div>
					</div>
				</Container>

				{/* Portrait with Icons on Sides - Stuck to Bottom */}
				<div data-ev-id="ev_febebb72d5" className="relative z-20 mt-auto pb-8 sm:pb-10 lg:pb-12">
					<div data-ev-id="ev_e95a3ebd74" className="reveal reveal-in flex items-end justify-center">
						{/* Left Icons */}
						<IconColumn icons={LEFT_ICONS} side="left" />

						{/* Portrait */}
						<ProtectedImage
              src={portrait}
              alt="Muhammad Basam, website designer and digital marketing professional"
              width={500}
              height={500}
              loading="eager"
              className="h-[220px] w-auto object-contain object-bottom sm:h-[280px] md:h-[320px] lg:h-[380px]" />


						{/* Right Icons */}
						<IconColumn icons={RIGHT_ICONS} side="right" />
					</div>
				</div>
			</section>
		</ProtectedBgImage>);

}