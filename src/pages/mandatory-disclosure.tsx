import { PageHeader } from '../components/page-header'

export const MandatoryDisclosurePage = () => {
    return `
    ${PageHeader(
        'Mandatory Public Disclosure',
        'As per University Guidelines',
        '/static/images/hero.png',
        'Mandatory Disclosure'
    )}

    <!-- A: General Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">A. General Information</h2>

            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">College Name</td>
                            <td class="border border-gray-300 px-4 py-3">Dr. S. N. S. College of Education</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">College Code</td>
                            <td class="border border-gray-300 px-4 py-3">10309</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Complete Address with PIN Code</td>
                            <td class="border border-gray-300 px-4 py-3">Dr. S. N. S. College of Education<br>487, Thudiyalur – Saravanampatti Road,<br>Chinnavedampatti (Post),<br>Coimbatore – 641049.</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Year of Establishment</td>
                            <td class="border border-gray-300 px-4 py-3">2007</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Recognized by</td>
                            <td class="border border-gray-300 px-4 py-3">NCTE</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Affiliating University</td>
                            <td class="border border-gray-300 px-4 py-3">Tamil Nadu Teachers Education University, Chennai</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">NAAC Accreditation</td>
                            <td class="border border-gray-300 px-4 py-3">‘A’ Grade</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Status Obtained</td>
                            <td class="border border-gray-300 px-4 py-3">2(f)</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">9</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Principal Name</td>
                            <td class="border border-gray-300 px-4 py-3">Dr. A. Mary Noya Leena</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">10</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Principal Qualification</td>
                            <td class="border border-gray-300 px-4 py-3">M.Sc., M.Ed., Ph.D.</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">11</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">College Email ID</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="mailto:office@drsnsce.edu.in" class="text-green-600 hover:underline">office@drsnsce.edu.in</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">12</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Contact Details</td>
                            <td class="border border-gray-300 px-4 py-3">9842232680, <a href="tel:+917530093728" class="text-green-600 hover:underline">+91-7530093728</a>, <a href="tel:+917530093729" class="text-green-600 hover:underline">7530093729</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- B: Documents and Information -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">B. Mandatory Documents for B.Ed Programme Approval & Compliance</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300 bg-white">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LIST OF DOCUMENTS</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LINK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3">First Order of Recognition</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1UYKV3_MaaApUcQhk4csjgGseDAHe07dT/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3">First Affiliation Order – Bharathiar University</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1f6bgjl99TrBFKVljgdNXuhVESELUuci/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3">Revised Recognition Order (As per NCTE 2014 Norms)</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1UWwHKKVhgruKPeTjmcRZmKfXJqSjG7E7/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3">First Affiliation Order – Tamil Nadu Teachers Education University</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1wyFDBfziJXWSJgffBRWGJsvP5le2UwMg/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3">Continuous Provisional Affiliation Orders – TNTEU</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1t7JOeTRt1eXKg1q8jcn1i54Y4bvQusWi/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3">Recognition under Section 2(f) of UGC Act, 1956</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/144snREG__FrVAS93Z2HeITonmxEqVzi/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3">Accreditation Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1xNblZBadG55qqoV7s77zmZ6_HEaoT4m9/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3">Fire Safety Certificate / NOC</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/1uuP8uQdgADaKtFi1hoypgLU0LuCz1GWv/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">9</td>
                            <td class="border border-gray-300 px-4 py-3">Sanitary Certificate</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://drive.google.com/file/d/155FxaPJpgu6aham2p7gcyTHi7GBkP56/view?usp=drive_link" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="mt-6 bg-green-50 border-l-4 border-green-500 p-4">
                <p class="text-sm text-gray-700"><strong>NOTE:</strong> The college uploads self-attested copies of above listed documents by Chairman/Manager/Secretary and Principal. If it is noticed at a later stage that uploaded documents are not genuine, the college shall be liable for action as per norms.</p>
            </div>
        </div>
    </section>

    <!-- C: Result and Academics -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">C. Result and Academics</h2>

            <div class="overflow-x-auto mb-8">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DOCUMENTS/INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">LINKS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Fee Structure of the College</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/FeeStructure/" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Annual Academic Calendar</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="/static/docs/academic-calendar-2025-2026.docx" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">List of College Management Committee (SMC)</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/SchoolManagementCommittee/" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">List of Parents Teachers Association (PTA) Members</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/ParentsTeachersAssociation/" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Last Three-Year Result of Board Examination</td>
                            <td class="border border-gray-300 px-4 py-3"><a href="https://snsacademy.org/Three-YearResult/" target="_blank" class="text-green-600 hover:underline font-semibold">View Document</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold mb-6 text-gray-900">University Result</h3>
            <p class="text-gray-700 mb-6">Result during the last three years with % of overall Pass outs</p>
            
            <div class="overflow-x-auto mb-8">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Academic Year</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Year</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Semester</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Total No of students Appeared</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Total no of students passed</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">Pass Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">2022-2023</td>
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">I</td>
                            <td class="border border-gray-300 px-4 py-3">I</td>
                            <td class="border border-gray-300 px-4 py-3">100</td>
                            <td class="border border-gray-300 px-4 py-3">100</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">II</td>
                            <td class="border border-gray-300 px-4 py-3">100</td>
                            <td class="border border-gray-300 px-4 py-3">100</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">2022-2023</td>
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">II</td>
                            <td class="border border-gray-300 px-4 py-3">III</td>
                            <td class="border border-gray-300 px-4 py-3">95</td>
                            <td class="border border-gray-300 px-4 py-3">95</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">IV</td>
                            <td class="border border-gray-300 px-4 py-3">95</td>
                            <td class="border border-gray-300 px-4 py-3">95</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">2023-2024</td>
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">I</td>
                            <td class="border border-gray-300 px-4 py-3">I</td>
                            <td class="border border-gray-300 px-4 py-3">70</td>
                            <td class="border border-gray-300 px-4 py-3">70</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">II</td>
                            <td class="border border-gray-300 px-4 py-3">70</td>
                            <td class="border border-gray-300 px-4 py-3">70</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">2023-2024</td>
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">II</td>
                            <td class="border border-gray-300 px-4 py-3">III</td>
                            <td class="border border-gray-300 px-4 py-3">99</td>
                            <td class="border border-gray-300 px-4 py-3">99</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">IV</td>
                            <td class="border border-gray-300 px-4 py-3">99</td>
                            <td class="border border-gray-300 px-4 py-3">99</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>

                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">2024-2025</td>
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">I</td>
                            <td class="border border-gray-300 px-4 py-3">I</td>
                            <td class="border border-gray-300 px-4 py-3">78</td>
                            <td class="border border-gray-300 px-4 py-3">78</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">II</td>
                            <td class="border border-gray-300 px-4 py-3">78</td>
                            <td class="border border-gray-300 px-4 py-3">78</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">2024-2025</td>
                            <td class="border border-gray-300 px-4 py-3" rowspan="2">II</td>
                            <td class="border border-gray-300 px-4 py-3">III</td>
                            <td class="border border-gray-300 px-4 py-3">70</td>
                            <td class="border border-gray-300 px-4 py-3">70</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">IV</td>
                            <td class="border border-gray-300 px-4 py-3">69</td>
                            <td class="border border-gray-300 px-4 py-3">69</td>
                            <td class="border border-gray-300 px-4 py-3 font-bold text-green-600">100%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- D: Staff (Teaching) -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">D. Staff (Teaching)</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300 bg-white">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">INFORMATION</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Principal</td>
                            <td class="border border-gray-300 px-4 py-3">Dr. A. Mary Noya Leena</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Total Number of Teaching Staff</td>
                            <td class="border border-gray-300 px-4 py-3">15</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Student–Staff Ratio</td>
                            <td class="border border-gray-300 px-4 py-3">13 : 1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- E: College Infrastructure -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">E. College Infrastructure</h2>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                    <thead class="bg-green-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">SL NO.</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">DETAILS</th>
                            <th class="border border-gray-300 px-4 py-3 text-left font-bold">AVAILABILITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">1</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Classrooms</td>
                            <td class="border border-gray-300 px-4 py-3">4 Nos</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">2</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Seminar Hall</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">3</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Language Laboratory</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">4</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Computer Laboratory</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">5</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Educational Technology Lab</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">6</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Biological Science Laboratory</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">7</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Mathematics Laboratory</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">8</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Psychology Laboratory</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">9</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Physical Science Laboratory</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="border border-gray-300 px-4 py-3">10</td>
                            <td class="border border-gray-300 px-4 py-3 font-semibold">Play Ground</td>
                            <td class="border border-gray-300 px-4 py-3"><span class="text-green-600 font-bold">Available</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Institutional Inspection Video -->
            <div class="mt-8 overflow-hidden rounded-lg border border-gray-300 bg-white">
                <table class="w-full border-collapse">
                    <tbody>
                        <tr class="hover:bg-gray-50 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                            <td class="flex-1 px-6 py-4 font-bold text-[#1f2937] flex items-center">YouTube Video of Institutional Inspection</td>
                            <td class="px-6 py-4 flex items-center justify-center sm:w-64">
                                <a href="https://www.youtube.com/c/snsinstitutions" target="_blank" class="text-green-600 hover:underline font-bold">Watch Video</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Questions About Our Disclosures?</h2>
            <p class="text-xl mb-8">Contact our office for any queries regarding mandatory disclosures and documentation</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition">
                    <i class="fas fa-envelope mr-2"></i>
                    Contact Us
                </a>
                <a href="tel:+917530093728" class="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition">
                    <i class="fas fa-phone mr-2"></i>
                    Call: +91 75300 93728
                </a>
            </div>
        </div>
    </section>
  `;
};
