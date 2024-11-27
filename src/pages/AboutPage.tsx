import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Users, Award, BookOpen } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="About One2One Diet"
          subtitle="We're dedicated to helping you achieve your health and wellness goals through personalized nutrition coaching."
        />

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                Expert Team
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Our team of certified nutritionists brings years of experience in personalized diet planning and coaching.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
                Proven Results
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">We've helped thousands of clients achieve their health goals through customized nutrition plans.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                Continuous Support
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Get ongoing guidance and support throughout your journey to better health and wellness.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}