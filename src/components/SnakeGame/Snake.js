
const Snake = ({ snakePlace }) => {
    // const directionChanging = (nowDirection) => {
    //     const place = [...snakePlace];
    //     const now = {...place[place.length - 1]};
    //     switch (nowDirection) {
    //         case "Up" : {
    //             now.top -= 5;
    //             break;
    //         }
    //         case "Down" : {
    //             now.top += 5;
    //             break;
    //         }
    //         case "Left" : {
    //             now.left -= 5;
    //             break;
    //         }
    //         case "Right" : {
    //             now.left += 5;
    //             break;
    //         }
    //     }
    //     place.push(now);
    //     place.shift();
    //     setSnakePlace([...place]);
    // }

    return (
        <div>
            {/*<div className="w-[5%] h-[5%] bg-gray-300 top-0 border-gray-500 left-0 border-2 absolute"></div>*/}
            {snakePlace.map((part, index)=>{
                return (
                    <div className={`w-[5%] h-[5%] bg-gray-300 top-${part.top}% left-${part.left}% border-gray-500 border-2 absolute`}></div>
                )
            })}
        </div>
    )
}

export default Snake;