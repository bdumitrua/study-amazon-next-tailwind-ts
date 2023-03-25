import { instance } from '@/api/api.interceptor';
import { TypeStatisticsResponse } from '@/types/statistics.types';

const STATISTICS = 'statistics'
 
export const StatisticsService = { 
    async getMain(){  
        return instance<TypeStatisticsResponse>({
            url: `${STATISTICS}/main`,
            method: 'GET'
        })
    },
}       