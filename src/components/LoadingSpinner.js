import React from 'react';


const LoadingSpinner = () => {
    return (
        <div className='flex justify-center mt-60'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-grey-400">

            </div>
        </div>
    );
};

export default LoadingSpinner;