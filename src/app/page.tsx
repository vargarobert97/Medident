export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bolji život počinje lepim osmehom
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Neka tvoj osmeh bude tvoj potpis
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše usluge
            </h2>
            <p className="text-xl text-gray-600">
              Od rutinskih pregleda do naprednih kozmetičkih procedura
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-4">Oralna hirurgija</h3>
              <p className="text-gray-600 mb-6">
                Oralno-hirurške intervencije u našoj ordinaciji uvek izvodimo uz
                pomoć lokalne anestezije, potpuno bezbolno i bezbedno.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pregled i održavanje zuba
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Popravka zuba
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Vađenje zuba
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Kanalna terapija
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Terapija desni
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-4">Ortodoncija</h3>
              <p className="text-gray-600 mb-6">
                Znamo da je lep osmeh svima bitan, zato u našoj ordinaciji
                nudimo mogućnost postavljanja fiksne proteze
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Teeth Whitening
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Porcelain Veneers
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dental Bonding
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Smile Makeovers
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-4">Urgentna pomoć</h3>
              <p className="text-gray-600 mb-6">
                Naša ordinacija je dostupna 24/7 za urgentne dentalne probleme i
                bolove kada ih najviše trebaš.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Oslobađanje bolova
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Popravka oštećenog zuba
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Plombe
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dentalna trauma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zašto izabrati našu ordinaciju?
            </h2>
            <p className="text-xl text-gray-600">
              Iskustvo i profesionalnost u jednom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">15+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Godine iskustva</h3>
              <p className="text-gray-600">
                Više od 15 godina iskustva u dentalnoj zašiti
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5000+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Zadovoljni pacijenti
              </h3>
              <p className="text-gray-600">Hiljade zadovoljnih klijenata</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">24/7</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Urgentna pomoć</h3>
              <p className="text-gray-600">Dostupno 24/7</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Zadovoljstvo</h3>
              <p className="text-gray-600">
                Predviđeno za potpuno zadovoljstvo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparentnost
            </h2>
            <p className="text-xl text-gray-600">
              Transparentna cena za sve naše usluge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                General Dentistry
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Pregled i status zuba</span>
                  <span className="font-semibold text-gray-900">1500 RSD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Kontrolni pregled</span>
                  <span className="font-semibold text-gray-900">1000 RSD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Savet</span>
                  <span className="font-semibold text-gray-900">500 RSD</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Root Canal</span>
                  <span className="font-semibold text-gray-900">$800</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Crown</span>
                  <span className="font-semibold text-gray-900">$1,200</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cosmetic Dentistry
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Teeth Whitening</span>
                  <span className="font-semibold text-gray-900">$300</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Porcelain Veneer</span>
                  <span className="font-semibold text-gray-900">$1,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Dental Bonding</span>
                  <span className="font-semibold text-gray-900">$400</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Gum Contouring</span>
                  <span className="font-semibold text-gray-900">$600</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Smile Makeover</span>
                  <span className="font-semibold text-gray-900">$3,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Specialty Services
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Dental Implant</span>
                  <span className="font-semibold text-gray-900">$2,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Invisalign</span>
                  <span className="font-semibold text-gray-900">$4,500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Wisdom Tooth Removal</span>
                  <span className="font-semibold text-gray-900">$300</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Emergency Visit</span>
                  <span className="font-semibold text-gray-900">$200</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Consultation</span>
                  <span className="font-semibold text-gray-900">$100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O nama
            </h2>
            <p className="text-xl text-gray-600">
              Vaš pouzdan partner u dentalnom zdravlju više od 15 godina
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Naša priča
              </h3>
              <p className="text-gray-600 mb-4">
                Osnovana 2008. godine, naša ordinacija je posvećena pružanju
                izvanredne dentalne zašite našoj zajednici. Naša praksa je
                osnovana na principima ljubavi, savršenstva i inovacije.
              </p>
              <p className="text-gray-600 mb-4">
                Vjerujemo da svako zaslužuje zdrav, lep osmeh, i mi smo
                posvećeni pružanju personalizovane zašite koja zadovoljava tvoje
                jedinstvene potrebe i premašuje tvoje očekivanja.
              </p>
              <p className="text-gray-600">
                Naša stanje-na-tehnologiju-uredjaja je opremljena sa najnovijim
                dentalnim tehnologijama, što osigurava da dobiješ najnapredniju
                i najpohodniju terapiju.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                <img src="/dijana.jpg" alt="About" width={150} height={150} />
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dr. Parabućski Đurica
              </h3>
              <p className="text-gray-600 mb-2">Stomatolog</p>
              <p className="text-sm text-gray-500">
                Doktor stomatologije i oralne hirurgije sa više od 15 godina
                iskustva u generalnoj i kozmetičkoj stomatologiji.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">
                  <img
                    src="/profile.jpg"
                    alt="About"
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Dijana Demeter</h3>
              <p className="text-gray-600 mb-2">Stomatolog</p>
              <p className="text-sm text-gray-500">
                Specijalista za ortodonciju i Invisalign terapiju sa više od 5
                godina iskustva.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dr. Vidović Branislav
              </h3>
              <p className="text-gray-600 mb-2">Stomatolog</p>
              <p className="text-sm text-gray-500">
                Specijalista za implantologiju i oralnu hirurgiju sa više od 10
                godina iskustva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kontaktirajte nas
            </h2>
            <p className="text-xl text-gray-600">
              Saznajte više o našim uslugama i zakazite termin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktirajte nas
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-600 mr-4 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresa</h4>
                    <p className="text-gray-600">
                      Petefi Šandora 16
                      <br />
                      Subotica, 24000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-600 mr-4 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">024 552'631</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-600 mr-4 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@medident.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 text-blue-600 mr-4 mt-1">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Radno vreme
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Dr. Parabućski Đurica
                        </h5>
                        <div className="text-gray-600 space-y-1">
                          <p>Ponedeljak: 15:00 - 19:00</p>
                          <p>Utorak: 09:00 - 14:00</p>
                          <p>Sreda: 15:00 - 19:00</p>
                          <p>Četvrtak: 09:00 - 14:00</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Dr. Dijana Demeter
                        </h5>
                        <div className="text-gray-600 space-y-1">
                          <p>Ponedeljak: 09:00 - 13:00</p>
                          <p>Utorak: 13:00 - 18:00</p>
                          <p>Sreda: 09:00 - 13:00</p>
                          <p>Četvrtak: 13:00 - 18:00</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Dr. Vidović Branislav
                        </h5>
                        <div className="text-gray-600 space-y-1">
                          <p>Petak: 10:00 - 19:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Book Your Appointment
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Checkup</option>
                    <option>Cleaning</option>
                    <option>Cosmetic Consultation</option>
                    <option>Emergency Visit</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your dental needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MediDent</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in dental health for over 15 years.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white">
                    General Dentistry
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Cosmetic Dentistry
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Emergency Care
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Orthodontics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>Petefi Šandora 16</p>
                <p>Subotica, 24000</p>
                <p>024 552-631</p>
                <p>info@medident.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MediDent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
