import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '../pages/Contact';

export const Route = createFileRoute('/contact')({
  component: Contact,
});

function Contact() {
  return <ContactPage />;
}
