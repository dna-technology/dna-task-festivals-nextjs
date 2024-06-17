import { Request, Response, Router } from 'express';
import { User } from './types';

const authRouter = Router();

const USERS: User[] = [
    {
        id: 1,
        name: 'John',
        email: 'test@example.com',
    },
];

authRouter.post('/login', (request: Request, response: Response) => {
    const user = USERS.find(({ email }) => request.body.email);

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
