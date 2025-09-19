import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useState } from 'react';

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
    responsibilities: string[];
    qualifications: string[];
    workingConditions: string[];
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
        description: 'Lojistik operasyonlarının planlanması ve yönetimi konusunda deneyimli uzman arıyoruz. Şirketimizin büyüyen operasyonlarını desteklemek ve müşteri memnuniyetini artırmak için dinamik bir ekibe katılacak profesyonel arıyoruz.',
        requirements: [
            'Lojistik, İşletme veya ilgili alanlarda lisans derecesi',
            'En az 3 yıl lojistik sektörü deneyimi',
            'İleri düzeyde Excel ve ERP sistemi bilgisi',
            'Analitik düşünme ve problem çözme becerisi',
            'İyi iletişim ve takım çalışması becerileri',
            'İngilizce bilgisi (tercih edilir)',
            'SAP veya benzeri ERP sistemleri deneyimi'
        ],
        benefits: [
            'Rekabetçi maaş ve performans primi',
            'Sağlık sigortası',
            'Yemek kartı',
            'Esnek çalışma saatleri',
            'Kariyer gelişim fırsatları',
            'Ulaşım desteği',
            'Yıllık izin hakları',
            'Mesleki eğitim ve sertifika programları'
        ],
        responsibilities: [
            'Lojistik operasyonlarının planlanması ve koordinasyonu',
            'Tedarik zinciri süreçlerinin optimizasyonu',
            'Müşteri taleplerinin değerlendirilmesi ve karşılanması',
            'Nakliye ve depolama süreçlerinin yönetimi',
            'Performans metriklerinin takibi ve raporlanması',
            'Ekip üyeleri ile koordinasyon ve işbirliği',
            'Sürekli iyileştirme projelerine katılım'
        ],
        qualifications: [
            'Lojistik veya İşletme alanında lisans derecesi',
            'En az 3 yıl lojistik operasyon deneyimi',
            'ERP sistemleri kullanım deneyimi',
            'Analitik düşünme ve problem çözme becerisi',
            'İyi iletişim ve liderlik becerileri',
            'İngilizce bilgisi (tercih edilir)',
            'SAP veya benzeri sistem deneyimi (tercih edilir)'
        ],
        workingConditions: [
            'Tam zamanlı çalışma',
            'Esnek çalışma saatleri',
            'Hafta sonu çalışma (gerekirse)',
            'Seyahat gerektirebilir',
            'Ofis ortamında çalışma',
            'Ekip çalışması odaklı'
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
        description: 'Müşteri memnuniyetini sağlamak ve müşteri ilişkilerini yönetmek için deneyimli temsilci arıyoruz. Müşterilerimizle etkili iletişim kurarak hizmet kalitemizi artıracak profesyonel arıyoruz.',
        requirements: [
            'Lise veya üniversite mezunu',
            'En az 1 yıl müşteri hizmetleri deneyimi',
            'Mükemmel Türkçe konuşma ve yazma becerisi',
            'İngilizce bilgisi tercih edilir',
            'Sabırlı ve empati kurabilen kişilik',
            'Telefon ve e-posta iletişimi deneyimi',
            'CRM sistemi kullanım deneyimi'
        ],
        benefits: [
            'Rekabetçi maaş',
            'Sağlık sigortası',
            'Ulaşım desteği',
            'Mesleki eğitim fırsatları',
            'Kariyer gelişim programları',
            'Yemek kartı',
            'Performans primi',
            'Yıllık izin hakları'
        ],
        responsibilities: [
            'Müşteri sorularını ve şikayetlerini yanıtlama',
            'Telefon ve e-posta ile müşteri iletişimi',
            'Müşteri taleplerinin takibi ve çözümü',
            'CRM sisteminde müşteri bilgilerinin güncellenmesi',
            'Müşteri memnuniyet anketlerinin yürütülmesi',
            'Ekip içi koordinasyon ve işbirliği',
            'Müşteri hizmetleri süreçlerinin iyileştirilmesi'
        ],
        qualifications: [
            'Lise veya üniversite mezunu',
            'En az 1 yıl müşteri hizmetleri deneyimi',
            'Mükemmel iletişim becerileri',
            'Sabırlı ve empati kurabilen kişilik',
            'Telefon ve e-posta iletişimi deneyimi',
            'CRM sistemi kullanım deneyimi',
            'İngilizce bilgisi (tercih edilir)'
        ],
        workingConditions: [
            'Tam zamanlı çalışma',
            'Vardiyalı çalışma sistemi',
            'Hafta sonu çalışma',
            'Ofis ortamında çalışma',
            'Telefon ve bilgisayar kullanımı',
            'Ekip çalışması odaklı'
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
        description: 'Şirketimizin IT altyapısının yönetimi ve geliştirilmesi için uzman arıyoruz. Teknolojik çözümler geliştirerek iş süreçlerimizi optimize edecek profesyonel arıyoruz.',
        requirements: [
            'Bilgisayar Mühendisliği veya ilgili alanlarda lisans derecesi',
            'En az 2 yıl IT deneyimi',
            'Network ve sistem yönetimi bilgisi',
            'Veritabanı yönetimi deneyimi',
            'Proaktif ve çözüm odaklı yaklaşım',
            'Linux ve Windows sistem yönetimi',
            'Cloud teknolojileri deneyimi'
        ],
        benefits: [
            'Rekabetçi maaş',
            'Sağlık sigortası',
            'Teknoloji eğitimleri',
            'Esnek çalışma saatleri',
            'Uzaktan çalışma imkanı',
            'Yemek kartı',
            'Performans primi',
            'Kariyer gelişim fırsatları'
        ],
        responsibilities: [
            'IT altyapısının yönetimi ve bakımı',
            'Sistem güvenliğinin sağlanması',
            'Veritabanı yönetimi ve optimizasyonu',
            'Network altyapısının yönetimi',
            'Yazılım geliştirme projelerine katılım',
            'Teknik destek hizmetlerinin sağlanması',
            'IT projelerinin planlanması ve yürütülmesi'
        ],
        qualifications: [
            'Bilgisayar Mühendisliği veya ilgili alanlarda lisans derecesi',
            'En az 2 yıl IT deneyimi',
            'Network ve sistem yönetimi bilgisi',
            'Veritabanı yönetimi deneyimi',
            'Linux ve Windows sistem yönetimi',
            'Cloud teknolojileri deneyimi',
            'Programlama dilleri bilgisi (tercih edilir)'
        ],
        workingConditions: [
            'Tam zamanlı çalışma',
            'Esnek çalışma saatleri',
            'Uzaktan çalışma imkanı',
            'Ofis ortamında çalışma',
            'Acil durumlarda müdahale',
            'Teknoloji odaklı çalışma'
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
        description: 'Mali işler departmanımızda çalışacak deneyimli muhasebe uzmanı arıyoruz. Mali süreçlerimizi yöneterek şirketimizin finansal sağlığını destekleyecek profesyonel arıyoruz.',
        requirements: [
            'Maliye, İşletme veya ilgili alanlarda lisans derecesi',
            'En az 3 yıl muhasebe deneyimi',
            'Muhasebe programları bilgisi',
            'Vergi mevzuatı bilgisi',
            'Detay odaklı ve düzenli çalışma alışkanlığı',
            'Excel ve muhasebe yazılımları deneyimi',
            'SMMM belgesi (tercih edilir)'
        ],
        benefits: [
            'Rekabetçi maaş',
            'Sağlık sigortası',
            'Yemek kartı',
            'Mesleki gelişim eğitimleri',
            'Kariyer fırsatları',
            'Ulaşım desteği',
            'Performans primi',
            'Yıllık izin hakları'
        ],
        responsibilities: [
            'Günlük muhasebe işlemlerinin yürütülmesi',
            'Mali tabloların hazırlanması',
            'Vergi beyannamelerinin hazırlanması',
            'Bütçe planlaması ve takibi',
            'Mali raporların hazırlanması',
            'Denetim süreçlerine katılım',
            'Mali mevzuat takibi'
        ],
        qualifications: [
            'Maliye, İşletme veya ilgili alanlarda lisans derecesi',
            'En az 3 yıl muhasebe deneyimi',
            'Muhasebe programları bilgisi',
            'Vergi mevzuatı bilgisi',
            'Excel ve muhasebe yazılımları deneyimi',
            'SMMM belgesi (tercih edilir)',
            'Analitik düşünme becerisi'
        ],
        workingConditions: [
            'Tam zamanlı çalışma',
            'Ofis ortamında çalışma',
            'Bilgisayar kullanımı',
            'Detay odaklı çalışma',
            'Ekip çalışması',
            'Mali dönem sonlarında yoğun çalışma'
        ],
        postedDate: '2024-01-05',
        deadline: '2024-02-05'
    }
];

export function JobDetailPage() {
    const { id } = useParams<{ id: string }>();
    const [isApplying, setIsApplying] = useState(false);

    const job = mockJobPostings.find(j => j.id === parseInt(id || '0'));

    if (!job) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">İş İlanı Bulunamadı</h1>
                    <Link to="/human-resources">
                        <Button>İnsan Kaynakları Sayfasına Dön</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const handleApply = () => {
        setIsApplying(true);
        // Simulate application process
        setTimeout(() => {
            setIsApplying(false);
            alert('Başvurunuz başarıyla gönderildi!');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="job-detail-header shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                <Link to="/" className="hover:text-blue-600">Ana Sayfa</Link>
                                <span>/</span>
                                <Link to="/human-resources" className="hover:text-blue-600">İnsan Kaynakları</Link>
                                <span>/</span>
                                <span className="text-gray-900">{job.title}</span>
                            </nav>
                            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            {job.isUrgent && (
                                <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                                    Acil
                                </span>
                            )}
                            <Button onClick={handleApply} disabled={isApplying} className="apply-button bg-blue-600 hover:bg-blue-700">
                                {isApplying ? 'Başvuru Gönderiliyor...' : 'Hemen Başvur'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Job Overview */}
                        <Card>
                            <CardHeader>
                                <CardTitle>İş İlanı Özeti</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-500">Lokasyon</p>
                                            <p className="font-semibold">{job.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-500">Departman</p>
                                            <p className="font-semibold">{job.department}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-500">Çalışma Tipi</p>
                                            <p className="font-semibold">
                                                {job.type === 'full-time' ? 'Tam Zamanlı' :
                                                    job.type === 'part-time' ? 'Yarı Zamanlı' : 'Sözleşmeli'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-500">Deneyim</p>
                                            <p className="font-semibold">{job.experience}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Job Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle>İş Tanımı</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 leading-relaxed">{job.description}</p>
                            </CardContent>
                        </Card>

                        {/* Responsibilities */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Sorumluluklar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {job.responsibilities.map((responsibility, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                            </svg>
                                            <span className="text-gray-700">{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Requirements */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Gereksinimler</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {job.requirements.map((requirement, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                            </svg>
                                            <span className="text-gray-700">{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Qualifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Yeterlilikler</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {job.qualifications.map((qualification, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                            </svg>
                                            <span className="text-gray-700">{qualification}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Working Conditions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Çalışma Koşulları</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {job.workingConditions.map((condition, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                            </svg>
                                            <span className="text-gray-700">{condition}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 job-detail-sidebar">
                        {/* Apply Card */}
                        <Card className="sticky top-8">
                            <CardHeader>
                                <CardTitle>Başvuru Bilgileri</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 mb-2">Son Başvuru Tarihi</p>
                                    <p className="font-semibold text-lg">{new Date(job.deadline).toLocaleDateString('tr-TR')}</p>
                                </div>
                                <Button
                                    onClick={handleApply}
                                    disabled={isApplying}
                                    className="apply-button w-full bg-blue-600 hover:bg-blue-700"
                                    size="lg"
                                >
                                    {isApplying ? 'Başvuru Gönderiliyor...' : 'Hemen Başvur'}
                                </Button>
                                <p className="text-xs text-gray-500 text-center">
                                    Başvurunuzu gönderdikten sonra 24 saat içinde size dönüş yapacağız.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Benefits */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Yan Haklar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="benefits-list space-y-2">
                                    {job.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Company Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Şirket Hakkında</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center">
                                    <img
                                        src="/images/logo/ufuk-loj-logo.svg"
                                        alt="Ufuk Lojistik"
                                        className="w-16 h-16 mx-auto mb-4"
                                    />
                                    <h3 className="font-semibold text-lg mb-2">Ufuk Lojistik</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Lojistik sektöründe öncü şirket olarak müşteri memnuniyetini ön planda tutuyoruz.
                                    </p>
                                    <Link to="/about">
                                        <Button variant="outline" size="sm" className="w-full">
                                            Şirket Hakkında Daha Fazla
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Share */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Paylaş</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                        Twitter
                                    </Button>
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                        </svg>
                                        LinkedIn
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
