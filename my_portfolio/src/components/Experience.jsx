import React from 'react'

const Experience = () => {
    return (
        <div className="h-auto bg-gradient-to-r text-center bg-gray-100 dark:bg-gray-900">
            <h2 className="text-4xl font-bold bg-gray-100 text-black pb-8 text-center  dark:text-white dark:bg-gray-900 transition-colors duration-300">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    Experience
                </span>
            </h2>
            <div className='flex flex-row items-center justify-center '>
                <h3 className='text-gray-900 dark:text-white text-xl '>Companies I worked for : </h3>
                <div className=' flex flex-row ' >
                    <a href="https://educase.io/" target='_blank'>
                        <img className="h-auto w-32 rounded-lg hover:scale-110 m-4"
                            src="https://educase.io/wp-content/uploads/2022/09/120x630.webp" alt="EduCase India" />
                    </a>
                    <a href="https://www.fitnessbellindia.com/" target='_blank'>
                        <img className="h-auto w-16 rounded-lg hover:scale-110 m-4"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wWdN0xxPNLfyvONl2UOVsHd7MgIcmfx50w&s" alt="Fitness Bell India" />
                    </a>
                    <a href="https://internship.codeclause.com/" target='_blank'>
                        <img className="h-auto w-16 rounded-lg hover:scale-110 m-4"
                            src="https://app.internship.codeclause.com/utilities/assets/img/logo/codeclause1.png" alt="Code Clause" />
                    </a>
                </div>
            </div>
            <div className='flex flex-row justify-around  '>
                <div className=' text-dark-900 dark:text-white border-2 w-full '>Left</div>
                <div className=' text-dark-900 dark:text-white border-2 w-full '>Right</div>
            </div>
        </div>
    )
}

export default Experience