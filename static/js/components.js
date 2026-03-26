const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <!-- Floating Side Tags -->
    <div class="fixed top-[25%] right-0 z-50 flex flex-col gap-1 swing">
        <!-- Hanging Tag 1: NCTE Recognized -->
        <div class="bg-gradient-to-br from-green-600 to-emerald-600 text-white w-12 py-6 rounded-l-2xl shadow-2xl flex justify-center items-center relative">
            <span class="font-extrabold text-[10px] uppercase tracking-widest text-center leading-none inline-block w-full"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.1em;">NCTE RECOGNIZED</span>
        </div>
        
        <!-- Hanging Tag 2: Brochure -->
        <a href="/brochure-viewer/" class="bg-gradient-to-br from-red-600 to-[#be123c] hover:from-red-700 hover:to-[#9f1239] text-white w-12 py-6 rounded-l-2xl shadow-2xl flex flex-col items-center gap-3 transition-colors relative">
            <i class="fas fa-file-pdf text-[18px] drop-shadow-md"></i>
            <span class="font-extrabold text-[10px] uppercase tracking-widest text-center leading-none inline-block w-full"
                style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.1em;">BROCHURE</span>
        </a>
    </div>

    <!-- Mobile Bottom Navigation -->
    <div class="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 lg:hidden rounded-t-2xl">
        <div class="flex justify-around items-center h-16 relative px-2">
            <a href="/" class="flex flex-col items-center justify-center w-16 text-gray-500 hover:text-[#009846] transition">
                <i class="fas fa-home text-xl mb-1"></i>
                <span class="text-[10px] font-medium">Home</span>
            </a>
            
            <!-- Center Action Button with Popup Sheet -->
            <div class="relative flex justify-center w-20 group" style="top: -18px;">
                <a href="/programs.html" target="_blank" class="flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg text-white border-4 border-white hover:scale-105 transition-transform">
                    <i class="fas fa-graduation-cap text-2xl"></i>
                </a>
                <span class="absolute top-12 text-[10px] font-bold text-[#009846] mt-1 whitespace-nowrap">Programs</span>
            </div>

            <a href="/about" class="flex flex-col items-center justify-center w-16 text-gray-500 hover:text-[#009846] transition pt-1">
                <i class="fas fa-info-circle text-xl mb-1"></i>
                <span class="text-[10px] font-medium">About Us</span>
            </a>

            <a href="/admissions" class="flex flex-col items-center justify-center w-16 text-gray-500 hover:text-[#009846] transition pt-1">
                <i class="fas fa-edit text-xl mb-1"></i>
                <span class="text-[10px] font-medium">Apply</span>
            </a>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="/" class="flex items-center space-x-3">
                    <img src="/static/images/college_logo.jpeg" alt="Dr. SNS College of Education Logo" class="h-16 w-auto">
                    <div>
                        <h1 class="text-xl font-bold text-gray-900">Dr. SNS College of Education</h1>
                    </div>
                </a>

                <div class="hidden md:flex items-center space-x-6">
                    <a href="/" class="text-gray-700 hover:text-[#009846] font-medium">Home</a>

                    <!-- Academics Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#009846] font-medium flex items-center">
                            Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 mt-0 z-50">
                            <a href="/academics/b-ed/tamil.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Tamil</a>
                            <a href="/academics/b-ed/english.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of English</a>
                            <a href="/academics/b-ed/mathematics.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Mathematics</a>
                            <a href="/academics/b-ed/physical-science.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Physical Science</a>
                            <a href="/academics/b-ed/biological-science.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Biological Science</a>
                            <a href="/academics/b-ed/history.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of History</a>
                            <a href="/academics/b-ed/computer-science.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Computer Science</a>
                            <a href="/academics/b-ed/economics.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Economics</a>
                            <a href="/academics/b-ed/commerce.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Commerce</a>
                            <a href="/academics/b-ed/social-science.html" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Pedagogy of Social Science</a>
                        </div>
                    </div>

                    <!-- Infrastructure Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#009846] font-medium flex items-center">
                            Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                            <a href="/facilities"
                                class="block px-4 py-2 hover:bg-green-50 text-gray-700">Facilities</a>
                            <a href="/gallery" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Gallery</a>
                            <a href="/transport" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Transport</a>
                        </div>
                    </div>

                    <!-- Beyond Academics Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#009846] font-medium flex items-center">
                            Beyond Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/sports-clubs" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Sports &
                                Clubs</a>
                            <a href="/innovation" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Innovation
                                Hub</a>
                            <a href="/events" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Events &
                                Celebrations</a>
                            <a href="/success-stories" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Success
                                Stories</a>
                        </div>
                    </div>

                    <!-- Meet Us Dropdown -->
                    <div class="relative group">
                        <button class="text-gray-700 hover:text-[#009846] font-medium flex items-center">
                            Meet Us <i class="fas fa-chevron-down ml-1 text-xs"></i>
                        </button>
                        <div
                            class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                            <a href="/about" class="block px-4 py-2 hover:bg-green-50 text-gray-700">About Us</a>
                            <a href="/contact" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Contact Us</a>
                            <a href="/mandatory-disclosure"
                                class="block px-4 py-2 hover:bg-green-50 text-gray-700">Mandatory Disclosure</a>
                            <a href="/brochure" class="block px-4 py-2 hover:bg-green-50 text-gray-700">Brochure</a>
                        </div>
                    </div>

                    <a href="/admissions"
                        class="bg-[#009846] hover:bg-[#007b38] text-white px-6 py-3 rounded-lg font-bold transition">
                        Apply Now <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 py-4 space-y-3">
                <a href="/" class="block text-gray-700 hover:text-[#009846] font-medium py-2">Home</a>

                <!-- Academics -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#009846] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-academics').classList.toggle('hidden')">
                        Programs <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-academics" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/academics/b-ed/tamil.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Tamil</a>
                        <a href="/academics/b-ed/english.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of English</a>
                        <a href="/academics/b-ed/mathematics.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Mathematics</a>
                        <a href="/academics/b-ed/physical-science.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Physical Science</a>
                        <a href="/academics/b-ed/biological-science.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Biological Science</a>
                        <a href="/academics/b-ed/history.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of History</a>
                        <a href="/academics/b-ed/computer-science.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Computer Science</a>
                        <a href="/academics/b-ed/economics.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Economics</a>
                        <a href="/academics/b-ed/commerce.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Commerce</a>
                        <a href="/academics/b-ed/social-science.html" class="block text-gray-600 hover:text-[#009846] py-1">Pedagogy of Social Science</a>
                    </div>
                </div>

                <!-- Infrastructure -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#009846] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                        Infrastructure <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/facilities" class="block text-gray-600 hover:text-[#009846] py-1">Facilities</a>
                        <a href="/gallery" class="block text-gray-600 hover:text-[#009846] py-1">Gallery</a>
                        <a href="/transport" class="block text-gray-600 hover:text-[#009846] py-1">Transport</a>
                    </div>
                </div>

                <!-- Beyond Academics -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#009846] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-beyond').classList.toggle('hidden')">
                        Beyond Programs <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-beyond" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/sports-clubs" class="block text-gray-600 hover:text-[#009846] py-1">Sports &
                            Clubs</a>
                        <a href="/innovation" class="block text-gray-600 hover:text-[#009846] py-1">Innovation Hub</a>
                        <a href="/events" class="block text-gray-600 hover:text-[#009846] py-1">Events &
                            Celebrations</a>
                        <a href="/success-stories" class="block text-gray-600 hover:text-[#009846] py-1">Success
                            Stories</a>
                    </div>
                </div>

                <!-- Meet Us -->
                <div>
                    <button
                        class="w-full text-left text-gray-700 hover:text-[#009846] font-medium py-2 flex justify-between items-center"
                        onclick="document.getElementById('mobile-meetus').classList.toggle('hidden')">
                        Meet Us <i class="fas fa-chevron-down"></i>
                    </button>
                    <div id="mobile-meetus" class="hidden pl-4 space-y-2 mt-2">
                        <a href="/about" class="block text-gray-600 hover:text-[#009846] py-1">About Us</a>
                        <a href="/contact" class="block text-gray-600 hover:text-[#009846] py-1">Contact Us</a>
                        <a href="/mandatory-disclosure" class="block text-gray-600 hover:text-[#009846] py-1">Mandatory
                            Disclosure</a>
                        <a href="/brochure" class="block text-gray-600 hover:text-[#009846] py-1">Brochure</a>
                    </div>
                </div>

                <a href="/admissions" class="block bg-[#009846] text-white text-center px-6 py-3 rounded-lg font-bold">
                    Apply Now <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </nav>
`;

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center space-x-3 mb-4">
                        <img src="/static/images/college_logo.jpeg" alt="Dr. SNS College of Education Logo"
                            class="h-12 w-auto bg-white rounded p-1">
                        <div>
                            <h3 class="text-white font-bold">Dr. SNS College of Education</h3>
                        </div>
                    </div>
                    <p class="text-sm leading-relaxed">
                        Affiliated to TNTEU<br>
                        Established: 2007<br>
                        Coimbatore, Tamil Nadu
                    </p>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/" class="hover:text-white transition">Home</a></li>
                        <li><a href="/about" class="hover:text-white transition">About Us</a></li>
                        <li><a href="/facilities" class="hover:text-white transition">Facilities</a></li>
                        <li><a href="/gallery" class="hover:text-white transition">Gallery</a></li>
                        <li><a href="/sports-clubs" class="hover:text-white transition">Sports & Clubs</a></li>
                        <li><a href="/events" class="hover:text-white transition">Events & Celebrations</a></li>
                        <li><a href="/success-stories" class="hover:text-white transition">Success Stories</a></li>
                        <li><a href="/transport" class="hover:text-white transition">Transport</a></li>
                        <li><a href="/innovation" class="hover:text-white transition">Innovation Hub</a></li>
                        <li><a href="/brochure" class="hover:text-white transition">Download Brochure</a></li>

                        <li><a href="/admissions" class="hover:text-white transition">Admissions</a></li>
                        <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Programs</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/academics/b-ed/tamil.html" class="hover:text-white transition">Pedagogy of Tamil</a></li>
                        <li><a href="/academics/b-ed/english.html" class="hover:text-white transition">Pedagogy of English</a></li>
                        <li><a href="/academics/b-ed/mathematics.html" class="hover:text-white transition">Pedagogy of Mathematics</a></li>
                        <li><a href="/academics/b-ed/physical-science.html" class="hover:text-white transition">Pedagogy of Physical Science</a></li>
                        <li><a href="/academics/b-ed/biological-science.html" class="hover:text-white transition">Pedagogy of Biological Science</a></li>
                        <li><a href="/academics/b-ed/history.html" class="hover:text-white transition">Pedagogy of History</a></li>
                        <li><a href="/academics/b-ed/computer-science.html" class="hover:text-white transition">Pedagogy of Computer Science</a></li>
                        <li><a href="/academics/b-ed/economics.html" class="hover:text-white transition">Pedagogy of Economics</a></li>
                        <li><a href="/academics/b-ed/commerce.html" class="hover:text-white transition">Pedagogy of Commerce</a></li>
                        <li><a href="/academics/b-ed/social-science.html" class="hover:text-white transition">Pedagogy of Social Science</a></li>
                        <li><a href="/mandatory-disclosure" class="hover:text-white transition">Mandatory Disclosure</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-bold mb-4">Connect</h4>
                    <ul class="space-y-2 text-sm mb-4">
                        <li><i class="fas fa-map-marker-alt mr-2"></i>Dr. SNS College of Education,<br />Chinavedampatti (Post),<br />Thudiyalur - Saravanampatti Road,<br />Coimbatore - 641049</li>
                        <li><a href="tel:+917530093729" class="hover:text-white transition"><i
                                    class="fas fa-phone mr-2"></i>Mobile: 7530093729, 7530093728</a></li>
                        <li><a href="mailto:office@drsnsce.edu.in" class="hover:text-white transition"><i
                                    class="fas fa-envelope mr-2"></i>office@drsnsce.edu.in</a></li>
                    </ul>
                    <div class="flex space-x-3">
                        <a href="https://www.facebook.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#009846] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="http://instagram.com/snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#009846] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/@snsinstitutions" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#009846] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/school/snsinstitutions/" target="_blank"
                            class="w-10 h-10 bg-gray-800 hover:bg-[#009846] rounded-lg flex items-center justify-center transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 text-center text-sm">
                <p>&copy; 2026 Dr. SNS College of Education. All rights reserved.</p>
                <p class="mt-2 text-[#009846] font-semibold">Redesigning Common Minds | We are Design Thinkers</p>
                <p class="mt-1 text-xs">SNS Core Value: Sincerity, Nobility, Service</p>
                <p class="mt-3 text-[#009846] font-bold"><i class="fas fa-headset mr-2"></i>Helpline: 7530093729</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    
    <!-- Instagram Floating Icon -->
    <a href="http://instagram.com/snsinstitutions" class="instagram-float" target="_blank" rel="noopener noreferrer"
        title="Follow us on Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <!-- WhatsApp Floating Icon -->
    <a href="https://wa.me/917530093728" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
        title="Chat with us on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
`;

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.appendChild(headerTemplate.content.cloneNode(true));
        this.setupMobileMenu();
        this.setActiveLink();
    }

    setupMobileMenu() {
        const mobileMenuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking a link
        this.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) mobileMenu.classList.add('hidden');
            });
        });
    }

    setActiveLink() {
        const path = window.location.pathname;
        const links = this.querySelectorAll('.hidden.md\\:flex a'); // Only highlight desktop links for now to keep it clean
        let currentLink = null;

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href !== '/' && path.includes(href)) {
                if (!currentLink || href.length > currentLink.getAttribute('href').length) {
                    currentLink = link;
                }
            }
        });

        if (path === '/' || path === '/index.html') {
            const homeLinks = Array.from(links).filter(link => link.getAttribute('href') === '/');
            homeLinks.forEach(link => {
                link.classList.add('text-[#009846]', 'font-bold');
                link.classList.remove('text-gray-700');
            });
        } else if (currentLink) {
            currentLink.classList.add('text-[#009846]', 'font-bold');
            currentLink.classList.remove('text-gray-700');

            // Highlight parent dropdown button
            const dropdown = currentLink.closest('.relative.group');
            if (dropdown) {
                const btn = dropdown.querySelector('button');
                if (btn) {
                    btn.classList.add('text-[#009846]', 'font-bold');
                    btn.classList.remove('text-gray-700');
                }
            }
        }
    }
}
customElements.define('app-header', AppHeader);

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.appendChild(footerTemplate.content.cloneNode(true));
    }
}
customElements.define('app-footer', AppFooter);
