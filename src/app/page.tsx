import Link from "next/link"

export default function Home() {
  return (
    <div>
      <p>Homepage</p>
      <hr />
      <Link href="/contact" className="m-5">Contact Me</Link>
      <Link href="/projects" className="m-5">Projects and Skills</Link>
    </div>
  )
}