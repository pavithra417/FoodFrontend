"use client"
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 140,
    height: 140,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius:'10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
  }));

  
const Categories = ({favourites, heading, maindish, breakfast, dessert, browseall})=>{
    return(
        <div className='mt-72 sm:mt-30 '>
            <h1 className='text-[#FF6868] text-center'>{favourites}</h1>
            <h1 className='text-3xl font-bold text-center'>{heading}</h1>
            <div className='flex items-center justify-center gap-20  my-20 mx-auto'>
                <div className='flex flex-col md:flex-row gap-20 '>
                    <DemoPaper square={false} className='flex flex-col justify-center items-center'>
                        <div className='bg-[#C1F1C6] w-20 h-20 rounded-full '>
                            <img src={maindish} className='w-full h-full object-contain' />
                        </div>
                        Main dish
                        <p>(86 dishes)</p>
                    </DemoPaper>
                    <DemoPaper square={false} className='flex flex-col justify-center items-center'>
                        <div className='bg-[#C1F1C6] w-20 h-20 rounded-full'>
                            <img src={breakfast} className='w-full h-full object-contain' />
                        </div>
                        Break Fast
                        <p>(12 dishes)</p>
                    </DemoPaper>
                </div>
                
                <div className='flex flex-col md:flex-row gap-20 '>
                    <DemoPaper square={false} className='flex flex-col justify-center items-center'>
                        <div className='bg-[#C1F1C6] w-20 h-20 rounded-full'>
                            <img src={dessert} className='w-full h-full object-contain' />
                        </div>
                        Dessert
                        <p>(48 dessert)</p>
                    </DemoPaper>
                    <DemoPaper square={false} className='flex flex-col justify-center items-center'>
                        <div className='bg-[#C1F1C6] w-20 h-20 rounded-full'>
                            <img src={browseall} className='w-full h-full object-contain' />
                        </div>
                        Browse All
                        <p>(255 Items)</p>
                    </DemoPaper>
                </div>
                
            </div>
        </div>
    )
}

export default Categories;