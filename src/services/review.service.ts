import { instance } from '@/api/api.interceptor';
import { TypeReviewUpdate } from '@/types/review.types';
import { IReview } from '../types/review.interface';

const REVIEWS = 'reviews'
 
export const ReviewService = {
    async getAll(){ 
        return instance<IReview[]>({
            url: REVIEWS, 
            method: 'GET'
        })
    },
    async leave(productId: string | number, data: TypeReviewUpdate ){
        return instance<IReview>({
            url: `${REVIEWS}/leave/${productId}`,
            method: 'POST',  
            data 
        })
    }, 
}   