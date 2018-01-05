class FetchAsyncApi {

    async requestApi(request) {
        const { url, header, method,body={},credentials={} } = request;
        let data = await (await (fetch(url, {
            method,
            body,
            credentials,
            headers:new Headers(header)
        })
        .then(res => {
                if (!res.ok) {
                    throw Error((res.status));
                }
                return res.json();
        })
        .catch(err => {
            // eslint-disable-next-line
            throw Error((err));;
        })
    ));

    return data

    }

}

export default new FetchAsyncApi()