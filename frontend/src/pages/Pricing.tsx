
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { usePageTransition, useScrollReveal } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const pricingPlans = [
  {
    name: "Starter",
    price: "249",
    description: "Perfect for small businesses just getting started with recommendations.",
    features: [
      "Up to 100,000 recommendations/month",
      "Basic recommendation models",
      "API access",
      "Standard support",
      "7-day data retention"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "499",
    description: "Ideal for growing businesses that need more advanced recommendation capabilities.",
    features: [
      "Up to 1 million recommendations/month",
      "Advanced recommendation models",
      "API access with higher rate limits",
      "Priority support",
      "30-day data retention",
      "A/B testing capabilities"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large businesses with complex recommendation needs.",
    features: [
      "Unlimited recommendations",
      "Custom recommendation models",
      "Dedicated API infrastructure",
      "24/7 premium support",
      "90-day data retention",
      "Advanced analytics dashboard",
      "Custom integration services"
    ],
    popular: false
  }
];

const frequentlyAskedQuestions = [
  {
    question: "How do I get started with Recombee?",
    answer: "Getting started is easy. Sign up for a free trial, integrate our API with your platform using our SDKs or RESTful API, and start delivering personalized recommendations to your users."
  },
  {
    question: "Can I customize the recommendation models?",
    answer: "Yes, our Growth and Enterprise plans allow for customization of recommendation models. Enterprise customers can work with our data science team to develop completely custom models tailored to their specific needs."
  },
  {
    question: "What happens if I exceed my monthly recommendation limit?",
    answer: "If you exceed your monthly recommendation limit, we'll notify you and you can choose to upgrade to a higher plan or pay for additional recommendations at our overage rates."
  },
  {
    question: "How long does it take to see results?",
    answer: "Many customers see immediate improvements in engagement and conversion rates. However, our recommendation engine continues to learn and improve over time, so results typically get better the longer you use it."
  },
  {
    question: "Do you offer a trial period?",
    answer: "Yes, we offer a 14-day free trial with access to all features in our Growth plan. No credit card required to start."
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle."
  }
];

const Pricing = () => {
  const isPageLoaded = usePageTransition();
  useScrollReveal();
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  return (
    <div className={`transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center reveal-animation">
            <div className="text-sm font-medium inline-block px-4 py-2 bg-recombee-blue/10 rounded-full text-recombee-blue border border-recombee-blue/20 mb-4">
              Pricing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="text-recombee-blue">Transparent</span> Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Choose the plan that's right for your business. All plans include access to our powerful recommendation engine.
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full inline-flex mb-8">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingPeriod === 'annual' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                Annual <span className="text-recombee-blue">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover-lift reveal-animation stagger-${index + 1} ${
                  plan.popular ? 'ring-2 ring-recombee-blue relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-recombee-blue text-white text-xs font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-bold">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-500 dark:text-gray-400 ml-1">
                          /{billingPeriod === 'monthly' ? 'month' : 'year'}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  <Button 
                    className={`w-full mb-8 ${
                      plan.popular 
                        ? 'bg-recombee-blue hover:bg-recombee-lightBlue text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-recombee-blue mt-0.5 flex-shrink-0" />
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center mt-16 reveal-animation">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Need a custom plan? Contact our sales team for a tailored solution.
            </p>
            <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="py-20 px-6 bg-recombee-light dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl font-bold mb-6">
              Feature <span className="text-recombee-blue">Comparison</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Compare our plans to find the right fit for your business needs.
            </p>
          </div>
          
          <div className="overflow-x-auto reveal-animation">
            <table className="w-full min-w-[800px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center bg-recombee-blue/5">Growth</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">
                    <div className="flex items-center">
                      Monthly Recommendations
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="ml-1">
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60">Number of recommendations delivered to your users each month.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">100,000</td>
                  <td className="py-4 px-6 text-center bg-recombee-blue/5">1 million</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">API Rate Limits</td>
                  <td className="py-4 px-6 text-center">10 req/sec</td>
                  <td className="py-4 px-6 text-center bg-recombee-blue/5">50 req/sec</td>
                  <td className="py-4 px-6 text-center">Custom</td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Data Retention</td>
                  <td className="py-4 px-6 text-center">7 days</td>
                  <td className="py-4 px-6 text-center bg-recombee-blue/5">30 days</td>
                  <td className="py-4 px-6 text-center">90 days</td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">A/B Testing</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <span className="block w-2 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center bg-recombee-blue/5">
                    <Check className="w-5 h-5 text-recombee-blue mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-5 h-5 text-recombee-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Custom Models</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <span className="block w-2 h-1 bg-gray-400 dark:bg-gray-500 rounded-full"></span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center bg-recombee-blue/5">Limited</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-5 h-5 text-recombee-blue mx-auto" />
                  </td>
                </tr>
                <tr className="border-t border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Standard</td>
                  <td className="py-4 px-6 text-center bg-recombee-blue/5">Priority</td>
                  <td className="py-4 px-6 text-center">24/7 Premium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked <span className="text-recombee-blue">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions about our pricing or features? Find answers to common questions below.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {frequentlyAskedQuestions.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md reveal-animation stagger-${index % 6 + 1}`}
                >
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 reveal-animation">
              <p className="text-lg mb-4">Still have questions?</p>
              <Button className="bg-recombee-blue hover:bg-recombee-lightBlue text-white">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-recombee-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 reveal-animation">Ready to Transform Your User Experience?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 reveal-animation stagger-1">
            Join thousands of businesses that use Recombee to deliver personalized recommendations and increase user engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-animation stagger-2">
            <Button className="bg-white text-recombee-blue hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button className="bg-reccy-blue text-white hover:bg-reccy-lightBlue border border-white">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
