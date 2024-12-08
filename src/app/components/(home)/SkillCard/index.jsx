import React from 'react'

export default function SkillCard({title, skills, number}) {
  return (
    <div className='flex flex-col w-full lg:flex-1  gap-[12px] lg:gap-[24px] p-[24px] bg-[#361601]/10 dark:bg-[#1B1915] rounded-[12px] '>
        <h4 className='uppercase font-medium text-[20px] '>{title}</h4>
       {skills.map((skill, index) => (
           <div key={index} className='w-full py-[12px] lg:py-[24px] border-b-[0.5px] border-black dark:border-white '>
               <span className='font-light uppercase'>{skill}</span>
           </div>
       ))}
       <span className='w-full pt-[12px] lg:pt-[24px] text-right text-[24px] font-medium text-orange dark:text-yellow'>{number}</span>
    </div>
  )
}
