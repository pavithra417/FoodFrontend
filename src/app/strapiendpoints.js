import { domain } from './config/config';

let headers = {
    Accept: "application/json",
    "content-type": "application/json",
    "cache-control": "no-cache",
    mode: "cors"
};

// const fetchSVG = async (url) => {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Failed to fetch SVG");
//         }
//         return await response.text(); // Get raw SVG content
//     } catch (error) {
//         console.error("Error fetching SVG:", error);
//         return null;
//     }
// };


// export const fetchHeader = async () => {
//     try {
//         const response = await fetch(`${domain.APIURL}/api/headers?populate=*`, {
//             method: "GET",
//             headers,
//             cache: "no-cache"
//         });

//         if (!response.ok) {
//             throw new Error("Failed to fetch header data");
//         }

//         const data = await response.json();

//         // Extract the necessary image URLs
//         const headerData = data.data[0]; // Assuming only one header record
//         return {
//             brandLogo: `${domain.APIURL}${headerData.brandLogo.url}`,
//             searchIcon: await fetchSVG(`${domain.APIURL}${headerData.searchIcon.url}`),
//             bagIcon: await fetchSVG(`${domain.APIURL}${headerData.bagIcon.url}`),
//             phnIcon: await fetchSVG(`${domain.APIURL}${headerData.phnIcon.url}`),
//             dropdwnIcon: await fetchSVG(`${domain.APIURL}${headerData.dropdwnIcon.url}`)
//         };

//     } catch (error) {
//         console.error("Error fetching header data:", error);
//         return null;
//     }
// };


// export const fetchHomepage = async () => {
//     try {
//         const response =await fetch (`${domain.APIURL}/api/homepages?populate=*`,{
//             method:"GET",
//             headers,
//             cache :"no-cache"
//         })
//         if(!response.ok){
//             throw new Error("failed to fetch homepage data");
//         }
//         const data = await response.json();
//         const homepageData = data.data[0];
//         return{
//             heading: homepageData.heading,
//             paragraph: homepageData.paragraph,
//             order: homepageData.order,
//             watch: homepageData.watch,
//             playIcon : await fetchSVG(`${domain.APIURL}${homepageData.playIcon.url}`),
//             Img:`${domain.APIURL}${homepageData.Img.url}`,
//             food1Img:`${domain.APIURL}${homepageData.food1Img.url}`,
//             food2Img:`${domain.APIURL}${homepageData.food2Img.url}`

//         };
//     }catch(error){
//         console.error("error fetching homepage data",error);
//         return null;
//     }
// };

export async function fetchHeader() {
    try {
      const response = await fetch(`${domain.APIURL}/api/headers?populate=*`, {
      method: "GET",
      headers,
      cache: "no-store",  // Disable caching to fetch fresh data
  
    });
   
      if (!response.ok) {
        throw new Error("Network Error");
      }
    //   console.log(response);
      return await response.json();
    } catch (err) {
      console.error("Error fetching header details:", err);
      throw err;
    }
  }

   


export async function fetchBanner() {
    try {
      const response = await fetch(`${domain.APIURL}/api/homepages?populate=*`, {
      method: "GET",
      headers,
      cache: "no-store",  // Disable caching to fetch fresh data
  
    });
   
      if (!response.ok) {
        throw new Error("Network Error");
      }
      // console.log(response);
      return await response.json();
    } catch (err) {
      console.error("Error fetching header details:", err);
      throw err;
    }
  }

   export async function fetchCategory(){
    try{
      const response = await fetch(`${domain.APIURL}/api/categories?populate=*`, {
        method:"GET",
        headers,
        cache:"no-store",
      });
      if(!response.ok){
        throw new Error("Network Error");
      }
      // console.log(response);
      return await response.json();
    }catch(err){
      console.error("Error fetching category details",err);
      throw err;
    }
   }

   export async function fetchDishes(){
    try{
      const response = await fetch(`${domain.APIURL}/api/dish-menus?populate=*`,{
        method:"GET",
        headers,
        cache:"no-store",
      });
      if(!response.ok){
        throw new Error("Network Error");
      }
      // console.log(response)
      return await response.json();
    }catch(err){
        console.error("Error fetching dishes data",err);
        throw err;
    }
   }

export async function fetchFooter(){
  try{
    const response = await fetch(`${domain.APIURL}/api/footers?populate=*`,{
      method:"GET",
      headers,
      cache: "no-store",
    });
    if(!response.ok){
      throw new Error("Network Error");
    }
    return await response.json();
  }catch(err){
    console.error("failed to fetcg footer data",err);
    throw err;
  }
}

export async function fetchTestimonial(){
  try{
    const response =await fetch(`${domain.APIURL}/api/testimonials?populate=*`,{
      method:"GET",
      headers,
      cache: "no-store",
    })
    if(!response.ok){
      throw new Error("Network Error");
    }
    return await response.json();
  }catch(err){
    console.error("failed to fetcg footer data",err);
    throw err;
  }
}

export async function fetchService(){
  try{
    const response =await fetch(`${domain.APIURL}/api/services?populate=*`,{
      method:"GET",
      headers,
      cache: "no-store",
    })
    if(!response.ok){
      throw new Error("Network Error");
    }
    return await response.json();
  }catch(err){
    console.error("failed to fetcg footer data",err);
    throw err;
  }
}

// export async function fetchDropdown(){
//   try{
//     const response =await fetch(`${domain.APIURL}/api/drop-downs?populate=*`,{
//       method:"GET",
//       headers,
//       cache:"no-store"
//     })
//     if(!response.ok){
//       throw new error("Network error");
//     }
//     return await response.json();
//   }catch(err){
//     console.error("failed to fetch data",err);
//     throw err;
//   }
// }


// export async function fetchMenudropdown(){
//   try{
//     const response =await fetch(`${domain.APIURL}/api/breakfasts?populate=*`,{
//       method:"GET",
//       headers,
//       cache:"no-store"
//     })
//     if(!response.ok){
//       throw new error("Network error");
//     }
//     return await response.json();
//   }catch(err){
//     console.error("failed to fetch data",err);
//     throw err;
//   }
// }



// export const fetchDropdownServices = async () => {
//   try {
//     const response = await fetch(`${domain.APIURL}/api/drop-downs?populate=*`);
//     const data = await response.json();
//     return data.data[0]?.Services || [];
//   } catch (error) {
//     console.error("Error fetching dropdown services", error);
//     return [];
//   }
// };
