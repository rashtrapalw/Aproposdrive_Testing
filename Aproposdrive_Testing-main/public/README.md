# Static Assets

This folder contains static files that are served directly by Next.js.

## Folder Structure

- `videos/` - Video files (mp4, webm, etc.)
- `photos/` - Image files (jpg, png, webp, etc.)

## Usage

Files in this folder are accessible at the root URL:

- `/videos/my-video.mp4` → `public/videos/my-video.mp4`
- `/photos/my-image.jpg` → `public/photos/my-image.jpg`

## Examples

### Using Images in Components

```tsx
import Image from "next/image";

export default function MyComponent() {
  return (
    <Image
      src="/photos/hero-image.jpg"
      alt="Hero image"
      width={800}
      height={600}
    />
  );
}
```

### Using Videos in Components

```tsx
export default function MyComponent() {
  return (
    <video controls>
      <source src="/videos/demo-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
```

## File Naming

- Use lowercase with hyphens: `my-video.mp4`
- Avoid spaces: use `my-video.mp4` instead of `my video.mp4`
- Keep filenames descriptive and SEO-friendly

## Optimization Tips

- For images: Use Next.js `<Image>` component for automatic optimization
- For videos: Consider using modern formats like WebM for better compression
- Large files: Consider using a CDN for better performance
