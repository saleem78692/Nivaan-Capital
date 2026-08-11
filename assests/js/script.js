document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-navigation");

  if (!toggleBtn || !mainNav) return;

  // Create and append mobile nav overlay dynamically to keep HTML clean
  const overlay = document.createElement("div");
  overlay.className = "mobile-nav-overlay";
  document.body.appendChild(overlay);

  // Toggle menu visibility on click
  function toggleMobileMenu() {
    toggleBtn.classList.toggle("active");
    mainNav.classList.toggle("active");
    overlay.classList.toggle("active");

    // Prevent body scrolling when menu is active
    if (mainNav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  toggleBtn.addEventListener("click", toggleMobileMenu);
  overlay.addEventListener("click", toggleMobileMenu);

  // Accordion functionality for mega menu dropdowns on mobile
  const menuLinks = document.querySelectorAll(
    ".menu-item.has-mega > .menu-link",
  );
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only apply click-to-expand on mobile/tablet viewports
      if (window.innerWidth < 1200) {
        e.preventDefault();
        const currentItem = this.parentElement;
        const isAlreadyActive =
          currentItem.classList.contains("active-dropdown");

        // Collapse all other dropdowns first
        document.querySelectorAll(".menu-item.has-mega").forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove("active-dropdown");
          }
        });

        // Toggle current dropdown
        if (isAlreadyActive) {
          currentItem.classList.remove("active-dropdown");
        } else {
          currentItem.classList.add("active-dropdown");
        }
      }
    });
  });

  // Close mobile menu if window is resized above mobile breakpoint
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      if (mainNav.classList.contains("active")) {
        toggleMobileMenu();
      }
      // Clear mobile-specific active dropdown classes
      document.querySelectorAll(".menu-item.has-mega").forEach((item) => {
        item.classList.remove("active-dropdown");
      });
    }
  });

  // =========================================================================
  // EMI CALCULATOR LOGIC
  // =========================================================================

  const loanAmountInput = document.getElementById("loan-amount-input");
  const loanAmountSlider = document.getElementById("loan-amount-slider");
  const interestRateInput = document.getElementById("interest-rate-input");
  const interestRateSlider = document.getElementById("interest-rate-slider");
  const loanTenureInput = document.getElementById("loan-tenure-input");
  const loanTenureSlider = document.getElementById("loan-tenure-slider");

  const monthlyEmiOutput = document.getElementById("monthly-emi-output");
  const principalAmountOutput = document.getElementById(
    "principal-amount-output",
  );
  const totalInterestOutput = document.getElementById("total-interest-output");
  const totalPayableOutput = document.getElementById("total-payable-output");
  const chartInterestPct = document.getElementById("chart-interest-pct");

  const principalSegment = document.querySelector(".principal-segment");
  const interestSegment = document.querySelector(".interest-segment");

  const toggleScheduleBtn = document.getElementById("toggle-schedule-btn");
  const amortizationPanel = document.getElementById("amortization-panel");
  const amortizationTableBody = document.getElementById(
    "amortization-table-body",
  );
  const tabButtons = document.querySelectorAll(".tab-btn");

  if (
    loanAmountInput &&
    loanAmountSlider &&
    interestRateInput &&
    interestRateSlider &&
    loanTenureInput &&
    loanTenureSlider
  ) {
    function formatCurrency(amount) {
      return "₹" + Math.round(amount).toLocaleString("en-IN");
    }

    function calculateEMI() {
      const P = parseFloat(loanAmountInput.value) || 0;
      const annualRate = parseFloat(interestRateInput.value) || 0;
      const r = annualRate / 12 / 100;
      const years = parseFloat(loanTenureInput.value) || 0;
      const n = years * 12;

      if (P === 0 || annualRate === 0 || years === 0) {
        updateUI(0, P, 0, P);
        return;
      }

      let emi = 0;
      if (r === 0) {
        emi = P / n;
      } else {
        emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      }

      const totalAmount = emi * n;
      const totalInterest = totalAmount - P;

      updateUI(emi, P, totalInterest, totalAmount);
    }

    function updateUI(emi, principal, interest, total) {
      monthlyEmiOutput.textContent = formatCurrency(emi);
      principalAmountOutput.textContent = formatCurrency(principal);
      totalInterestOutput.textContent = formatCurrency(interest);
      totalPayableOutput.textContent = formatCurrency(total);

      // Calculate percentages for the chart
      const totalVal = principal + interest;
      const principalPct = totalVal > 0 ? (principal / totalVal) * 100 : 0;
      const interestPct = totalVal > 0 ? (interest / totalVal) * 100 : 0;

      updateChart(principalPct, interestPct);
      generateAmortizationTable(
        principal,
        parseFloat(interestRateInput.value) || 0,
        parseFloat(loanTenureInput.value) || 0,
        emi,
      );
    }

    function updateChart(principalPct, interestPct) {
      const circumference = 2 * Math.PI * 40; // ~251.32
      const principalLength = circumference * (principalPct / 100);
      const interestLength = circumference * (interestPct / 100);

      if (principalSegment && interestSegment) {
        principalSegment.setAttribute(
          "stroke-dasharray",
          `${principalLength} ${circumference}`,
        );
        principalSegment.setAttribute("stroke-dashoffset", "0");

        interestSegment.setAttribute(
          "stroke-dasharray",
          `${interestLength} ${circumference}`,
        );
        interestSegment.setAttribute(
          "stroke-dashoffset",
          `-${principalLength}`,
        );
      }

      if (chartInterestPct) {
        chartInterestPct.textContent = `${Math.round(interestPct)}%`;
      }
    }

    function generateAmortizationTable(P, annualRate, years, emi) {
      if (!amortizationTableBody) return;
      amortizationTableBody.innerHTML = "";

      let balance = P;
      const r = annualRate / 12 / 100;
      const totalMonths = years * 12;

      let yearOpeningBalance = balance;
      let yearPrincipalPaid = 0;
      let yearInterestPaid = 0;

      for (let month = 1; month <= totalMonths; month++) {
        const interestPaid = balance * r;
        let principalPaid = emi - interestPaid;

        if (balance < principalPaid) {
          principalPaid = balance;
        }

        balance -= principalPaid;

        yearPrincipalPaid += principalPaid;
        yearInterestPaid += interestPaid;

        if (month % 12 === 0 || month === totalMonths) {
          const yearNum = Math.ceil(month / 12);
          const totalRepaid = yearPrincipalPaid + yearInterestPaid;

          const row = document.createElement("tr");
          row.innerHTML = `
                        <td><strong>Year ${yearNum}</strong></td>
                        <td>${formatCurrency(yearOpeningBalance)}</td>
                        <td>${formatCurrency(yearPrincipalPaid)}</td>
                        <td>${formatCurrency(yearInterestPaid)}</td>
                        <td>${formatCurrency(totalRepaid)}</td>
                        <td>${formatCurrency(Math.max(0, balance))}</td>
                    `;
          amortizationTableBody.appendChild(row);

          // Reset for next year
          yearOpeningBalance = balance;
          yearPrincipalPaid = 0;
          yearInterestPaid = 0;
        }
      }
    }

    function syncInputSlider(inputEl, sliderEl) {
      inputEl.addEventListener("input", () => {
        let val = parseFloat(inputEl.value) || 0;
        const min = parseFloat(inputEl.min);
        const max = parseFloat(inputEl.max);

        if (val >= min && val <= max) {
          sliderEl.value = val;
          calculateEMI();
        }
      });

      inputEl.addEventListener("blur", () => {
        let val = parseFloat(inputEl.value) || 0;
        const min = parseFloat(inputEl.min);
        const max = parseFloat(inputEl.max);

        if (val < min) val = min;
        if (val > max) val = max;

        inputEl.value = val;
        sliderEl.value = val;
        calculateEMI();
      });

      sliderEl.addEventListener("input", () => {
        inputEl.value = sliderEl.value;
        calculateEMI();
      });
    }

    syncInputSlider(loanAmountInput, loanAmountSlider);
    syncInputSlider(interestRateInput, interestRateSlider);
    syncInputSlider(loanTenureInput, loanTenureSlider);

    const presets = {
      home: {
        amount: 5000000,
        amountMin: 100000,
        amountMax: 50000000,
        amountStep: 50000,
        rate: 8.5,
        rateMin: 5,
        rateMax: 20,
        rateStep: 0.05,
        tenure: 20,
        tenureMin: 1,
        tenureMax: 30,
        tenureStep: 1,
        amountMinLbl: "₹1 L",
        amountMaxLbl: "₹5 Cr",
        tenureMinLbl: "1 Yr",
        tenureMaxLbl: "30 Yrs",
      },
      personal: {
        amount: 500000,
        amountMin: 50000,
        amountMax: 4000000,
        amountStep: 10000,
        rate: 12.5,
        rateMin: 8,
        rateMax: 24,
        rateStep: 0.1,
        tenure: 4,
        tenureMin: 1,
        tenureMax: 7,
        tenureStep: 1,
        amountMinLbl: "₹50 K",
        amountMaxLbl: "₹40 L",
        tenureMinLbl: "1 Yr",
        tenureMaxLbl: "7 Yrs",
      },
      business: {
        amount: 2000000,
        amountMin: 100000,
        amountMax: 10000000,
        amountStep: 50000,
        rate: 15.0,
        rateMin: 10,
        rateMax: 25,
        rateStep: 0.1,
        tenure: 3,
        tenureMin: 1,
        tenureMax: 5,
        tenureStep: 1,
        amountMinLbl: "₹1 L",
        amountMaxLbl: "₹1 Cr",
        tenureMinLbl: "1 Yr",
        tenureMaxLbl: "5 Yrs",
      },
    };

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        tabButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        const type = this.getAttribute("data-loan-type");
        const data = presets[type];

        updateSliderRanges(
          loanAmountInput,
          loanAmountSlider,
          data.amountMin,
          data.amountMax,
          data.amountStep,
          data.amount,
          data.amountMinLbl,
          data.amountMaxLbl,
        );
        updateSliderRanges(
          interestRateInput,
          interestRateSlider,
          data.rateMin,
          data.rateMax,
          data.rateStep,
          data.rate,
          `${data.rateMin}%`,
          `${data.rateMax}%`,
        );
        updateSliderRanges(
          loanTenureInput,
          loanTenureSlider,
          data.tenureMin,
          data.tenureMax,
          data.tenureStep,
          data.tenure,
          data.tenureMinLbl,
          data.tenureMaxLbl,
        );

        calculateEMI();
      });
    });

    function updateSliderRanges(
      inputEl,
      sliderEl,
      min,
      max,
      step,
      val,
      minLbl,
      maxLbl,
    ) {
      inputEl.min = min;
      inputEl.max = max;
      inputEl.step = step;
      inputEl.value = val;

      sliderEl.min = min;
      sliderEl.max = max;
      sliderEl.step = step;
      sliderEl.value = val;

      const parent = inputEl.closest(".input-wrapper");
      const bounds = parent.querySelectorAll(".slider-bounds span");
      if (bounds.length === 2) {
        bounds[0].textContent = minLbl;
        bounds[1].textContent = maxLbl;
      }
    }

    if (toggleScheduleBtn && amortizationPanel) {
      toggleScheduleBtn.addEventListener("click", () => {
        amortizationPanel.classList.toggle("show");
        toggleScheduleBtn.classList.toggle("active");

        const btnText = toggleScheduleBtn.querySelector("span");
        const isShown = amortizationPanel.classList.contains("show");
        if (isShown) {
          btnText.textContent = "Hide Amortization Schedule";
          setTimeout(() => {
            amortizationPanel.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }, 100);
        } else {
          btnText.textContent = "Show Amortization Schedule";
        }
      });
    }

    // Initialize Calculator
    calculateEMI();
  }
});

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = {
  gold: {
    title: "Gold Loan",

    description:
      "Gold Loan provides a convenient way to meet your financial requirements by pledging eligible gold ornaments. The process is simple, quick and requires minimal documentation.",

    icon: "fa-coins",

    sideTitle: "Quick Gold Loan",

    button: "Apply for Gold Loan",

    boxes: [
      {
        icon: "fa-bolt",
        title: "Quick Processing",
        text: "Fast processing with simple documentation.",
      },

      {
        icon: "fa-file-lines",
        title: "Easy Documentation",
        text: "Minimal paperwork and a simple application process.",
      },

      {
        icon: "fa-calendar-days",
        title: "Flexible Repayment",
        text: "Choose a repayment option according to your requirement.",
      },
    ],
  },

  car: {
    title: "Car Loans",

    description:
      "Get convenient financing solutions for purchasing your new or used car with flexible repayment options.",

    icon: "fa-car",

    sideTitle: "Drive Your Dream Car",

    button: "Apply for Car Loan",

    boxes: [
      {
        icon: "fa-car",
        title: "New Car",
        text: "Finance your new car easily with convenient options.",
      },

      {
        icon: "fa-file-lines",
        title: "Simple Process",
        text: "Easy documentation and quick processing.",
      },

      {
        icon: "fa-calendar-days",
        title: "Flexible Tenure",
        text: "Choose a suitable repayment period.",
      },
    ],
  },

  bike: {
    title: "Two Wheeler Loans",

    description:
      "Get easy financing for your bike or scooter with flexible repayment options and a simple application process.",

    icon: "fa-motorcycle",

    sideTitle: "Ride Your Dream Bike",

    button: "Apply for Two Wheeler Loan",

    boxes: [
      {
        icon: "fa-motorcycle",
        title: "Bike Financing",
        text: "Finance your new two-wheeler easily.",
      },

      {
        icon: "fa-bolt",
        title: "Fast Processing",
        text: "Quick and convenient application processing.",
      },

      {
        icon: "fa-calendar-days",
        title: "Easy Repayment",
        text: "Flexible repayment options.",
      },
    ],
  },

  consumer: {
    title: "Consumer & Small Enterprise Loans",

    description:
      "Financial solutions designed to support consumer requirements and small enterprise growth.",

    icon: "fa-building",

    sideTitle: "Grow Your Business",

    button: "Apply Now",

    boxes: [
      {
        icon: "fa-building",
        title: "Business Support",
        text: "Financial assistance for business requirements.",
      },

      {
        icon: "fa-chart-line",
        title: "Business Growth",
        text: "Support for expansion and growth.",
      },

      {
        icon: "fa-file-lines",
        title: "Easy Documentation",
        text: "Simple documentation process.",
      },
    ],
  },

  home: {
    title: "Home Loans",

    description:
      "Turn your dream of owning a home into reality with convenient home financing solutions.",

    icon: "fa-house",

    sideTitle: "Build Your Dream Home",

    button: "Apply for Home Loan",

    boxes: [
      {
        icon: "fa-house",
        title: "Home Purchase",
        text: "Financial support for home purchase.",
      },

      {
        icon: "fa-building",
        title: "Construction",
        text: "Support for home construction.",
      },

      {
        icon: "fa-calendar-days",
        title: "Flexible Tenure",
        text: "Convenient repayment options.",
      },
    ],
  },

  business: {
    title: "Business Loans",

    description:
      "Grow and expand your business with flexible financial solutions designed to support your business needs.",

    icon: "fa-briefcase",

    sideTitle: "Power Your Business",

    button: "Apply for Business Loan",

    boxes: [
      {
        icon: "fa-chart-line",
        title: "Business Growth",
        text: "Financial support for business expansion.",
      },

      {
        icon: "fa-money-bill",
        title: "Working Capital",
        text: "Meet your working capital requirements.",
      },

      {
        icon: "fa-gears",
        title: "Business Needs",
        text: "Funding solutions for various business needs.",
      },
    ],
  },
};

/* =========================================================
   SERVICE DATA
========================================================= */

const services = {
  apply: {
    title: "Apply Loan Online",

    description:
      "Apply for your preferred loan online through a simple and convenient application process.",

    icon: "fa-indian-rupee-sign",

    sideTitle: "Apply Online",

    button: "Start Application",

    boxes: [
      {
        icon: "fa-file-lines",
        title: "Easy Application",
        text: "Fill in your basic details through a simple online process.",
      },

      {
        icon: "fa-bolt",
        title: "Quick Processing",
        text: "Get your application processed quickly.",
      },

      {
        icon: "fa-check",
        title: "Simple Process",
        text: "Easy and convenient loan application.",
      },
    ],
  },

  emi: {
    title: "Pay EMI Online",

    description:
      "Pay your monthly loan EMI securely and conveniently through our online payment service.",

    icon: "fa-mobile-screen-button",

    sideTitle: "Easy EMI Payment",

    button: "Pay EMI Now",

    boxes: [
      {
        icon: "fa-lock",
        title: "Secure Payment",
        text: "Secure and convenient online payment.",
      },

      {
        icon: "fa-credit-card",
        title: "Multiple Options",
        text: "Choose a convenient payment method.",
      },

      {
        icon: "fa-clock",
        title: "24x7 Access",
        text: "Make your payment whenever convenient.",
      },
    ],
  },

  callback: {
    title: "Request a Call Back",

    description:
      "Have questions about our loan products? Request a call back and our team will assist you.",

    icon: "fa-phone-volume",

    sideTitle: "We Are Here To Help",

    button: "Request Call Back",

    boxes: [
      {
        icon: "fa-phone",
        title: "Expert Assistance",
        text: "Speak with our loan experts.",
      },

      {
        icon: "fa-circle-question",
        title: "Get Answers",
        text: "Get answers to your loan questions.",
      },

      {
        icon: "fa-headset",
        title: "Customer Support",
        text: "Our support team is ready to help.",
      },
    ],
  },

  branch: {
    title: "Find Nearest Branch",

    description:
      "Locate the nearest branch and get information about branch services and contact details.",

    icon: "fa-location-dot",

    sideTitle: "Find A Branch",

    button: "Find Branch",

    boxes: [
      {
        icon: "fa-location-dot",
        title: "Nearby Branch",
        text: "Find a branch near your location.",
      },

      {
        icon: "fa-phone",
        title: "Contact Details",
        text: "View branch contact information.",
      },

      {
        icon: "fa-clock",
        title: "Working Hours",
        text: "Check branch working hours.",
      },
    ],
  },

  grievance: {
    title: "Share Your Grievance",

    description:
      "We value your feedback. Share your concern or grievance and our team will assist you.",

    icon: "fa-message",

    sideTitle: "Customer Support",

    button: "Submit Grievance",

    boxes: [
      {
        icon: "fa-comment",
        title: "Submit Grievance",
        text: "Share your concern with us.",
      },

      {
        icon: "fa-headset",
        title: "Customer Support",
        text: "Get assistance from our support team.",
      },

      {
        icon: "fa-check-circle",
        title: "Resolution",
        text: "We work towards resolving your concern.",
      },
    ],
  },
};

/* =========================================================
   SHOW PRODUCTS
========================================================= */

function showProducts(button) {
  /* Remove active from all top buttons */

  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  /* Current active */

  button.classList.add("active");

  /* Hide details */

  document.getElementById("detailsSection").classList.remove("show");

  /* Show slider */

  document.getElementById("productsSection").classList.remove("hide");

  /* Remove product active */

  document.querySelectorAll(".product-card").forEach((card) => {
    card.classList.remove("active");
  });

  /* Scroll */

  document.getElementById("productsSection").scrollIntoView({
    behavior: "smooth",

    block: "start",
  });
}

/* =========================================================
   SHOW PRODUCT DETAIL
========================================================= */

function showProduct(type, card) {
  const data = products[type];

  /* Remove active from every product */

  document.querySelectorAll(".product-card").forEach((item) => {
    item.classList.remove("active");
  });

  /* Current product active */

  card.classList.add("active");

  /* Slider visible */

  document.getElementById("productsSection").classList.remove("hide");

  /* =====================================================
       IMPORTANT

       Same details section is used.
       Old content gets replaced.
    ===================================================== */

  const details = document.getElementById("detailsSection");

  /* First hide */

  details.classList.remove("show");

  setTimeout(() => {
    /* Title */

    document.getElementById("detailsTitle").innerText = data.title;

    /* Description */

    document.getElementById("detailsDescription").innerText = data.description;

    /* Icon */

    document.getElementById("detailsIcon").className = "fa-solid " + data.icon;

    /* Side title */

    document.getElementById("detailsSideTitle").innerText = data.sideTitle;

    /* Button */

    document.getElementById("detailsButton").innerText = data.button;

    /* =================================================
           CLEAR OLD BOXES

           Isse previous product ka detail hide ho jayega.
        ================================================= */

    const boxes = document.getElementById("detailsBoxes");

    boxes.innerHTML = "";

    /* =================================================
           CREATE NEW BOXES
        ================================================= */

    data.boxes.forEach((box) => {
      boxes.innerHTML += `

                <div class="col-md-4">

                    <div class="detail-box">

                        <i class="fa-solid ${box.icon}"></i>

                        <h5>
                            ${box.title}
                        </h5>

                        <p>
                            ${box.text}
                        </p>

                    </div>

                </div>

            `;
    });

    /* Show NEW details */

    details.classList.add("show");

    /* Scroll */

    details.scrollIntoView({
      behavior: "smooth",

      block: "start",
    });
  }, 150);
}

/* =========================================================
   SHOW OTHER SERVICE
========================================================= */

function showService(type, button) {
  const data = services[type];

  /* =====================================================
       TOP BUTTON ACTIVE
    ===================================================== */

  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  /* =====================================================
       PRODUCT SLIDER HIDE
    ===================================================== */

  document.getElementById("productsSection").classList.add("hide");

  /* Remove product card active */

  document.querySelectorAll(".product-card").forEach((card) => {
    card.classList.remove("active");
  });

  /* =====================================================
       DETAILS
    ===================================================== */

  const details = document.getElementById("detailsSection");

  /* Old detail hide */

  details.classList.remove("show");

  setTimeout(() => {
    /* Title */

    document.getElementById("detailsTitle").innerText = data.title;

    /* Description */

    document.getElementById("detailsDescription").innerText = data.description;

    /* Icon */

    document.getElementById("detailsIcon").className = "fa-solid " + data.icon;

    /* Side title */

    document.getElementById("detailsSideTitle").innerText = data.sideTitle;

    /* Button */

    document.getElementById("detailsButton").innerText = data.button;

    /* =================================================
           CLEAR PREVIOUS DETAILS
        ================================================= */

    const boxes = document.getElementById("detailsBoxes");

    boxes.innerHTML = "";

    /* =================================================
           NEW SERVICE DETAILS
        ================================================= */

    data.boxes.forEach((box) => {
      boxes.innerHTML += `

                <div class="col-md-4">

                    <div class="detail-box">

                        <i class="fa-solid ${box.icon}"></i>

                        <h5>
                            ${box.title}
                        </h5>

                        <p>
                            ${box.text}
                        </p>

                    </div>

                </div>

            `;
    });

    /* Show new details */

    details.classList.add("show");

    /* Scroll */

    details.scrollIntoView({
      behavior: "smooth",

      block: "start",
    });
  }, 150);
}

/* =========================================================
   PRODUCT SLIDER
========================================================= */

function slideProducts(direction) {
  const slider = document.getElementById("productSlider");

  const card = slider.querySelector(".product-card");

  if (!card) {
    return;
  }

  const cardWidth = card.offsetWidth + 22;

  slider.scrollBy({
    left: direction * cardWidth,

    behavior: "smooth",
  });
}

/* =====================================================
       NEWS SLIDER
    ===================================================== */

const track = document.getElementById("newsTrack");

const cards = document.querySelectorAll(".news-card");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

/* =====================================================
       GET VISIBLE CARDS
    ===================================================== */

function getVisibleCards() {
  if (window.innerWidth <= 576) {
    return 1;
  }

  if (window.innerWidth <= 992) {
    return 2;
  }

  if (window.innerWidth <= 1200) {
    return 4;
  }

  return 5;
}

/* =====================================================
       UPDATE SLIDER
    ===================================================== */

function updateSlider() {
  const visible = getVisibleCards();

  const gap = 25;

  const cardWidth = cards[0].offsetWidth + gap;

  const maxIndex = Math.max(0, cards.length - visible);

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

/* =====================================================
       NEXT
    ===================================================== */

nextBtn.addEventListener("click", function () {
  const visible = getVisibleCards();

  const maxIndex = Math.max(0, cards.length - visible);

  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateSlider();
});

/* =====================================================
       PREVIOUS
    ===================================================== */

prevBtn.addEventListener("click", function () {
  const visible = getVisibleCards();

  const maxIndex = Math.max(0, cards.length - visible);

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }

  updateSlider();
});

/* =====================================================
       AUTO SLIDE
    ===================================================== */

let autoSlide = setInterval(function () {
  nextBtn.click();
}, 4000);

/* Pause on hover */

document
  .querySelector(".news-slider")
  .addEventListener("mouseenter", function () {
    clearInterval(autoSlide);
  });

/* Resume */

document
  .querySelector(".news-slider")
  .addEventListener("mouseleave", function () {
    autoSlide = setInterval(function () {
      nextBtn.click();
    }, 4000);
  });

/* =====================================================
       RESIZE
    ===================================================== */

window.addEventListener("resize", updateSlider);

/* Initial */

window.addEventListener("load", updateSlider);

/* =========================================
       TESTIMONIAL SLIDER
    ========================================= */

const testimonialTrack = document.getElementById("testimonialTrack");

const testimonialCards = document.querySelectorAll(".testimonial-card");

const testimonialPrev = document.getElementById("testimonialPrev");

const testimonialNext = document.getElementById("testimonialNext");

const testimonialDots = document.getElementById("testimonialDots");

let testimonialIndex = 0;

/* =========================================
       VISIBLE CARDS
    ========================================= */

function getTestimonialVisible() {
  if (window.innerWidth <= 576) {
    return 1;
  }

  if (window.innerWidth <= 992) {
    return 2;
  }

  return 3;
}

/* =========================================
       CREATE DOTS
    ========================================= */

function createDots() {
  testimonialDots.innerHTML = "";

  const visible = getTestimonialVisible();

  const total = Math.max(1, testimonialCards.length - visible + 1);

  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");

    dot.className = "testimonial-dot";

    if (i === testimonialIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      testimonialIndex = i;

      updateTestimonials();
    });

    testimonialDots.appendChild(dot);
  }
}

/* =========================================
       UPDATE
    ========================================= */

function updateTestimonials() {
  const visible = getTestimonialVisible();

  const gap = 25;

  const cardWidth = testimonialCards[0].offsetWidth + gap;

  const maxIndex = Math.max(0, testimonialCards.length - visible);

  if (testimonialIndex > maxIndex) {
    testimonialIndex = maxIndex;
  }

  testimonialTrack.style.transform = `translateX(-${testimonialIndex * cardWidth}px)`;

  /* Update dots */

  const dots = document.querySelectorAll(".testimonial-dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === testimonialIndex);
  });
}

/* =========================================
       NEXT
    ========================================= */

testimonialNext.addEventListener("click", function () {
  const visible = getTestimonialVisible();

  const maxIndex = Math.max(0, testimonialCards.length - visible);

  if (testimonialIndex < maxIndex) {
    testimonialIndex++;
  } else {
    testimonialIndex = 0;
  }

  updateTestimonials();
});

/* =========================================
       PREVIOUS
    ========================================= */

testimonialPrev.addEventListener("click", function () {
  const visible = getTestimonialVisible();

  const maxIndex = Math.max(0, testimonialCards.length - visible);

  if (testimonialIndex > 0) {
    testimonialIndex--;
  } else {
    testimonialIndex = maxIndex;
  }

  updateTestimonials();
});

/* =========================================
       AUTO SLIDE
    ========================================= */

let testimonialAutoSlide = setInterval(function () {
  testimonialNext.click();
}, 4000);

/* Pause */

document
  .querySelector(".testimonial-slider")
  .addEventListener("mouseenter", function () {
    clearInterval(testimonialAutoSlide);
  });

/* Resume */

document
  .querySelector(".testimonial-slider")
  .addEventListener("mouseleave", function () {
    testimonialAutoSlide = setInterval(function () {
      testimonialNext.click();
    }, 4000);
  });

/* =========================================
       RESIZE
    ========================================= */

window.addEventListener("resize", function () {
  createDots();
  updateTestimonials();
});

/* =========================================
       INITIAL
    ========================================= */

window.addEventListener("load", function () {
  createDots();
  updateTestimonials();
});
