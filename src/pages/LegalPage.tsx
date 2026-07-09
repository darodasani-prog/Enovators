import { useState, useEffect } from "react";
import { Shield, FileText, CheckCircle2 } from "lucide-react";

interface LegalPageProps {
  initialTab?: "privacy" | "terms";
}

export default function LegalPage({ initialTab = "privacy" }: LegalPageProps) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div id="legal-page-view" className="bg-slate-950 text-white min-h-screen pt-28 pb-20 grid-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Tab Headers */}
        <div className="flex justify-center border-b border-white/5 pb-2">
          <div className="flex space-x-1 bg-slate-900 p-1.5 rounded-full border border-white/10">
            <button
              id="legal-tab-privacy"
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === "privacy"
                  ? "bg-brand-secondary text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              PRIVACY POLICY
            </button>
            <button
              id="legal-tab-terms"
              onClick={() => setActiveTab("terms")}
              className={`px-6 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === "terms"
                  ? "bg-brand-secondary text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              TERMS & CONDITIONS
            </button>
          </div>
        </div>

        {/* Dynamic content */}
        {activeTab === "privacy" ? (
          <article id="privacy-policy-document" className="space-y-8 font-sans font-light text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-brand-highlight tracking-widest uppercase">ENOVATOS COMPLIANCE</span>
              <h1 className="text-3xl font-bold font-display text-white">Privacy Policy</h1>
              <p className="text-xs text-slate-500 font-mono">Last updated: July 09, 2026</p>
            </div>

            <p>
              At Enovatos, accessible from https://enovatos.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Enovatos and how we use it.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">1. Information We Collect</h2>
              <p>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p>
                If you contact us directly via our inquiry form or schedule a strategic video session, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">2. How We Use Your Information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-xs sm:text-sm">
                <li>Provide, operate, and maintain our creative studio platforms.</li>
                <li>Improve, personalize, and expand our graphic and engineering services.</li>
                <li>Understand and analyze how visitors interact with our portfolio mockups.</li>
                <li>Develop new products, services, features, and fluid visual layouts.</li>
                <li>Communicate with you regarding booking slots or website speed audits.</li>
                <li>Send you newsletters (with direct unsubscribe links).</li>
                <li>Prevent fraudulent operations and secure our database nodes.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">3. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Enovatos uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">4. GDPR & CCPA Data Protection Rights</h2>
              <p>We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-xs sm:text-sm">
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data.</li>
                <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data.</li>
              </ul>
            </div>
          </article>
        ) : (
          <article id="terms-of-service-document" className="space-y-8 font-sans font-light text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-brand-highlight tracking-widest uppercase">LEGAL STANDARDS</span>
              <h1 className="text-3xl font-bold font-display text-white">Terms & Conditions</h1>
              <p className="text-xs text-slate-500 font-mono">Last updated: July 09, 2026</p>
            </div>

            <p>
              Welcome to Enovatos! These terms and conditions outline the rules and regulations for the use of Enovatos' Website, located at https://enovatos.com.
            </p>

            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Enovatos if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">1. Intellectual Property Rights</h2>
              <p>
                Other than the content you own, under these Terms, Enovatos and/or its licensors own all the intellectual property rights and materials contained in this Website. All intellectual rights are reserved. You are granted limited license only for purposes of viewing the material contained on this Website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">2. Restrictions</h2>
              <p>You are specifically restricted from all of the following:</p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-xs sm:text-sm">
                <li>Publishing any Enovatos portfolio material in any other media folders;</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website codes;</li>
                <li>Publicly performing and/or showing any Website materials without credits;</li>
                <li>Using this Website in any way that is or may be damaging to this Website;</li>
                <li>Using this Website in any way that impacts user access to this Website;</li>
                <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">3. No Warranties</h2>
              <p>
                This Website is provided "as is," with all faults, and Enovatos express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold font-display text-white border-b border-white/5 pb-2">4. Limitation of Liability</h2>
              <p>
                In no event shall Enovatos, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Enovatos, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
              </p>
            </div>
          </article>
        )}

      </div>
    </div>
  );
}
