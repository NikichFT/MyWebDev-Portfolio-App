export default class FetchData {
    mainUrl = 'https://api.github.com/users/NikichFT/repos';
    getData = async url => {
        const result = await fetch(url);

        // if (!result.ok) {
        //     throw new Error(`Что-то пошло не так ${result.status}`);
        // }

        return await result.json();
    };

    getProj = async () => await this.getData(this.mainUrl)
    //Метод getData - для расщиряемости
}