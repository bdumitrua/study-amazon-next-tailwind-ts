import { instance } from '@/api/api.interceptor';
import { TypeUserUpdate } from '@/types/user.types';
import { IFullUser, IUser } from './../types/user.interface';

const USERS = 'users'

export const UserService = {
    async getProfile(){
        return instance<IFullUser>({ 
            url: `${USERS}/profile`,
            method: 'GET' 
        })
    }, 
    async updateProfile(data: TypeUserUpdate){
        return instance<IUser>({
            url: `${USERS}/profile`,
            method: 'PUT',
            data   
        })
    }, 
    async toggleFavorite(productId: string | number){
        return instance<IUser>({
            url: `${USERS}/profile/favorites/${productId}`,
            method: 'PATCH',
        })
    },  
}   