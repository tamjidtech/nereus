import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-4">

      <div className="absolute top-4 right-4">
        <Link
          href="/dashbord"
          className="bg-orange-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>

      <div className="mb-16 max-w-md">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
          Deep Work was coined by Dr. Cal Newport and means focused, undistracted work.
        </h2>
        <p className="text-xl md:text-2xl text-gray-700">
          2-4 hour bursts of Deep Work per day is associated with 51% greater productivity.
        </p>
      </div>

      <Link
        href="/onboarding"
        className="bg-blue-500 text-white font-medium px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
      >
        Get Started
      </Link>

    </div>
  );
}
