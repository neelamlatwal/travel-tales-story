import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Image src="/images/nextjs.svg" alt="Next.js Logo" width={500} height={500} />
      
    </div>
  );
}
