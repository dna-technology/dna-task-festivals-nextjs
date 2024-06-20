import { Request, Response, Router } from 'express';
import { db } from './db';

const authRouter = Router();

authRouter.post('/login', (request: Request, response: Response) => {
    const user = db.getAllUsers().find(({ email, password }) =>
        request.body.email === email &&
        request.body.password === password
    );

    if (!user) {
        return response
            .status(404)
            .send({
                message: 'User not found',
                data: {
                    user: null,
                },
            });
    }

    return response
        .status(200)
        .send({
            message: 'Login successful',
            data: {
                user,
            },
        });
});

export { authRouter };
