"use client"
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Service = ({story, heading ,paragraph,explore,catering,cateringDes,delivery ,deliveryDes
                     ,order,orderDes ,gift ,giftDes,cateringIcon , deliveryIcon ,orderIcon ,giftIcon}) => {

    
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 170,
        height: 160,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
        borderRadius:"10px"
    }));
    
    return (
        <div className="grid grid-cols-2 gap-40 my-5">
            <div className='col-span-2 lg:col-span-1 '>
                <p className='text-[#FF6868] font-semibold text-sm'>{story}</p>
                <h3 className='font-bold text-4xl py-5'>{heading}</h3>
                <p>{paragraph}</p>
                <button className='bg-[#39DB4A] text-white px-7 py-2 my-5 rounded-full'>explore</button>
            </div>
            <div className='my-0'>
                <div className='flex flex-row lg:flex-col gap-7 justify-around md:mx-60 lg:mx-0 mx-0'>
                    <div className='flex flex-col lg:flex-row gap-7'>
                        <DemoPaper square={false} className='flex flex-col items-center '>
                            <span dangerouslySetInnerHTML={{__html:cateringIcon}} />
                            <h6 className='text-xs p-2 text-[#39DB4A] font-bold'>{catering}</h6>
                            <p className='text-xs text-[#39DB4A]'>{cateringDes}</p>
                        </DemoPaper>
                        <DemoPaper square={false} className='flex flex-col items-center'>
                            <span dangerouslySetInnerHTML={{__html:deliveryIcon}} />
                            <h6 className='text-xs p-2 text-[#39DB4A] font-bold'>{delivery}</h6>
                            <p className='text-xs text-[#39DB4A]'>{deliveryDes}</p>
                        </DemoPaper>
                    </div> 
                    <div className='flex flex-col lg:flex-row gap-7'>
                        <DemoPaper square={false} className='flex flex-col items-center col-span-2 md:col-span-1'>
                            <span dangerouslySetInnerHTML={{__html:orderIcon}} />
                            <h6 className='text-xs p-2 text-[#39DB4A] font-bold'>{order}</h6>
                            <p className='text-xs text-[#39DB4A]'>{orderDes}</p>
                        </DemoPaper>
                        <DemoPaper square={false} className='flex flex-col items-center'>
                            <span dangerouslySetInnerHTML={{__html:giftIcon}} />
                            <h6 className='text-xs p-2 text-[#39DB4A] font-bold'>{gift}</h6>
                            <p className='text-xs text-[#39DB4A]'>{giftDes}</p>
                        </DemoPaper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;