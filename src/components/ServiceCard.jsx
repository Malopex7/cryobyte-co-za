export default function ServiceCard({ title, description, features, icon: Icon, href }) {
  return (
    <div className="group h-full flex flex-col relative bg-background rounded-xl border border-secondary/20 p-4 sm:p-6 transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="flex flex-col h-full">
        {/* Header with Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          {Icon && (
            <div className="shrink-0 mt-1">
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          )}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm sm:text-base text-secondary">{description}</p>
          </div>
        </div>

        {/* Features List */}
        {features && (
          <ul className="flex-grow space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Link - Always at Bottom */}
        <div className="mt-auto">
          <a
            href={href}
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light"
          >
            Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
