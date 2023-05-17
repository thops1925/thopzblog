import { groq } from 'next-sanity';

export const author = () => {
	const query = groq`*[_type=='post']{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)`;
	return query;
};
