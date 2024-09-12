import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#FAF5F1] text-[#292F36]">
      <header className="bg-[#8F7A6E] text-white p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
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
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-black transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-300">Eyeglasses</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-300">Rectangle Glasses</a></li>
              <li><a href="#" className="hover:text-black transition-colors duration-300">Frederica</a></li>
            </ul>
          </nav>
        </div>
        <div className="bg-[#8F7A6E] text-white py-8">
          <p className="text-center max-w-3xl mx-auto px-4">
            We provide comprehensive eye care services with state-of-the-art equipment and a patient-centered approach.
          </p>
        </div>
      </header>
      
      <div>
        <section className="relative py-12">
          <div className="absolute inset-0 bg-[#D5C5B4] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">Our Collection</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <div className="relative w-full h-48 mb-2">
                    <Image
                      src={`https://picsum.photos/seed/${num}/300/200`}
                      alt={`Spectacle model ${num}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-center">Spectacle model {num}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12">
          <div className="absolute inset-0 bg-[#E9E6DD] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <div className="space-y-4">
              <p>Welcome to Dr. Bonga's Optometry Clinic, where passion meets innovation in eye care.</p>
              
              <h3 className="text-xl font-semibold">Our Story</h3>
              <p>Founded in 2010, Dr. Bonga's Optometry Clinic began with a simple yet powerful vision: to provide exceptional eye care with a personal touch. What started as a small practice has now grown into a trusted name in comprehensive eye health services.</p>
              
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p>At Dr. Bonga's Optometry Clinic, we are committed to enhancing and preserving your vision for life. We believe in personalized care, cutting-edge technology, and patient education, which guide every decision we make and every service we offer.</p>
              
              <h3 className="text-xl font-semibold">What Sets Us Apart</h3>
              <ul className="list-disc list-inside pl-4">
                <li><span className="font-semibold">Innovation:</span> We're constantly pushing the boundaries of optometry to bring you cutting-edge diagnostic and treatment solutions.</li>
                <li><span className="font-semibold">Quality:</span> Our unwavering commitment to excellence ensures that every eye exam, prescription, and treatment meets the highest standards.</li>
                <li><span className="font-semibold">Patient-Centric:</span> Your eye health and satisfaction are our top priorities. We listen, adapt, and evolve based on your needs and feedback.</li>
              </ul>
              
              <h3 className="text-xl font-semibold">Our Team</h3>
              <p>Behind Dr. Bonga's Optometry Clinic is a diverse team of passionate eye care professionals. From our skilled optometrists to our knowledgeable opticians, each member brings unique expertise and perspective to your eye care experience.</p>
              
              <h3 className="text-xl font-semibold">Our Commitment</h3>
              <p>We're not just a clinic; we're a part of the community. That's why we're dedicated to providing free eye screenings at local schools and participating in vision health awareness programs.</p>
              
              <h3 className="text-xl font-semibold">Join Us on Our Journey</h3>
              <p>As we continue to grow and evolve, we invite you to be a part of our story. Whether you're a patient, partner, or future team member, there's a place for you in the Dr. Bonga's Optometry Clinic family.</p>
              
              <p>Thank you for considering Dr. Bonga's Optometry Clinic. We look forward to being your trusted partner in maintaining healthy vision for life.</p>
              
              <p className="font-semibold">Schedule your comprehensive eye exam today and experience the difference of personalized eye care.</p>
            </div>
          </div>
        </section>

        <section className="relative py-12">
          <div className="absolute inset-0 bg-[#EDDDD4] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc list-inside">
              <li>Comprehensive Eye Exams</li>
              <li>Contact Lens Fittings</li>
              <li>Glaucoma Testing</li>
              <li>Pediatric Eye Care</li>
            </ul>
          </div>
        </section>

        <section className="relative py-12">
          <div className="absolute inset-0 bg-[#E5D3B3] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>Phone: (011) 456-7890</p>
            <p>Email: drbonga@drsmithoptometry.com</p>
            <p>Address: 123 Eye Care Lane, Vision City, VC 12345</p>
          </div>
        </section>
      </div>

      <footer className="relative py-8 text-white">
        <div className="absolute inset-0 bg-[#8F7A6E] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          © 2023 Dr. Bonga's Optometry Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}