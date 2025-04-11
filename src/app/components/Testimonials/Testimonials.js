const Testimonials = ({testimonial, heading,paragraph,testimonialpic,cmrfb,cmrone,cmrtwo,cmrthree,starIcon}) => {
    return(
        // <div className="mt-20">
            <div className="grid grid-cols-2 mt-20">
                <div className="sm:col-span-1 col-span-2 items-center justify-center">
                    <img src={testimonialpic} 
                    width="300"
                    height="300"
                    />
                </div>
                <div className="mx-2 lg:mx-20 my-10 w-full sm:col-span-1 col-span-2 ">
                    <p className="text-[#FF6868] p-5 font-semibold">{testimonial}</p>
                    <h3 className="font-bold text-5xl  p-5">{heading}</h3>
                    <p className="py-5 text-gray-600 font-semibold p-5">{paragraph}</p>
                    <div className="flex justify-around flex-col lg:flex-row  p-5">
                        <div className="flex ">
                            <img src={cmrone}/>
                            <img src={cmrtwo}/>
                            <img src={cmrthree} />
                        </div>
                        <div className="">
                            <p>{cmrfb}</p>
                            <span className="flex">
                                <span dangerouslySetInnerHTML={{__html:starIcon}}/>
                                <p>4.9 (18.6k Reviews)</p>
                            </span>
                        </div>
                    </div>

                    
                </div>
            </div>
        // </div>
        
    )
}

export default Testimonials;