import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PortfolioHero() {
  const root = useRef<HTMLElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        setOpening(false);
        return;
      }
      const intro = gsap.timeline();
      timeline.current = intro;
      intro
        .set('.hero-copy, .look-button', { opacity: 0 })
        .from('.opening-clip-top, .opening-clip-bottom', { height: '50%', duration: 1.35, ease: 'power4.inOut' }, 0.35)
        .to('.opening-marquee-container', { x: -140, duration: 3.1, ease: 'none' }, 0)
        .from('.opening-clip-top .opening-marquee, .opening-clip-bottom .opening-marquee', { xPercent: 5, duration: 2.9, ease: 'power3.inOut' }, 0.35)
        .from('.opening-clip-center .opening-marquee', { xPercent: -5, duration: 2.7, ease: 'power3.inOut' }, 0.35)
        .to('.opening-clip-top', { clipPath: 'inset(0 0 100% 0)', duration: 1.25, ease: 'power4.inOut' }, 3.1)
        .to('.opening-clip-bottom', { clipPath: 'inset(100% 0 0 0)', duration: 1.25, ease: 'power4.inOut' }, 3.1)
        .to('.opening-marquee, .opening-caption, .opening-skip', { opacity: 0, duration: 0.65, ease: 'power2.inOut' }, 3.15)
        .to('.hero-opening', { opacity: 0, duration: 0.65, onComplete: () => setOpening(false) }, 3.75)
        .set('.hero-copy', { opacity: 1 }, 3.9)
        .from('.hero-letter', { opacity: 0, y: 35, stagger: 0.035, duration: 0.8, ease: 'power3.out' }, 3.9)
        .from('.hero-creative', { opacity: 0, y: 25, duration: 0.85, ease: 'power3.out' }, 4.15)
        .to('.look-button', { opacity: 1, duration: 0.6 }, 4.5);
    }, root);
    return () => { timeline.current = null; ctx.revert(); };
  }, []);

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
              {Array.from({ length: 9 }, (_, index) => <span key={index}>Jimmy Developers<span className="opening-period">.</span></span>)}
            </div></div>
          </div>)}
          <div className="opening-caption"><span>Jimmy Developers</span><span>Digital Development Studio · Est. 2021</span></div>
        </div>
        <Button variant="ghost" className="opening-skip" onClick={() => timeline.current?.progress(1)} aria-label="Skip opening animation">Skip intro <ArrowRight size={16} /></Button>
      </div>}
    </section>
  );
}