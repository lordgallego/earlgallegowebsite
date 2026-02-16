const trainings = [
  "Philippine Institute of Architects National Convention",
  "Fire Safety Education and Prevention Orientation",
  "Climate Resilience: Preparedness and Risk Management for Coastal Flooding in Iloilo",
  "Basic Life Support Training",
];

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-center">
          Training & Development
        </h2>

        <div className="space-y-6">
          {trainings.map((item) => (
            <div
              key={item}
              className="border-b border-border pb-6 last:border-0"
            >
              <p
                className="text-sm text-foreground/80"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
