'use client';
export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0a0f1c] flex flex-col justify-center items-center">
          <iframe
            src="/solarsystem.html"
            width="100%"
            height="600"
            style={{ border: 'none' }}
          ></iframe>
    </div>
  )
}
