const ItemList = ({ items }) => {

    console.log(items)

    return (
        <div className="space-y-6">
            {items.map((item) => {
                return (
                    <div
                        key={item.card.info.id}
                        className="pb-5 border-b border-gray-200 text-left flex justify-between items-start gap-6"
                    >
                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-base font-bold text-gray-900 leading-6">
                                {item?.card?.info?.name}
                            </span>
                            <span className="text-sm font-semibold text-gray-800">
                                ₹{item?.card?.info?.price / 100}
                            </span>
                            <p className="text-sm text-gray-500 mt-3 leading-6 max-w-3xl">
                                {item?.card?.info?.description}
                            </p>
                        </div>

                        <div className="relative w-36 h-28 ">
                            <img
                                className="w-full h-full object-cover rounded-xl"
                                src={
                                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                                    item?.card?.info?.imageId
                                }
                                alt={item?.card?.info?.name}
                            />
                            <button className="absolute left-1/2 -translate-x-1/2 bottom-[-10] bg-white text-green-600 font-bold px-6 py-1 rounded-lg shadow-md border border-gray-200">
                                ADD
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemList;

