import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="p-12">
      <h2 className="text-red-500">Not Found</h2>
      <p className="text-xs">Could not find requested resource</p>
      <Link href="/" className="underline text-sm">Return Home</Link>
    </div>
  )
}