import { motion } from 'motion/react';
import { Check, Copy, ArrowRight, Info } from 'lucide-react';
import { StickyFooter } from './StickyFooter';

export function ScreenDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite-50 relative font-sans">
      
      {/* Top Blue Gradient Section */}
      <div className="bg-gradient-to-b from-brand-navy to-brand-blue relative w-full pt-16 pb-32 px-6 flex flex-col items-center text-center overflow-hidden rounded-b-[32px]">
        {/* Subtle grid pattern overlay */}
        <div 
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
            {/* Elegant Success Indicator */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-2xl"
            >
                <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center shadow-lg shadow-green-400/30">
                     <Check className="text-brand-navy w-5 h-5 stroke-[4px]" />
                </div>
            </motion.div>

            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-bold text-white mb-2 tracking-tight"
            >
                You're all set!
            </motion.h1>

            <motion.p 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="text-blue-100/90 text-[15px] font-medium max-w-xs mx-auto leading-relaxed"
            >
                Your business account is now active and ready for use.
            </motion.p>
        </div>
      </div>

      {/* Overlapping Card Section */}
      <div className="flex-1 px-6 -mt-24 relative z-20 flex flex-col items-center pb-24">
        
        {/* The Card - Metro Red Variant */}
        <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-sm bg-gradient-to-br from-[#ED0322] to-[#C4001A] rounded-[24px] shadow-2xl overflow-hidden text-white border-t border-white/10 group hover:scale-[1.02] transition-transform duration-500 ease-out"
        >
            {/* Abstract curve decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Top part of card */}
            <div className="p-6 pb-6 relative">
                <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-col">
                         <span className="font-bold text-lg tracking-wide text-white">Metro Bank</span>
                         <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Business</span>
                    </div>
                    <div className="text-right">
                        <span className="font-bold text-lg tracking-wide text-white">Ycomplex Ltd</span>
                        <div className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Account Holder</div>
                    </div>
                </div>

                <div className="mb-2">
                     <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                {[1,2,3,4].map(i => <div key={`g1-${i}`} className="w-1.5 h-1.5 rounded-full bg-white/80" />)}
                            </div>
                            <div className="flex gap-1.5">
                                {[1,2,3,4].map(i => <div key={`g2-${i}`} className="w-1.5 h-1.5 rounded-full bg-white/80" />)}
                            </div>
                            <div className="flex gap-1.5">
                                {[1,2,3,4].map(i => <div key={`g3-${i}`} className="w-1.5 h-1.5 rounded-full bg-white/80" />)}
                            </div>
                            <span className="font-mono text-xl font-bold ml-2 text-white text-shadow-sm">5678</span>
                         </div>
                         <button className="text-white/60 hover:text-white transition-colors p-1" aria-label="Copy card number">
                            <Copy size={16} />
                        </button>
                     </div>
                </div>
            </div>

            {/* Bottom part of card (inner dark strip) */}
            <div className="bg-black/20 backdrop-blur-md p-4 px-5 flex items-center justify-between">
                <div className="flex gap-6">
                    <div>
                        <div className="text-[9px] font-bold text-white/50 tracking-widest uppercase mb-0.5">Sort Code</div>
                        <div className="font-mono text-sm font-bold text-white">04-00-75</div>
                    </div>
                    <div>
                         <div className="text-[9px] font-bold text-white/50 tracking-widest uppercase mb-0.5">Account Number</div>
                         <div className="font-mono text-sm font-bold text-white">12345678</div>
                    </div>
                </div>
                
                 {/* Mastercard Logo */}
                 <div className="flex relative mr-1">
                    <div className="w-8 h-8 rounded-full bg-[#EB001B]/90 mix-blend-screen shadow-sm" />
                    <div className="w-8 h-8 rounded-full bg-[#F79E1B]/90 -ml-3 mix-blend-screen shadow-sm" />
                </div>
            </div>
        </motion.div>

        {/* Bottom Info Section - Simplified */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 w-full max-w-sm"
        >
             <div className="bg-white rounded-2xl p-4 border border-divider shadow-sm flex gap-4 items-start">
                 <div className="w-10 h-10 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                     <Info size={20} />
                 </div>
                 <div className="flex-1">
                     <h3 className="text-brand-navy font-bold text-sm mb-1">What happens next?</h3>
                     <p className="text-text-secondary text-xs leading-relaxed">
                         Your physical card will arrive in 3-5 working days. You can view your PIN and manage your card in the app immediately.
                     </p>
                 </div>
             </div>
        </motion.div>

      </div>

      {/* Fixed Footer Button */}
      <StickyFooter>
         <button
            onClick={() => window.location.reload()}
            className="w-full h-[56px] rounded-full font-bold text-[16px] bg-brand-navy text-white hover:bg-brand-navy/90 active:scale-[0.99] transition-all shadow-lg shadow-brand-navy/20 flex items-center justify-center gap-2 group"
          >
            Go to Dashboard
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
      </StickyFooter>
    </div>
  );
}
