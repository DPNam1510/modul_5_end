import axios from "axios";

const BE_URL = "http://localhost:8080";

export async function getAll() {
    try {
        const res = await axios.get(`${BE_URL}/footballs`);
        return res.data;
    }catch(e) {
        console.log(e);
    }
    return [];
}
export async function findById(id) {
    try {
        const res = await axios.get(`${BE_URL}/footballs/${id}`);
        return res.data;
    }catch(e) {
        console.log(e);
    }
    return null;
}
export async function searchFootball(searchCode, searchName, searchPosition) {
    try {
        if (!searchCode && !searchName && !searchPosition) {
            return await getAll();
        }
        const searchList = [];
        if(searchCode) searchList.push(`code_like=${searchCode}`);
        if(searchName) searchList.push(`name_like=${searchName}`);
        if(searchPosition) searchList.push(`positionId=${searchPosition}`);
        const stringJoin = `${BE_URL}/footballs?${searchList.join('&')}`;
        const res = await axios.get(stringJoin);
        return res.data;
    }catch(e) {
        console.log(e);
    }
    return [];
}

export async function addFootball(football) {
   try {
       const res = await axios.post(`${BE_URL}/footballs`, football);
       if (res.status === 201) return true;
   }catch(e) {
       console.log(e);
   }
   return false;
}

export async function updateFootball(football) {
    try {
        const res = await axios.put(`${BE_URL}/footballs/${football.id}`, football);
        if(res.status === 200) return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function deleteFootball(id) {
    try {
        const res = await axios.delete(`${BE_URL}/footballs/${id}`);
        if (res.status === 200) return true;
    }catch(e) {
        console.log(e);
    }
    return false;
}