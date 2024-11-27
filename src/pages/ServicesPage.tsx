import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';

const services = [
  {
    name: 'Initial Consultation',
    price: '$99',
    description: 'A comprehensive 60-minute session to assess your current health status and create a personalized nutrition plan.',
    features: [
      'Health history review',
      'Body composition analysis',
      'Dietary assessment',
      'Goal setting',
      'Custom nutrition plan',
    ],
  },
  {
    name: 'Monthly Coaching',
    price: '$199/month',
    description: 'Ongoing support and guidance to help you stay on track and achieve your health goals.',
    features: [
      'Weekly check-ins',
      'Meal plan adjustments',
      'Progress tracking',
      'Recipe suggestions',
      'Email support',
    ],
  },
  {
    name: 'Transformation Package',
    price: '$499',
    description: '3-month intensive program for maximum results and sustainable lifestyle changes.',
    features: [
      'Initial consultation',
      'Bi-weekly coaching sessions',
      'Customized workout plans',
      'Nutrition education',
      'Priority support',
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="Choose the perfect plan to support your health and wellness journey."
        />

        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-7xl lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {service.price}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/book-consultation"
                className="mt-8 block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}