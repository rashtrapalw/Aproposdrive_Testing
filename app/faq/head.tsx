import { PageHead } from '@/app/components/seo/PageHead'
import { pageSeo } from '../seo'

export default function Head() {
  return <PageHead config={pageSeo.faq} />
}
