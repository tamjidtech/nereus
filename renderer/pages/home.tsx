import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="absolute top-4 right-4">
        <Link
          href="/dashbord"
          className="bg-orange-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
      <div className="w-full max-w-md mb-12">
        <div className="border-b-2 border-indigo-600 w-64 mx-auto mb-8"></div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Before we start, answer a few questions to personalize your Deep Work experience.
        </h2>
      </div>



      <Link
        href="/onboarding"
        className="w-full max-w-sm bg-blue-500 text-white font-medium py-3 rounded-full hover:bg-blue-600 transition-colors text-center"
      >
        Next
      </Link>
    </div>
  );
}
