// filter btn start
document.querySelectorAll(".nav-link-custom").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active from all buttons
    document.querySelectorAll(".nav-link-custom").forEach(function (item) {
      item.classList.remove("active");
    });

    // Add active to clicked button
    this.classList.add("active");
  });
});
//filter btn end

let a = document.getElementById("vision&Review");
function vision() {
  a.innerHTML = `
        <section class="vision-section">

            <div class="container">


                <!-- SECTION TITLE -->

                <div class="section-title">

                    <h2>
                        Vision & Mission
                    </h2>

                </div>


                <!-- VISION / MISSION -->

                <div class="vision-mission-box">

                    <div class="row g-0">


                        <!-- VISION -->

                        <div class="col-lg-4 col-md-5">

                            <div class="vision-content">

                                <h3 class="content-title">
                                    Vision
                                </h3>

                                <p>
                                    Enable Customers to Enter a Better
                                    Life.
                                </p>

                            </div>

                        </div>


                        <!-- MISSION -->

                        <div class="col-lg-8 col-md-7">

                            <div class="mission-content">

                                <h3 class="content-title">
                                    Mission
                                </h3>

                                <ul class="mission-list">

                                    <li>
                                        <strong>Customer first:</strong>
                                        Switch from product focused to
                                        customer focused
                                    </li>

                                    <li>
                                        <strong>Improving Efficiencies:</strong>
                                        Long term Customer focus requires
                                        profitability and sustainability
                                    </li>

                                    <li>
                                        <strong>People Power:</strong>
                                        People are our Primary Asset.
                                        Happier People = Happier Customers
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>


                <!-- =========================================
                 OVERVIEW
            ========================================== -->

                <div class="overview-section">

                    <h2 class="overview-title">
                        Overview
                    </h2>


                    <div class="overview-content">

                        <p>
                            Cholamandalam Investment and Finance Company
                            Limited (Chola), incorporated in 1978 as the
                            financial services arm of the Murugappa Group.
                            Chola commenced business as an equipment
                            financing company and has today emerged as a
                            comprehensive financial services provider
                            offering vehicle finance, home loans, loan
                            against property, SME loans, Secured Business
                            Personal Loans (SBPL), Consumer & Small
                            Enterprises Loans (CSEL), Loan against
                            Securities and a variety of other financial
                            services to customers.
                        </p>


                        <p>
                            Chola operates from 1761 branches across India
                            with assets under management above INR
                            2,27,000+ Crore.
                        </p>


                        <p>
                            The vision of Chola is to enable customers enter
                            a better life. Chola has a growing clientele of
                            over 44.7 lakh+ happy customers across the
                            nation. Ever since its inception and all through
                            its growth, the company has kept a clear sight
                            of its values. The basic tenet of these values
                            is a strict adherence to ethics and a
                            responsibility to all those who come within its
                            corporate ambit - customers, shareholders,
                            employees and other stakeholders.
                        </p>


                        <!-- HIGHLIGHT -->

                        <div class="overview-highlight">

                            <p>
                                <strong>Our focus:</strong>
                                Customer first, improving efficiencies and
                                empowering people to create a better
                                experience for all stakeholders.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}

function Heritage() {
  a.innerHTML = `
             <section class="murugappa-section">

        <div class="container">


            <!-- Heading -->

            <h2 class="about-title">
                About Murugappa Group
            </h2>


            <!-- Content -->

            <div class="about-content">


                <p>
                    A 124-year-old conglomerate with presence across
                    India and the world, the INR 778 billion
                    (77,881 crore) Murugappa Group has diverse
                    businesses in agriculture, engineering, financial
                    services and more.
                </p>


                <p>
                    The Group has 9 listed companies:
                    Carborundum Universal Limited, CG Power &
                    Industrial Solutions Limited, Cholamandalam
                    Financial Holdings Limited, Cholamandalam
                    Investment & Finance Company Limited, Coromandel
                    International Limited, EID Parry (India) Limited,
                    Shanthi Gears Limited, Tube Investments of India
                    Limited and Wendt India Limited. Other major
                    companies include Cholamandalam MS General
                    Insurance Company Limited and Parry Agro
                    Industries Limited. Brands such as Ajax, Hercules,
                    BSA, Montra, Montra Electric, Mach City, Chola,
                    Chola MS, CG Power, Shanthi Gears, CUMI, Gromor,
                    Paramfos, Parry's are part of the Group's
                    illustrious stable.
                </p>


                <p>
                    Abrasives, technical ceramics, electro minerals,
                    electric vehicles, auto components, fans,
                    transformers, signalling equipment for railways,
                    bicycles, fertilisers, sugar, tea and several
                    other products make up the Group's business
                    interests.
                </p>


                <p>
                    Guided by the five lights — integrity, passion,
                    quality, respect and responsibility — and a culture
                    of professionalism, the Group has a workforce of
                    over 83,500 employees.
                </p>


                <p>
                    For more information, see

                    <a href="#"
                       class="website-link">
                        www.murugappa.com
                    </a>
                </p>


                <!-- CTA -->

                <a href="#"
                   class="visit-btn">

                    Visit: Murugappa Group

                    <span>→</span>

                </a>

            </div>

        </div>

    </section>
`;
}

function boardOfDirectors() {
  a.innerHTML = `

        <section class="directors-section py-5">

            <div class="container">

                <div class="section-heading text-center mb-5">

                    <span class="section-tag">
                        <i class="bi bi-people-fill"></i>
                        Leadership
                    </span>

                    <h2>
                        Board of <span>Directors</span>
                    </h2>

                    <p>
                        Meet the experienced professionals guiding our organization
                        towards sustainable growth and excellence.
                    </p>

                </div>


                <div class="row g-4 justify-content-center">


                    <!-- Director 1 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. Vellayan Subbiah"
                            data-designation="Executive Chairman"
                            data-image="./assests/images/vellayan_subbaih_706a05477c.jpg"
                            data-description="Mr. Vellayan Subbiah is the Executive Chairman and provides strategic leadership and direction to the organization. He brings extensive experience in business management, corporate strategy and organizational growth.">

                            <div class="director-image">

                                <img src="./assests/images/vellayan_subbaih_706a05477c.jpg"
                                    alt="Mr. Vellayan Subbiah">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. Vellayan Subbiah</h5>

                                <p>Executive Chairman</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 2 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. N Ramesh Rajan"
                            data-designation="Independent Director"
                            data-image="./assests/images/rameshrajan_01a54f7508.jpg"
                            data-description="Mr. N Ramesh Rajan serves as an Independent Director and contributes valuable experience in leadership, governance, strategy and business management.">

                            <div class="director-image">

                                <img src="./assests/images/rameshrajan_01a54f7508.jpg"
                                    alt="Mr. N Ramesh Rajan">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. N Ramesh Rajan</h5>

                                <p>Independent Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 3 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Ms. Bhama Krishnamurthy"
                            data-designation="Independent Director"
                            data-image="./assests/images/bhamakrishnamury_5b0ae95c08.jpg"
                            data-description="Ms. Bhama Krishnamurthy is an Independent Director with significant professional experience. She contributes to the organization's governance, strategic decisions and long-term objectives.">

                            <div class="director-image">

                                <img src="./assests/images/bhamakrishnamury_5b0ae95c08.jpg"
                                    alt="Ms. Bhama Krishnamurthy">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Ms. Bhama Krishnamurthy</h5>

                                <p>Independent Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 4 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. M A M Arunachalam"
                            data-designation="Non-Executive Director"
                            data-image="./assests/images/arunachalam_a18f134c25.jpg"
                            data-description="Mr. M A M Arunachalam serves as a Non-Executive Director and provides strategic guidance and valuable insights to support the organization's continued growth.">

                            <div class="director-image">

                                <img src="./assests/images/arunachalam_a18f134c25.jpg"
                                    alt="Mr. M A M Arunachalam">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. M A M Arunachalam</h5>

                                <p>Non-Executive Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 5 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. Anand Kumar"
                            data-designation="Independent Director"
                            data-image="./assests/images/Anandkumar_6f7f9e6a87.jpg"
                            data-description="Mr. Anand Kumar is an Independent Director who brings strong professional expertise and contributes to effective corporate governance and strategic decision-making.">

                            <div class="director-image">

                                <img src="./assests/images/Anandkumar_6f7f9e6a87.jpg"
                                    alt="Mr. Anand Kumar">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. Anand Kumar</h5>

                                <p>Independent Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 6 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. M R Kumar"
                            data-designation="Independent Director"
                            data-image="./assests/images/23_E4_832ff435da.jpg"
                            data-description="Mr. M R Kumar serves as an Independent Director and provides extensive experience and valuable perspectives in governance, business strategy and organizational development.">

                            <div class="director-image">

                                <img src="./assests/images/23_E4_832ff435da.jpg"
                                    alt="Mr. M R Kumar">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. M R Kumar</h5>

                                <p>Independent Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 7 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. Ramkumar Ramaamoorthy"
                            data-designation="Independent Director"
                            data-image="./assests/images/Ramkumar_Photo_ce4ada60e4.jpg"
                            data-description="Mr. Ramkumar Ramaamoorthy is an Independent Director with extensive leadership and professional experience. He contributes to strategic planning, governance and organizational development.">

                            <div class="director-image">

                                <img src="./assests/images/Ramkumar_Photo_ce4ada60e4.jpg"
                                    alt="Mr. Ramkumar Ramaamoorthy">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. Ramkumar Ramaamoorthy</h5>

                                <p>Independent Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>


                    <!-- Director 8 -->
                    <div class="col-xl-3 col-lg-4 col-md-6">

                        <div class="director-card"
                            data-name="Mr. Ravindra Kumar Kundu"
                            data-designation="Managing Director"
                            data-image="./assests/images/Ravindrakumar_77cdc80aee.jpg"
                            data-description="Mr. Ravindra Kumar Kundu is the Managing Director and is responsible for providing leadership, driving business growth and executing the organization's strategic objectives.">

                            <div class="director-image">

                                <img src="./assests/images/Ravindrakumar_77cdc80aee.jpg"
                                    alt="Mr. Ravindra Kumar Kundu">

                                <div class="image-overlay">
                                    <span>
                                        <i class="bi bi-eye"></i>
                                        View Profile
                                    </span>
                                </div>

                            </div>

                            <div class="director-info">

                                <h5>Mr. Ravindra Kumar Kundu</h5>

                                <p>Managing Director</p>

                                <i class="bi bi-arrow-right-circle-fill profile-arrow"></i>

                            </div>

                        </div>

                    </div>

                </div>


                <!-- Buttons -->
                <div class="director-buttons mt-5">

                    <a href="#" class="director-btn">
                        <i class="bi bi-file-earmark-text"></i>
                        Letter of appointment for Independent Directors
                    </a>

                    <a href="#" class="director-btn">
                        <i class="bi bi-diagram-3"></i>
                        Constitution of Committees
                    </a>

                </div>

            </div>

        </section>


        <!-- MODAL -->

        <div class="modal fade"
             id="directorModal"
             tabindex="-1"
             aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered modal-lg">

                <div class="modal-content director-modal">

                    <button type="button"
                            class="btn-close modal-close"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                    </button>

                    <div class="modal-body">

                        <div class="row align-items-center g-4">

                            <div class="col-md-5">

                                <div class="modal-director-image">

                                    <img id="modalImage"
                                         src=""
                                         alt="Director">

                                </div>

                            </div>


                            <div class="col-md-7">

                                <span class="modal-tag">
                                    Board Member
                                </span>

                                <h2 id="modalName">
                                    Director Name
                                </h2>

                                <h6 id="modalDesignation">
                                    Designation
                                </h6>

                                <div class="modal-line"></div>

                                <p id="modalDescription">
                                    Director description will appear here.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;

  // Modal setup
  const directorModal = document.getElementById("directorModal");

  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalDesignation = document.getElementById("modalDesignation");
  const modalDescription = document.getElementById("modalDescription");

  // All cards
  const directorCards = document.querySelectorAll(".director-card");

  directorCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const name = this.dataset.name;
      const designation = this.dataset.designation;
      const image = this.dataset.image;
      const description = this.dataset.description;

      // Set data
      modalName.textContent = name;

      modalDesignation.textContent = designation;

      modalDescription.textContent = description;

      modalImage.src = image;

      modalImage.alt = name;

      // Open modal
      const modal = bootstrap.Modal.getOrCreateInstance(directorModal);

      modal.show();
    });
  });
}

function subsidiaries() {
  a.innerHTML = `
        <section class="subsidiaries-section py-5">

    <div class="container">

        <!-- Heading -->
        <div class="subsidiary-heading mb-5">

            <span class="section-tag">
                <i class="bi bi-buildings-fill"></i>
                Our Group
            </span>

            <h2>
                Our <span>Subsidiaries</span>
            </h2>

            <p>
                Discover the companies and businesses that are part of our
                growing corporate ecosystem.
            </p>

        </div>


        <!-- Subsidiaries -->

        <div class="row g-4">


            <!-- Card 1 -->
            <div class="col-lg-12">

                <div class="subsidiary-card">

                    <div class="subsidiary-icon">
                        <i class="bi bi-house-check-fill"></i>
                    </div>

                    <div class="subsidiary-content">

                        <div class="subsidiary-number">
                            01
                        </div>

                        <h3>
                            Cholamandalam Leasing Limited
                        </h3>

                        <span class="subsidiary-subtitle">
                            Formerly known as Cholamandalam Home Finance Limited
                        </span>

                        <p>
                            Cholamandalam Leasing Limited (formerly known as
                            Cholamandalam Home Finance Limited) is a corporate
                            agent with composite licence from Insurance
                            Regulatory and Development Authority of India for
                            distributing insurance products.
                        </p>

                    </div>

                </div>

            </div>


            <!-- Card 2 -->
            <div class="col-lg-12">

                <div class="subsidiary-card">

                    <div class="subsidiary-icon payment-icon">
                        <i class="bi bi-credit-card-2-front-fill"></i>
                    </div>

                    <div class="subsidiary-content">

                        <div class="subsidiary-number">
                            02
                        </div>

                        <h3>
                            Payswiff Technologies Private Limited
                        </h3>

                        <span class="subsidiary-subtitle">
                            Payswiff
                        </span>

                        <p>
                            Payswiff is engaged in the business of enabling
                            online payment gateway services for e-commerce
                            businesses and provides e-commerce solutions.
                            Payswiff is an omni channel payment transaction
                            solution that lets business owners accept payments
                            from their customers in-store, at home deliveries,
                            online, and on-the-go using mPOS and POS solutions.
                        </p>

                    </div>

                </div>

            </div>


            <!-- Card 3 -->
            <div class="col-lg-12">

                <div class="subsidiary-card">

                    <div class="subsidiary-icon security-icon">
                        <i class="bi bi-graph-up-arrow"></i>
                    </div>

                    <div class="subsidiary-content">

                        <div class="subsidiary-number">
                            03
                        </div>

                        <h3>
                            Cholamandalam Securities Limited
                        </h3>

                        <span class="subsidiary-subtitle">
                            CSEC
                        </span>

                        <p>
                            Chola Securities is a wealth management company
                            offering investment solutions to individual
                            clients and stock broking and equity advisory
                            services to institutional investors, including
                            many of the largest mutual funds in India.
                            Chola Securities is a member of Bombay Stock
                            Exchange Limited and National Stock Exchange
                            of India Limited.
                        </p>

                        <a href="#" class="subsidiary-btn">
                            Visit Chola Securities
                            <i class="bi bi-arrow-up-right"></i>
                        </a>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
    `;
}

function presence() {
  a.innerHTML = `
        <section class="presence-section py-5">

    <div class="container">

        <!-- Heading -->
        <div class="presence-heading text-center mb-5">

            <span class="presence-tag">
                <i class="bi bi-geo-alt-fill"></i>
                Our Network
            </span>

            <h2>
                Our <span>Presence</span>
            </h2>

            <p>
                Cholamandalam is a pan-India company operating from over
                1761 branches across India. This helps us get closer to you
                and help you enter a better life.
            </p>

        </div>


        <div class="row align-items-center g-5">


            <!-- LEFT CONTENT -->
            <div class="col-lg-5">

                <div class="presence-content">

                    <div class="presence-intro">

                        <div class="presence-icon">
                            <i class="bi bi-buildings-fill"></i>
                        </div>

                        <div>
                            <span>Pan-India Network</span>

                            <h3>
                                Connecting India,
                                <strong>One Branch at a Time</strong>
                            </h3>
                        </div>

                    </div>


                    <!-- Stats -->
                    <div class="row g-3 mt-3">

                        <div class="col-6">

                            <div class="presence-stat">

                                <div class="stat-icon">
                                    <i class="bi bi-shop"></i>
                                </div>

                                <div>
                                    <strong>1761+</strong>
                                    <span>Branches</span>
                                </div>

                            </div>

                        </div>


                        <div class="col-6">

                            <div class="presence-stat">

                                <div class="stat-icon">
                                    <i class="bi bi-map-fill"></i>
                                </div>

                                <div>
                                    <strong>28+</strong>
                                    <span>States</span>
                                </div>

                            </div>

                        </div>


                        <div class="col-6">

                            <div class="presence-stat">

                                <div class="stat-icon">
                                    <i class="bi bi-people-fill"></i>
                                </div>

                                <div>
                                    <strong>100K+</strong>
                                    <span>Customers</span>
                                </div>

                            </div>

                        </div>


                        <div class="col-6">

                            <div class="presence-stat">

                                <div class="stat-icon">
                                    <i class="bi bi-geo-fill"></i>
                                </div>

                                <div>
                                    <strong>Pan India</strong>
                                    <span>Coverage</span>
                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- Highlight -->
                    <div class="presence-highlight mt-4">

                        <i class="bi bi-pin-map-fill"></i>

                        <div>
                            <strong>Serving customers across India</strong>

                            <p>
                                Our extensive branch network enables us to
                                provide convenient financial services closer
                                to our customers.
                            </p>
                        </div>

                    </div>

                </div>

            </div>


            <!-- RIGHT MAP -->
            <div class="col-lg-7">

                <div class="map-card">

                    <div class="map-header">

                        <div>
                            <span>Branch Network</span>
                            <h4>Find us across India</h4>
                        </div>

                        <div class="map-location-icon">
                            <i class="bi bi-crosshair"></i>
                        </div>

                    </div>


                    <div class="india-map">

                        <div class="map-glow"></div>

                        <img src="assests/images/india-map.webp"
                            alt="Cholamandalam Presence Across India">

                    </div>


                    <div class="map-footer">

                        <span>
                            <i class="bi bi-record-fill"></i>
                            Branch Presence
                        </span>

                        <span>
                            Pan India Network
                            <i class="bi bi-arrow-up-right"></i>
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>    
    `;
}

function certifications() {
  a.innerHTML = `
        <section class="iso-section py-5">

    <div class="container">

        <!-- Heading -->
        <div class="iso-heading mb-5">

            <span class="iso-tag">
                <i class="bi bi-patch-check-fill"></i>
                Quality & Compliance
            </span>

            <h2>
                ISO <span>Certifications</span>
            </h2>

            <p>
                Our certifications reflect our commitment to quality,
                information security and globally recognized standards.
            </p>

        </div>


        <!-- Certificates -->
        <div class="row g-4 justify-content-center">


            <!-- Certificate 1 -->
            <div class="col-xl-4 col-lg-4 col-md-6">

                <div class="certificate-card">

                    <div class="certificate-image">

                        <img src="./assests/images/iso-certificate-1.jpg"
                             alt="ISO 9001:2015 Certificate">

                        <div class="certificate-overlay">

                            <button type="button"
                                    class="certificate-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#certificateModal"
                                    data-image="./assests/images/iso-certificate-1.jpg"
                                    data-title="ISO 9001:2015 Certificate">

                                <i class="bi bi-eye-fill"></i>
                                View Certificate

                            </button>

                        </div>

                        <span class="certificate-badge">
                            <i class="bi bi-patch-check-fill"></i>
                            Certified
                        </span>

                    </div>


                    <div class="certificate-info">

                        <div class="certificate-icon">
                            <i class="bi bi-award-fill"></i>
                        </div>

                        <div>
                            <h4>ISO 9001:2015</h4>

                            <p>
                                Quality Management System
                            </p>
                        </div>

                        <i class="bi bi-arrow-up-right certificate-arrow"></i>

                    </div>

                </div>

            </div>


            <!-- Certificate 2 -->
            <div class="col-xl-4 col-lg-4 col-md-6">

                <div class="certificate-card">

                    <div class="certificate-image">

                        <img src="./assests/images/iso-certificate-2.jpg"
                             alt="ISO 9001:2015 Certificate">

                        <div class="certificate-overlay">

                            <button type="button"
                                    class="certificate-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#certificateModal"
                                    data-image="./assests/images/iso-certificate-2.jpg"
                                    data-title="ISO 9001:2015 Certificate">

                                <i class="bi bi-eye-fill"></i>
                                View Certificate

                            </button>

                        </div>

                        <span class="certificate-badge">
                            <i class="bi bi-patch-check-fill"></i>
                            Certified
                        </span>

                    </div>


                    <div class="certificate-info">

                        <div class="certificate-icon">
                            <i class="bi bi-award-fill"></i>
                        </div>

                        <div>
                            <h4>ISO 9001:2015</h4>

                            <p>
                                Quality Management System
                            </p>
                        </div>

                        <i class="bi bi-arrow-up-right certificate-arrow"></i>

                    </div>

                </div>

            </div>


            <!-- Certificate 3 -->
            <div class="col-xl-4 col-lg-4 col-md-6">

                <div class="certificate-card">

                    <div class="certificate-image">

                        <img src="./assests/images/iso-certificate-3.jpg"
                             alt="ISO IEC 27001:2022 Certificate">

                        <div class="certificate-overlay">

                            <button type="button"
                                    class="certificate-view"
                                    data-bs-toggle="modal"
                                    data-bs-target="#certificateModal"
                                    data-image="./assests/images/iso-certificate-3.jpg"
                                    data-title="ISO/IEC 27001:2022 Certificate">

                                <i class="bi bi-eye-fill"></i>
                                View Certificate

                            </button>

                        </div>

                        <span class="certificate-badge">
                            <i class="bi bi-shield-check"></i>
                            Certified
                        </span>

                    </div>


                    <div class="certificate-info">

                        <div class="certificate-icon security">
                            <i class="bi bi-shield-lock-fill"></i>
                        </div>

                        <div>
                            <h4>ISO/IEC 27001:2022</h4>

                            <p>
                                Information Security Management
                            </p>
                        </div>

                        <i class="bi bi-arrow-up-right certificate-arrow"></i>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- =================================
     CERTIFICATE MODAL
================================= -->

<div class="modal fade"
     id="certificateModal"
     tabindex="-1"
     aria-hidden="true">

    <div class="modal-dialog modal-dialog-centered modal-xl">

        <div class="modal-content certificate-modal">

            <div class="modal-header">

                <div>
                    <span class="modal-small-tag">
                        <i class="bi bi-patch-check-fill"></i>
                        Official Certification
                    </span>

                    <h5 class="modal-title" id="certificateTitle">
                        ISO Certificate
                    </h5>
                </div>

                <button type="button"
                        class="btn-close"
                        data-bs-dismiss="modal">
                </button>

            </div>


            <div class="modal-body">

                <div class="modal-certificate-image">

                    <img id="certificateModalImage"
                         src=""
                         alt="ISO Certificate">

                </div>

            </div>

        </div>

    </div>

</div>
    `;
}

function awards() {
  a.innerHTML = `
        <section class="awards-section">

    <div class="awards-container">


        <!-- Heading -->

        <div class="awards-heading">

            <span class="awards-tag">

                <i class="bi bi-trophy-fill"></i>

                Recognition & Excellence

            </span>


            <h1>

                Chola <span>Awards</span>

            </h1>


            <p>

                Our achievements and recognitions reflect our commitment
                to excellence, innovation and customer-centric solutions.

            </p>

        </div>


        <!-- Timeline -->

        <div
            class="awards-timeline"
            id="awardsTimeline">

            <!-- Awards dynamically added here -->

        </div>


        <!-- Load More -->

        <div class="awards-more">

            <button
                type="button"
                class="load-awards-btn"
                id="loadAwards">

                <span>
                    Load More
                </span>

                <i class="bi bi-arrow-down"></i>

            </button>

        </div>

    </div>

</section>    
    `;

  /* =========================================
       AWARDS DATA
    ========================================= */

  const awardsData = {
    /* =========================
           2026
        ========================= */

    2026: {
      category: "Business Excellence",

      title: "Chola Award 2026",

      image: "./assests/images/award-2026.jpg",

      description:
        "Cholamandalam has been recognized for its outstanding contribution, excellence and commitment towards delivering innovative and customer-centric financial solutions.",
    },

    /* =========================
           2025
        ========================= */

    2025: {
      category: "Business Excellence",

      title: "Chola Award 2025",

      image: "./assests/images/award-2025.jpg",

      description:
        "Cholamandalam received recognition for its continued excellence, innovation and contribution towards the financial services industry.",
    },

    /* =========================
           2024
        ========================= */

    2024: {
      category: "Risk Management",

      title: "Liquidity Risk Management of the Year",

      image: "./assests/images/award-2024.jpg",

      description:
        "At the India Credit Risk Management Summit & Awards 2024, Chola was awarded the prestigious Liquidity Risk Management of the Year award for its predictive approach to managing liquidity risk.",
    },

    /* =========================
           2023
        ========================= */

    2023: {
      category: "Technology & Innovation",

      title: "Platinum Award in the 6th CII",

      image: "./assests/images/award-2023.jpg",

      description:
        "Chola CII Ops team was awarded the Platinum Award in the 6th CII Conference on Indian Industry's Technology, Automation, Technology & Solutions Providers.",
    },

    /* =========================
           2022
        ========================= */

    2022: {
      category: "Digital Innovation",

      title: "Excellence in Digital Transformation",

      image: "./assests/images/award-2022.jpg",

      description:
        "Cholamandalam was recognized for its excellence in digital transformation, technology innovation and customer-focused digital solutions.",
    },

    /* =========================
           2021
        ========================= */

    2021: {
      category: "Customer Excellence",

      title: "Customer Service Excellence Award",

      image: "./assests/images/award-2021.jpg",

      description:
        "The organization was recognized for its strong commitment to customer service, operational excellence and delivering better customer experiences.",
    },

    /* =========================
           2020
        ========================= */

    2020: {
      category: "Financial Services",

      title: "Excellence in Financial Services",

      image: "./assests/images/award-2020.jpg",

      description:
        "Cholamandalam received recognition for its contribution to the financial services sector and its commitment to sustainable business growth.",
    },
  };

  /* =========================================
       ELEMENTS
    ========================================= */

  const awardsTimeline = document.getElementById("awardsTimeline");

  const loadAwardsBtn = document.getElementById("loadAwards");

  /* =========================================
       CURRENT YEAR
    ========================================= */

  let currentYear = 2026;

  /* =========================================
       CREATE AWARD
    ========================================= */

  function createAward(year) {
    const award = awardsData[year];

    if (!award) {
      return;
    }

    const awardItem = document.createElement("div");

    awardItem.className = "award-item";

    awardItem.innerHTML = `

            <!-- YEAR -->

            <div class="award-year">

                ${year}

            </div>


            <!-- TIMELINE DOT -->

            <div class="award-dot">

                <i class="bi bi-trophy-fill"></i>

            </div>


            <!-- AWARD CARD -->

            <div class="award-card">


                <!-- IMAGE -->

                <div class="award-image">

                    <img
                        src="${award.image}"
                        alt="${award.title}"
                        loading="lazy"
                    >


                    <div class="award-image-overlay">

                        <span>

                            <i class="bi bi-eye-fill"></i>

                            View Award

                        </span>

                    </div>

                </div>


                <!-- CONTENT -->

                <div class="award-content">


                    <span class="award-category">

                        ${award.category}

                    </span>


                    <h3>

                        ${award.title}

                    </h3>


                    <p>

                        ${award.description}

                    </p>


                    <div class="award-footer">


                        <span>

                            <i
                                class="bi bi-calendar3">
                            </i>

                            ${year}

                        </span>


                        <span>

                            <i
                                class="bi bi-patch-check-fill">
                            </i>

                            Award Winner

                        </span>


                    </div>

                </div>

            </div>

        `;

    awardsTimeline.appendChild(awardItem);

    /*
            Animation trigger
        */

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        awardItem.classList.add("award-show");
      });
    });
  }

  /* =========================================
       INITIAL LOAD
       2026 ONLY
    ========================================= */

  createAward(2026);

  /* =========================================
       LOAD MORE CLICK
    ========================================= */

  loadAwardsBtn.addEventListener("click", function () {
    /*
                Loading state
            */

    loadAwardsBtn.classList.add("loading");

    loadAwardsBtn.querySelector("span").textContent = "Loading...";

    loadAwardsBtn.querySelector("i").className = "bi bi-arrow-repeat";

    /*
                Small delay
                for smooth effect
            */

    setTimeout(function () {
      /*
                        Move to previous year
                    */

      currentYear--;

      /*
                        Check data
                    */

      if (awardsData[currentYear]) {
        createAward(currentYear);
      }

      /*
                        Reset button
                    */

      loadAwardsBtn.classList.remove("loading");

      loadAwardsBtn.querySelector("i").className = "bi bi-arrow-down";

      loadAwardsBtn.querySelector("span").textContent = "Load More";

      /*
                        2020 ke baad
                    */

      if (currentYear <= 2020) {
        loadAwardsBtn.disabled = true;

        loadAwardsBtn.classList.add("all-loaded");

        loadAwardsBtn.querySelector("span").textContent = "All Awards Loaded";

        loadAwardsBtn.querySelector("i").className = "bi bi-check-circle-fill";
      }
    }, 450);
  });
}


//========================================================
//Personal Loan 
//=========================================================
 //overview
let personalLoan = document.getElementById("personalLoan");
function overviewpersonalLoan() {
  
  personalLoan.innerHTML = `
         <section class="loan-section">

            <div class="container loan-container">

                <!-- Heading -->
                <h1 class="section-title">
                    Personal Loans
                </h1>

                <!-- Intro -->
                <p class="intro-text">
                    If you are looking for an unsecured business or personal loan,
                    you have come to the right place. Chola Consumer and Small
                    Enterprise Loans (CSEL) presents you a wide range of loan
                    products without asking for a collateral security for your loan.
                </p>

                <p class="intro-text">
                    Chola's business and personal loans support budding entrepreneurs
                    and aspiring professionals to achieve their goals.
                </p>


                <!-- Loan Offerings -->
                <div class="offer-heading">
                    <h3>Our Loan Offerings</h3>
                </div>


                <!-- Cards -->
                <div class="row g-4">

                    <!-- Personal Loan -->
                    <div class="col-lg-4 col-md-6">

                        <a href="#" class="text-decoration-none">

                            <!-- <div class="loan-card card">

                               <div class="card-header">
                                 <div class="h-25">
                                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
                                        alt="Personal Loan" height="100px">
                                </div>
                               </div>

                                <div class="loan-content">

                                    <span class="loan-title">
                                        Personal Loans
                                    </span>

                                    <p class="loan-desc">
                                        Salaried Employees
                                    </p>

                                </div>

                            </div> -->

                            <div class="card loan-card-p">
                                <div class="card-header card-header-p">
                                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
                                        alt="Personal Loan" height="200px" width="100%">
                                </div>
                                <div class="card-body text-center">


                                    <p class="loan-title ">
                                        Personal Loans
                                    </p>

                                    <p class="loan-desc">
                                        Salaried Employees
                                    </p>


                                </div>
                            </div>
                        </a>

                    </div>


                    <!-- Professional Loan -->
                    <div class="col-lg-4 col-md-6">

                        <a href="#" class="text-decoration-none">
                            <div class="card loan-card-p">
                                <div class="card-header card-header-p">
                                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                                        alt="Personal Loan" height="200px" width="100%">
                                </div>
                                <div class="card-body text-center">


                                    <span class="loan-title">
                                        Professional Loans
                                    </span>

                                    <p class="loan-desc">
                                        Self-Employed Professionals
                                    </p>


                                </div>
                            </div>
                        </a>

                    </div>




                    <!-- Business Loan -->
                    <div class="col-lg-4 col-md-6">

                        <a href="#" class="text-decoration-none">



                            <div class="card loan-card-p">
                                <div class="card-header card-header-p">
                                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80"
                                        alt="Business Loan" height="200px" width="100%">
                                </div>
                                <div class="card-body text-center">


                                    <span class="loan-title">
                                        Business Loans
                                    </span>

                                    <p class="loan-desc">
                                        Proprietorship, Partnership &amp; Private
                                        Limited Companies.
                                    </p>


                                </div>
                            </div>

                        </a>

                    </div>

                </div>
            </div>

        </section>
    `;
}

function emicalculatorPersonal(){
    personalLoan.innerHTML=`
          <section class="emi-section">

        <div class="container">

            <div class="emi-wrapper">

                <div class="row g-0">

                    <!-- LEFT -->
                    <div class="col-lg-7">

                        <div class="emi-left">

                            <h2 class="emi-heading">
                                EMI <span>Calculator</span>
                            </h2>

                            <p class="emi-subtitle">
                                Calculate your monthly loan EMI quickly and easily.
                            </p>


                            <!-- Loan Amount -->
                            <div class="form-group">

                                <label class="form-label">
                                    Loan Amount
                                </label>

                                <div class="input-box">

                                    <span>₹</span>

                                    <input type="number" id="loanAmount" value="1000000" min="50000" max="10000000">

                                </div>

                                <div class="range-wrapper">

                                    <input type="range" id="loanRange" min="50000" max="10000000" step="50000"
                                        value="1000000">

                                    <div class="range-values">
                                        <span>₹50K</span>
                                        <span>₹1 Cr</span>
                                    </div>

                                </div>

                            </div>


                            <!-- Interest -->
                            <div class="form-group">

                                <label class="form-label">
                                    Interest Rate (% P.A.)
                                </label>

                                <div class="input-box">

                                    <span>%</span>

                                    <input type="number" id="interestRate" value="10.5" min="1" max="30" step="0.1">

                                </div>

                                <div class="range-wrapper">

                                    <input type="range" id="interestRange" min="1" max="30" step="0.1" value="10.5">

                                    <div class="range-values">
                                        <span>1%</span>
                                        <span>30%</span>
                                    </div>

                                </div>

                            </div>


                            <!-- Tenure -->
                            <div class="form-group">

                                <label class="form-label">
                                    Loan Tenure (Years)
                                </label>

                                <div class="input-box">

                                    <span>Y</span>

                                    <input type="number" id="tenure" value="10" min="1" max="30">

                                </div>

                                <div class="range-wrapper">

                                    <input type="range" id="tenureRange" min="1" max="30" value="10">

                                    <div class="range-values">
                                        <span>1 Year</span>
                                        <span>30 Years</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- RIGHT -->
                    <div class="col-lg-5">

                        <div class="emi-result">

                            <div class="result-label">
                                Your Monthly EMI
                            </div>

                            <div class="emi-amount">
                                ₹ <span id="emi">13,493</span>
                            </div>


                            <div class="result-item">

                                <span>
                                    Principal Amount
                                </span>

                                <span id="principal">
                                    ₹10,00,000
                                </span>

                            </div>


                            <div class="result-item">

                                <span>
                                    Total Interest
                                </span>

                                <span id="interest">
                                    ₹6,19,182
                                </span>

                            </div>


                            <div class="result-item">

                                <span>
                                    Total Amount
                                </span>

                                <span id="total">
                                    ₹16,19,182
                                </span>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
    `

      const loanAmount = document.getElementById("loanAmount");
        const loanRange = document.getElementById("loanRange");

        const interestRate = document.getElementById("interestRate");
        const interestRange = document.getElementById("interestRange");

        const tenure = document.getElementById("tenure");
        const tenureRange = document.getElementById("tenureRange");


        function formatIndianNumber(number) {

            return new Intl.NumberFormat("en-IN", {
                maximumFractionDigits: 0
            }).format(number);

        }


        function calculateEMI() {

            let principal = parseFloat(loanAmount.value) || 0;
            let annualRate = parseFloat(interestRate.value) || 0;
            let years = parseFloat(tenure.value) || 0;

            let monthlyRate = annualRate / 12 / 100;
            let months = years * 12;

            let emi;

            if (monthlyRate === 0) {

                emi = principal / months;

            } else {

                emi =
                    principal *
                    monthlyRate *
                    Math.pow(1 + monthlyRate, months) /
                    (Math.pow(1 + monthlyRate, months) - 1);

            }

            let totalAmount = emi * months;
            let totalInterest = totalAmount - principal;


            document.getElementById("emi").innerText =
                formatIndianNumber(emi);

            document.getElementById("principal").innerText =
                "₹" + formatIndianNumber(principal);

            document.getElementById("interest").innerText =
                "₹" + formatIndianNumber(totalInterest);

            document.getElementById("total").innerText =
                "₹" + formatIndianNumber(totalAmount);

        }


        /* Loan Amount */

        loanRange.addEventListener("input", function () {

            loanAmount.value = this.value;

            calculateEMI();

        });


        loanAmount.addEventListener("input", function () {

            loanRange.value = this.value;

            calculateEMI();

        });


        /* Interest */

        interestRange.addEventListener("input", function () {

            interestRate.value = this.value;

            calculateEMI();

        });


        interestRate.addEventListener("input", function () {

            interestRange.value = this.value;

            calculateEMI();

        });


        /* Tenure */

        tenureRange.addEventListener("input", function () {

            tenure.value = this.value;

            calculateEMI();

        });


        tenure.addEventListener("input", function () {

            tenureRange.value = this.value;

            calculateEMI();

        });


        /* Initial Calculation */

        calculateEMI();
}


