import { groq } from 'next-sanity';

export const author = () => {
	const query = groq`*[_type=='post']{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)`;
	return query;
};

export const postQuery = (slug: string) => {
	const query = groq`*[_type == 'post' && slug.current == '${slug}'][0]
    {
        ...,
        author->,
        categories[]->
    }`;
	return query;
};
