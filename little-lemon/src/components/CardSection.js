import bruschetta from '../assets/bruchetta.png';
import greek_salad from '../assets/greek_salad.jpg';
import lemon_dessert from '../assets/lemon_dessert.jpg';

function CardSection() {
    return (
        <>
            <div className='container max-w-full mt-12 '>
                <div className='flex flex-row space-x-4 justify-center bg-transparent pt-4'>
                    {/* Card 1 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-200">
                        <img className="w-full h-64 bg-transparent" src={greek_salad} alt="Greek Salad Image" />
                        <div className="px-6 pt-4">
                            <div className="font-bold text-xl mb-2">Greek Salads
                                <span className="inline-block ml-16 text-orange-400">
                                    $12.99
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className='inline-grid grid-cols-2 gap 8'>
                                <button className='py-2 font-bold hover:underline underline-offset-4'>Order a Delivery</button>
                            </span>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-200">
                        <img className="w-full h-64 bg-transparent" src={bruschetta} alt="Bruschetta Image" />
                        <div className="px-6 pt-4 ">
                            <div className="font-bold text-xl mb-2">Bruschetta
                            <span className="inline-block ml-16 text-orange-400">
                                    $10.99
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className='inline-grid grid-cols-2 gap 8'>
                                <button className='py-2 font-bold hover:underline underline-offset-4'>Order a Delivery</button>
                            </span>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-200">
                        <img className="w-full h-64 bg-transparent" src={lemon_dessert} alt="Lemon dessert image" />
                        <div className="px-6 pt-4 ">
                            <div className="font-bold text-xl mb-2">Lemon Dessert
                            <span className="inline-block ml-16 text-orange-400">
                                    $14.99
                                </span>
                            </div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 ">
                            <span className='inline-grid grid-cols-2 gap 8'>
                                <button className='py-2 font-bold hover:underline underline-offset-4'>Order a Delivery</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
     </>
    )
}

export default CardSection;