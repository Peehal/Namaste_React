const MenuShimmer = () => {
    return (
        <div className="menu-page">
            <div className="restaurant-header">
                <div className="menu-shimmer menu-shimmer-title"></div>
                <div className="menu-shimmer menu-shimmer-text"></div>
                <div className="menu-shimmer menu-shimmer-rating"></div>
            </div>

            <div className="menu-section">
                <div className="menu-title-row">
                    <div className="menu-shimmer menu-shimmer-heading"></div>
                </div>

                <div className="menu-items">
                    {Array(5)
                        .fill("")
                        .map((_, index) => (
                            <div key={index} className="menu-item-card">
                                <div className="menu-item-left">
                                    <div className="menu-shimmer menu-shimmer-veg"></div>
                                    <div className="menu-shimmer menu-shimmer-item-title"></div>
                                    <div className="menu-shimmer menu-shimmer-price"></div>
                                    <div className="menu-shimmer menu-shimmer-desc"></div>
                                    <div className="menu-shimmer menu-shimmer-desc short"></div>
                                </div>

                                <div className="menu-item-right">
                                    <div className="menu-shimmer menu-shimmer-image"></div>
                                    <div className="menu-shimmer menu-shimmer-button"></div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default MenuShimmer;