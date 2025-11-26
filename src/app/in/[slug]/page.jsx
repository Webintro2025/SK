import ContactForm from "../../../components/ContactForm";
// Dynamic SEO metadata for each location page
export function generateMetadata({ params }) {
 const { slug } = params;

  const normalizedSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .trim();

  const rawLocation = normalizedSlug.replace(/-/g, ' ') || 'india';

  const locationName = rawLocation
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
    const title = `Aluminium Kitchen Services in ${locationName} | Sk Interior`;
    const description = `Need Aluminium Kitchen Services in ${locationName} Call Sk Interior, Best Aluminium Kitchen Services in ${locationName}, Home Interior Services in ${locationName}, India.`;
    const keywords = [
      `Aluminium Kitchen Services in ${locationName}`,
      `Modular Kitchen Services in ${locationName}`,
      `Modular Almirah Services in ${locationName}`,
      `Aluminium Almirah Services in ${locationName}`,
      `Modular LCD Panel Services in ${locationName}`,
      `Vanity (Bathroom Vanity Units) Services in ${locationName}`,
      `POP (Plaster of Paris) Work Services in ${locationName}`,
      `UPVC Windows Services in ${locationName}`,
      `Painting Services in ${locationName}`,
      `Office Interior Services in ${locationName}`,
      `Full Renovation Services in ${locationName}`,
      `Home Interior Services in ${locationName}`,
   
    ].join(', ');

    return {
      title,
      description,
      keywords,
      alternates: {   
        canonical: `https://sk-interior.in/in/${slug}`,
      },
     
      
    };
  };


export default function LocationPage({ params }) {
  const { slug } = params;

  const normalizedSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .trim();

  const rawLocation = normalizedSlug.replace(/-/g, ' ') || 'india';

  const locationName = rawLocation
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="w-full ">
     



<div className="relative bg-[#D2AD65] w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[420px]">

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-10 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
       Aluminium Kitchen Services in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://sk-interior.in">SK Interior</a>, If You Are Looking For <strong>Aluminium Kitchen Services in {locationName}</strong>, We Are The Best Option For You. We Provide Best <strong>Modular Kitchen Services in {locationName}</strong> ,<strong> UPVC Windows Services in {locationName}, Full Renovation Services in {locationName}</strong>, India.
    </p>
    <button
      className="mt-4 sm:mt-6 bg-[#29394B] text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://sk-interior.in/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>







<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
      <section className="w-full md:w-1/2 text-black">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
           Aluminium Kitchen Services in {locationName} – By S.K. Interiors
        </h2>
        <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
          At <strong>S.K. Interiors</strong>, we specialize in delivering top-tier <strong>Aluminium Kitchen Services in {locationName}</strong>, offering modern, durable, and stylish kitchen solutions that redefine the way homes are designed today. With over a decade of expertise in the interior and construction industry, we craft aluminium kitchens that not only enhance the beauty of your home but also ensure long-term structural strength, termite-proofing, and superior performance in everyday use.

As a trusted interior service provider since 2012, our mission is to bring world-class craftsmanship into Indian homes. Our aluminium kitchen systems are designed to meet the highest standards of hygiene, safety, and functionality—making them the preferred choice for modern families across India. Whether it is a compact home kitchen or a luxury designer space, our <strong>Aluminium Kitchen Services in {locationName}</strong> promise unmatched quality, elegance, and precision.
        </p>
      </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Aluminium Kitchen Services in  ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/Aluminium Modular Kitchen Cabinets.png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
     S.K. Interiors Provide Best Aluminium Kitchen Services in {locationName}
      </h2>
      <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
        <strong>S.K. Interiors</strong> is known for quality craftsmanship, timely project delivery, and personalized service. When it comes to <strong>Aluminium Kitchen Services in {locationName}</strong>, we stand out for our innovative designs, sturdy aluminium structures, and modern fabrication techniques.
        <br />
        <br />
        <strong>We ensure:</strong>
        <br />
        100% waterproof, rust-proof, and termite-proof  <a href="https://en.wikipedia.org/wiki/Interior_of_a_Kitchen_with_a_Woman,_a_Child_and_a_Maid"> kitchen solutions</a><br />
        Long-lasting, low-maintenance aluminium modules<br />
        Custom layouts based on client lifestyle and space planning<br />
         finish options including powder coating, glass, matte, and glossy textures<br />
        Precision engineering with strong structural integrity<br />
        Fast installation and superior after-sales support
        <br />
        <br />
        Our commitment to excellence, combined with more than 12 years of industry experience, makes us one of the most trusted names for <strong>Aluminium Kitchen Services in {locationName}</strong>.
      </p>
  </div>
  <div className="w-full md:w-1/3  p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center ">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
<ContactForm />
  </div>
</div>














<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Our Complete Product Range in {locationName}
  </h2>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Aluminium Kitchen Services in {locationName}</span>
      <br />
      Our <strong>Aluminium Kitchen Services in {locationName}</strong> offer high-performance, rust-proof, and fire-resistant kitchen solutions that outperform traditional wooden or MDF kitchens. These kitchens are crafted using premium-grade aluminium profiles, ensuring long-lasting durability, zero maintenance, and resistance to moisture, pests, and scratches. With sleek finishes and contemporary designs, our aluminium kitchens provide a perfect combination of aesthetics and utility. From custom drawers and shutters to full modular setups, we design kitchens that maximize space, improve workflow, and elevate the overall cooking experience.
    </li>
    <li>
      <span className="font-bold">2. Modular Kitchen Services in {locationName}</span>
      <br />
      We design fully customized modular kitchens that bring efficiency and beauty into your home. Engineered to perfection, our modular kitchen systems include smart storage units, ergonomic layouts, high-quality fittings, and a wide range of colour and finish options. Our designs integrate seamlessly with your <strong>Modular Kitchen Services in {locationName}</strong>, ensuring a cohesive and durable interior setup.
    </li>
    <li>
      <span className="font-bold">3. Modular Almirah Services in {locationName}</span>
      <br />
      Our modular almirahs are built to provide maximum storage with minimal space consumption. Each wardrobe is tailored to your room layout and lifestyle needs. From sliding doors to fully fitted wardrobes with integrated lofts, we ensure robust build quality and long-term usability. These almirahs pair perfectly with our <strong>Modular Almirah Services in {locationName}</strong>, maintaining uniformity across your interior theme.
    </li>
    <li>
      <span className="font-bold">4. Aluminium Almirah Services in {locationName}</span>
      <br />
      Crafted using high-quality aluminium frames, our aluminium almirahs are moisture-proof, termite-proof, and exceptionally durable. Ideal for both homes and offices, they offer a sleek, modern look with customizable shelves, drawers, and finishes. Their long life and easy maintenance make them a perfect extension of our <strong>Aluminium Almirah Services in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">5. Modular LCD Panel Services in {locationName}</span>
      <br />
      We create stylish modular LCD panels that enhance your living room aesthetics. Our panels offer concealed wiring, smart storage options, and elegant finishes. Whether minimalistic or luxurious, our designs complement the sophistication of homes that already feature our <strong>Modular LCD Panel Services in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">6. Vanity (Bathroom Vanity Units) Services in {locationName}</span>
      <br />
      Our vanity units are moisture-resistant, beautifully designed, and built to withstand daily wear. Made using premium material combinations, these vanity units offer spacious storage while adding elegance to bathroom interiors. Houses equipped with our <strong>Vanity Services in {locationName}</strong> often prefer our vanity solutions for a uniform and premium theme.
    </li>
    <li>
      <span className="font-bold">7. POP (Plaster of Paris) Work Services in {locationName}</span>
      <br />
      We specialize in POP false ceilings, wall designs, and decorative elements that add character to your home. Each design is precisely crafted to enhance lighting, acoustics, and overall ambiance. POP work perfectly complements our <strong>POP Work Services in {locationName}</strong>, giving your home a seamless designer finish.
    </li>
    <li>
      <span className="font-bold">8. UPVC Windows Services in {locationName}</span>
      <br />
      Our UPVC windows provide excellent insulation, soundproofing, and durability. They require minimal maintenance and are designed to enhance natural light and ventilation. These windows harmonize beautifully with modern interior themes, including homes that choose our <strong>UPVC Windows Services in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">9. Painting Services in {locationName}</span>
      <br />
      From texture painting to luxury finish coats, our painting services transform spaces with colour precision, expert application, and long-lasting quality. We use premium paints that match the elegance of spaces built using our <strong>Painting Services in {locationName} </strong>, creating a cohesive and stylish home environment.
    </li>
    <li>
      <span className="font-bold">10. Office Interior Services in {locationName}</span>
      <br />
      We design and build efficient office interiors that support productivity, comfort, and branding. From furniture layout to lighting, partitions, and workstations, we offer end-to-end solutions. Many offices that choose our <strong>Office Interior Services in {locationName}</strong> for their pantry and storage also rely on us for complete office interiors.
    </li>
    <li>
      <span className="font-bold">11. Full Renovation Services in {locationName}</span>
      <br />
      Our full renovation solutions include structural changes, layout redesign, plumbing, electrical fittings, flooring, painting, and complete interior transformation. We manage the entire project from concept to completion. Renovations combined with our <strong>Full Renovation Services in {locationName} </strong> ensure a modern, durable, and visually appealing outcome.
    </li>
    <li>
      <span className="font-bold">12. Home Interior Services in {locationName}</span>
      <br />
      We offer comprehensive home interior services tailored to your lifestyle, aesthetic choices, and budget. From living rooms and bedrooms to kitchens and utility areas, our approach blends functionality with elegance. Our designs often pair with our highly demanded <strong>Home Interior Services in {locationName}</strong>, delivering a fully harmonized home upgrade.
    </li>
  </ul>

  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">
    If you are looking for the <strong>best  Aluminium Kitchen Services in {locationName}</strong>, <strong> SK Interior</strong> is your trusted partner.
  </p>
  <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
    <li>👉 <strong>Call Now:</strong> +91- 9911639864</li>
    <li>`👉 <strong>Our Email Address</strong> –skinterior02021986@gmail.com</li>
    <li>👉 <strong>Visit Us:</strong> <a href="https://sk-interior.in/contact" className="text-blue-600 underline">Contact Page</a></li>
  </ul>
  </div>
</div>

``




<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Us – Your Trusted Partner for Aluminium Kitchen Services in {locationName}
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    Choosing the right interior partner can transform the way you live, work, and experience your space. At <strong>S.K. Interiors</strong>, we combine innovation, expertise, and a decade-long legacy to deliver results that exceed expectations. Here’s why hundreds of clients trust us for high-quality interiors and especially for premium <strong>Aluminium Kitchen Services in {locationName}</strong>:
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Over 12 Years of Proven Expertise</span>
      <br />
      With experience since 2012, we bring unmatched industry knowledge, technical skills, and creative excellence to every project. Our long-term journey enables us to understand client needs deeply and execute with precision. This strong foundation makes us one of the most reliable choices for <strong>Modular LCD Panel Services in {locationName}</strong>, ensuring perfection from design to installation.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> Our years of experience allow us to approach each project with confidence and clarity. We have handled diverse residential and commercial interior requirements, giving us the capability to solve challenges, optimize space, and deliver long-lasting solutions. When you choose S.K. Interiors, you choose wisdom, workmanship, and consistency.
    </li>
    <li>
      <span className="font-bold">2. Specialized in Aluminium Kitchen Systems</span>
      <br />
      We are known for delivering the highest quality <strong>Home Interior Services in {locationName}</strong>, crafted with modern machinery, premium-grade material, and advanced fabrication techniques. Our aluminium kitchens are rust-proof, waterproof, termite-proof, and perfectly suited for Indian weather conditions.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> Unlike traditional wooden kitchens, our aluminium solutions promise durability, longevity, and zero maintenance. We carefully design each kitchen to enhance workflow, maximize storage, and elevate overall aesthetics. Our focus on precision engineering ensures your kitchen remains strong and stylish for years.
    </li>
    <li>
      <span className="font-bold">3. Customized Designs Tailored to Your Lifestyle</span>
      <br />
      Every home is unique, and so are its design requirements. We create fully customized interiors that match your personality, preferences, and day-to-day lifestyle. From modular kitchens to wardrobes, vanity units, and full-home interiors, we design with purpose and passion.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> Our team works closely with you to understand your vision and convert it into a functional and visually appealing design. Whether you prefer a minimalist look or a luxurious finish, we ensure your home reflects your identity. Our personalized approach is a major reason we are trusted for premium <strong>Full Renovation Services in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">4. Complete End-to-End Solution Provider</span>
      <br />
      We handle everything—planning, design, fabrication, installation, and finishing—under one roof. No delays, no confusion, no multiple vendors. Just smooth, streamlined execution from start to finish.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> By offering a complete package, we deliver consistency, quality control, and timely project delivery. From modular almirah, UPVC windows, and POP work to full renovation and home interiors, you get all services at one place, with one accountable team.
    </li>
    <li>
      <span className="font-bold">5. High-Quality Materials and Long-Lasting Durability</span>
      <br />
      Quality drives everything we do. Every material we use—whether aluminium, hardware fittings, paints, or modular components—is tested for strength, longevity, and performance.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> This strict quality selection ensures your interiors remain beautiful, functional, and sturdy for many years. Our aluminium kitchen systems are crafted using top-grade aluminium profiles, making us a preferred name for <strong>UPVC Windows Services in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">6. Skilled Workforce and Professional Execution</span>
      <br />
      With a team of 26–50 trained professionals, we ensure flawless workmanship and error-free installation in every project. Our skilled designers, carpenters, aluminium fabricators, and technicians work together to deliver excellence.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> Each member of our team is committed to delivering perfection and maintaining professionalism from the very first consultation to final handover. This strong team support is one of the main reasons clients rely on our <strong>Modular LCD Panel Services in {locationName}</strong> for premium results.
    </li>
    <li>
      <span className="font-bold">7. Transparent Pricing With No Hidden Costs</span>
      <br />
      We believe in honesty and transparency. Our pricing structure is simple, competitive, and fully explained before work begins. You get premium quality within your budget.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> From material selection to final finishing, every cost is shared clearly so you always know what you are paying for. Our affordable yet premium-quality work makes us a trusted name for <strong>Aluminium Kitchen Services in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">8. Timely Delivery and Guaranteed Satisfaction</span>
      <br />
      We value your time and ensure every project is completed within the committed timeline without compromising quality. Your satisfaction is our priority.
      <br />
      <br />
      <span className="font-semibold">Paragraph:</span> Whether it is a modular kitchen installation, full renovation, or aluminium fabrication project, we follow strict schedules and project milestones. This disciplined approach ensures a smooth experience and superior results—making us one of the most dependable providers of <strong>POP Work Services in {locationName}</strong>.
    </li>
  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 S.K. Interiors blends innovation, design, and craftsmanship to create living spaces that stand out in beauty and durability. Whether you need a stylish aluminium kitchen, modular interiors, UPVC windows, or a full home renovation, our solutions guarantee unmatched value. With a strong focus on delivering the <strong> Best Aluminium Kitchen Services in {locationName}</strong>, we continue to enhance lifestyles with modern, durable, and elegant interior solutions tailored to every client’s vision.
  </p>
</div>

    </main>
  );
}