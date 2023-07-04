import React from 'react';
import { persons } from '@/data/data';
import Image from 'next/image';

const Persons = () => {
  return (
    <div className='p-4'>
      {persons.map((item, index) => (
        <div
          className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 select-none'
          key={index}>
          {item.images.map((image, imageIndex) => (
            <div key={imageIndex} className='w-full h-full'>
              <Image
                className='object-cover w-full h-full select-none'
                src={image}
                alt={`Person ${index + 1}`}
                width={120}
                height={120}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Persons;