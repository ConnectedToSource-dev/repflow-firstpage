export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  metric: string
  type: 'rep' | 'installer'
}

export const testimonials: Testimonial[] = [
  {
    name: 'Marcus Delgado',
    role: 'Solar Consultant',
    company: 'SunVista Energy',
    quote: 'I bring up water quality during every solar consultation now. Customers already trust me with their home — water purification is the natural next step. The academy took me 45 minutes.',
    metric: '+$3,400/mo',
    type: 'rep',
  },
  {
    name: 'Priya Vasquez',
    role: 'Owner',
    company: 'ClearFlow Plumbing',
    quote: 'We went from chasing leads on Angi to having a full schedule of pre-sold installations. The customers already have the system purchased — we just show up and install.',
    metric: '+$8,200/mo',
    type: 'installer',
  },
  {
    name: 'Terrance Okafor',
    role: 'Independent Solar Rep',
    company: 'Okafor Clean Energy',
    quote: 'My first water purification sale happened on day two. The customer was already interested in solar — when I mentioned their water test results, the deal closed itself.',
    metric: '+$2,100/mo',
    type: 'rep',
  },
  {
    name: 'Camille Hewitt',
    role: 'VP of Sales',
    company: 'PeakSun Solar',
    quote: 'We rolled HomeBioHackers out to our entire team of 22 reps. The incremental revenue has been significant, and it actually improves our close rate on solar because we become the total home advisor.',
    metric: '+$41k/quarter',
    type: 'rep',
  },
  {
    name: 'Raj Malhotra',
    role: 'Lead Technician',
    company: 'PureWater Installations',
    quote: 'I used to spend $2,000 a month on HomeAdvisor leads and still compete with three other companies for each job. Now every job is mine, the customer is expecting me, and I keep my full margin.',
    metric: '18 installs/mo',
    type: 'installer',
  },
  {
    name: 'Dana Kowalski',
    role: 'Owner-Operator',
    company: 'Great Lakes Water Co.',
    quote: 'The scheduling dashboard alone saves me hours. I see my jobs for the week, customer details, system type — everything before I load the truck. No more phone tag.',
    metric: '+$6,800/mo',
    type: 'installer',
  },
]
