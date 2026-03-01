const Shimmer = () => {
  return (
    <div className="body">
      <div className="search">
        <div className="shimmer-btn"></div>
      </div>

      <div className="res-container">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-img"></div>
              <div className="shimmer-line title"></div>
              <div className="shimmer-line small"></div>
              <div className="shimmer-line small"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;