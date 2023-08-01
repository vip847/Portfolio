import React from 'react';

const Resume = () => {
    return (
        <div className="flex justify-center items-center mt-10 -mb-11">
            <a href="../assets/Resume.pdf">
                <button type="button" className='bg-tertiary  cursor-pointer py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
                    Download my resume!
                </button>
            </a>
        </div>
    )
}

export default Resume;