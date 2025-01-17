import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch with our team of nutrition experts today."
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  Get in Touch
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Have questions about our services? We're here to help you on your journey to better health.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-x-4">
                  <Mail className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">Email</h4>
                    <p className="mt-2 text-base text-gray-600">info@one2onediet.com</p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">Phone</h4>
                    <p className="mt-2 text-base text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">Location</h4>
                    <p className="mt-2 text-base text-gray-600">
                      123 Nutrition Street<br />
                      Wellness City, WC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}