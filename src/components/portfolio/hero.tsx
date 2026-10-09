import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

export function PortfolioHero({ opening, onComplete }: { opening: boolean; onComplete: () => void }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        onComplete();
        return;
      }
      const intro = gsap.timeline({ onComplete });
      intro
        .set('.hero-copy, .look-button', { opacity: 0 })
        .from('.opening-clip-top, .opening-clip-bottom', { height: '50%', duration: 0.45, ease: 'power3.inOut' }, 0)
        .to('.opening-clip-top .opening-marquee-container, .opening-clip-bottom .opening-marquee-container', { x: -160, duration: 1.05, ease: 'power1.out' }, 0)
        .to('.opening-clip-center .opening-marquee-container', { x: 160, duration: 1.05, ease: 'power1.out' }, 0)
        .to('.opening-clip-top', { yPercent: -100, duration: 0.55, ease: 'power3.inOut' }, 0.6)
        .to('.opening-clip-bottom', { yPercent: 100, duration: 0.55, ease: 'power3.inOut' }, 0.6)
        .to('.opening-marquee, .opening-caption', { opacity: 0, duration: 0.3, ease: 'power2.inOut' }, 0.8)
        .to('.hero-opening', { opacity: 0, duration: 0.35, ease: 'power2.inOut' }, 1.05)
        .set('.hero-copy', { opacity: 1 }, 1.05)
        .from('.hero-letter', { opacity: 0, y: 24, stagger: 0.015, duration: 0.35, ease: 'power3.out' }, 1.05)
        .from('.hero-creative', { opacity: 0, y: 18, duration: 0.45, ease: 'power3.out' }, 1.1)
        .to('.look-button', { opacity: 1, duration: 0.25 }, 1.3);
    }, root);
    return () => { ctx.revert(); };
  }, [onComplete]);

  return (
    <section ref={root} className="hero-section" id="hero-section">
      <h1 className="hero-copy">
        <span className="hero-line">{'Jimmy'.split('').map((letter, index) => <span className="hero-letter" key={index}>{letter === ' ' ? '\u00a0' : letter}</span>)}</span>
        <span className="hero-line"><em className="hero-creative">Developers</em></span>
      </h1>
      <Button variant="ghost" className="look-button" onClick={() => document.getElementById('graphic-design')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
        <span>HAVE A LOOK</span><i className="mouse-outline"><i /></i>
      </Button>
      {opening && <div className="hero-opening" data-testid="hero-opening">
        <div className="opening-bands" aria-hidden="true">
          {['top', 'bottom', 'center'].map(band => <div className={`opening-clip opening-clip-${band}`} key={band}>
            <div className="opening-marquee"><div className="opening-marquee-container">
              {Array.from({ length: 5 }, (_, index) => <span key={index}>Jimmy Developers<span className="opening-period">.</span></span>)}
            </div></div>
          </div>)}
          <div className="opening-caption"><span>Jimmy Developers</span><span>Digital Development Studio · Est. 2021</span></div>
        </div>
      </div>}
    </section>
  );
}