import Image from "next/image"

export default function Nav() {

    return(<nav>
 <Image
      src="/cyberlogo.jpeg"
      width={200}
      height={200}
      alt="Picture of the author"
      className="my-10"
    />
    </nav>)
}