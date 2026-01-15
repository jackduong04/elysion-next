# Contracts: Center-Snapping Focus Carousel

No external APIs are required. The following internal interface describes the carousel component inputs/outputs to keep behaviors testable.

## Component Props (pseudo-API)

```ts
type CarouselItem = {
  id: string;
  imageSrc: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  items: CarouselItem[];           // ordered list of images
  autoplayIntervalMs?: number;     // default interval; ignored when prefers-reduced-motion is true
  initialIndex?: number;           // starting focused index
};
```

### Behavioral Contracts
- Scroll or drag ends with nearest item snapped to center and focused.
- Click/tap on an item scrolls it to center and focuses it.
- Dots and next/prev controls update focus by index and reflect active state.
- Autoplay advances items on interval; pauses on hover/focus; disabled for reduced-motion; permanently stops after any manual interaction.
- Keyboard navigation: left/right arrows move focus by one; controls are focusable with aria labels indicating position/total.
