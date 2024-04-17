import Image from "next/image";
import Link from "next/link";



export default function Home() {

  return (
    <>
      <main className="container mx-auto px-4 py-8 text-center">
        <nav className="flex justify-center mt-4">
          <Link href="/search-job" className="mx-4 px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300">Search Jobs</Link>
          <Link href="/daily-jobs" className="mx-4 px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300">Daily Jobs</Link>
        </nav>
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Welcome to Employment Express</h1>
        <p className="text-lg text-gray-700 mb-8">Your fast track to finding the perfect job</p>
        <div className="max-w-lg mx-auto">
          <Image src="/passion-led-us-here.avif" width={500} height={300} alt="Illustration" className="" />
        </div>
        <p className="text-lg text-gray-800 mt-8">
          EmploymentExpress is your express lane to success in the job market. We offer a seamless and efficient experience, connecting you with a diverse range of employment opportunities tailored to your skills and preferences. Whether you're embarking on your career journey, seeking a change, or aiming for advancement, let EmploymentExpress be your trusted guide. Start exploring today and let us help you land your dream job!
        </p>
        
        
        
      </main>
    </>
    
  );
}


