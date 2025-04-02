
import Link from "next/link"
const premium = () => {
    return (
        <div>


            <div className="absolute top-4 right-4">
                <Link
                    href="/dashbord"
                    className="bg-orange-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors"
                >
                    Go to Dashboard
                </Link>
            </div>
        </div>
    )
}

export default premium