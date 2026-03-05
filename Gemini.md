**\# Arabic AI Agents — Brand Style Guide for Gemini**

Use this document as the definitive brand reference when building landing pages, components, or any UI for the Arabic AI Agents ecosystem.

\---

**\#\# 🎨 Brand Colors**

These are the official brand colors sourced directly from arabicaiagents.com. Always use these — never substitute generic or off-brand alternatives.

**\#\#\# CSS Custom Properties**

\`\`\`css  
:root {  
   /\* \=== PRIMARY PALETTE \=== \*/  
   \--sand:           \#F4F1DE;   /\* Primary background — warm, light beige \*/  
   \--sand-dark:      \#EAE6D5;   /\* Slightly deeper background for alternate sections \*/

   /\* \=== DARK NEUTRALS \=== \*/  
   \--stone-900:      \#1C1917;   /\* Primary text, dark button backgrounds \*/  
   \--stone-800:      \#292524;   /\* Card backgrounds, founder section overlays \*/  
   \--stone-700:      \#44403C;   /\* Secondary body text \*/  
   \--stone-200:      \#E7E5E4;   /\* Borders, subtle separators \*/

   /\* \=== ACCENT COLORS \=== \*/  
   \--majorelle-blue: \#1C69D4;   /\* Primary CTA buttons, links, highlights, key UI elements \*/  
   \--terracotta:     \#E07A5F;   /\* Cultural highlights, secondary card accents, list markers \*/

   /\* \=== UTILITY \=== \*/  
   \--white:          \#FFFFFF;  
   \--blue-glow:      rgba(28, 105, 212, 0.4);  /\* AI vision glow, card hover shadows \*/

   /\* \=== TYPOGRAPHY \=== \*/  
   \--font-heading:   'Playfair Display', serif;  /\* Elegant serif for all headings \*/  
   \--font-body:      'Inter', sans-serif;         /\* Clean sans-serif for body and UI \*/

   /\* \=== SPACING & SHAPE \=== \*/  
   \--radius-capsule: 9999px;  
   \--radius-lg:      24px;  
   \--radius-md:      16px;

   /\* \=== TRANSITIONS \=== \*/  
   \--transition-smooth:  all 0.5s cubic-bezier(0.16, 1, 0.3, 1);  
   \--transition-colors:  color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

   /\* \=== SHADOWS \=== \*/  
   \--shadow-soft:    0 4px 20px \-4px rgba(0, 0, 0, 0.08);  
   \--shadow-md:      0 10px 30px \-8px rgba(0, 0, 0, 0.12);  
   \--shadow-lg:      0 20px 50px \-12px rgba(0, 0, 0, 0.18);  
   \--shadow-blue:    0 0 40px rgba(28, 105, 212, 0.4);   /\* Blue AI glow \*/  
   \--shadow-terra:   0 10px 25px \-5px rgba(224, 122, 95, 0.35);  
}  
\`\`\`

**\#\#\# Color Usage Guide**

| Role | Color | Hex |  
|---|---|---|  
| Page background | Sand | \`\#F4F1DE\` |  
| Alternate section bg | Sand Dark | \`\#EAE6D5\` |  
| Primary text | Stone-900 | \`\#1C1917\` |  
| Secondary/muted text | Stone-700 | \`\#44403C\` |  
| Card backgrounds (dark) | Stone-800 | \`\#292524\` |  
| Borders & dividers | Stone-200 | \`\#E7E5E4\` |  
| Primary CTAs & links | Majorelle Blue | \`\#1C69D4\` |  
| Cultural accents & highlights | Terracotta | \`\#E07A5F\` |  
| AI vision glow / hover | Blue Glow | \`rgba(28, 105, 212, 0.4)\` |

\---

**\#\# ✍️ Typography**

\- **\*\*Headings\*\*** → \`Playfair Display\`, serif — high-contrast, elegant, traditional authority  
\- **\*\*Body & UI\*\*** → \`Inter\`, sans-serif — clean, modern, highly legible  
\- **\*\*Heading weight\*\*** → \`600\`–\`700\`  
\- **\*\*Body weight\*\*** → \`400\`–\`500\`  
\- **\*\*Letter spacing for headings\*\*** → \`-0.5px\` to \`-1px\`  
\- **\*\*Line height\*\*** → \`1.2\` for headings, \`1.6\` for body

\---

**\#\# 🎞️ Animation & Interaction Styles**

**\#\#\# 1\. Vision Card Hover Effect**

Cards gently lift, brighten their border to the brand accent, and cast a blue glow — conveying AI intelligence.

\`\`\`css  
.vision-card {  
   background: var(\--white);  
   border: 1px solid var(\--stone-200);  
   border-radius: var(\--radius-lg);  
   padding: 3rem;  
   box-shadow: var(\--shadow-soft);  
   transition: var(\--transition-smooth);  
   transform: scale(1);  
   cursor: pointer;  
}

.vision-card:hover {  
   transform: scale(1.01) translateY(\-4px);  
   box-shadow: var(\--shadow-md), 0 0 0 1.5px var(\--majorelle-blue);  
   border-color: var(\--majorelle-blue);  
}

/\* Terracotta accent variant \*/  
.vision-card.accent-terra:hover {  
   box-shadow: var(\--shadow-md), 0 0 0 1.5px var(\--terracotta);  
   border-color: var(\--terracotta);  
}  
\`\`\`

**\#\#\# 2\. AI Augmentation Layer (Cursor-Following Glow)**

An interactive circular glow that follows the cursor on feature cards — the signature AI vision effect.

\`\`\`css  
.ai-card {  
   position: relative;  
   overflow: hidden;  
   backdrop-filter: saturate(1.5) blur(2px);  
   \-webkit-backdrop-filter: saturate(1.5) blur(2px);  
}

.ai-card .ai-glow-layer {  
   position: absolute;  
   pointer-events: none;  
   width: 300px;  
   height: 300px;  
   border-radius: 50%;  
   background: radial-gradient(circle, rgba(28, 105, 212, 0.15) 0%, transparent 70%);  
   transform: translate(\-50%, \-50%);  
   opacity: 0;  
   transition: opacity 0.4s ease;  
   z-index: 1;  
}

.ai-card:hover .ai-glow-layer {  
   opacity: 1;  
}  
\`\`\`

\`\`\`js  
// Attach to all .ai-card elements  
document.querySelectorAll('.ai-card').forEach(card \=\> {  
   const glow \= card.querySelector('.ai-glow-layer');  
   card.addEventListener('mousemove', e \=\> {  
       const rect \= card.getBoundingClientRect();  
       glow.style.left \= (e.clientX \- rect.left) \+ 'px';  
       glow.style.top  \= (e.clientY \- rect.top)  \+ 'px';  
   });  
   card.addEventListener('mouseleave', () \=\> glow.style.opacity \= '0');  
});  
\`\`\`

**\#\#\# 3\. Button Interactions**

Buttons transition from Stone-900 to Majorelle Blue on hover with a subtle lift.

\`\`\`css  
.btn {  
   display: inline-flex;  
   align-items: center;  
   justify-content: center;  
   padding: 1rem 2.5rem;  
   font-family: var(\--font-body);  
   font-weight: 500;  
   font-size: 1rem;  
   border-radius: var(\--radius-capsule);  
   border: 1px solid transparent;  
   cursor: pointer;  
   transition: var(\--transition-smooth);  
}

.btn-primary {  
   background: var(\--stone-900);  
   color: var(\--white);  
   box-shadow: var(\--shadow-soft);  
}

.btn-primary:hover {  
   background: var(\--majorelle-blue);  
   transform: translateY(\-2px);  
   box-shadow: var(\--shadow-blue);  
}

.btn-secondary {  
   background: transparent;  
   color: var(\--stone-900);  
   border-color: var(\--stone-200);  
}

.btn-secondary:hover {  
   background: var(\--stone-900);  
   color: var(\--white);  
   border-color: var(\--stone-900);  
}

.btn-cta {  
   background: var(\--majorelle-blue);  
   color: var(\--white);  
}

.btn-cta:hover {  
   background: var(\--stone-900);  
   transform: translateY(\-2px);  
   box-shadow: var(\--shadow-lg);  
}  
\`\`\`

**\#\#\# 4\. Scroll-In (Fade-Up) Animation**

Sections reveal with a 3D perspective lift as they scroll into view.

\`\`\`css  
.fade-up {  
   opacity: 0;  
   transform: perspective(1200px) rotateX(8deg) translateY(40px) scale(0.97);  
   transition: opacity 1.0s cubic-bezier(0.16, 1, 0.3, 1),  
               transform 1.0s cubic-bezier(0.16, 1, 0.3, 1);  
   transform-style: preserve-3d;  
}

.fade-up.visible {  
   opacity: 1;  
   transform: perspective(1200px) rotateX(0deg) translateY(0) scale(1);  
}  
\`\`\`

\`\`\`js  
// IntersectionObserver for scroll-triggered fade-up  
const observer \= new IntersectionObserver(entries \=\> {  
   entries.forEach(e \=\> {  
       if (e.isIntersecting) {  
           e.target.classList.add('visible');  
           observer.unobserve(e.target);  
       }  
   });  
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el \=\> observer.observe(el));  
\`\`\`

**\#\#\# 5\. Blue Edge Vignette (AI Vision Scroll Effect)**

A vertical blue glow on the left/right edges of the viewport reinforces the AI aesthetic during scrolling.

\`\`\`css  
body::before,  
body::after {  
   content: '';  
   position: fixed;  
   top: 0;  
   width: 80px;  
   height: 100%;  
   pointer-events: none;  
   z-index: 9999;  
   opacity: 0.35;  
}

body::before {  
   left: 0;  
   background: linear-gradient(to right, rgba(28, 105, 212, 0.12), transparent);  
}

body::after {  
   right: 0;  
   background: linear-gradient(to left, rgba(28, 105, 212, 0.12), transparent);  
}  
\`\`\`

**\#\#\# 6\. Floating Decorative Blobs**

Ambient blurred blobs drift slowly in the background for depth.

\`\`\`css  
.blob {  
   position: absolute;  
   border-radius: 50%;  
   filter: blur(80px);  
   opacity: 0.45;  
   pointer-events: none;  
   animation: blobDrift 20s infinite alternate ease-in-out;  
}

.blob-blue {  
   background: rgba(28, 105, 212, 0.18);  
}

.blob-terra {  
   background: rgba(224, 122, 95, 0.2);  
   animation-delay: \-7s;  
}

@keyframes blobDrift {  
   0%   { transform: translate(0, 0) scale(1); }  
   50%  { transform: translate(40px, 25px) scale(1.06); }  
   100% { transform: translate(\-25px, 45px) scale(0.94); }  
}  
\`\`\`

**\#\#\# 7\. Pill / Tag Hover**

Audience pills invert on hover for a crisp, high-contrast feel.

\`\`\`css  
.pill {  
   padding: 0.75rem 1.75rem;  
   background: var(\--sand-dark);  
   border: 1px solid var(\--stone-200);  
   border-radius: var(\--radius-capsule);  
   font-weight: 500;  
   transition: var(\--transition-smooth);  
}

.pill:hover {  
   background: var(\--stone-900);  
   color: var(\--white);  
   border-color: var(\--stone-900);  
   transform: scale(1.05);  
}  
\`\`\`

**\#\#\# 8\. Glass / Frosted Card**

Used for UI demo cards, testimonials, or overlays.

\`\`\`css  
.glass-card {  
   background: rgba(255, 255, 255, 0.45);  
   backdrop-filter: blur(20px) saturate(1.4);  
   \-webkit-backdrop-filter: blur(20px) saturate(1.4);  
   border: 1px solid rgba(255, 255, 255, 0.65);  
   border-radius: var(\--radius-lg);  
   box-shadow: var(\--shadow-soft);  
}  
\`\`\`

\---

**\#\# 🏗️ Layout Conventions**

\- **\*\*Max content width\*\*** → \`1200px\`, centered with \`margin: 0 auto; padding: 0 2rem\`  
\- **\*\*Section padding\*\*** → \`6rem 0\`  
\- **\*\*Card padding\*\*** → \`3rem\` (large), \`2rem\` (medium)  
\- **\*\*Grid gaps\*\*** → \`2rem\` (cards), \`4rem\` (two-col layouts)  
\- **\*\*Navbar\*\*** → Fixed, frosted glass — \`backdrop-filter: blur(12px)\`, \`background: rgba(244, 241, 222, 0.88)\`

\---

**\#\# ✅ Design Principles**

1\. **\*\*Warm base, cool accents\*\*** — The sand/bone background warmth is always balanced by Majorelle Blue for intelligence and Terracotta for cultural identity.  
2\. **\*\*Serif headings, sans body\*\*** — Playfair Display signals heritage authority; Inter delivers clarity.  
3\. **\*\*Capsule buttons only\*\*** — All buttons and pills use \`border-radius: 9999px\`. No square corners on interactive elements.  
4\. **\*\*Thin borders, soft shadows\*\*** — Cards rely on \`1px\` borders \+ \`box-shadow\` for depth, not heavy outlines.  
5\. **\*\*Blue \= AI, Terracotta \= Culture\*\*** — Use Majorelle Blue for anything tech/AI-forward; Terracotta for cultural reference points, Arabic context, or warmth.  
6\. **\*\*Smooth, premium motion\*\*** — All transitions use \`cubic-bezier(0.16, 1, 0.3, 1)\` at \`0.4s\`–\`0.5s\` for a luxurious feel.

