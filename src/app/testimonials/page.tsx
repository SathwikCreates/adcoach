import { TestimonialsSection } from '@/components/ui/testimonials-section';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TestimonialPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#020617] overflow-hidden text-white -mt-24 pt-32">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[120px]" />
                <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Navigation */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-white/50 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                </div>

                <TestimonialsSection />
            </div>
        </div>
    );
}
