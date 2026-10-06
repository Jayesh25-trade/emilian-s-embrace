<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep shared portfolio chrome, cards, and page views in `src/components/portfolio`; leaf TanStack routes own metadata and URL matching so navigation remains native.
- Store preserved reference media as asset pointers and static portfolio content in client-safe modules; this informational portfolio needs no backend.
- Scope scroll animations with GSAP context and clean up Lenis on unmount; reduced-motion users receive static visible content.
