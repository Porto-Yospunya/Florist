import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/shop')({
  component: Shop,
});

function Shop() {
  return (
    <div>
      <div className="py-5">
        <img src="" className="w-screen h-[400px] bg-gray-300" />
      </div>
    </div>
  );
}
