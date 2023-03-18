import axios from 'axios';
import Cookies from 'js-cookie';
import { getContentType } from './../../api/api.helper';
import { IAuthResponse } from './../../store/user/user.interface';
import { saveTokensStorage } from './auth.helper';

export const AuthService = {
    async getNewTokens() {
        const refreshToken = Cookies.get('refresh-token')

        const response = await axios.post<string, { data: IAuthResponse }>(
            process.env.SERVER_URL + '/auth/login/access-token',
            { refreshToken },
            {
                headers: getContentType()
            }
        )
        if (response.data.accessToken) saveTokensStorage(response.data)

        return response
    }
}