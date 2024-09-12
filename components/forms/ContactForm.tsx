import Button from '../ui/Button'
import Input from '../ui/Input'

export default function ContactForm() {
  return (
    <form>
      <Input label="Name" type="text" id="name" required />
      <Input label="Email" type="email" id="email" required />
      <textarea id="message" placeholder="Your message" required></textarea>
      <Button type="submit">Send Message</Button>
    </form>
  )
}
