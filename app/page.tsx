import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-0 bg-gray-100">
      <div className="w-full max-w-7xl flex flex-col items-start justify-between px-8 py-16">
        <section className="flex flex-col items-start w-full px-8 lg:px-16 space-y-8">
          <h1 className="text-5xl font-bold mb-6">Explore Your Hobby or Passion</h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Dive into your hobbies or passions with our platform. Whether you're looking to explore new interests or connect with like-minded individuals, we've got something for everyone. Explore a world of opportunities and find what truly excites you.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Dive into your hobbies or passions with our platform. Whether you're looking to explore new interests or connect with like-minded individuals, we've got something for everyone. Explore a world of opportunities and find what truly excites you.
          </p>
          {/* Simplified Image Component */}
          <div className="relative w-full">
            <Image
              src="/images/img1.avif" // Ensure this is the correct path
              alt="Explore Your Hobby"
              width={800} // Adjust size as needed
              height={600} // Adjust size as needed
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
}
