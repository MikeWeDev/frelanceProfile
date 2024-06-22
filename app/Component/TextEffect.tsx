import { TypeAnimation } from 'react-type-animation';

const  ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'next/React dev',
       1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Wordpress/php',
       1500,
       'Testing With Jest',
       1500,
      ]}
      speed={60}
      className='text-[20px] md:text-[30px] text-[#55e6a5] font-bold uppercase'      
      repeat={Infinity}
    />
  );
};
export default ExampleComponent;