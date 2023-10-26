const BASE_URL = 'http://localhost:5000';
const RESOURSE_URL = `${BASE_URL}/cats`;

const baseRequest = async ({urlPath = '', method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        }
        if (body) {
            reqParams.body = JSON.stringify(body);
        }
        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch(error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllCats = async () => {
    const rawRes = await baseRequest({method: 'GET'});

    return rawRes.json();
};

export const postCat = (body) => baseRequest({method: 'POST', body});

export const deleteCat = (id) => baseRequest({urlPath: `/${id}`, method: 'DELETE'});

export const editCat = (id, body) => baseRequest({urlPath: `/${id}`, method: 'PATCH', body});

