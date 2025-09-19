interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="relative w-full h-full">
        {/* Glassmorphism Loading Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
        
        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

// Shimmer Loading Effect
export function ShimmerLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-shimmer bg-gray-200 rounded ${className}`}></div>
  );
}

// Pulse Loading Effect
export function PulseLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  );
}

// Modern Loading Card
export function LoadingCard() {
  return (
    <div className="glass-neumorphism rounded-2xl p-6 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-shimmer"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-shimmer"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
