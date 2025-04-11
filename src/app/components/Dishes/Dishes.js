"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 300,
    height: 350,
    padding: theme.spacing(4),
    ...theme.typography.body2,
    textAlign: 'center',
    // alignItems:'center',
    // justifyContent:'center',
    // backgroundColor:'grey',
    borderRadius:'20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
  }));

const Dishes = ({spldish,heading,vegsalad,fattoushsalad,eggsalad, fattoushtext, eggtext, vegtext,description,starIcon, right, left})=>{
    return(
        <div>
            <h1 className="text-[#FF6868] py-5">{spldish}</h1>
            <div className="flex justify-between">
                <div className="w-80">
                    <h1 className="font-bold text-4xl">{heading}</h1>
                </div>
                <div className='w-20 h-10 grid grid-cols-2 gap-10 mr-20 '>
                    <div className=''>
                        <span dangerouslySetInnerHTML={{__html:left}} className='' />
                    </div>
                    <div className=''>
                        <span dangerouslySetInnerHTML={{__html:right}} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-20 mt-20 '>
                <div className='group perspective-[1000px] w-[300px] h-[400px]'>
                    <div className='relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        
                        {/* Front side */}
                        <DemoPaper square={false} className='absolute inset-0 h-full w-full text-center [backface-visibility:hidden]'>
                        <img src={fattoushsalad} className="p-2" />
                        <p className='text-xl text-start font-bold'>{fattoushtext}</p>
                        <div className='flex justify-between'>
                            <div>
                            <p>{description}</p>
                            <p className='text-xl text-start'>
                                <span className='text-[#FF6868] text-sm'>$</span> 24.00
                            </p>
                            </div>
                            <div>
                            <p>
                                <span dangerouslySetInnerHTML={{ __html: starIcon }} /> 4.9
                            </p>
                            </div>
                        </div>
                        </DemoPaper>

                        <DemoPaper square={false} className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex min-h-full flex-col items-center justify-center p-4'>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam luctus a leoa ornare. Vestibulum lobortis luctus tortor id molestie. Fusce condimentum vehicula aliquam. In luctus quis turpis ac fringilla. In sit amet elit felis.
                            </p>
                        </div>
                        </DemoPaper>

                    </div>
                </div>

                <div className='group perspective-[1000px] w-[300px] h-[400px]'>
                    <div className='relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        
                        {/* Front side */}
                        <DemoPaper square={false} className='absolute inset-0 h-full w-full text-center [backface-visibility:hidden]'>
                        <img src={vegsalad} className="p-2" />
                        <p className='text-xl text-start font-bold'>{vegtext}</p>
                        <div className='flex justify-between'>
                            <div>
                            <p>{description}</p>
                            <p className='text-xl text-start'>
                                <span className='text-[#FF6868] text-sm'>$</span> 26.00
                            </p>
                            </div>
                            <div>
                            <p>
                                <span dangerouslySetInnerHTML={{ __html: starIcon }} /> 4.9
                            </p>
                            </div>
                        </div>
                        </DemoPaper>

                        <DemoPaper square={false} className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex min-h-full flex-col items-center justify-center p-4'>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam luctus a leoa ornare. Vestibulum lobortis luctus tortor id molestie. Fusce condimentum vehicula aliquam. In luctus quis turpis ac fringilla. In sit amet elit felis.
                            </p>
                        </div>
                        </DemoPaper>

                    </div>
                </div>

                <div className='group perspective-[1000px] w-[300px] h-[400px]'>
                    <div className='relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        
                        {/* Front side */}
                        <DemoPaper square={false} className='absolute inset-0 h-full w-full text-center [backface-visibility:hidden]'>
                        <img src={eggsalad} className="p-2" />
                        <p className='text-xl text-start font-bold'>{eggtext}</p>
                        <div className='flex justify-between'>
                            <div>
                            <p>{description}</p>
                            <p className='text-xl text-start'>
                                <span className='text-[#FF6868] text-sm'>$</span> 29.00
                            </p>
                            </div>
                            <div>
                            <p>
                                <span dangerouslySetInnerHTML={{ __html: starIcon }} /> 4.9
                            </p>
                            </div>
                        </div>
                        </DemoPaper>

                        <DemoPaper square={false} className='absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex min-h-full flex-col items-center justify-center p-4'>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam luctus a leoa ornare. Vestibulum lobortis luctus tortor id molestie. Fusce condimentum vehicula aliquam. In luctus quis turpis ac fringilla. In sit amet elit felis.
                            </p>
                        </div>
                        </DemoPaper>

                    </div>
                </div>

            </div>


            {/* <div className='flex flex-col lg:flex-row items-center gap-20 mt-20'>
                <DemoPaper square={false} className=''>
                    <img src={fattoushsalad} className="p-2 "/>
                        <p className='text-xl text-start font-bold'>{fattoushtext}</p>
                    <div className='flex justify-between'>
                        <div>
                            <p>{description}</p>
                            <p className='text-xl text-start'><span className='text-[#FF6868] text-sm'>$</span> 24.00</p>
                        </div>
                        <div>
                            <p className=''><span dangerouslySetInnerHTML={{ __html: starIcon }}/>4.9</p>
                        </div>
                    </div>
                </DemoPaper>
                <DemoPaper square={false}>
                    <img src={vegsalad} className="p-2"/>
                    <p className='text-xl text-start font-bold'>{eggtext}</p>
                    <div className='flex justify-between'>
                        <div>
                            <p>{description}</p>
                            <p className='text-xl text-start'><span className='text-[#FF6868] text-sm'>$</span> 24.00</p>
                        </div>
                        <div>
                            <p className=''><span dangerouslySetInnerHTML={{ __html: starIcon }}/>4.6</p>
                        </div>
                    </div>
                </DemoPaper>
                <DemoPaper square={false}>
                    <img src={eggsalad} className="p-2"/>
                    <p className='text-xl text-start font-bold'>{vegtext}</p>
                    <div className='flex justify-between'>
                        <div>
                            <p>{description}</p>
                            <p className='text-xl text-start'><span className='text-[#FF6868] text-sm'>$</span> 24.00</p>
                        </div>
                        <div>
                            <p className=''><span dangerouslySetInnerHTML={{ __html: starIcon }}/>4.5</p>
                        </div>
                    </div>
                </DemoPaper>
            </div> */}
        </div>
    )
}
export default Dishes;