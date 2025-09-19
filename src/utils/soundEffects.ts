// Sound Effects for Catalog Page Turning
export class SoundEffects {
    private static audioContext: AudioContext | null = null;
    private static isEnabled = true;

    static init() {
        if (typeof window !== 'undefined' && window.AudioContext) {
            this.audioContext = new AudioContext();
        }
    }

    static enable() {
        this.isEnabled = true;
    }

    static disable() {
        this.isEnabled = false;
    }

    static playPageTurn() {
        if (!this.isEnabled || !this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            // Page turn sound: quick whoosh
            oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.1);
        } catch (error) {
            console.log('Audio not available:', error);
        }
    }

    static playPageHover() {
        if (!this.isEnabled || !this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            // Subtle hover sound
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.05);

            gainNode.gain.setValueAtTime(0.02, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.05);
        } catch (error) {
            console.log('Audio not available:', error);
        }
    }

    static playPageClick() {
        if (!this.isEnabled || !this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            // Click sound
            oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.05);

            gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.05);
        } catch (error) {
            console.log('Audio not available:', error);
        }
    }
}

// Haptic Feedback for Mobile Devices
export class HapticFeedback {
    static isSupported(): boolean {
        return 'vibrate' in navigator;
    }

    static light() {
        if (this.isSupported()) {
            navigator.vibrate(10);
        }
    }

    static medium() {
        if (this.isSupported()) {
            navigator.vibrate(50);
        }
    }

    static heavy() {
        if (this.isSupported()) {
            navigator.vibrate([100, 50, 100]);
        }
    }

    static pageTurn() {
        if (this.isSupported()) {
            navigator.vibrate([30, 20, 30]);
        }
    }
}
