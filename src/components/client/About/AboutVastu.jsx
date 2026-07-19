'use client'; 

import { useState } from 'react';

import { 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare,
  Image as ImageIcon,
  Newspaper,
  Compass,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { createWhatsAppLink } from '@/lib';
import Link from 'next/link';



// Reusable, lightweight, completely local Lightbox component 
// to avoid "yet-another-react-lightbox" compilation dependencies.
function CustomLightbox({ images, currentIndex, onClose, onNavigate }) {
  if (currentIndex === -1) return null;

  const currentImage = images[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIdx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onNavigate(newIdx);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIdx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIdx);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between items-center p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="w-full flex justify-between items-center text-white/80 p-2 max-w-7xl">
        <span className="text-sm font-medium tracking-wide">
          {currentIndex + 1} / {images.length}
        </span>
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
        {/* Navigation - Left */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dynamic Responsive Image */}
        <img 
          src={currentImage.src} 
          alt={currentImage.alt}
          className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/5 transition-all duration-300"
        />

        {/* Navigation - Right */}
        <button 
          onClick={handleNext}
          className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Description caption */}
      <div className="w-full text-center text-white max-w-3xl pb-6">
        <p className="text-base sm:text-lg font-medium px-4 tracking-wide">
          {currentImage.alt}
        </p>
      </div>
    </div>
  );
}

// Integrated Gallery that handles image loading dynamically without Next.js dependencies.
function Gallery({ images }) {
  const [index, setIndex] = useState(-1);
  const [loadedImages, setLoadedImages] = useState({});

  return (
    <>
      <div className="columns-2 md:columns-3 xl:columns-4 gap-5 space-y-5">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            onClick={() => setIndex(i)}
          >
            {!loadedImages[image.src] && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}

            <img
              src={image.src}
              alt={image.alt}
              onLoad={() =>
                setLoadedImages((prev) => ({
                  ...prev,
                  [image.src]: true,
                }))
              }
              className={`w-full h-auto object-cover transition-all duration-500 ${
                loadedImages[image.src]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              } group-hover:scale-105`}
            />
            {/* Hover overlay design */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-semibold tracking-wider bg-primary/90 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-secondary" /> Zoom
              </span>
            </div>
          </div>
        ))}
      </div>

      <CustomLightbox 
        images={images}
        currentIndex={index}
        onClose={() => setIndex(-1)}
        onNavigate={(newIdx) => setIndex(newIdx)}
      />
    </>
  );
}

export default function AboutVastu() {
  const [showAllSeminars, setShowAllSeminars] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const expertName = "Acharya ShivKumar Sharma"; 
  const expertImage = "/images/acharya-shivkumar-sharma.jpg"; 
  const experienceYears = "25+"; 
  const totalConsultations = "1000+"; 
  
  const expertiseAreas = [
    "Residential Vastu (Ghar aur Apartments)",
    "Commercial & Industrial Vastu (Office, Factory, Shops)",
    "Vastu Without Demolition (Bina tod-fod ke upaay)",
    "Plot Selection & Astro-Vastu Consultation",
    "Map Layout Screening & Correction"
  ];

  // Category values: "seminar", "news", "visit"
const galleryImages = [
  {
    id: 1,
    category: "seminar",
    src: "/images/about/seminar1.jpg",
    alt: "Seminar 1 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 2,
    category: "visit",
    src: "/images/about/vastu-visits1.jpeg",
    alt: "Visit 1 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 3,
    category: "news",
    src: "/images/about/news2.jpeg",
    alt: "News 1 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 4,
    category: "seminar",
    src: "/images/about/seminar2.jpg",
    alt: "Seminar 2 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 5,
    category: "visit",
    src: "/images/about/vastu-visits2.jpeg",
    alt: "Visit 2 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 6,
    category: "news",
    src: "/images/about/news2.jpeg",
    alt: "News 2 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 7,
    category: "seminar",
    src: "/images/about/seminar3.jpg",
    alt: "Seminar 3 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 8,
    category: "news",
    src: "/images/about/news3.jpeg",
    alt: "News 3 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 9,
    category: "news",
    src: "/images/about/news4.jpeg",
    alt: "News 4 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 10,
    category: "visit",
    src: "/images/about/vastu-visits3.jpeg",
    alt: "Visit 3 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 11,
    category: "news",
    src: "/images/about/news5.jpeg",
    alt: "News 5 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 12,
    category: "news",
    src: "/images/about/news6.jpeg",
    alt: "News 6 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 13,
    category: "news",
    src: "/images/about/news1.jpeg",
    alt: "News 7 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 14,
    category: "news",
    src: "/images/about/news7.jpeg",
    alt: "News 8 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 15,
    category: "seminar",
    src: "/images/about/seminar4.jpeg",
    alt: "Seminar 4 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 16,
    category: "news",
    src: "/images/about/news8.jpeg",
    alt: "News 9 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 17,
    category: "visit",
    src: "/images/about/vastu-visits4.jpeg",
    alt: "Visit 4 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 18,
    category: "seminar",
    src: "/images/about/seminar5.jpeg",
    alt: "Seminar 5 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 19,
    category: "news",
    src: "/images/about/news9.jpeg",
    alt: "News 10 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
  {
    id: 20,
    category: "news",
    src: "/images/about/news10.jpeg",
    alt: "News 11 Shiv Kumar Sharma Vastu Consultant Ghaziabad",
  },
];
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const pastSeminars = [
    { num: "22", year: "2026", topic: "आधुनिक युग की चुनौतियाँ और गृह ऊर्जा संतुलन के आधुनिक उपाय" },
    { num: "21", year: "2025", topic: "आधुनिक वास्तुकला और ब्रह्मांडीय ऊर्जा का तालमेल" },
    { num: "20", year: "2024", topic: "वास्तु सुधार: बिना तोड़-फोड़ के अचूक और सरल उपाय" },
    { num: "19", year: "2023", topic: "औद्योगिक वास्तु और व्यावसायिक प्रगति के गुप्त सूत्र" },
    { num: "18", year: "2022", topic: "कमर्शियल स्पेस, दुकान और शोरूम में धन प्रवाह अनुकूलन" },
    { num: "17", year: "2021", topic: "आवासीय सद्भाव: परिवार में सुख-शांति से भरपूर घर" },
    { num: "16", year: "2020", topic: "डिजिटल युग: वर्क फ्रॉम होम और होम ऑफिस के लिए विशेष वास्तु" },
    { num: "15", year: "2019", topic: "वैदिक वास्तु विज्ञान बनाम आधुनिक इंटीरियर डिजाइनिंग" },
    { num: "14", year: "2018", topic: "उत्तम स्वास्थ्य, मानसिक शांति और दीर्घायु के लिए ऊर्जा संतुलन" },
    { num: "13", year: "2017", topic: "एस्ट्रो-वास्तु: जन्मकुंडली के ग्रहों और दिशाओं का सामंजस्य" },
    { num: "12", year: "2016", topic: "औद्योगिक फैक्ट्रियों के लेआउट और लेबर रिलेशन वास्तु सुधार" },
    { num: "11", year: "2015", topic: "व्यापार में निरंतर वृद्धि और समृद्धि बढ़ाने वाले वास्तु नियम" },
    { num: "10", year: "2014", topic: "दशक वास्तु शिखर सम्मेलन और गाजियाबाद टाउन प्लानिंग चर्चा" },
    { num: "9", year: "2013", topic: "नये भूखंड (Plots) और भूमि चयन के लिए वैदिक गाइडलाइंस" },
    { num: "8", year: "2012", topic: "शैक्षिक सफलता, एकाग्रता और बच्चों के कमरे का सही वास्तु" },
    { num: "7", year: "2011", topic: "वैज्ञानिक वास्तु विश्लेषण और डिजिटल औरा स्कैनिंग तकनीक" },
    { num: "6", year: "2010", topic: "पंचतत्व: अग्नि, जल, वायु, पृथ्वी और आकाश तत्वों का संतुलन" },
    { num: "5", year: "2009", topic: "करियर निर्माण और सरकारी नौकरी में वृद्धि के लिए उपचारात्मक वास्तु" },
    { num: "4", year: "2008", topic: "रिटेल शॉप्स, शोरूम और शोरूम्स में कस्टमर फुटफॉल बढ़ाना" },
    { num: "3", year: "2007", topic: "रसोई घर (Kitchen) और मुख्य प्रवेश द्वार के ऊर्जा दोषों का निवारण" },
    { num: "2", year: "2006", topic: "गृह निर्माण के मूल सिद्धांत, नींव पूजन और सही दिशा ज्ञान" },
    { num: "1", year: "2005", topic: "प्रथम वार्षिक वास्तु जागरूकता और जन कल्याण सेमिनार" },
  ];

  const displayedSeminars = showAllSeminars ? pastSeminars : pastSeminars.slice(0, 4);

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
   
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section 1: Hero & Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Standard Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary">
              <img 
                src={expertImage} 
                alt={expertName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Meet the Expert</span>
            <h1 className="text-4xl font-bold text-slate-800 tracking-tight sm:text-5xl">
              {expertName}
            </h1>
            <p className="text-lg text-primary font-medium italic">
              "Bringing Harmony, Prosperity, and Positive Energy to Your Spaces."
            </p>
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {expertName} is a dedicated Vastu Consultant helping individuals and businesses align their physical spaces with cosmic energies. With over <strong>{experienceYears} years</strong> of profound experience, his approach blends traditional Vedic Vastu principles with modern architectural layouts to deliver practical, result-oriented solutions. 
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              He believes that a balanced environment can trigger positive life transformations, leading to better health, wealth, and mental peace for the occupants.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <Award className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <div className="text-xl font-bold text-slate-800">{experienceYears} Yrs</div>
                  <div className="text-xs text-slate-500">Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <CheckCircle className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <div className="text-xl font-bold text-slate-800">{totalConsultations}</div>
                  <div className="text-xs text-slate-500">Consultations</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-slate-200 my-16" />

        {/* Section 2: Core Expertise & Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Areas of Expertise Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
                Areas of Expertise
              </h2>
              <ul className="space-y-4 mb-8">
                {expertiseAreas.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 text-slate-600">
                    <span className="text-primary mt-1">✦</span>
                    <span className="text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Consultation Booking Button */}
            <Link href={createWhatsAppLink("Vastu Consultation")} className="w-full bg-primary hover:bg-opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-md flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Book a Consultation Session
            </Link>
          </div>

          {/* Upcoming 23rd Seminar Highlight Card */}
          <div className="bg-secondary text-slate-900 p-8 rounded-2xl shadow-lg flex flex-col justify-between relative overflow-hidden border border-amber-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
            
            <div className="space-y-4 z-10">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block animate-pulse">
                Upcoming Event
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                23 - वृहद ज्योतिष एवं वास्तु सेमिनार - 2027
              </h2>
              <p className="text-slate-800 text-sm font-semibold">
                मुख्य विषय (Topic): बदलती पृथ्वी की ऊर्जा, ब्रह्मांडीय संरेखण और नए युग का वास्तु प्रभाव
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                गाजियाबाद की पावन धरा पर सफलतापूर्वक <strong>22 वार्षिक सेमिनार</strong> पूरे हो चुके हैं। वर्ष 2027 में होने वाले 23वें भव्य सेमिनार की तैयारियां प्रारंभ हो चुकी हैं। अपनी उपस्थिति सुनिश्चित करने के लिए सीट अभी से रिजर्व करें।
              </p>
            </div>

            <div className="pt-6 border-t border-slate-900/10 mt-6 flex items-center justify-between text-sm text-slate-800 z-10">
              <span className="flex items-center gap-1.5 font-semibold">
                <MapPin className="w-4 h-4 text-primary" /> राज नगर एक्सटेंशन, गाजियाबाद
              </span>
              <Link href={createWhatsAppLink("for Join Seminar")} className="bg-primary hover:bg-opacity-90 text-white font-bold px-4 py-2 rounded-lg transition shadow-sm text-xs sm:text-sm">
                Book Your Seat →
              </Link>
            </div>
          </div>

        </div>

        {/* Section 3: Media & Event Gallery (Photo Grid & Cuttings) */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 mb-20">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
              Media & Event Gallery 
            </h2>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Live seminar highlights, site visits, and key media coverage.
            </p>
          </div>

          {/* Tab Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8 pb-3 border-b border-slate-100">
            {[
              { id: "all", label: "All", icon: ImageIcon },
              { id: "seminar", label: "Seminar", icon: Calendar },
              { id: "news", label: "News Coverage", icon: Newspaper },
              { id: "visit", label: "Vastu Visits", icon: Compass },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? "bg-primary text-white shadow-md shadow-red-100" 
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : 'text-slate-400'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Render integrated Dynamic Gallery */}
          {filteredImages.length > 0 ? (
            <div className="transition-all duration-300">
              <Gallery images={filteredImages} />
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400">
              No Images
            </div>
          )}
        </div>

        {/* Section 4: Legacy Seminars History List */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
              The Legacy: Celebrating 22 Years of Vastu Wisdom
            </h2>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Every year, we organize a grand Vastu & Astrology seminar in Ghaziabad, bringing together renowned Jyotishacharyas and Vastu experts from all across the country to share their profound insights and cosmic wisdom.
            </p>
          </div>

          {/* Dynamic Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300">
            {displayedSeminars.map((seminar, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-1.5 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 transition shadow-sm"
              >
                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {seminar.num} - वृहद ज्योतिष एवं वास्तु सेमिनार - {seminar.year}
                </h3>
                
                <p className="text-sm font-medium text-slate-500 pl-3.5 italic border-l-2 border-secondary">
                  विषय (Topic): {seminar.topic}
                </p>
              </div>
            ))}
          </div>

          {/* Toggle show/hide control */}
          <div className="text-center mt-8 pt-4 border-t border-slate-100">
            <button 
              onClick={() => setShowAllSeminars(!showAllSeminars)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-opacity-80 transition py-2 px-4 bg-slate-50 rounded-full border border-slate-200"
            >
              {showAllSeminars ? (
                <>show less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show all Seminars <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}