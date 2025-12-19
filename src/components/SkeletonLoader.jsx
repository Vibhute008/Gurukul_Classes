import './SkeletonLoader.css';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="skeleton-loader">
            <div className="skeleton-header"></div>
            <div className="skeleton-content">
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        );
      case 'list':
        return Array.from({ length: count }).map((_, index) => (
          <div key={index} className="skeleton-list-item">
            <div className="skeleton-avatar"></div>
            <div className="skeleton-text">
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        ));
      case 'image':
        return <div className="skeleton-image"></div>;
      case 'text':
        return (
          <div className="skeleton-text-only">
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        );
      default:
        return (
          <div className="skeleton-loader">
            <div className="skeleton-header"></div>
            <div className="skeleton-content">
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>
        );
    }
  };

  return <div className="skeleton-container">{renderSkeleton()}</div>;
};

export default SkeletonLoader;