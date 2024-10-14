import './styles.css'
import { NavLink } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='LandingPage overflow-hidden antialiased bg-white font-sans text-gray-900'>
            <main className="w-full">
                {/* start hero */}
                <div className="bg-gray-100">
                    <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
        items-center min-h-screen">
                        <div className="h-full absolute top-0 left-0 z-0">
                            <img src="images/cover-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
                        </div>
                        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                            <div>
                                <h1 className="text-white text-left text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Online Medical Care, Right at Your Fingertips</h1>
                                <p className="text-blue-100 text-left text-xl md:text-2xl leading-snug mt-4">Experience a new level of convenience and control over your healthcare with our E-Health System.</p>
                                <NavLink to="/FirstAidApi" className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded inline-block mt-8 font-bold">
                                    First Aid AI</NavLink>
                            </div>
                        </div>
                    </section>
                </div>
                <section id='features' className="relative text-justify px-4 py-16 sm:px-8 lg:px-16 xl:px-40 pt-4 2xl:px-64 lg:py-24">
                <h1 className="text-3xl text-center pt-0 lg:py-12 leading-tight font-bold mt-4">Features</h1>
                    <div className="flex flex-col lg:flex-row lg:-mx-8">
                        <div className="w-full lg:w-1/2 lg:px-8">
                            <h2 className="text-2xl leading-tight font-bold mt-4">Welcome to our E-Health Management System</h2>
                            <p className="text-lg mt-4 font-semibold">Excellence in healthcare</p>
                            <p className="mt-2 leading-relaxed">where you can manage your health easily and conveniently. Our platform allows you to access your medical history, book appointments with healthcare providers, receive test results online, set reminders for medication, and much more.</p><br />
                            <p>The system allows patients to manage their prescriptions, including ordering refills and receiving alerts when it's time to take their medication.</p><br />
                            <p>The system stores patients' medical records electronically, making it easy for healthcare providers to access the information they need quickly and securely.</p>
                        </div>
                        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                            <div className="md:flex">
                                <div>
                                    <div className="w-16 h-16 bg-blue-600 rounded-full" />
                                </div>
                                <div className="md:ml-8 mt-4 md:mt-0">
                                    <h4 className="text-xl font-bold leading-tight">Everything You Need Under One Roof</h4>
                                    <p className="mt-2 leading-relaxed">With our system, you can keep track of all your healthcare information in one place. No more worrying about lost paperwork or forgotten appointments. Everything you need is just a few clicks away.</p>
                                </div>
                            </div>
                            <div className="md:flex mt-8">
                                <div>
                                    <div className="w-16 h-16 bg-blue-600 rounded-full" />
                                </div>
                                <div className="md:ml-8 mt-4 md:mt-0">
                                    <h4 className="text-xl font-bold leading-tight">Our Patient-Focused Approach</h4>
                                    <p className="mt-2 leading-relaxed">Whether you're managing a chronic condition, preparing for a routine check-up, or just looking to stay on top of your health, our E-Health Management System is here to help. Sign up today to start taking control of your health!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                    <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/payments.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Online Payment System</h4>
                                <p className="mt-1 text-justify">The E-Health Management System includes an online payment system through RozarPay API that allows insurance companies to pay hospital bills directly.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/appointments.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Appointment Scheduling</h4>
                                <p className="mt-1 text-justify">Patients can schedule appointments with healthcare providers through the system, making it easy to find a provider and book a time that works for them.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/messaging.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Secure Messaging</h4>
                                <p className="mt-1 text-justify">Patients can communicate securely with healthcare providers through the system, ensuring that their personal health information remains confidential.</p>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
                            <div className="bg-white rounded-lg border border-gray-300 p-8">
                                <img src="images/records.svg" alt="" className="h-20 mx-auto" />
                                <h4 className="text-xl font-bold mt-4">Electronic Medical Records</h4>
                                <p className="mt-1 text-justify">The system stores patients' medical records electronically, making it easy for healthcare providers and insurance companies to access the information they need quickly and securely.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end about */}

                
                
            </main>
        </div>
    );
}

export default LandingPage;