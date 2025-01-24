import { createFileRoute } from '@tanstack/react-router';
import { ShopPage } from '../pages/Shop';

export const Route = createFileRoute('/shop')({
  component: Shop,
});

function Shop() {
  return <ShopPage />;
}
