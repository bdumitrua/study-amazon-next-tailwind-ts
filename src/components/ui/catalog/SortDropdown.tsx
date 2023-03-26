import { FC } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

interface ISortDropdown {
	sortType: EnumProductSort
	// ?TODO
	// Doesn't take Dispatch
	setSortType: Function
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	return (
		<div className='text-right mb-2'>
			<select
				value={sortType}
				className='appearance-none py-1 px-2 bg-white'
				onChange={e => setSortType(e.target.value as any)}
			>
				{(
					Object.keys(EnumProductSort) as Array<
						keyof typeof EnumProductSort
					>
				).map(key => {
					return (
						<option
							key={EnumProductSort[key]}
							onChange={() => setSortType(EnumProductSort[key])}
						>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
