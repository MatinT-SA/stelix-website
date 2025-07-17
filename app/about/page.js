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
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages Stelix"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h1>

        <div className="space-y-8">
          <p>
            Since 1962, Stelix has been a cherished family-run retreat. Started
            by our grandparents, this haven has been nurtured with love and
            care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of Stelix,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
