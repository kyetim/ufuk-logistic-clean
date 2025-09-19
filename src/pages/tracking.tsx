import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { useLanguage } from '../contexts/LanguageContext';

interface TrackingInfo {
    cargoNumber: string;
    status: string;
    currentLocation: string;
    estimatedDelivery: string;
    history: Array<{
        date: string;
        location: string;
        status: string;
        description: string;
    }>;
}

export function TrackingPage() {
    const { t } = useLanguage();
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Demo tracking data
    const demoTrackingData: TrackingInfo = {
        cargoNumber: 'UF2024-001',
        status: 'In Transit',
        currentLocation: 'İstanbul, Türkiye',
        estimatedDelivery: '2024-01-15 14:30',
        history: [
            {
                date: '2024-01-10 09:00',
                location: 'İstanbul Depo',
                status: 'Picked Up',
                description: 'Kargo depodan alındı'
            },
            {
                date: '2024-01-10 14:30',
                location: 'İstanbul Terminal',
                status: 'In Transit',
                description: 'Kargo yola çıktı'
            },
            {
                date: '2024-01-11 08:15',
                location: 'Ankara Terminal',
                status: 'In Transit',
                description: 'Ankara terminaline ulaştı'
            },
            {
                date: '2024-01-12 16:45',
                location: 'İzmir Terminal',
                status: 'Out for Delivery',
                description: 'Teslimat için yola çıktı'
            }
        ]
    };

    const handleTrack = async () => {
        if (!trackingNumber.trim()) {
            setError(t('tracking.error.enterNumber'));
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            if (trackingNumber === 'UF2024-001' || trackingNumber === 'demo') {
                setTrackingInfo(demoTrackingData);
            } else {
                setError(t('tracking.error.notFound'));
            }
            setIsLoading(false);
        }, 1500);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Picked Up':
                return 'text-blue-600 bg-blue-100';
            case 'In Transit':
                return 'text-yellow-600 bg-yellow-100';
            case 'Out for Delivery':
                return 'text-purple-600 bg-purple-100';
            case 'Delivered':
                return 'text-green-600 bg-green-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Picked Up':
                return '📦';
            case 'In Transit':
                return '🚛';
            case 'Out for Delivery':
                return '🚚';
            case 'Delivered':
                return '✅';
            default:
                return '📋';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t('tracking.title')}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('tracking.subtitle')}
                    </p>
                </div>

                {/* Tracking Input */}
                <Card className="mb-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center text-gray-900">
                            {t('tracking.enterNumber')}
                        </CardTitle>
                        <CardDescription className="text-center text-gray-600">
                            {t('tracking.enterNumberDesc')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Input
                                type="text"
                                placeholder={t('tracking.placeholder')}
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                className="flex-1 text-lg py-3 px-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                            />
                            <Button
                                onClick={handleTrack}
                                disabled={isLoading}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        {t('tracking.searching')}
                                    </div>
                                ) : (
                                    t('tracking.search')
                                )}
                            </Button>
                        </div>
                        {error && (
                            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-red-600 text-center">{error}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Demo Info */}
                <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-center text-center">
                            <div className="text-blue-600 mr-3">💡</div>
                            <p className="text-gray-700">
                                <strong>{t('tracking.demoInfo')}</strong> {t('tracking.demoText')}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Tracking Results */}
                {trackingInfo && (
                    <div className="space-y-6">
                        {/* Current Status */}
                        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-gray-900 flex items-center">
                                    <span className="mr-3">📦</span>
                                    {t('tracking.cargoStatus')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                                            <span className="font-medium text-gray-700">{t('tracking.trackingNumber')}</span>
                                            <span className="font-mono text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                                                {trackingInfo.cargoNumber}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                                            <span className="font-medium text-gray-700">{t('tracking.currentStatus')}</span>
                                            <span className={`px-3 py-1 rounded-lg font-semibold ${getStatusColor(trackingInfo.status)}`}>
                                                {getStatusIcon(trackingInfo.status)} {trackingInfo.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                                            <span className="font-medium text-gray-700">{t('tracking.currentLocation')}</span>
                                            <span className="text-purple-600 font-semibold">
                                                📍 {trackingInfo.currentLocation}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                                            <span className="font-medium text-gray-700">{t('tracking.estimatedDelivery')}</span>
                                            <span className="text-orange-600 font-semibold">
                                                🕒 {trackingInfo.estimatedDelivery}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tracking History */}
                        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-gray-900 flex items-center">
                                    <span className="mr-3">📋</span>
                                    {t('tracking.history')}
                                </CardTitle>
                                <CardDescription>
                                    {t('tracking.historyDesc')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {trackingInfo.history.map((item, index) => (
                                        <div key={index} className="relative">
                                            {index < trackingInfo.history.length - 1 && (
                                                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
                                            )}
                                            <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-semibold text-gray-900">
                                                            {getStatusIcon(item.status)} {item.status}
                                                        </h3>
                                                        <span className="text-sm text-gray-500">
                                                            {item.date}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 font-medium mb-1">
                                                        📍 {item.location}
                                                    </p>
                                                    <p className="text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Features */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className="text-4xl mb-4">🕒</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.realtime')}</h3>
                            <p className="text-gray-600">
                                {t('tracking.realtimeDesc')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.mobile')}</h3>
                            <p className="text-gray-600">
                                {t('tracking.mobileDesc')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <div className="text-4xl mb-4">🔔</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('tracking.notifications')}</h3>
                            <p className="text-gray-600">
                                {t('tracking.notificationsDesc')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
