import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useLanguage } from '../../contexts/LanguageContext';

interface QuoteFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceType?: string;
}

export function QuoteFormModal({ isOpen, onClose, serviceType }: QuoteFormModalProps) {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: serviceType || '',
        origin: '',
        destination: '',
        cargoType: '',
        weight: '',
        volume: '',
        pickupDate: '',
        deliveryDate: '',
        specialRequirements: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const serviceTypes = [
        t('quote.serviceTypes.road'),
        t('quote.serviceTypes.sea'),
        t('quote.serviceTypes.air'),
        t('quote.serviceTypes.warehouse'),
        t('quote.serviceTypes.container'),
        t('quote.serviceTypes.ship')
    ];

    const cargoTypes = [
        t('quote.cargoTypes.general'),
        t('quote.cargoTypes.container'),
        t('quote.cargoTypes.bulk'),
        t('quote.cargoTypes.project'),
        t('quote.cargoTypes.hazardous'),
        t('quote.cargoTypes.cold'),
        t('quote.cargoTypes.valuable'),
        t('quote.cargoTypes.other')
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceType: serviceType || '',
                    origin: '',
                    destination: '',
                    cargoType: '',
                    weight: '',
                    volume: '',
                    pickupDate: '',
                    deliveryDate: '',
                    specialRequirements: '',
                    message: ''
                });
                onClose();
            }, 3000);
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-1 sm:p-4 overflow-y-auto">
            <Card className="w-full max-w-4xl max-h-[98vh] sm:max-h-[95vh] overflow-hidden my-2 sm:my-4 flex flex-col">
                <CardHeader className="sticky top-0 bg-white z-10 border-b">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                                {t('quote.title')}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mt-1 text-sm sm:text-base">
                                {t('quote.subtitle')}
                            </CardDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 overflow-y-auto">
                    {isSuccess ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {t('quote.success.title')}
                            </h3>
                            <p className="text-gray-600">
                                {t('quote.success.message')}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                            {/* Kişisel Bilgiler */}
                            <div className="space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-1">{t('quote.personalInfo')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.fullName')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.company')}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Hizmet Bilgileri */}
                            <div className="space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-1">{t('quote.serviceInfo')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.serviceType')}
                                        </label>
                                        <select
                                            id="serviceType"
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        >
                                            <option value="">{t('quote.selectService')}</option>
                                            {serviceTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="cargoType" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.cargoType')}
                                        </label>
                                        <select
                                            id="cargoType"
                                            name="cargoType"
                                            value={formData.cargoType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        >
                                            <option value="">{t('quote.selectCargo')}</option>
                                            {cargoTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Rota Bilgileri */}
                            <div className="space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-1">{t('quote.routeInfo')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.origin')}
                                        </label>
                                        <input
                                            type="text"
                                            id="origin"
                                            name="origin"
                                            value={formData.origin}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            placeholder={t('quote.originPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.destination')}
                                        </label>
                                        <input
                                            type="text"
                                            id="destination"
                                            name="destination"
                                            value={formData.destination}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            placeholder={t('quote.destinationPlaceholder')}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Kargo Detayları */}
                            <div className="space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-1">{t('quote.cargoDetails')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.weight')}
                                        </label>
                                        <input
                                            type="number"
                                            id="weight"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            placeholder={t('quote.weightPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.volume')}
                                        </label>
                                        <input
                                            type="number"
                                            id="volume"
                                            name="volume"
                                            value={formData.volume}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                            placeholder={t('quote.volumePlaceholder')}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Tarih Bilgileri */}
                            <div className="space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-1">{t('quote.dateInfo')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.pickupDate')}
                                        </label>
                                        <input
                                            type="date"
                                            id="pickupDate"
                                            name="pickupDate"
                                            value={formData.pickupDate}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                            {t('quote.deliveryDate')}
                                        </label>
                                        <input
                                            type="date"
                                            id="deliveryDate"
                                            name="deliveryDate"
                                            value={formData.deliveryDate}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Özel Gereksinimler */}
                            <div className="space-y-3">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 border-b pb-1">{t('quote.specialRequirements')}</h3>
                                <div>
                                    <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('quote.specialRequirementsLabel')}
                                    </label>
                                    <textarea
                                        id="specialRequirements"
                                        name="specialRequirements"
                                        value={formData.specialRequirements}
                                        onChange={handleInputChange}
                                        rows={2}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        placeholder={t('quote.specialRequirementsPlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('quote.additionalMessage')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={2}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        placeholder={t('quote.additionalMessagePlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-3 bg-white border-t mt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1 py-2"
                                >
                                    {t('quote.cancel')}
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 py-2"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span className="text-sm">{t('quote.submitting')}</span>
                                        </div>
                                    ) : (
                                        <span className="text-sm">{t('quote.submit')}</span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
