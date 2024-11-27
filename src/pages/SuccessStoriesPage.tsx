import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Lost 30 lbs in 6 months',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    quote: 'The personalized approach at One2One Diet completely transformed my relationship with food. The support I received was incredible.',
  },
  {
    name: 'Michael Chen',
    role: 'Achieved fitness goals',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    quote: 'Not only did I reach my target weight, but I also learned sustainable habits that will last a lifetime.',
  },
  {
    name: 'Emma Davis',
    role: 'Improved energy levels',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    quote: 'The nutritional guidance helped me optimize my diet for better energy throughout the day. I feel amazing!',
  },
];

export function SuccessStoriesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Success Stories"
          subtitle="Read about the transformative journeys of our clients and their achievements with One2One Diet."
        />

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-xl">
                <div>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm leading-6 text-green-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base italic leading-7 text-gray-700">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}