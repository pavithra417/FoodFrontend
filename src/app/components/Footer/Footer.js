import { Domain } from "@mui/icons-material";
import { fetchFooter } from "../../strapiendpoints";
import { domain } from "@/app/config/config";

const Footer = async () => {
    let footerData = null;
    let error = null;

    try{
        const data = await fetchFooter();
        footerData = data.data[0];
    }catch(err){
        error="failed to fetch footerData"
    }

    return(
        <div>
            <div className="grid grid-cols-5 mx-10 my-20 p-10">
                <div className="lg:col-span-2 md:col-span-3 sm:col-span-5 col-span-5 py-5 lg:px-10 xl:px-40 md:p-5 sm:py-5">
                    <img src={`${domain.APIURL}${footerData?.logo?.url}`}
                    width="100"
                    height="50"
                    />
                    <p className="text-gray-600">{footerData.description}</p>
                </div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-5 col-span-5  py-5 md:p-5 sm:py-5">
                    <h3 className="font-semibold">{footerData.links}</h3>
                    <ul className="text-sm text-gray-600 font-semibold">
                        <li className="py-2">About us</li>
                        <li className="py-2">Events</li>
                        <li className="py-2">Blogs</li>
                        <li className="py-2">FAQ</li>
                    </ul>
                </div>
                <div className="lg:col-span-1 md:col-span-3 sm:col-span-5 col-span-5 py-5 md:p-5 sm:py-5">
                    <h3 className="font-semibold">{footerData.menu}</h3>
                    <ul className="text-sm text-gray-600 font-semibold">
                        <li className="py-2">Home</li>
                        <li className="py-2">Offers</li>
                        <li className="py-2">Menus</li>
                        <li className="py-2">Reservation</li>
                    </ul>
                </div>
                <div className="lg:col-span-1 md:col-span-2 sm:col-span-5 col-span-5 py-5 md:p-5 sm:py-5">
                    <h3 className="font-semibold">{footerData.contact}</h3>
                    <ul className="text-sm text-gray-600 font-semibold">
                        <li className="py-2">{footerData.email}</li>
                        <li className="py-2">{footerData.number}</li>
                        <li className="py-2">{footerData.media}</li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className="flex m-5">
                    <li><button className="px-3 py-2 bg-[#39DB4A] rounded-full m-2" dangerouslySetInnerHTML={{__html:footerData.fb}}/></li> 
                    <li><button className="px-3 py-2 bg-[#EDFFEF] rounded-full m-2" dangerouslySetInnerHTML={{__html:footerData.insta}}/></li>
                    <li><button className="px-3 py-2 bg-[#EDFFEF] rounded-full m-2" dangerouslySetInnerHTML={{__html:footerData.twitter}}/></li>
                    <li><button className="px-3 py-2 bg-[#EDFFEF] rounded-full m-2" dangerouslySetInnerHTML={{__html:footerData.yt}}/></li>
                </ul>
                <p className="text-center">{footerData.copyryt}</p>
            </div>


        </div>
    )
}

export default Footer;