import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  return <div className="">Hello "/gallery"!</div>
}
