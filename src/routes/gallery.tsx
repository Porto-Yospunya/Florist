import { createFileRoute } from '@tanstack/react-router'
import { GalleryPage } from '../pages/Gallery'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  return <GalleryPage />;
}
