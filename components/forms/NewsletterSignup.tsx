import Button from '../ui/Button'
import Input from '../ui/Input'

export default function NewsletterSignup() {
  return (
    <form>
      <Input label="Email" type="email" id="newsletter-email" required />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
