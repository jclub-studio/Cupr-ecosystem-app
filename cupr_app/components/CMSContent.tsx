'use client';

import { motion } from 'motion/react';
import { MousePointerClick, UserCircle, Sliders, Target } from 'lucide-react';

const FEATURES = [
  {
    icon: MousePointerClick,
    title: '1-Click Launch',
    desc: 'Launch a custom website from a single action using a Next.js web app framework engineered for speed, search visibility, and scalable content delivery. Gemini powers design and development workflows to turn structured business data into a polished, live web presence.',
  },
  {
    icon: UserCircle,
    title: 'Profile-Powered Content',
    desc: 'Site copy, page structure, imagery direction, menus, service descriptions, and business details are populated by reference to the client’s CŪPR profile and connected account profiles. This allows the website to reflect real business information instead of relying on static templates or repetitive manual entry.',
  },
  {
    icon: Sliders,
    title: 'Vibe-Code Control',
    desc: 'Operators can further shape the site through manual input and natural-language instruction, giving teams a flexible “vibe-code” layer for tone, priorities, promotions, and branding preferences. The result is AI-assisted production with human guidance, not a one-size-fits-all site builder.',
  },
  {
    icon: Target,
    title: 'Digital Marketing Engine',
    desc: 'CŪPR does more than host pages; it creates a centralized engine for content, visibility, and conversion. The website becomes a live marketing asset informed by business data, connected systems, and evolving operator goals across retail, menu, brand, and campaign activity.',
  }
];

function WebsiteContent() {
  return (
    <div className="flex flex-col w-full">
      <section className="pb-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed max-w-4xl">
            CŪPR transforms dispensary and smokeshop business intelligence into a production-ready digital presence with 1-click website creation powered by Gemini and built on modern Next.js architecture. Website design, structure, and content are generated from each client’s CŪPR profile, connected business accounts, and optional manual guidance supplied through vibe-code instruction.
          </p>
          <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-3xl">
            CŪPR’s Website Hosting & CMS functions as an all-in-one digital marketing engine for cannabis retail and smoke shop operators. By referencing a business’s proprietary profile data, connected platform data, and user-provided direction, the system can generate, publish, and continuously refine branded web experiences designed to support discovery, conversion, and operational accuracy.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-8 md:p-10 border border-white/10 rounded-2xl bg-neutral-950/50 hover:bg-neutral-900/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-white mb-6" />
                  <h3 className="text-2xl font-light text-white mb-4">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CMSContent() {
  return (
    <div className="w-full">
        <WebsiteContent />
    </div>
  );
}
