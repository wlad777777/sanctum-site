'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Send, Clock, UserCheck, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    interest: '',
    experience: '',
    message: '',
    hearAbout: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission will be handled by Netlify
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-obsidian text-bone py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="sanctum-gold">Begin Your Journey</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Take the first step towards your sacred transformation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bone">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Intake Form */}
            <Card className="border-2 border-gold/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif text-obsidian flex items-center">
                  <UserCheck className="w-8 h-8 mr-3 text-gold" />
                  Sanctum Intake Application
                </CardTitle>
                <p className="text-gray-600">
                  Please complete this form thoughtfully. We review each application personally
                  to ensure mutual alignment for this sacred work.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" data-netlify="true" name="sanctum-intake">
                  <input type="hidden" name="form-name" value="sanctum-intake" />

                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gold/30 focus:border-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        required
                        min="18"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="border-gold/30 focus:border-gold"
                        placeholder="18+"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gold/30 focus:border-gold"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gold/30 focus:border-gold"
                      placeholder="+49 xxx xxxx xxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location (City, Country) *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="border-gold/30 focus:border-gold"
                      placeholder="Berlin, Germany"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('interest', value)}>
                      <SelectTrigger className="border-gold/30 focus:border-gold">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">1:1 Dedicated Ceremony</SelectItem>
                        <SelectItem value="couple">Couple's Sacred Journey</SelectItem>
                        <SelectItem value="package-3">3-Session Package</SelectItem>
                        <SelectItem value="package-7">7-Session Package</SelectItem>
                        <SelectItem value="package-13">13-Session Package</SelectItem>
                        <SelectItem value="consultation">Initial Consultation Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('experience', value)}>
                      <SelectTrigger className="border-gold/30 focus:border-gold">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No previous experience</SelectItem>
                        <SelectItem value="some">Some bodywork/energy healing experience</SelectItem>
                        <SelectItem value="experienced">Experienced in tantric/sacred work</SelectItem>
                        <SelectItem value="practitioner">I am a practitioner myself</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      What draws you to this sacred experience? *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gold/30 focus:border-gold resize-none"
                      placeholder="Share your intention, what you hope to heal or transform, and what calls you to this work..."
                    />
                  </div>

                  {/* How they heard about us */}
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about Sanctum?
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('hearAbout', value)}>
                      <SelectTrigger className="border-gold/30 focus:border-gold">
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="referral">Referral from friend/client</SelectItem>
                        <SelectItem value="search">Web search</SelectItem>
                        <SelectItem value="event">At an event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                    <p className="text-sm text-indigo-800">
                      <strong>Next Steps:</strong> After submitting this application, you'll receive
                      a response within 48-72 hours. If we're a good fit, we'll schedule a 30-minute
                      consultation call to discuss your needs and answer any questions.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-gold hover:opacity-90 text-obsidian font-semibold py-4 shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Process */}
            <div className="space-y-8">

              {/* Contact Details */}
              <Card className="border-2 border-indigo-500/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-obsidian flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-indigo-500" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <a href="mailto:contact@sanctum.com" className="text-indigo-600 hover:text-indigo-800">
                        contact@sanctum.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <p className="text-gray-600">+49 911 XXX XXXX</p>
                      <p className="text-sm text-gray-500">Consultation calls only</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p className="text-gray-600">Nuremberg, Germany</p>
                      <p className="text-sm text-gray-500">
                        Private studio space<br />
                        International clients welcome
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card className="border-2 border-gold/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-obsidian flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-gold" />
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-obsidian font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Application Review</h4>
                        <p className="text-sm text-gray-600">
                          We carefully review your application to ensure mutual alignment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-indigo rounded-full flex items-center justify-center text-bone font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Consultation Call</h4>
                        <p className="text-sm text-gray-600">
                          30-minute call to discuss your needs and answer questions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-obsidian font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700">Session Scheduling</h4>
                        <p className="text-sm text-gray-600">
                          If we're aligned, we'll schedule your sacred ceremony
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/30">
                    <p className="text-sm text-gray-700">
                      <strong>Response Time:</strong> 48-72 hours<br />
                      <strong>Availability:</strong> Limited slots per month<br />
                      <strong>Waitlist:</strong> Join if no immediate availability
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Frequently Asked Questions */}
              <Card className="border-2 border-indigo-500/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-obsidian">
                    Common Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Is this sexual in nature?</h4>
                    <p className="text-sm text-gray-600">
                      No. This is professional therapeutic work with clear boundaries
                      and ethical standards. We work with energy, not sexuality.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">What should I expect in a session?</h4>
                    <p className="text-sm text-gray-600">
                      A sacred container with breathwork, conscious touch, energy work,
                      and sound healing. Everything is discussed and consented to beforehand.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Is my privacy protected?</h4>
                    <p className="text-sm text-gray-600">
                      Absolutely. Complete confidentiality is guaranteed, with NDA
                      agreements available upon request.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
