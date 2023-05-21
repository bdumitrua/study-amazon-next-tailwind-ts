import { FC } from 'react'

import { ICartItem } from '@/types/cart.interface'

// import Image from 'next/image'
// import { converPrice } from '@/utils/convertPrice'

// import CartActions from './cart-actions/CartActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div></div>
		// <div className={styles.item}>
		// 	<Image
		// 		src={item.product.images[0]}
		// 		width={100}
		// 		height={100}
		// 		alt={item.product.name}
		// 	/>
		// 	<div>
		// 		<div className={styles.name}>{item.product.name}</div>
		// 		<div className={styles.price}>
		// 			{converPrice(item.product.price)}
		// 		</div>
		// 		<CartActions item={item} />
		// 	</div>
		// </div>
	)
}

export default CartItem
