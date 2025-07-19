import Image1 from "@/public/about-1.jpg";
import Image from "next/image";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to Stelix
        </h1>

        <div className="space-y-8">
          <p>
            Tucked away in a quiet corner of the mountains, this is where nature
            feels close and time moves a little slower. It&apos;s not about
            checking in to a place — it&apos;s about checking out from the rush
            and finding room to breathe again.
          </p>
          <p>
            Our {cabins.length} cozy cabins offer just enough comfort to help
            you settle in — and just enough space to let your mind wander. Step
            outside, and you&apos;re surrounded by tall trees, open skies, and
            trails that lead to moments you didn&apos;t plan.
          </p>
          <p>
            Spend the evening around a fire. Watch the stars from the warmth of
            a hot tub. Let the day unfold with no agenda, just the sound of
            birds, wind, and laughter from people you care about. It&apos;s not
            a resort. It&apos;s not a getaway. It&apos;s a place to be present,
            to reconnect, and to remember what that actually feels like.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={Image1}
          className="rounded-md"
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover rounded-md"
          alt="Family that manages Stelix"
          quality={80}
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          A Place Grown from Generations of Heart
        </h1>

        <div className="space-y-8">
          <p>
            This isn&apos;t a business born in a boardroom it&apos;s a place
            shaped by hands that built with intention and hearts that never
            stopped caring. For as long as we can remember, this land has been
            part of our everyday life the meals, the stories, the laughter
            echoing through seasons.
          </p>
          <p>
            What you see today isn&apos;t the result of a strategy, but of slow,
            steady care passed from one generation to the next. No polished
            gloss, no corporate blueprint just a legacy of welcome, warmth, and
            the kind of quiet that makes you feel like you&apos;ve been here
            before.
          </p>
          <p>
            We don&apos;t just open doors. We share something personal and if
            you decide to stay, you become part of the rhythm we&apos;ve always
            lived by.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 rounded-xl bg-rosewood px-8 py-5 text-primary-50 text-lg font-semibold hover:bg-magenta transition-all"
            >
              Discover our cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
