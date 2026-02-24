# Brainbloom — explainer

- Product: Brainbloom — mindful activities to stop doomscrolling
- Team: Domenique Joli de S. S. Peixoto — domeniquejoli6@gmail.com
- Live deployment: https://react-next-ts-d232854zn-niques-projects-b70464f3.vercel.app/
- Public GitHub: https://github.com/DomeniqueJoli/react-next-ts-app

## One‑liner
Escape brainrot: generate one simple, mindful activity at a time and act on it.

## Problem We Solve (2–3 sentences)
Doomscrolling drains attention and increases anxiety by keeping people stuck in infinite feeds. Brainbloom offers a concrete alternative: instead of another feed, it shows a single mindful activity with type, effort, and cost — plus an optional resource link. You can save items for later, mark them as done, and review your progress in your profile to build healthier habits.

## Technical Notes (brief)
- Next.js 14 (App Router) with Tailwind CSS.
- Backend: Server Action fetching the public “Bored” API with no-store caching.
- Lightweight persistence using localStorage for “saved” and “completed” lists.
- Primary routes: `/` (landing), `/dashboard` (generate + act), `/profile` (progress), `/why-brainrot` (context).
