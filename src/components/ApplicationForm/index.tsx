import { useEffect, useRef } from 'react';

export default function ApplicationForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/261055088278059';
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current?.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="apply" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">
            2027 Application
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
            Apply for the Scholarship
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Complete the form below.</p><br></ br><p className="text-stone-500 text-lg max-w-xl mx-auto"> Applications must be submitted by{' '}
            <strong>February 15th, 2027</strong>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 p-4">
          <div ref={containerRef} />
        </div>
      </div>
    </section>
  );
}
