
import { useIntersectionObserver } from '@/utils/animations';

const Testimonial = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2
  });
  
  return (
    <section 
      ref={ref} 
      className={`py-24 px-6 bg-recombee-blue text-white transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <svg 
            className="w-16 h-16 text-white/30 mx-auto mb-6 animate-fade-in" 
            fill="currentColor" 
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <p 
            className={`text-xl md:text-2xl font-medium mb-10 transition-all duration-700 delay-300 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            "Implementing Recombee's recommendation engine increased our conversion rate by 27% and customer engagement by 35%. The personalized recommendations have transformed how our customers discover products."
          </p>
          
          <div 
            className={`flex items-center justify-center transition-all duration-700 delay-500 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex-shrink-0 mr-4">
              <img 
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Sarah Johnson" 
              />
            </div>
            <div className="text-left">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-recombee-lightBlue text-sm">Chief Digital Officer, TechRetail</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
