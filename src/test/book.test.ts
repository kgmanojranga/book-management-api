import axios from "axios";

describe("books test suite", () => {
    describe("get books route", () => {
        describe('without an id', () => {
            it('should return 200', async () => {
                try {
                    const response = await axios.get('http://localhost:9000/api/v1/books');
                    console.log('😍', response.status)
                    expect(response.status).toBe(200);
                } catch(error) {
                    console.error(error);
                }
            })
        })

        describe('with a correct id', () => {
            it('should return a 200', async () => {
                try {
                    const response = await axios.get('http://localhost:9000/api/v1/books/659afe5ddd94f4d446fb5f65');
                    expect(response.status).toBe(200);
                    console.log('😍', response.status);
                } catch(error: any) {
                    console.error(error);
                }
            })
        })
    })
})