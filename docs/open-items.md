# Open items

Each item shows as a yellow `[CONFIRM]` chip in development and is hidden in production. `npm run launch-check` fails while any remain. Who answers: **Dr** = Dr. Anand Yadav, **Clinic** = front desk, **Agency** = Automize.

| # | Item | Where it appears | Who | Blocks launch |
|---|------|------------------|-----|---------------|
| 1 | Medical Council registration number (MPMC MP729?) | About, footer, Person schema | Dr | Yes |
| 2 | Year FACC was awarded | About timeline | Dr | No (hide year) |
| 3 | Name of the hospital in Australia | About timeline | Dr | No |
| 4 | Names of the five other hospitals he has worked at | About | Dr | No |
| 5 | Exact hospital wording for where surgery happens | Treatment pages, home | Dr | Yes |
| 6 | Years at Max hospital | About timeline | Dr | No |
| 7 | Insurance and government schemes accepted (Ayushman Bharat, CGHS, etc.) | Every treatment FAQ, contact | Clinic | No (keep the generic line) |
| 8 | Fees and payment methods (cash, UPI, cards) | Contact, first visit | Clinic | No |
| 9 | Lift and parking at Vindhya Retreat | Contact, first visit | Clinic | No |
| 10 | How fast the clinic replies on WhatsApp | Booking composer, contact | Clinic | No |
| 11 | Domain: www or apex as the canonical host | SEO, sitemap | Agency | Yes |
| 12 | Legal review of privacy, terms and disclaimer (DPDP Act 2023) | Legal pages | Clinic's lawyer | Yes |
| 13 | Google Business Profile access for review link and photo sync | Contact, schema `sameAs` | Clinic | No |
| 14 | Angiography and CT: copy does not say where they happen; tests are "at the clinic". Confirm whether angiography and CT are also in-house or at the partner hospital | Treatment pages | Dr | No |
