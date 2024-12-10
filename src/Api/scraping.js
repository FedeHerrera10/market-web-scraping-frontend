const getDataVea = async (params) => {
    //  try {
    //    const response = await fetch('../vea.json');
    //    const data = await response.json();
    //    console.log(data);
    //    return data.sort();
    //  } catch (error) {
    //    console.error('Error fetching title:', error);
    //  }


    try {
      const response = await fetch(`http://localhost:5000/vea/${params}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching title:', error);
    }
 };

 const getDataMasOnline = async (params) => {
    try {
      const url = `http://localhost:5000/mas-online/${params}`;
      console.log(url)
      const response = await fetch(url);
      
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching title:', error);
    }

  // try {
  //   const response = await fetch('../masonline.json');
  //   const data = await response.json();
  //   console.log(data);
  //   return data.sort();
  // } catch (error) {
  //   console.error('Error fetching title:', error);
  // }


 };

const  getData = async(params)=>{
  try {
    const url = `http://localhost:5000/${params}`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


 export {getDataVea,getDataMasOnline,getData};