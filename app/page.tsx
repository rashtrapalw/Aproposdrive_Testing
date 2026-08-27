import App from '../src/app/App'
import { FAQSchema } from '../src/app/components/seo/FAQSchema'
import { buildMetadata, pageSeo } from './seo'

export const metadata = buildMetadata(pageSeo.home)

const homeFaqs = [
  {
    question: 'What is SRM technology?',
    answer:
      'Switched Reluctance Motor (SRM) technology uses the principle of magnetic reluctance to produce motion. It requires no permanent magnets or rare earth materials, making it cost-effective, robust, and highly efficient for various applications.',
  },
  {
    question: 'What are benefits of SRM over BLDC/PMSM?',
    answer:
      'SRM motors are rare earth-free, more tolerant to high temperatures, have simpler construction with no rotor windings or magnets, offer better fault tolerance, and can achieve a wide speed range.',
  },
  {
    question: 'Are your products customizable?',
    answer:
      'Yes. AproposDrive uses a modular design approach so its technology can integrate across a wide range of electric mobility and industrial applications.',
  },
  {
    question: 'Do you also do BLDC/PMSM Technology?',
    answer:
      'Yes. AproposDrive states that it specializes in BLDC and PMSM motor technologies alongside its work on rare-earth-free solutions.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'AproposDrive provides technical support including design, prototype manufacturing, system integration, field testing, and remote monitoring for OEM partners and Tier 1 manufacturers.',
  },
]

export default function HomePage() {
  return (
    <>
      <FAQSchema items={homeFaqs} />
      <App />
    </>
  )
}
