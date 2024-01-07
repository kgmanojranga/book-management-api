import axios from "axios";

describe("books test suite", () => {
    describe("get books route", () => {
        describe('without an id', () => {
            it('should return 200', async () => {
                try {
                    const response = await axios.get('http://localhost:9000/api/v1/books');
                    console.log('😍', response.status)
                    expect(response.status).toBe(200);
                } catch (error) {
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
                } catch (error: any) {
                    console.error(error);
                }
            })
        })

        describe('with an incorrect id', () => {
            it('should return a 404', async () => {
                try {
                    await axios.get('http://localhost:9000/api/v1/books/659afe5ddd94f4d446fb5f66');
                } catch (error: any) {
                    expect(error.response.status).toBe(404);
                }
            })
        })

        describe('with an invalid id', () => {
            it('should return a 400', async () => {
                try {
                    await axios.get('http://localhost:9000/api/v1/books/asdfa');
                } catch (error: any) {
                    expect(error.response.status).toBe(400);
                }
            })
        })
    })

    describe('post books route', () => {
        describe('sending a post request with valid name, author and rating', () => {
            it('should return 200', async () => {

                try {
                    const response = await axios.post('http://localhost:9000/api/v1/books', {
                        name: "Me Before You",
                        rating: 8.7,
                        author: "Nicholas Sparks"
                    })
                    expect(response.status).toBe(200);
                } catch (error) {
                    throw new Error('User exist');
                }
            })
        })

        describe('sending a post request without a name or a author or a rating or without any of those', () => {
            it('should return 400', async () => {
                try {
                    await axios.post('http://localhost:9000/api/v1/books', {
                        name: 'Harry Potter and Prisoner of Azkaban',
                        author: 'J. K. Rowling',
                    });

                } catch (error: any) {
                    console.log("😎", error.response.status);
                    expect(error.response.status).toBe(400);
                }
            })
        })

        describe('sending a post request with a existing name', () => {
            it('should return 400', async () => {
                try {
                    // add a book with a existing name. Otherwise, this won't work
                    await axios.post("http://localhost:9000/api/v1/books", {
                        name: "Me Before You",
                        rating: 8.7,
                        author: "Nicholas Sparks"
                    })
                } catch (error: any) {
                    expect(error.response.status).toBe(400);
                }
            })
        })
    })

    describe('patch user route', () => {
        describe('sending a patch request with an correct id and a unique name', () => {
            it('should return 200', async () => {
                try {
                    const response = await axios.patch('http://localhost:9000/api/v1/books/659b0759d1a854a6dcb813e2', {
                        name: 'Me Before You 2'
                    });
                    expect(response.status).toBe(200);
                } catch (error: any) {
                    throw new Error('Error TEST')
                }
            })
        })

        describe('sending a patch request with an incorrect id', () => {
            it('should return 404', async () => {
                try {
                    await axios.patch('http://localhost:9000/api/v1/books/659b0759d1a854a6dcb813e3', {
                        name: 'Me Before You 2'
                    });
                } catch (error: any) {
                    expect(error.response.status).toBe(404);
                }
            })
        })

        describe('sending a patch request with an existing name', () => {
            it('should return 400', async () => {
                try {
                    await axios.patch("http://localhost:9000/api/v1/books/659b0759d1a854a6dcb813e2", {
                        name: 'Me Before You 2'
                    })
                } catch (error: any) {
                    expect(error.response.status).toBe(400);
                }
            })
        })
    })

    describe('delete user route', () => {
        describe('sending a delete request with an incorrect id', () => {
            it('should return 404', async () => {
                try {
                    await axios.delete(
                        'http://localhost:9000/api/v1/http://localhost:9000/api/v1/books/659b0759d1a854a6dcb813e3'
                    );
                } catch (error: any) {
                    expect(error.response.status).toBe(404);
                }
            });

            describe('sending a delete request with a correct id', () => {
                it('should return 200', async () => {
                    try {
                        const response = await axios.delete(
                            'http://localhost:9000/api/v1/books/659b0759d1a854a6dcb813e2'
                        );
                        expect(response.status).toBe(200);
                    } catch (error) {
                        console.log(error);
                    }
                })
            })
        })
    })
})