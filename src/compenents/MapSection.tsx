'use client';

export default function MapSection() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7893972927272!2d-46.61951439999999!3d-23.540076000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58e24c79e883%3A0xc499e3fd442a89af!2sShopping%20Meia%20Noite!5e0!3m2!1sen!2sbr!4v1747767351867!5m2!1sen!2sbr"
        width="100%"
        height="50%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[50vh]"
      ></iframe>
    </section>
  );
}
