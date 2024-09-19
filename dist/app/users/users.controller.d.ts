import { UsersService } from './users.service';
import { CreateUserDto } from 'src/domain/dtos/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        status: string;
        refreshToken: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        status: string;
        refreshToken: string | null;
    }[]>;
    removeMany(body: {
        ids: string[];
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        status: string;
        refreshToken: string | null;
    } | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        status: string;
        refreshToken: string | null;
    }[]>;
    changeStatus(body: {
        ids: string[];
        status: 'blocked' | 'unblocked';
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        status: string;
        refreshToken: string | null;
    }[]>;
}