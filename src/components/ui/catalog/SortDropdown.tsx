import { FC } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

const SortDropdown: FC = () => {
	return (
		<div className='text-right mb-2'>
			<select className='appearance-none py-1 px-2 bg-white'>
				{(
					Object.keys(EnumProductSort) as Array<
						keyof typeof EnumProductSort
					>
				).map(key => {
					return (
						<option value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
