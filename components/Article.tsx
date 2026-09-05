import { SITE } from "@/lib/site";
import { PHOTOS } from "@/lib/images";
import SectionPhoto from "./SectionPhoto";
import {
  PhoneIcon,
  HouseIcon,
  DollarIcon,
  BoltIcon,
  ShieldIcon,
  TagIcon,
  CheckIcon,
  ArrowIcon,
} from "./Icons";

/* ------------------------------ small helpers ----------------------------- */

function SectionHeading({
  id,
  eyebrow,
  children,
}: {
  id: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="scroll-mt-28 text-[1.7rem] font-bold leading-tight tracking-tight text-ink-900 sm:text-4xl"
      >
        {children}
      </h2>
    </>
  );
}

function FactorCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <li className="rounded-2xl border border-sand-300 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
        {icon}
      </span>
      <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{body}</p>
    </li>
  );
}

function PriceLine({
  label,
  price,
  detail,
}: {
  label: string;
  price: string;
  detail: string;
}) {
  return (
    <li className="flex flex-col gap-1 border-b border-sand-200 py-4 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <div className="sm:max-w-[62%]">
        <p className="text-[15px] font-bold text-ink-900">{label}</p>
        <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{detail}</p>
      </div>
      <p className="whitespace-nowrap font-mono text-base font-bold tabular-nums text-brand-700">
        {price}
      </p>
    </li>
  );
}

function InlineCta({
  heading,
  body,
  variant = "light",
}: {
  heading: string;
  body: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div
      className={`my-10 overflow-hidden rounded-2xl border shadow-card ${
        dark
          ? "border-ink-800 bg-ink-900 text-white"
          : "border-brand-200 bg-brand-50"
      }`}
    >
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p
            className={`text-lg font-bold ${dark ? "text-white" : "text-ink-900"}`}
          >
            {heading}
          </p>
          <p
            className={`mt-1.5 max-w-xl text-[15px] leading-relaxed ${
              dark ? "text-brand-100/85" : "text-ink-500"
            }`}
          >
            {body}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
          <a
            href={SITE.phoneHref}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold shadow-card transition ${
              dark
                ? "bg-sun-400 text-ink-950 hover:bg-sun-300"
                : "bg-brand-600 text-white hover:bg-brand-700"
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <a
            href="#price-finder"
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-bold transition ${
              dark
                ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
                : "border-brand-600/25 bg-white text-brand-700 hover:border-brand-600/50"
            }`}
          >
            Check a price
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- body ---------------------------------- */

export default function Article() {
  return (
    <article className="bg-sand-50">
      {/* ---------- Snapshot / what most people pay ---------- */}
      <section
        aria-labelledby="what-most-pay"
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="prose-pcm">
            <SectionHeading id="what-most-pay" eyebrow="What Mesa homeowners pay">
              Real Costs, Plans &amp; What Affects Your Quote
            </SectionHeading>
            <p className="mt-4">
              Most Mesa homeowners pay somewhere between{" "}
              <strong>$120 and $190</strong> for a one time treatment on a
              standard 1,600–2,000 sq ft house targeting common pests like ants,
              spiders, and cockroaches. Pest control services in Mesa, AZ
              typically cost between $110 and $300 for a one-time visit, with the
              range widening based on pest type and home size. Pest control costs
              $100 to $270 for one-time services across the broader market, and
              one-time pest treatments range from $110 to $250 for most general
              jobs.
            </p>
            <p>
              At <strong>Pest Control Mesa Az Pros</strong>, our focus is giving
              Mesa AZ homeowners transparent, single-page pricing so you see real
              cost estimates before scheduling any service.
            </p>
          </div>

          <div className="rounded-2xl border border-sand-300 bg-white p-6 shadow-card sm:p-8">
            <h3 className="flex items-start gap-2.5 text-lg font-bold text-ink-900">
              <TagIcon className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              A quick snapshot of what Mesa residents typically pay
            </h3>
            <ul className="prose-pcm mt-5">
              <li>
                <strong>Monthly pest control service prices</strong> in Mesa
                typically range from $35 to $60 for basic general pest control.
                Monthly pest control services cost between $40 and $70 depending
                on the scope covered.
              </li>
              <li>
                <strong>Recurring maintenance plans</strong> for pest control in
                Mesa range from $40 to $70 per visit, making them a practical
                option for long term protection.
              </li>
              <li>
                <strong>Light pest issues</strong> (a few ants or spiders) sit at
                the lower end. Heavy scorpion or roach activity pushes costs
                higher.
              </li>
              <li>
                <strong>Desert pests</strong> like scorpions and termites may
                require specialized treatments that increase costs well beyond
                standard general pest control rates.
              </li>
              <li>
                <strong>Specialty pest removal</strong> for termites, bed bugs, or
                rodents carries its own pricing tiers, which we cover below.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Cost factors ---------- */}
      <section
        id="cost-factors"
        aria-labelledby="cost-factors-heading"
        className="scroll-mt-24 border-y border-sand-200 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionHeading id="cost-factors-heading" eyebrow="Cost drivers">
              What Impacts Pest Control Prices in Mesa, AZ?
            </SectionHeading>
            <p className="prose-pcm mt-4">
              Pest control pricing in Mesa varies significantly based on service
              frequency, pest type, and property size. Here are the main cost
              drivers that determine your quote:
            </p>
          </div>

          <SectionPhoto
            photo={PHOTOS.exteriorTreatment}
            className="mt-9"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />

          <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FactorCard
              icon={<HouseIcon className="h-5.5 w-5.5" />}
              title="Home size"
              body="The size of a home plays a significant role in pricing. A small condo under 1,000 sq ft requires less product and labor than a 2,500+ sq ft home in areas like Eastmark or Las Sendas. Larger homes mean more linear feet of perimeter, more entry points, and more time on site."
            />
            <FactorCard
              icon={<BoltIcon className="h-5.5 w-5.5" />}
              title="Pest type"
              body="Treating common pests like ants and spiders is straightforward. Termite control, scorpion control, bed bugs, and rodent removal require specialized products, equipment, and expertise that raise costs."
            />
            <FactorCard
              icon={<DollarIcon className="h-5.5 w-5.5" />}
              title="Infestation severity"
              body="A one time service for light spider activity might run $110, while a repeated heavy German cockroach infestation in a kitchen could require multiple visits at significantly higher total cost."
            />
            <FactorCard
              icon={<ShieldIcon className="h-5.5 w-5.5" />}
              title="Property layout"
              body="Pools, deep rock landscaping, block walls, and desert greenbelts common in Mesa expand the treatment zones a technician needs to cover."
            />
            <FactorCard
              icon={<CheckIcon className="h-5.5 w-5.5" />}
              title="Treatment scope"
              body="An exterior-only maintenance visit costs less than full interior plus exterior work. Attic, roofline, or crawlspace treatment adds labor and product."
            />
            <FactorCard
              icon={<TagIcon className="h-5.5 w-5.5" />}
              title="Service frequency"
              body="Choosing a monthly plan or bi-monthly schedule lowers your per-visit price compared to calling for one time treatments each time something shows up. Regular pest management is crucial in Arizona's climate, where bugs and scorpions stay active nearly year-round."
            />
          </ul>
        </div>
      </section>

      {/* ---------- Pricing by service type ---------- */}
      <section
        id="plans"
        aria-labelledby="by-service-heading"
        className="scroll-mt-24 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionHeading id="by-service-heading" eyebrow="By service type">
              Typical Pest Control Pricing by Service Type in Mesa
            </SectionHeading>
          </div>

          <div className="mt-8 rounded-2xl border border-sand-300 bg-white p-6 shadow-card sm:p-8">
            <ul>
              <PriceLine
                label="General one time treatments"
                price="$110–$210"
                detail="Usually $110–$210 for a standard 1,600–2,000 sq ft home. One-time treatment costs generally range from $110 to $300 for single visits or severe seasonal flare-ups in Mesa."
              />
              <PriceLine
                label="Quarterly pest control plans"
                price="$85–$175/visit"
                detail="Quarterly pest control service in Mesa averages between $85 and $175 per treatment, roughly $35–$55 per month when spread across the year. Plans typically include exterior barrier work and interior treatment as needed."
              />
              <PriceLine
                label="Bi-monthly plans"
                price="$45–$75/visit"
                detail="Bi-monthly pest control service plans are commonly priced around $45 to $75 per visit in Mesa, striking a balance between cost and coverage."
              />
              <PriceLine
                label="Monthly pest control"
                price="$40–$70/month"
                detail="Commonly $40–$70 per month for ongoing protection in higher-pressure areas or homes with past scorpion or roach issues. Most homes benefit from monthly or bi-monthly treatments to prevent pests from gaining a foothold."
              />
              <PriceLine
                label="Initial visit fees"
                price="$75–$150"
                detail="The first visit often costs more because of extra time spent on inspection, heavier product application, and interior clean-out. A pest inspection typically costs $75 to $150 when sold separately."
              />
              <PriceLine
                label="Larger properties"
                price="+10–20%"
                detail="Homes with guest houses, RV pads, or detached garages in Mesa may see roughly 10–20% higher rates than a comparable single-structure house."
              />
            </ul>
            <p className="prose-pcm mt-6 border-t border-sand-200 pt-5 text-ink-500">
              <strong>Pest Control Mesa Az Prices</strong> keeps these numbers on
              a simple, single-page layout so Mesa homeowners know what to expect
              upfront.
            </p>
          </div>

          <InlineCta
            heading="Not sure which plan fits your house?"
            body="Tell us your square footage and what you're seeing. We'll tell you the plan, the frequency and the flat monthly number in about two minutes — no home visit required for a ballpark."
          />
        </div>
      </section>

      {/* ---------- Specialty pests ---------- */}
      <section
        id="specialty"
        aria-labelledby="specialty-heading"
        className="scroll-mt-24 border-y border-sand-200 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionHeading id="specialty-heading" eyebrow="Specialty pricing">
              Cost of Specialty Pest Control in Mesa: Termites, Bed Bugs &amp; More
            </SectionHeading>
            <p className="prose-pcm mt-4">
              Some pests demand more than a standard pest control treatment.
              Professional pest control can treat over 100 types of pests, but
              these specialty jobs carry their own pricing:
            </p>
          </div>

          <SectionPhoto
            photo={PHOTOS.scorpionInspection}
            className="mt-9"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Termite treatment",
                price: "$500–$2,000+",
                body: "Termite inspection and treatment in Mesa can range from $500 to over $2,000 based on the extent of the problem. Soil barrier or trench treatments typically run $3–$15 per linear foot. Termite treatment costs between $240 and $400 on average for smaller-scale preventive work, and termite treatments typically last several years when properly applied. A termite infestation left unchecked can cause serious wood and foundation damage.",
              },
              {
                title: "Termite inspections",
                price: "$0–$150",
                body: "Some local pest control companies charge $75–$150 for a standalone inspection. Others offer free inspections with a written estimate.",
              },
              {
                title: "Bed bugs",
                price: "$320–$900+",
                body: "Bed bug extermination costs range from $320 to $400 on average per room for chemical treatment. More severe cases or whole-home heat treatments push costs to $900 or more. Bed bugs are notoriously difficult to treat without professional help.",
              },
              {
                title: "Scorpion control",
                price: "$150–$400",
                body: "Scorpion control treatments in Mesa typically cost between $150 and $400 as a one-time service. Scorpion control requires perimeter sealing due to their hiding behavior, which adds labor. Adding ongoing scorpion-focused service to a general pest control plan often runs $30–$60 extra per month.",
              },
              {
                title: "Rodent control",
                price: "$200–$400+",
                body: "Trapping and rodent removal typically start around $200–$400. Rodent control includes sealing entry points to prevent return, plus potential attic clean-up and sanitation costs.",
              },
              {
                title: "Bird and pigeon control",
                price: "Mid-hundreds+",
                body: "Mesa homes with tile roofs and solar panels may need custom exclusion work starting in the mid-hundreds and climbing depending on nesting and cleanup complexity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sand-300 bg-sand-50 p-6 shadow-card"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold text-ink-900">{item.title}</h3>
                  <span className="whitespace-nowrap rounded-lg bg-brand-600 px-2.5 py-1 font-mono text-[13px] font-bold text-white">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <InlineCta
            variant="dark"
            heading="Termites, bed bugs or scorpions? Get the specialty number first."
            body="Specialty jobs are where quotes swing the most. We inspect free, show you what we found, and price only the treatment your home actually needs."
          />
        </div>
      </section>

      {/* ---------- One time vs recurring ---------- */}
      <section
        id="one-time-vs-recurring"
        aria-labelledby="compare-heading"
        className="scroll-mt-24 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionHeading id="compare-heading" eyebrow="Which is right for you">
              One Time Treatment vs Recurring Monthly Pest Control
            </SectionHeading>
            <p className="prose-pcm mt-4">
              Choosing between a one time treatment and recurring pest control
              plans comes down to your pest pressure, budget, and how much long
              term protection you want. Monthly pest control service is generally
              more cost-effective than one-time visits when pest activity is
              consistent.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-sand-300 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-ink-900">
                  One time treatment
                </h3>
                <span className="rounded-lg bg-sand-200 px-3 py-1 font-mono text-sm font-bold text-ink-800">
                  $95–$330
                </span>
              </div>
              <ul className="prose-pcm mt-5">
                <li>
                  A one time service is a single visit designed to knock down a
                  specific pest issue, typically offering{" "}
                  <strong>30–60 days</strong> of noticeable relief before pests
                  may return.
                </li>
                <li>
                  One time treatments make sense for a sudden swarm of ants in a
                  kitchen, a seasonal spider surge, or move-in and move-out
                  situations where you need quick pest removal.
                </li>
                <li>
                  However, DIY pest control often provides only temporary relief
                  from infestations, and one time professional visits share a
                  similar limitation in Mesa's desert climate, where pests like
                  scorpions, ants, and cockroaches are active nearly year-round.
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl border-2 border-brand-500 bg-white p-6 shadow-lift sm:p-8">
              <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                Best value
              </span>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-ink-900">
                  Recurring monthly plan
                </h3>
                <span className="rounded-lg bg-brand-600 px-3 py-1 font-mono text-sm font-bold text-white">
                  $40–$75/mo
                </span>
              </div>
              <ul className="prose-pcm mt-5">
                <li>
                  Recurring monthly pest control creates a consistent barrier on
                  the exterior and addresses interior trouble spots as needed.
                  Pest control should occur once every two to three months at
                  minimum, and monthly pest control may be necessary for severe
                  infestations.
                </li>
                <li>
                  Many providers include <strong>free re-service</strong> if
                  pests return between scheduled visits, which adds real value.
                </li>
                <li>
                  Professional pest control effectively removes pests and
                  prevents damage to your home, protecting your family members
                  and pets from contact with harmful bugs and rodents.
                </li>
                <li>
                  Homes near washes, canals, or open desert benefit most from a
                  proactive approach with routine service rather than relying on
                  single visits to prevent future infestations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How we price ---------- */}
      <section
        id="how-we-price"
        aria-labelledby="how-we-price-heading"
        className="scroll-mt-24 border-y border-sand-200 bg-white py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <SectionHeading id="how-we-price-heading" eyebrow="Our approach">
                How We Price Pest Control at “Pest Control Mesa Az Pros”
              </SectionHeading>
              <p className="prose-pcm mt-4">
                Our company is built around a straightforward pricing
                single-page website so Mesa residents can see typical costs
                before calling. No hidden fees, no confusing tiers.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-6">
                <h3 className="text-base font-bold text-ink-900">
                  Two real Mesa examples
                </h3>
                <dl className="mt-4 space-y-4 text-[15px] leading-relaxed">
                  <div>
                    <dt className="font-bold text-brand-800">
                      1,800 sq ft near Dobson Ranch — ants &amp; spiders
                    </dt>
                    <dd className="mt-1 text-ink-500">
                      Roughly{" "}
                      <strong className="font-mono text-brand-700">
                        $120–$190
                      </strong>{" "}
                      for a one time treatment, or around{" "}
                      <strong className="font-mono text-brand-700">
                        $45–$60/month
                      </strong>{" "}
                      on a recurring plan.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-bold text-brand-800">
                      2,400 sq ft near the Mesa–Apache Junction line — scorpions
                      &amp; rodents
                    </dt>
                    <dd className="mt-1 text-ink-500">
                      Often{" "}
                      <strong className="font-mono text-brand-700">
                        $180–$300+
                      </strong>{" "}
                      for initial treatment and{" "}
                      <strong className="font-mono text-brand-700">
                        $60–$80/month
                      </strong>{" "}
                      ongoing.
                    </dd>
                  </div>
                </dl>
              </div>

              <SectionPhoto
                photo={PHOTOS.entryPointInspection}
                className="mt-6"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
            </div>

            <ul className="prose-pcm lg:pt-14">
              <li>
                Quotes are based on three things:{" "}
                <strong>home size, pest type,</strong> and whether you need a one
                time service or ongoing monthly pest control.
              </li>
              <li>
                We avoid confusing long-term contracts. Services run on a simple
                agreement model where you're not locked in.
              </li>
              <li>
                Every inspection focuses on locating entry points around doors,
                windows, weep holes, and utility lines so treatment is targeted
                and effective, not wasteful.
              </li>
              <li>
                Recommendations for upgrades like adding termite services or
                rodent exclusion are based on what the exterminator actually
                finds on-site, not a sales quota. We want to protect your home
                and help you treat only what needs attention.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Choosing a company ---------- */}
      <section
        id="choosing"
        aria-labelledby="choosing-heading"
        className="scroll-mt-24 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionHeading id="choosing-heading" eyebrow="Buyer's guide">
              Choosing the Best Pest Control Company in Mesa, AZ
            </SectionHeading>
            <p className="prose-pcm mt-4">
              Finding the best pest control company means looking beyond the
              cheapest price. Here's what to focus on when comparing local pest
              control companies in Mesa:
            </p>
          </div>

          <ol className="mt-9 grid gap-4 md:grid-cols-2">
            {[
              {
                n: "01",
                title: "Check local track record",
                body: "Compare online reviews, years in business, and whether the company specializes in Arizona pests like scorpions, termites, and bed bugs. A professional with local experience will know the signs of common Mesa pest problems.",
              },
              {
                n: "02",
                title: "Ask what the quote covers",
                body: "Interior treatment, exterior perimeter, garage, yard, and follow-up visits. The best pest control services spell this out clearly.",
              },
              {
                n: "03",
                title: "Verify licensing and insurance",
                body: (
                  <>
                    Verify that the company is{" "}
                    <a
                      href="https://agriculture.az.gov/pestspest-control/structural-pest-control"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      licensed through the Arizona Office of Pest Management
                    </a>{" "}
                    and carries proper insurance. Technicians should be trained
                    for Mesa's climate and construction styles, including slab
                    foundation homes and block wall properties.
                  </>
                ),
              },
              {
                n: "04",
                title: "Ask the key questions",
                body: "Do they offer affordable pest control plans on a monthly basis? Do they provide one time treatments? Is re-service free? What products do they use around kids, family, and pets? Can they treat wasps, bees, and other bugs beyond the basics? Will they help you store food in sealed containers and address conditions that attract pests?",
              },
              {
                n: "05",
                title: "Expect a tailored plan",
                body: "A good pest control company should inspect for entry points, explain what they found, and tailor a pest control plan to your specific home size and layout rather than applying a generic job.",
              },
            ].map((item) => (
              <li
                key={item.n}
                className="rounded-2xl border border-sand-300 bg-white p-6 shadow-card"
              >
                <span className="font-mono text-sm font-bold text-brand-500">
                  {item.n}
                </span>
                <h3 className="mt-2 text-base font-bold text-ink-900">
                  {item.title}
                </h3>
                <div className="prose-pcm mt-2">
                  <p className="mb-0! text-[15px]!">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="prose-pcm mx-auto mt-10 text-center">
            <p className="text-lg!">
              <strong>Pest Control Mesa Az Prices</strong> exists to give you
              honest pricing first. Contact pros who show you numbers upfront,
              and you'll spend less time guessing and more time enjoying a
              pest-free home.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
