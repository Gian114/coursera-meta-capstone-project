import foodimg from '../assets/restauranfood.jpg';

function Hero() {
    return (
        <div className='w-full h-48 bg-lemongreen flex space-x-48 overflow-visible relative'>
            <div className='pl-96 pt-4'>
                <h1 className='text-3xl text-lemonyellow font-serif'>Little Lemon</h1>
                <h6 className='text-lg text-white font-serif'>Chicago</h6>
                <p className='text-left text-white font-serif font-semibold text-xs py-2'>
                    Lorem ipsum dolor sit amet consectetur<br></br>
                    quibusdam, voluptatum, quidem,<br></br> incidunt quas magna aliqua.
                </p>
                <button className='bg-lemonyellow hover:bg-yellow-600 rounded-md font-bold py-2 px-4'>Reserve a Table</button>
            </div>
              <img src={foodimg} alt="food" className='rounded-lg absolute inset-y-4 end-1/3 w-40 h-56' />
        </div>
    )
}

export default Hero;