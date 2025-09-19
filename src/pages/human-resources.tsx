import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { CVFormModal } from '../components/forms/CVFormModal';
import { ContactFormModal } from '../components/forms/ContactFormModal';

interface JobPosting {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    experience: string;
    salary: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
    deadline: string;
    isUrgent?: boolean;
}

const mockJobPostings: JobPosting[] = [
    {
        id: 1,
        title: 'Lojistik Uzmanı',
        department: 'Operasyon',
        location: 'İstanbul',
        type: 'full-time',
        experience: '3-5 yıl',
        salary: 'Competitive',
        description: 'Lojistik operasyonlarının planlanması ve yönetimi konusunda deneyimli uzman arıyoruz.',
        requirements: [
            'Lojistik, İşletme veya ilgili alanlarda lisans derecesi',
            'En az 3 yıl lojistik sektörü deneyimi',
            'İleri düzeyde Excel ve ERP sistemi bilgisi',
            'Analitik düşünme ve problem çözme becerisi',
            'İyi iletişim ve takım çalışması becerileri'
        ],
        benefits: [
            'Rekabetçi maaş ve performans primi',
            'Sağlık sigortası',
            'Yemek kartı',
            'Esnek çalışma saatleri',
            'Kariyer gelişim fırsatları'
        ],
        postedDate: '2024-01-15',
        deadline: '2024-02-15',
        isUrgent: true
    },
    {
        id: 2,
        title: 'Müşteri Hizmetleri Temsilcisi',
        department: 'Müşteri Hizmetleri',
        location: 'Ankara',
        type: 'full-time',
        experience: '1-3 yıl',
        salary: 'Competitive',
        description: 'Müşteri memnuniyetini sağlamak ve müşteri ilişkilerini yönetmek için deneyimli temsilci arıyoruz.',
        requirements: [
            'Lise veya üniversite mezunu',
            'En az 1 yıl müşteri hizmetleri deneyimi',
            'Mükemmel Türkçe konuşma ve yazma becerisi',
            'İngilizce bilgisi tercih edilir',
            'Sabırlı ve empati kurabilen kişilik'
        ],
        benefits: [
            'Rekabetçi maaş',
            'Sağlık sigortası',
            'Ulaşım desteği',
            'Mesleki eğitim fırsatları',
            'Kariyer gelişim programları'
        ],
        postedDate: '2024-01-10',
        deadline: '2024-02-10'
    },
    {
        id: 3,
        title: 'IT Uzmanı',
        department: 'Bilgi İşlem',
        location: 'İstanbul',
        type: 'full-time',
        experience: '2-4 yıl',
        salary: 'Competitive',
        description: 'Şirketimizin IT altyapısının yönetimi ve geliştirilmesi için uzman arıyoruz.',
        requirements: [
            'Bilgisayar Mühendisliği veya ilgili alanlarda lisans derecesi',
            'En az 2 yıl IT deneyimi',
            'Network ve sistem yönetimi bilgisi',
            'Veritabanı yönetimi deneyimi',
            'Proaktif ve çözüm odaklı yaklaşım'
        ],
        benefits: [
            'Rekabetçi maaş',
            'Sağlık sigortası',
            'Teknoloji eğitimleri',
            'Esnek çalışma saatleri',
            'Uzaktan çalışma imkanı'
        ],
        postedDate: '2024-01-08',
        deadline: '2024-02-08'
    },
    {
        id: 4,
        title: 'Muhasebe Uzmanı',
        department: 'Mali İşler',
        location: 'İzmir',
        type: 'full-time',
        experience: '3-5 yıl',
        salary: 'Competitive',
        description: 'Mali işler departmanımızda çalışacak deneyimli muhasebe uzmanı arıyoruz.',
        requirements: [
            'Maliye, İşletme veya ilgili alanlarda lisans derecesi',
            'En az 3 yıl muhasebe deneyimi',
            'Muhasebe programları bilgisi',
            'Vergi mevzuatı bilgisi',
            'Detay odaklı ve düzenli çalışma alışkanlığı'
        ],
        benefits: [
            'Rekabetçi maaş',
            'Sağlık sigortası',
            'Yemek kartı',
            'Mesleki gelişim eğitimleri',
            'Kariyer fırsatları'
        ],
        postedDate: '2024-01-05',
        deadline: '2024-02-05'
    }
];

export function HumanResourcesPage() {
    const { t } = useLanguage();
    const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
    const [selectedLocation, setSelectedLocation] = useState<string>('all');
    const [isCVModalOpen, setIsCVModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const departments = ['all', 'Operasyon', 'Müşteri Hizmetleri', 'Bilgi İşlem', 'Mali İşler'];
    const locations = ['all', 'İstanbul', 'Ankara', 'İzmir'];

    const filteredJobs = mockJobPostings.filter(job => {
        const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
        const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
        return departmentMatch && locationMatch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <div className="relative hero-gradient text-white py-20 hero-section">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                            {t('hr.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {t('hr.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                onClick={() => setIsCVModalOpen(true)}
                            >
                                {t('hr.sendCV')}
                            </Button>
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('hr.viewPositions')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Info Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('hr.whyUs')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('hr.whyUsDesc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center p-6 company-value-card">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('hr.strongTeam')}</h3>
                            <p className="text-gray-600">{t('hr.strongTeamDesc')}</p>
                        </Card>

                        <Card className="text-center p-6 company-value-card">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('hr.fastGrowth')}</h3>
                            <p className="text-gray-600">{t('hr.fastGrowthDesc')}</p>
                        </Card>

                        <Card className="text-center p-6 company-value-card">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('hr.training')}</h3>
                            <p className="text-gray-600">{t('hr.trainingDesc')}</p>
                        </Card>

                        <Card className="text-center p-6 company-value-card">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('hr.workLifeBalance')}</h3>
                            <p className="text-gray-600">{t('hr.workLifeBalanceDesc')}</p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Job Openings Section */}
            <div id="open-positions" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('hr.openPositions')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('hr.openPositionsDesc')}
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="filter-select px-4 py-2 rounded-lg"
                        >
                            <option value="all">{t('hr.allDepartments')}</option>
                            {departments.slice(1).map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="filter-select px-4 py-2 rounded-lg"
                        >
                            <option value="all">{t('hr.allLocations')}</option>
                            {locations.slice(1).map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>

                    {/* Job Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredJobs.map((job, index) => (
                            <Card key={job.id} className="job-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                <CardHeader className="pb-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                                                {job.title}
                                            </CardTitle>
                                            <div className="flex items-center text-sm text-gray-600 mb-2">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {job.location}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {job.department}
                                            </div>
                                        </div>
                                        {job.isUrgent && (
                                            <span className="urgent-badge bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                                                {t('hr.urgent')}
                                            </span>
                                        )}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                                        {job.description}
                                    </CardDescription>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{t('hr.experience')}: {job.experience}</span>
                                        <span>{t('hr.salary')}: {job.salary}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button asChild className="flex-1">
                                            <Link to={`/human-resources/job/${job.id}`}>
                                                {t('hr.viewDetails')}
                                            </Link>
                                        </Button>
                                        <Button variant="outline" className="px-4" onClick={() => setIsCVModalOpen(true)}>
                                            {t('hr.apply')}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredJobs.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('hr.noPositions')}</h3>
                            <p className="text-gray-600">{t('hr.noPositionsDesc')}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Application Process Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('hr.applicationProcess')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('hr.applicationProcessDesc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center process-step">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hr.step1')}</h3>
                            <p className="text-gray-600">{t('hr.step1Desc')}</p>
                        </div>
                        <div className="text-center process-step">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hr.step2')}</h3>
                            <p className="text-gray-600">{t('hr.step2Desc')}</p>
                        </div>
                        <div className="text-center process-step">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hr.step3')}</h3>
                            <p className="text-gray-600">{t('hr.step3Desc')}</p>
                        </div>
                        <div className="text-center process-step">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hr.step4')}</h3>
                            <p className="text-gray-600">{t('hr.step4Desc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 cta-glow bg-gradient-to-r from-blue-600 to-indigo-700 text-white cta-section">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('hr.applyNow')}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        {t('hr.applyNowDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            onClick={() => setIsCVModalOpen(true)}
                        >
                            {t('hr.sendCV')}
                        </Button>
                        <Button
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            onClick={() => setIsContactModalOpen(true)}
                        >
                            {t('hr.contactUs')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <CVFormModal
                isOpen={isCVModalOpen}
                onClose={() => setIsCVModalOpen(false)}
            />
            <ContactFormModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
}
