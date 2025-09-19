import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';

interface CVFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CVFormModal({ isOpen, onClose }: CVFormModalProps) {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        location: '',
        coverLetter: '',
        cvFile: null as File | null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                cvFile: e.target.files[0]
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after success
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    position: '',
                    experience: '',
                    location: '',
                    coverLetter: '',
                    cvFile: null
                });
                onClose();
            }, 3000);
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-2xl font-bold text-gray-900">
                                {t('hr.cvForm.title')}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mt-2">
                                {t('hr.cvForm.subtitle')}
                            </CardDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                </CardHeader>

                <CardContent>
                    {isSuccess ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {t('hr.cvForm.success')}
                            </h3>
                            <p className="text-gray-600">
                                {t('hr.cvForm.successDesc')}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('hr.cvForm.fullName')} *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('hr.cvForm.email')} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('hr.cvForm.phone')} *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('hr.cvForm.position')}
                                    </label>
                                    <select
                                        id="position"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">{t('hr.cvForm.position')}</option>
                                        <option value="logistics-specialist">Lojistik Uzmanı</option>
                                        <option value="customer-service">Müşteri Hizmetleri</option>
                                        <option value="it-specialist">IT Uzmanı</option>
                                        <option value="accounting">Muhasebe</option>
                                        <option value="other">Diğer</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('hr.cvForm.experience')}
                                    </label>
                                    <select
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">{t('hr.cvForm.experience')}</option>
                                        <option value="0-1">0-1 yıl</option>
                                        <option value="1-3">1-3 yıl</option>
                                        <option value="3-5">3-5 yıl</option>
                                        <option value="5+">5+ yıl</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t('hr.cvForm.location')}
                                    </label>
                                    <select
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">{t('hr.cvForm.location')}</option>
                                        <option value="istanbul">İstanbul</option>
                                        <option value="ankara">Ankara</option>
                                        <option value="izmir">İzmir</option>
                                        <option value="mersin">Mersin</option>
                                        <option value="other">Diğer</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('hr.cvForm.coverLetter')}
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Kendiniz hakkında kısa bilgi verin..."
                                />
                            </div>

                            <div>
                                <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t('hr.cvForm.cvFile')} *
                                </label>
                                <input
                                    type="file"
                                    id="cvFile"
                                    name="cvFile"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    PDF, DOC veya DOCX formatında, maksimum 5MB
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    {t('hr.cvForm.close')}
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                                >
                                    {isSubmitting ? t('hr.cvForm.submitting') : t('hr.cvForm.submit')}
                                </Button>
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
