import { api, db, token } from "../jest.setup"

describe('Reset passwor flow', () => {

    let token: string
    let code: string
    test('login', async () => {
        const data = {
            email: 'jane@example.com',
            password: '123456789010'
        }

        const response = await api
            .post('/api/auth/login')
            .send(data)

        // token = response.body.info.token
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errors')

    })

    test('request password reset', async () => {


        const data = {
            email: 'jane@example.com'
        }

        const response = await api
            .post('/api/auth/request-password-reset')
            .send(data)


        token = response.body.info.token;
        code = response.body.info.code;

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('info')
        expect(response.body).toHaveProperty('message')
    })



    test('verify code', async () => {


        const data = {

            code: code

        }

        const response = await api
            .put(`/api/auth/verify-code/${token}`)
            .send(data);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('info')
        expect(response.body).toHaveProperty('message')


    })

    test('Reset password', async () => {

        const data = {
            password: 'Capellido00*',
            passwordConfirmation: 'Capellido00*'

        }

        const response = await api
            .put(`/api/auth/reset-password/${token}`)
            .send(data)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('info')
        expect(response.body).toHaveProperty('message')
    })


    test('Login', async () => {
        const data = {
            email: 'jane@example.com',
            password: 'Capellido00*'
        }

        const response = await api
            .post('/api/auth/login')
            .send(data)

        // token = response.body.info.token
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('info')
        expect(response.body).toHaveProperty('message')
    })

    // const user = await db.users.findFirst({
    //     orderBy: {
    //         createdAt: 'desc'
    //     }
    // })


    // test('Reset password', async () => {


    //     const newPassword = 'Example123'


    //     const response = await api
    //         .put(`/api/auth/reset-password/${token}`)
    //         .send(newPassword)

    //     expect(response.status).toBe(200)
    //     expect(response.body).toHaveProperty('info')
    // })

    // test('Reset password with empty field', async () => {

    //     const newPassword = ''
    //     const response = await api
    //         .put(`/api/users/${user?.id}`)
    //         .send(newPassword)
    //     expect(response.status).toBe(400)
    //     expect(response.body).toHaveProperty('info')
    // })
})