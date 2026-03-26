import { PageHeader } from '../components/page-header'

export const BrochurePage = () => {
    return `
    ${PageHeader(
        'Digital Brochure',
        'Download our complete prospectus',
        '/static/images/hero.png',
        'Brochure'
    )}
    <!-- Brochure Content -->
    <section class="py-24 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-[2rem] p-12 text-center shadow-xl max-w-3xl mx-auto border border-gray-100 relative z-10 -mt-[120px]">
                <i class="fas fa-file-pdf text-[5rem] text-green-600 mb-6 drop-shadow-sm"></i>
                <h2 class="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">SNS College of Education Prospectus</h2>
                <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Comprehensive guide with complete information about our B.Ed & M.Ed programs, facilities, admission process, and fees structure.
                </p>
                
                <div class="flex justify-center mb-8">
                    <a href="/brochure-viewer/" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-md shadow-green-500/20 inline-flex items-center justify-center">
                        <i class="fas fa-download mr-3"></i>
                        Download Brochure
                    </a>
                </div>
                
                <p class="text-sm text-gray-500">
                    For printed copies, contact us at <a href="tel:+919842232680" class="text-blue-500 hover:underline font-medium">+91 98422 32680</a>
                </p>
            </div>
            
            <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8">
                <div class="text-center group">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                        <i class="fas fa-graduation-cap text-3xl text-purple-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-gray-900">Academic Programs</h3>
                    <p class="text-sm text-gray-600">B.Ed & M.Ed curriculum details</p>
                </div>
                
                <div class="text-center group">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                        <i class="fas fa-building text-3xl text-blue-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-gray-900">Facilities Tour</h3>
                    <p class="text-sm text-gray-600">Complete infrastructure overview</p>
                </div>
                
                <div class="text-center group">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                        <i class="fas fa-rupee-sign text-3xl text-green-600"></i>
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-gray-900">Fee Structure</h3>
                    <p class="text-sm text-gray-600">Transparent pricing and payment options</p>
                </div>
            </div>
        </div>
    </section>
    `;
};
