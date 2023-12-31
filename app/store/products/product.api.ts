import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from './product.type'

export const productApi = createApi({
	reducerPath: 'api/products',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	endpoints: build => ({
		getProducts: build.query<IProduct[], number>({
			query: (limit: 8) => `products?Limit=${{ limit }}`,
		}),
	}),
})

export const { useGetProductsQuery } = productApi
