import Link from "next/link"

interface EndSessionButtonProps {
  href?: string
}

export default function EndSessionButton({ href = "/" }: EndSessionButtonProps) {
  return (
    <div className="flex justify-center mt-8">
      <Link
        href={href}
        className="bg-[#29b6f6] text-white font-medium py-3 px-6 rounded-md hover:bg-[#0a9fe4] transition-colors"
      >
        End Session (-1)
      </Link>
    </div>
  )
}
