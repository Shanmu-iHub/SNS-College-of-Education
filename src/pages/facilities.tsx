import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'World-Class Infrastructure', 
        'Everything your child needs for holistic development under one roof—unlocking their potential at the SPINE Activity Center', 
        '/static/images/infrastructure_bg.jpg',
        'Facilities',
        'object-[center_65%]'
    )}

    <!-- SPINE Center -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">SNS SPINE Activity Center</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A 5-level premier activity center for sports, wellness, and recreation, ensuring a balanced student life.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Swimming Pool -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/swim.webp" alt="Swimming Pool" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Swimming Pool</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Professional-grade swimming pool with trained coaches to build physical endurance.
                        </p>
                    </div>
                </div>

                <!-- Indoor Pitch -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/indoor.jpg" alt="Indoor Pitch" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Indoor Cricket</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            All-weather cricket pitch with bowling machines and nets for all skill levels.
                        </p>
                    </div>
                </div>

                <!-- Fitness Gym -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/fitness.jpg" alt="Fitness Gym" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Fitness Center</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fully-equipped gym with strength machines, weights, and boxing kits for holistic health.
                        </p>
                    </div>
                </div>

                <!-- Gaming Center -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/gaming.jpg" alt="Gaming Center" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Gaming Arena</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            State-of-the-art space for strategic thinking and teamwork.
                        </p>
                    </div>
                </div>

                <!-- Mini Theatre -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/theatre.png" alt="Mini Theatre" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Bioskop Theater</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Digital theater for educational films and cinematic entertainment.
                        </p>
                    </div>
                </div>

                <!-- Music Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/music.jpg" alt="Music Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Music Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Professional music studio with recording equipment to compose and practice.
                        </p>
                    </div>
                </div>

                <!-- Dance Studio -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/dance.jpg" alt="Dance Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Dance Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Dedicated space for various dance styles—from classical to contemporary movement.
                        </p>
                    </div>
                </div>

                <!-- Connection Lounge -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/spine/lounge.jpg" alt="Connection Lounge" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Rooftop Dining</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Fine dining experience focusing on healthy, seasonal meals.
                        </p>
                    </div>
                </div>

                <!-- Art Studio (9th Item) -->
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">
                    <div class="h-64 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="/static/images/Education/1.JPG" alt="Art Studio" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-8 bg-white relative z-20">
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">Art Studio</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">
                            Creative space for expressing emotions and visualizing concepts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Academic Infrastructure -->
    <section class="py-24 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Learning Spaces</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-6">Academic Infrastructure</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Modern learning spaces designed to foster innovation, collaboration, and pedagogical excellence.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Smart Classrooms -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div class="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <i class="fas fa-chalkboard-teacher text-2xl text-blue-600 group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Smart Classrooms</h3>
                    <p class="text-sm text-gray-600">Interactive learning with smart boards and digital pedagogy tools.</p>
                </div>

                <!-- Science Labs -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div class="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                        <i class="fas fa-flask text-2xl text-red-600 group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Science Labs</h3>
                    <p class="text-sm text-gray-600">Advanced equipment for Physics, Chemistry & Biology experiments.</p>
                </div>

                <!-- Computer Labs -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div class="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                        <i class="fas fa-desktop text-2xl text-green-600 group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Computer Labs</h3>
                    <p class="text-sm text-gray-600">State-of-the-art computing facilities</p>
                </div>

                <!-- Library -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <div class="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                        <i class="fas fa-book text-2xl text-orange-600 group-hover:text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Library</h3>
                    <p class="text-sm text-gray-600">Comprehensive resource collection</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">Experience It In Person</h2>
            <p class="text-xl lg:text-2xl mb-10 text-white/90 font-light">
                Words and pictures can only say so much. Schedule a visit to see our world-class campus.
            </p>
            <a href="/contact" class="bg-white text-pink-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-block">
                Schedule Campus Tour
            </a>
        </div>
    </section>
  `;
};
