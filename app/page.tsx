import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#FAF5F1] text-[#292F36]">
      <header className="bg-[#8F7A6E] text-white p-8 mb-8">
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 7C6.88071 7 8 5.88071 8 4.5C8 3.11929 6.88071 2 5.5 2C4.11929 2 3 3.11929 3 4.5C3 5.88071 4.11929 7 5.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 7C19.8807 7 21 5.88071 21 4.5C21 3.11929 19.8807 2 18.5 2C17.1193 2 16 3.11929 16 4.5C16 5.88071 17.1193 7 18.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 4.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 14L4 15L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 14L20 15L22 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 14V17C6 19.2091 7.79086 21 10 21H14C16.2091 21 18 19.2091 18 17V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-3xl font-bold">Dr. Bonga's Optometry Clinic</h1>
        </div>
        <p className="mb-8">Welcome to Dr. Bonga's Optometry Clinic. We provide comprehensive eye care services with state-of-the-art equipment and a patient-centered approach.</p>
      </header>
      
      <div className="p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className="relative w-full h-48 mb-2">
                  <Image
                    src={`/placeholder-image.jpg`}
                    alt={`Spectacle model ${num}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center">Spectacle model {num}</p>
              </div>
            ))}
          </div>
        </section>

        <main className="flex flex-col gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc list-inside">
              <li>Comprehensive Eye Exams</li>
              <li>Contact Lens Fittings</li>
              <li>Glaucoma Testing</li>
              <li>Pediatric Eye Care</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@drbongaoptometry.com</p>
            <p>Address: 123 Eye Care Lane, Vision City, VC 12345</p>
          </section>
        </main>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        © 2023 Dr. Bonga's Optometry Clinic. All rights reserved.
      </footer>
    </div>
  );
}