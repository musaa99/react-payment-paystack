import * as React from 'react';

const Modal = (props) => {

    if(!props.open) {
        return null;
    };

    return (
        <div
            onClick={props.onClose}
            className='bg-overlay w-full h-full flex justify-center items-start fixed left-0 right-0 top-0 bottom-0 z-[100]'
       >
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative bg-white max-h-[calc(100vh_-_200px)] md:max-h-[calc(100vh_-_60px)] h-fit overflow-y-auto md:overflow-hidden rounded-[1rem] p-[1.5rem] pt-[2.5rem] mt-[118px] md:pt-[1.5rem] w-[280px] xs:w-[360px] md:w-[595px]'
            >
                <button
                  className='absolute top-4 right-6'
                  onClick={props.onClose}
                >
                  &#x2715;
                </button>
                  {props.children}
            </div>
        </div>
    );
}

export default Modal;