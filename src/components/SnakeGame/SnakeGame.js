import React, {useState} from "react";
import {HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight, HiArrowNarrowUp} from "react-icons/hi";
import Snake from "./Snake";


const SnakeGame = () => {

    const [move, setMove] = useState(null);
    const [direction, setDirection] = useState("")
    const [foodPlace, setFoodPlace] = useState({...randomFoodPlace()});
    const [snakePlace, setSnakePlace] = useState([
        {top: 0, left: 0},
        {top: 0, left: 5},
    ])

    function randomFoodPlace() {
        const foodTopArg = Math.floor(Math.random() * 10) * 5;
        const foodLeftArg = Math.floor(Math.random() * 10) * 5;
        return {top: foodTopArg, left: foodLeftArg};
    }

    function normalPlaceForFood () {
        let normalPlace = false
        while (!normalPlace) {
            let gg = randomFoodPlace();
            let arr = snakePlace.filter(el => (el.top === gg.top && el.left === gg.left));
            if (arr.length === 0){
                normalPlace = true;
                return gg;
            }
        }
    }

    const directionChanging = (newDirection) => {
        move && clearInterval(move)
        const place = [...snakePlace];
        const interval = setInterval(function () {
            const head = {...place[place.length - 1]};
            switch (newDirection) {
                case "Up" : {
                    head.top -= 5;
                    break;
                }
                case "Down" : {
                    head.top += 5;
                    break;
                }
                case "Left" : {
                    head.left -= 5;
                    break;
                }
                case "Right" : {
                    head.left += 5;
                    break;
                }
            }
            if (head.top === foodPlace.top && head.left === foodPlace.left) {
                setFoodPlace(normalPlaceForFood());
                place.unshift({});
            }
            place.push(head);
            place.shift()

            setSnakePlace([...place]);
        },200)
        setMove(interval);
    }

    // function eatingFood () {
    //     const tail = {...snakePlace[0]};
    //     const newPlace = [...snakePlace];
    //     switch (direction) {
    //         case "Up" : {
    //             tail.top -= 5;
    //             break;
    //         }
    //         case "Down" : {
    //             tail.top += 5;
    //             break;
    //         }
    //         case "Left" : {
    //             tail.left -= 5;
    //             break;
    //         }
    //         case "Right" : {
    //             tail.left += 5;
    //             break;
    //         }
    //     }
    //     newPlace.unshift(tail);
    //     setSnakePlace(newPlace);
    // }

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
        <div className="w-full h-screen bg-[#0a192a]">
            <div>
                <div className="mx-auto top-[150px] border-red-600 border-4 w-[500px] h-[500px] relative">
                    {snakePlace.map((part, index) => {
                        return (
                            <div className="w-[5%] h-[5%] bg-gray-300 border-gray-500  border-2 absolute last:bg-gray-600"
                                 style={{top: `${part.top}%`, left: `${part.left}%`}}></div>
                        )
                    })}
                    <div className="w-[5%] h-[5%] bg-red-500 border-gray-500  border-2 absolute"
                         style={{top: `${foodPlace.top}%`, left: `${foodPlace.left}%`}}></div>
                </div>
            </div>
            <div className="mt-56 w-full">
                <div onClick={e => {
                    setDirection("Up");
                    directionChanging('Up')
                }}
                     className="mx-auto w-[60px] h-[60px] bg-gray-400 border-4 border-gray-600 hover:bg-gray-500 active:bg-gray-900 active:border-gray-300 flex justify-center items-center">
                    <HiArrowNarrowUp className="w-[30px] h-[30px]"/>
                </div>
                <div className="w-[27%] mt-6 mx-auto flex justify-center">
                    <div onClick={e => {
                        setDirection("Left");
                        directionChanging("Left")
                    }}
                         className="mx-auto w-[60px] h-[60px] bg-gray-400 border-4 border-gray-600 hover:bg-gray-500 active:bg-gray-900 active:border-gray-300 flex justify-center items-center">
                        <HiArrowNarrowLeft className="w-[30px] h-[30px]"/>
                    </div>
                    <div onClick={e => {
                        setDirection("Down");
                        directionChanging("Down")
                    }}
                         className="mx-auto w-[60px] h-[60px] bg-gray-400 border-4 border-gray-600 hover:bg-gray-500 active:bg-gray-900 active:border-gray-300 flex justify-center items-center">
                        <HiArrowNarrowDown className="w-[30px] h-[30px]"/>
                    </div>
                    <div onClick={e => {
                        setDirection("Right");
                        directionChanging("Right")
                    }}
                         className="mx-auto w-[60px] h-[60px] bg-gray-400 border-4 border-gray-600 hover:bg-gray-500 active:bg-gray-900 active:border-gray-300 flex justify-center items-center">
                        <HiArrowNarrowRight className="w-[30px] h-[30px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnakeGame;
