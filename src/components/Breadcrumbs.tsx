import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  path?: string | null;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-gray-400 dark:text-gray-500" aria-hidden>
                →
              </span>
            )}
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="text-gray-500 dark:text-gray-400 hover:text-gold dark:hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-navy dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
