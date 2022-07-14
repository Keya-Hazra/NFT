import Accordion from '../../components/ui/Accordion'
import SectionHeader from '../../components/ui/SectionHeader'
import faqData from '../../utils/data/faqData'

function FAQ() {
  return (
    <div id="faq" className="space-y-4">
      <SectionHeader
        title="Frequently Asked
          Question"
        description="Wanna Ask Something?"
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {
          faqData.map((faq, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Accordion key={index} title={faq.title} body={faq.body} />
          ))
        }
      </div>
    </div>
  )
}

export default FAQ
